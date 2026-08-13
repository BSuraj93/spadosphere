import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  try {
    const supabase = getSupabaseAdmin();
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only JPG, PNG, and WEBP images are allowed." },
        { status: 400 }
      );
    }

    const safeName = file.name.replace(/\s+/g, "-").toLowerCase();
    const filePath = `blogs/${Date.now()}-${safeName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("cms")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });

    if (uploadError) {
      return NextResponse.json(
        { error: `Upload failed: ${uploadError.message}` },
        { status: 500 }
      );
    }

    const { data: publicUrlData } = supabase.storage
      .from("cms")
      .getPublicUrl(filePath);

    return NextResponse.json({
      path: uploadData?.path ?? filePath,
      url: publicUrlData.publicUrl,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `Upload failed: ${error.message}`
            : "Upload failed.",
      },
      { status: 500 }
    );
  }
}