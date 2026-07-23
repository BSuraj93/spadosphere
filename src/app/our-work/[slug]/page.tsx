import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type CaseStudyDetail = {
  id: string;
  title: string;
  subtitle: string | null;
  featuredimageurl: string | null;
  clientname: string | null;
  industry: string | null;
  highlightintro: string | null;
  challenge: string | null;
  solution: string | null;
  outcome: string | null;
  body: string | null;
  slug: string | null;
  tags: string | null;
  likes: number | null;
  firstpublishedon: string | null;
  lastpublishedon: string | null;
  status: "Live" | "Unpublished" | "Draft";
};

type CaseStudyNavItem = {
  id: string;
  title: string;
  slug: string | null;
  lastpublishedon: string | null;
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

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: caseStudy, error } = await supabase
    .from("case_studies")
    .select(
      "id, title, subtitle, featuredimageurl, clientname, industry, highlightintro, challenge, solution, outcome, body, slug, tags, likes, firstpublishedon, lastpublishedon, status"
    )
    .eq("slug", slug)
    .eq("status", "Live")
    .single();

  if (error || !caseStudy) {
    notFound();
  }

  const { data: allLiveCaseStudies } = await supabase
    .from("case_studies")
    .select("id, title, slug, lastpublishedon")
    .eq("status", "Live")
    .not("slug", "is", null)
    .order("lastpublishedon", { ascending: false });

  const orderedCaseStudies = (allLiveCaseStudies ?? []) as CaseStudyNavItem[];
  const currentIndex = orderedCaseStudies.findIndex((item) => item.slug === slug);
  const previousCaseStudy =
    currentIndex > 0 ? orderedCaseStudies[currentIndex - 1] ?? null : null;
  const nextCaseStudy =
    currentIndex >= 0 ? orderedCaseStudies[currentIndex + 1] ?? null : null;

  const tagList = getTagList(caseStudy.tags);

  return (
    <article className="blog-shell case-study-shell">
      <div className="blog-detail-topbar">
        <Link href="/our-work" className="blog-back-link">
          ← Back to Our Work
        </Link>
      </div>

      <header className="blog-article-header">
        <p className="section-label">Case Study</p>
        <h1>{caseStudy.title}</h1>

        {caseStudy.subtitle ? (
          <p className="blog-article-subtitle">{caseStudy.subtitle}</p>
        ) : null}

        <div className="blog-article-meta">
          {(caseStudy.clientname || caseStudy.industry) && (
            <span>
              {[caseStudy.clientname, caseStudy.industry].filter(Boolean).join(" • ")}
            </span>
          )}
          <span>{formatDate(caseStudy.lastpublishedon || caseStudy.firstpublishedon)}</span>
          <span>{caseStudy.likes ?? 0} likes</span>
        </div>

        {caseStudy.highlightintro ? (
          <p className="blog-highlight-intro">{caseStudy.highlightintro}</p>
        ) : null}
      </header>

      {caseStudy.featuredimageurl ? (
        <div className="blog-hero-image-wrap">
          <img
            src={caseStudy.featuredimageurl}
            alt={caseStudy.title}
            className="blog-hero-image"
          />
        </div>
      ) : null}

      <div className="blog-article-layout">
        <div className="blog-article-body">
          {caseStudy.challenge ? (
            <section className="case-study-section-block">
              <h2>Challenge</h2>
              <div
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
              />
            </section>
          ) : null}

          {caseStudy.solution ? (
            <section className="case-study-section-block">
              <h2>Solution</h2>
              <div
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
              />
            </section>
          ) : null}

          {caseStudy.outcome ? (
            <section className="case-study-section-block">
              <h2>Outcome</h2>
              <div
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: caseStudy.outcome }}
              />
            </section>
          ) : null}

          {caseStudy.body ? (
            <section className="case-study-section-block">
              <h2>More Details</h2>
              <div
                className="blog-body"
                dangerouslySetInnerHTML={{ __html: caseStudy.body }}
              />
            </section>
          ) : null}

          {tagList.length > 0 ? (
            <div className="blog-tag-section">
              {tagList.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="blog-article-sidebar">
          <div className="blog-side-card">
            <div className="blog-side-label">Case study details</div>
            <dl className="case-study-side-list">
              {caseStudy.clientname ? (
                <>
                  <dt>Client</dt>
                  <dd>{caseStudy.clientname}</dd>
                </>
              ) : null}

              {caseStudy.industry ? (
                <>
                  <dt>Industry</dt>
                  <dd>{caseStudy.industry}</dd>
                </>
              ) : null}

              <dt>Published</dt>
              <dd>{formatDate(caseStudy.lastpublishedon || caseStudy.firstpublishedon)}</dd>

            </dl>
          </div>
        </aside>
      </div>

      <div className="blog-article-footer-nav">
        <div className="blog-prev-next-grid">
          <div className="blog-prev-next-card">
            <div className="blog-side-label">Previous case study</div>
            {previousCaseStudy?.slug ? (
              <Link
                href={`/our-work/${previousCaseStudy.slug}`}
                className="blog-prev-next-link"
              >
                {previousCaseStudy.title}
              </Link>
            ) : (
              <span className="blog-prev-next-empty">No previous case studies</span>
            )}
          </div>

          <div className="blog-prev-next-card">
            <div className="blog-side-label">Next case study</div>
            {nextCaseStudy?.slug ? (
              <Link
                href={`/our-work/${nextCaseStudy.slug}`}
                className="blog-prev-next-link"
              >
                {nextCaseStudy.title}
              </Link>
            ) : (
              <span className="blog-prev-next-empty">No next case studies</span>
            )}
          </div>
        </div>
      </div>
      <section className="section">
  <div className="card card-soft-accent">
    <div className="section-label">Next step</div>
    <h2>Want outcomes like this for your idea or product?</h2>
    <p>
      If you are at the early stage and want strategy plus product design working together, we can help you shape the next move.
    </p>
    <div className="button-row">
      <Link href="/contact" className="btn btn-primary">
        Start a Conversation
      </Link>
      
    </div>
  </div>
</section>
    </article>
  );
}