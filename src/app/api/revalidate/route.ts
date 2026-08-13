import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    // Clear cache for both the page and the API route
    revalidatePath("/retreats");
    revalidatePath("/api/retreats");

    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      message: "Cache cleared successfully for /retreats!" 
    });
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: "Failed to revalidate" }, { status: 500 });
  }
}