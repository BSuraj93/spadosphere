import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

type BlogStatus = "Live" | "Unpublished" | "Draft";

type BlogPayload = {
  id?: string;
  title?: string;
  subtitle?: string;
  featuredImageUrl?: string;
  featuredImagePath?: string;
  highlightIntro?: string;
  body?: string;
  likes?: number | null;
  slug?: string;
  tags?: string;
  status?: BlogStatus;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildPublishFieldErrors(payload: BlogPayload) {
  const fieldErrors: Record<string, string> = {};

  if (!normalizeText(payload.title)) {
    fieldErrors.title = "This field is required to publish.";
  }

  if (!normalizeText(payload.subtitle)) {
    fieldErrors.subtitle = "This field is required to publish.";
  }

  if (!normalizeText(payload.featuredImageUrl)) {
    fieldErrors.featuredImageUrl = "This field is required to publish.";
  }

  if (!normalizeText(payload.highlightIntro)) {
    fieldErrors.highlightIntro = "This field is required to publish.";
  }

  if (!normalizeText(payload.body)) {
    fieldErrors.body = "This field is required to publish.";
  }

  if (!normalizeText(payload.slug)) {
    fieldErrors.slug = "This field is required to publish.";
  }

  if (!normalizeText(payload.tags)) {
    fieldErrors.tags = "This field is required to publish.";
  }

  return fieldErrors;
}

export async function GET(req: NextRequest) {
  try {
    const supabase = getSupabaseAdmin();
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

    let query = supabase.from("blogs").select("*", { count: "exact" });

   if (!status) {
  query = query.eq("status", "Live");
} else if (status !== "All") {
  query = query.eq("status", status);
}

    if (search) {
      query = query.or(
        `title.ilike.%${search}%,subtitle.ilike.%${search}%,highlightintro.ilike.%${search}%,slug.ilike.%${search}%,tags.ilike.%${search}%`
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
      return NextResponse.json(
        { error: `Could not load blogs: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      items: data ?? [],
      total: count ?? 0,
      page,
      pageSize,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Could not load blogs: ${error.message}`
            : "Could not load blogs.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabaseAdmin();
    const body = (await req.json()) as BlogPayload;
    const requestedStatus: BlogStatus = body.status ?? "Draft";

    if (!normalizeText(body.title)) {
      return NextResponse.json(
        {
          error: "Please correct the errors to continue.",
          fieldErrors: {
            title:
              requestedStatus === "Draft"
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
          {
            error: "Please correct the errors to continue.",
            fieldErrors,
          },
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
      highlightintro: normalizeText(body.highlightIntro) || null,
      body: typeof body.body === "string" ? body.body : "",
      likes:
        typeof body.likes === "number" && Number.isFinite(body.likes)
          ? body.likes
          : 0,
      slug: normalizeText(body.slug) || null,
      tags: normalizeText(body.tags) || null,
      updatedat: nowIso,
      status: requestedStatus,
    };

    if (requestedStatus === "Live") {
      if (body.id) {
        const { data, error } = await supabase
          .from("blogs")
          .update({
            ...payload,
            lastpublishedon: nowIso,
          })
          .eq("id", body.id)
          .select()
          .single();

        if (error) {
          return NextResponse.json(
            { error: `Blog could not be published: ${error.message}` },
            { status: 500 }
          );
        }

        if (!data.firstpublishedon) {
          const { data: patchedData, error: patchError } = await supabase
            .from("blogs")
            .update({ firstpublishedon: nowIso })
            .eq("id", body.id)
            .select()
            .single();

          if (patchError) {
            return NextResponse.json(
              { error: `Blog could not be published: ${patchError.message}` },
              { status: 500 }
            );
          }

          return NextResponse.json({ item: patchedData });
        }

        return NextResponse.json({ item: data });
      }

      const { data, error } = await supabase
        .from("blogs")
        .insert({
          ...payload,
          firstpublishedon: nowIso,
          lastpublishedon: nowIso,
        })
        .select()
        .single();

      if (error) {
        return NextResponse.json(
          { error: `Blog could not be published: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json({ item: data });
    }

    if (body.id) {
      const { data, error } = await supabase
        .from("blogs")
        .update(payload)
        .eq("id", body.id)
        .select()
        .single();

      if (error) {
        return NextResponse.json(
          {
            error:
              requestedStatus === "Unpublished"
                ? `Blog could not be unpublished: ${error.message}`
                : `Draft could not be saved: ${error.message}`,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({ item: data });
    }

    const { data, error } = await supabase
      .from("blogs")
      .insert(payload)
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        {
          error:
            requestedStatus === "Unpublished"
              ? `Blog could not be unpublished: ${error.message}`
              : `Draft could not be saved: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ item: data });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Blog save failed.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const supabase = getSupabaseAdmin();
    const { searchParams } = new URL(req.url);
    const id = normalizeText(searchParams.get("id"));

    if (!id) {
      return NextResponse.json(
        { error: "Blog id is required." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("blogs").delete().eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: `Blog could not be deleted: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Blog could not be deleted: ${error.message}`
            : "Blog could not be deleted.",
      },
      { status: 500 }
    );
  }
}