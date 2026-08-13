import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

type RetreatPayload = {
  id?: string;
  title: string;
  category: string;
  subtitle: string;
  slots: number | null;
  featuredImageUrl: string;
  featuredImagePath: string;
  highlightIntro: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  detailedBullets: string;
  details: string;
  pickupAvailable: "Yes" | "No";
  pickupInfoText: string;
  pickupPriceWith: string;
  pickupPriceWithout: string;
  infoPanel: string;
  duration: string;
  location: string;
  date: string;
  startTime: string;
  slug: string;
  tags: string;
  status: "Draft" | "Live";
};

function validatePublish(data: RetreatPayload) {
  const errors: Record<string, string> = {};

  const requiredFields: (keyof RetreatPayload)[] = [
    "title",
    "category",
    "subtitle",
    "slots",
    "featuredImageUrl",
    "highlightIntro",
    "bullet1",
    "bullet2",
    "bullet3",
    "detailedBullets",
    "details",
    "pickupInfoText",
    "pickupPriceWithout",
    "duration",
    "location",
    "date",
    "startTime",
    "slug",
    "tags",
  ];

  requiredFields.forEach((field) => {
    const value = data[field];
    if (typeof value === "string" && !value.trim()) {
      errors[field] = "This field is required to publish.";
    }
  });

  if (data.pickupAvailable === "Yes" && !data.pickupPriceWith.trim()) {
    errors.pickupPriceWith = "This field is required when pickup is available.";
  }

  if (data.slots === null || Number.isNaN(data.slots) || data.slots <= 0) {
    errors.slots = "Please enter a valid number of slots.";
  }

  return errors;
}

export async function GET() {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("retreats")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ items: data ?? [] });
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as RetreatPayload;

  if (!body.title?.trim()) {
    return NextResponse.json(
      { error: "Title is required to save a draft." },
      { status: 400 }
    );
  }

  if (body.status === "Live") {
    const errors = validatePublish(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed.", fieldErrors: errors },
        { status: 400 }
      );
    }
  }

  const now = new Date().toISOString();

  if (body.id) {
    const supabaseAdmin = getSupabaseAdmin();
    const { data: existingItem, error: existingError } = await supabaseAdmin
  .from("retreats")
  .select("first_published_on, status")
  .eq("id", body.id)
  .single();

if (existingError) {
  return NextResponse.json({ error: existingError.message }, { status: 500 });
}

const isFirstTimePublishing =
  body.status === "Live" && !existingItem?.first_published_on;

const updatePayload = {
  title: body.title,
  category: body.category,
  subtitle: body.subtitle,
  slots: body.slots,
  featured_image_url: body.featuredImageUrl,
  featured_image_path: body.featuredImagePath,
  highlight_intro: body.highlightIntro,
  bullet_1: body.bullet1,
  bullet_2: body.bullet2,
  bullet_3: body.bullet3,
  detailed_bullets: body.detailedBullets,
  details: body.details,
  pickup_available: body.pickupAvailable,
  pickup_info_text: body.pickupInfoText,
  pickup_price_with: body.pickupPriceWith,
  pickup_price_without: body.pickupPriceWithout,
  info_panel: body.infoPanel,
  duration: body.duration,
  location: body.location,
  date: body.date,
  start_time: body.startTime,
  slug: body.slug,
  tags: body.tags,
  status: body.status,
  first_published_on: isFirstTimePublishing
    ? now
    : existingItem?.first_published_on ?? null,
  last_published_on: body.status === "Live" ? now : null,
  updated_at: now,
};


const { data, error } = await supabaseAdmin
  .from("retreats")
  .update(updatePayload)
  .eq("id", body.id)
  .select()
  .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ item: data });
  }

  const insertPayload = {
    title: body.title,
    category: body.category,
    subtitle: body.subtitle,
    slots: body.slots,
    featured_image_url: body.featuredImageUrl,
    featured_image_path: body.featuredImagePath,
    highlight_intro: body.highlightIntro,
    bullet_1: body.bullet1,
    bullet_2: body.bullet2,
    bullet_3: body.bullet3,
    detailed_bullets: body.detailedBullets,
    details: body.details,
    pickup_available: body.pickupAvailable,
    pickup_info_text: body.pickupInfoText,
    pickup_price_with: body.pickupPriceWith,
    pickup_price_without: body.pickupPriceWithout,
    info_panel: body.infoPanel,
    duration: body.duration,
    location: body.location,
    date: body.date,
    start_time: body.startTime,
    slug: body.slug,
    tags: body.tags,
    status: body.status,
    likes: 0,
    first_published_on: body.status === "Live" ? now : null,
    last_published_on: body.status === "Live" ? now : null,
    created_at: now,
    updated_at: now,
  };
const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("retreats")
    .insert(insertPayload)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ item: data });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { data: existing, error: fetchError } = await supabaseAdmin
    .from("retreats")
    .select("featured_image_path")
    .eq("id", id)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (existing?.featured_image_path) {
    await supabaseAdmin.storage
      .from("retreat-images")
      .remove([existing.featured_image_path]);
  }

  const { error } = await supabaseAdmin.from("retreats").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}