import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

type JoinPayload = {
  retreatTitle: string;
  retreatSlug: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  aadharLast6: string;
  pickupNeeded: "Yes" | "No";
};

function getGoogleAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Missing Google Sheets credentials.");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

async function getRetreatJoinConfig() {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("app_settings")
    .select("value_json")
    .eq("key", "retreat_join_form")
    .single();

  if (error || !data?.value_json) {
    throw new Error("Retreat form settings are missing.");
  }

  return data.value_json as {
    enabled?: boolean;
    spreadsheetId?: string;
    range?: string;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as JoinPayload;

    if (
      !body.firstName?.trim() ||
      !body.lastName?.trim() ||
      !body.email?.trim() ||
      !body.phoneNumber?.trim() ||
      !body.aadharLast6?.trim() ||
      !body.pickupNeeded?.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!/^\d{6}$/.test(body.aadharLast6.trim())) {
      return NextResponse.json(
        { error: "Last 6 digits of Aadhaar must be exactly 6 digits." },
        { status: 400 }
      );
    }

    const config = await getRetreatJoinConfig();

    if (!config.enabled) {
      return NextResponse.json(
        { error: "Retreat registrations are temporarily unavailable." },
        { status: 503 }
      );
    }

    if (!config.spreadsheetId) {
      return NextResponse.json(
        { error: "Spreadsheet configuration is missing." },
        { status: 500 }
      );
    }

    const auth = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: config.spreadsheetId,
      range: config.range || "Sheet1!A:N",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            body.retreatTitle || "",
            body.retreatSlug || "",
            body.firstName,
            body.lastName,
            body.email,
            body.phoneNumber,
            body.aadharLast6,
            body.pickupNeeded,
            "No",
            "New Lead",
            "Website Retreat Form",
            "",
            ""
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Submission failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}