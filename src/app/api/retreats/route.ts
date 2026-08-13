import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

// Ensure Next.js does not statically cache or pre-render this API route at build time
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];
  const supabaseAdmin = getSupabaseAdmin();

  const { data, error } = await supabaseAdmin
    .from("retreats")
    .select(`
      id,
      title,
      category,
      subtitle,
      slots,
      featured_image_url,
      highlight_intro,
      bullet_1,
      bullet_2,
      bullet_3,
      detailed_bullets,
      details,
      pickup_available,
      pickup_info_text,
      pickup_price_with,
      pickup_price_without,
      info_panel,
      duration,
      location,
      date,
      start_time,
      slug,
      tags,
      status
    `)
    .eq("status", "Live")
    .gte("date", todayStr)
    .order("date", { ascending: true })
    .limit(3);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ items: data ?? [] });
}