import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

type CaseStudyCard = {
  id: string;
  title: string;
  subtitle: string | null;
  featuredimageurl: string | null;
  clientname: string | null;
  industry: string | null;
  highlightintro: string | null;
  slug: string | null;
  tags: string | null;
  likes: number | null;
  firstpublishedon: string | null;
  lastpublishedon: string | null;
  status: "Live" | "Unpublished" | "Draft";
};

function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}

function getTagList(tags: string | null) {
  if (!tags) return [];
  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export default async function OurWorkPage() {
  const supabase = await createClient();

  const { data: caseStudies, error } = await supabase
    .from("case_studies")
    .select(
      "id, title, subtitle, featuredimageurl, clientname, industry, highlightintro, slug, tags, likes, firstpublishedon, lastpublishedon, status"
    )
    .eq("status", "Live")
    //.not("slug", "is", null)
    .order("lastpublishedon", { ascending: false, nullsFirst: false })
    .order("firstpublishedon", { ascending: false, nullsFirst: false });

  if (error) {
    console.error("Error loading case studies:", error.message);
  }

  const liveCaseStudies = caseStudies ?? [];

  return (
    <main className="our-work-shell">
      <section className="our-work-hero section">
        <div className="container our-work-hero-inner">
          <div className="section-label">Our Work</div>
          <h1>Customer stories, outcomes, and case studies from the work we do.</h1>
          <p className="our-work-intro">
            Explore the brands in our orbit and the stories behind the outcomes we helped shape.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="our-work-section-head">
            <div>
              <div className="section-label">Our customers</div>
              <h2>Brands we work with</h2>
            </div>
          </div>

          <div className="card card-soft">
            <p>Coming soon....</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="our-work-section-head">
            <div>
              <div className="section-label">Case Studies</div>
              <h2>Selected case studies</h2>
            </div>
          </div>

          {liveCaseStudies.length === 0 ? (
            <div className="card card-soft">
              <p>0 items to show.</p>
            </div>
          ) : (
            <div className="case-study-grid">
              {liveCaseStudies.map((item: CaseStudyCard) => {
                const tagList = getTagList(item.tags);

                return (
                  <article key={item.id} className="case-study-card">
  {item.featuredimageurl ? (
    <div className="case-study-image-wrap">
      <img
        src={item.featuredimageurl}
        alt={item.title}
        className="case-study-image"
      />
    </div>
  ) : null}

  <div className="case-study-card-body">
    <div className="case-study-meta">
      {item.clientname ? <span>{item.clientname}</span> : null}
      {item.clientname && item.industry ? <span>•</span> : null}
      {item.industry ? <span>{item.industry}</span> : null}
    </div>

    <h3>{item.title}</h3>

    {item.subtitle ? (
      <p className="case-study-subtitle">{item.subtitle}</p>
    ) : null}

    {item.highlightintro ? (
      <p className="case-study-intro">{item.highlightintro}</p>
    ) : null}

    <div className="case-study-footer-meta">
      <span>{formatDate(item.lastpublishedon || item.firstpublishedon)}</span>
      <span>{item.likes ?? 0} likes</span>
    </div>

    {tagList.length > 0 ? (
      <div className="tag-row">
        {tagList.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    ) : null}

    <div className="case-study-card-cta">
      <Link href={`/our-work/${item.slug}`} className="btn btn-primary case-study-read-btn">
        Read Case Study
      </Link>
    </div>
  </div>
</article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}