import RetreatsClient from "../../components/retreats/RetreatsClient";
import { createClient } from "@supabase/supabase-js";

type Retreat = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  slots: number | null;
  featured_image_url: string;
  highlight_intro: string;
  bullet_1: string;
  bullet_2: string;
  bullet_3: string;
  detailed_bullets: string;
  details: string;
  pickup_available: "Yes" | "No";
  pickup_info_text: string;
  pickup_price_with: string;
  pickup_price_without: string;
  info_panel: string;
  duration: string;
  location: string;
  date: string;
  start_time: string;
  slug: string;
  tags: string;
  status: "Draft" | "Live";
};

async function getRetreats(): Promise<Retreat[]> {
  try {
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SECRET_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabase
      .from("retreats")
      .select("*")
      .eq("status", "Live");

    if (error) {
      console.error("Error fetching retreats:", error);
      return [];
    }

    return (data as Retreat[]) ?? [];
  } catch (e) {
    console.error("Failed to load retreats:", e);
    return [];
  }
}

export default async function RetreatsPage() {
  const retreats = await getRetreats();
  return <RetreatsClient retreats={retreats} />;
}