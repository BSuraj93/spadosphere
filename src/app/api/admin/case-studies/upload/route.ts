import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  const supabase = await getSupabaseAdmin();
  const formData = await req.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
  const filePath = `case-studies/${Date.now()}-${safeName}`;

  const { error: uploadError } = await supabase.storage
    .from("cms")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (uploadError) {
    return NextResponse.json({ error: "Image upload failed." }, { status: 500 });
  }

  const { data } = supabase.storage.from("cms").getPublicUrl(filePath);

  return NextResponse.json({
    path: filePath,
    url: data.publicUrl,
  });
}