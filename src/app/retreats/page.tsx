import RetreatsClient from "../../components/retreats/RetreatsClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://spadosphere.com";
  
  const res = await fetch(`${baseUrl}/api/retreats`, {
    cache: "no-store",
    headers: {
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
    },
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.items ?? [];
}

export default async function RetreatsPage() {
  const retreats = await getRetreats();
  return <RetreatsClient retreats={retreats} />;
}