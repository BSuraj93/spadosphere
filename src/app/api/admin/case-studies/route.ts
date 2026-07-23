import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

type CaseStudyStatus = "Live" | "Unpublished" | "Draft";

type CaseStudyPayload = {
  id?: string;
  title?: string;
  subtitle?: string;
  featuredImageUrl?: string;
  featuredImagePath?: string;
  clientName?: string;
  industry?: string;
  highlightIntro?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  body?: string;
  likes?: number | null;
  slug?: string;
  tags?: string;
  status?: CaseStudyStatus;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildPublishFieldErrors(payload: CaseStudyPayload) {
  const fieldErrors: Record<string, string> = {};

  if (!normalizeText(payload.title)) fieldErrors.title = "This field is required to publish.";
  if (!normalizeText(payload.subtitle)) fieldErrors.subtitle = "This field is required to publish.";
  if (!normalizeText(payload.featuredImageUrl)) fieldErrors.featuredImageUrl = "This field is required to publish.";
  if (!normalizeText(payload.clientName)) fieldErrors.clientName = "This field is required to publish.";
  if (!normalizeText(payload.industry)) fieldErrors.industry = "This field is required to publish.";
  if (!normalizeText(payload.highlightIntro)) fieldErrors.highlightIntro = "This field is required to publish.";
  if (!normalizeText(payload.challenge)) fieldErrors.challenge = "This field is required to publish.";
  if (!normalizeText(payload.solution)) fieldErrors.solution = "This field is required to publish.";
  if (!normalizeText(payload.outcome)) fieldErrors.outcome = "This field is required to publish.";
  if (!normalizeText(payload.body)) fieldErrors.body = "This field is required to publish.";
  if (!normalizeText(payload.slug)) fieldErrors.slug = "This field is required to publish.";
  if (!normalizeText(payload.tags)) fieldErrors.tags = "This field is required to publish.";

  return fieldErrors;
}

export async function GET(req: NextRequest) {
  const supabase = await getSupabaseAdmin();
  const { searchParams } = new URL(req.url);

  const search = normalizeText(searchParams.get("search"));
  const status = normalizeText(searchParams.get("status"));
  const publishFrom = normalizeText(searchParams.get("publishFrom"));
  const publishTo = normalizeText(searchParams.get("publishTo"));
  const page = Math.max(Number(searchParams.get("page") || "1"), 1);
  const pageSizeRaw = Number(searchParams.get("pageSize") || "10");
  const pageSize = pageSizeRaw === 25 ? 25 : 10;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("case_studies")
    .select("*", { count: "exact" });

  if (status && status !== "All") {
    query = query.eq("status", status);
  } 

  if (search) {
    query = query.or(
      `title.ilike.%${search}%,subtitle.ilike.%${search}%,clientname.ilike.%${search}%,industry.ilike.%${search}%,highlightintro.ilike.%${search}%,slug.ilike.%${search}%,tags.ilike.%${search}%`
    );
  }

  if (publishFrom) {
    query = query.gte("lastpublishedon", `${publishFrom}T00:00:00+05:30`);
  }

  if (publishTo) {
    query = query.lte("lastpublishedon", `${publishTo}T23:59:59+05:30`);
  }

  const { data, error, count } = await query
    .order("lastpublishedon", { ascending: false, nullsFirst: false })
    .order("updatedat", { ascending: false })
    .range(from, to);

  if (error) {
    return NextResponse.json({ error: "Could not load case studies." }, { status: 500 });
  }

  return NextResponse.json({
    items: data ?? [],
    total: count ?? 0,
    page,
    pageSize,
  });
}

export async function POST(req: NextRequest) {
  const supabase = await getSupabaseAdmin();
  const body = (await req.json()) as CaseStudyPayload;
  const requestedStatus: CaseStudyStatus = body.status ?? "Draft";

  if (!normalizeText(body.title)) {
    return NextResponse.json(
      {
        error: "Please correct the errors to continue.",
        fieldErrors: {
          title: requestedStatus === "Draft"
            ? "Title is required to save a draft."
            : "This field is required to publish.",
        },
      },
      { status: 400 }
    );
  }

  if (requestedStatus === "Live") {
    const fieldErrors = buildPublishFieldErrors(body);
    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { error: "Please correct the errors to continue.", fieldErrors },
        { status: 400 }
      );
    }
  }

  const nowIso = new Date().toISOString();

  const payload = {
    title: normalizeText(body.title),
    subtitle: normalizeText(body.subtitle) || null,
    featuredimageurl: normalizeText(body.featuredImageUrl) || null,
    featuredimagepath: normalizeText(body.featuredImagePath) || null,
    clientname: normalizeText(body.clientName) || null,
    industry: normalizeText(body.industry) || null,
    highlightintro: normalizeText(body.highlightIntro) || null,
    challenge: typeof body.challenge === "string" ? body.challenge : "",
    solution: typeof body.solution === "string" ? body.solution : "",
    outcome: typeof body.outcome === "string" ? body.outcome : "",
    body: typeof body.body === "string" ? body.body : "",
    likes: typeof body.likes === "number" && Number.isFinite(body.likes) ? body.likes : 0,
    slug: normalizeText(body.slug) || null,
    tags: normalizeText(body.tags) || null,
    updatedat: nowIso,
    status: requestedStatus,
  };

  if (requestedStatus === "Live") {
    if (body.id) {
      const { data, error } = await supabase
        .from("case_studies")
        .update({
          ...payload,
          lastpublishedon: nowIso,
        })
        .eq("id", body.id)
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: "Case study could not be published." }, { status: 500 });
      }

      if (!data.firstpublishedon) {
        const { data: patchedData, error: patchError } = await supabase
          .from("case_studies")
          .update({ firstpublishedon: nowIso })
          .eq("id", body.id)
          .select()
          .single();

        if (patchError) {
          return NextResponse.json({ error: "Case study could not be published." }, { status: 500 });
        }

        return NextResponse.json({ item: patchedData });
      }

      return NextResponse.json({ item: data });
    }

    const { data, error } = await supabase
      .from("case_studies")
      .insert({
        ...payload,
        firstpublishedon: nowIso,
        lastpublishedon: nowIso,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: "Case study could not be published." }, { status: 500 });
    }

    return NextResponse.json({ item: data });
  }

  if (body.id) {
    const { data, error } = await supabase
      .from("case_studies")
      .update(payload)
      .eq("id", body.id)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          error:
            requestedStatus === "Unpublished"
              ? "Case study could not be unpublished."
              : "Draft could not be saved.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ item: data });
  }

  const { data, error } = await supabase
    .from("case_studies")
    .insert(payload)
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      {
        error:
          requestedStatus === "Unpublished"
            ? "Case study could not be unpublished."
            : "Draft could not be saved.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ item: data });
}

export async function DELETE(req: NextRequest) {
  const supabase = await getSupabaseAdmin();
  const { searchParams } = new URL(req.url);
  const id = normalizeText(searchParams.get("id"));

  if (!id) {
    return NextResponse.json({ error: "Case study id is required." }, { status: 400 });
  }

  const { error } = await supabase.from("case_studies").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Case study could not be deleted." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}