import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type BlogDetail = {
  id: string;
  title: string;
  subtitle: string | null;
  highlightintro: string | null;
  body: string | null;
  featuredimageurl: string | null;
  slug: string | null;
  tags: string | null;
  likes: number | null;
  firstpublishedon: string | null;
  lastpublishedon: string | null;
  status: "Live" | "Unpublished" | "Draft";
};

type BlogNavItem = {
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

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: blog, error } = await supabase
    .from("blogs")
    .select(
      "id, title, subtitle, highlightintro, body, featuredimageurl, slug, tags, likes, firstpublishedon, lastpublishedon, status"
    )
    .eq("slug", slug)
    .eq("status", "Live")
    .single<BlogDetail>();

  if (error || !blog) {
    notFound();
  }

  const { data: allLiveBlogs } = await supabase
    .from("blogs")
    .select("id, title, slug, lastpublishedon")
    .eq("status", "Live")
    .not("slug", "is", null)
    .order("lastpublishedon", { ascending: false });

  const orderedBlogs = (allLiveBlogs ?? []) as BlogNavItem[];
  const currentIndex = orderedBlogs.findIndex((item) => item.slug === slug);
  const previousBlog = currentIndex >= 0 ? orderedBlogs[currentIndex - 1] ?? null : null;
  const nextBlog = currentIndex >= 0 ? orderedBlogs[currentIndex + 1] ?? null : null;

  const tagList = getTagList(blog.tags);

  return (
    <article className="blog-shell">
      <div className="blog-detail-topbar">
        <Link href="/blog" className="blog-back-link">
          ← Back to Blogs
        </Link>
      </div>

      <header className="blog-article-header">
        <p className="section-label">Atmosphere Notes</p>
        <h1>{blog.title}</h1>

        {blog.subtitle ? (
          <p className="blog-article-subtitle">{blog.subtitle}</p>
        ) : null}

        <div className="blog-article-meta">
          <span>{formatDate(blog.lastpublishedon || blog.firstpublishedon)}</span>
          <span>•</span>
          <span>{blog.likes ?? 0} likes</span>
        </div>

        {blog.highlightintro ? (
          <p className="blog-highlight-intro">{blog.highlightintro}</p>
        ) : null}
      </header>

      {blog.featuredimageurl ? (
        <div className="blog-hero-image-wrap">
          <img
            src={blog.featuredimageurl}
            alt={blog.title}
            className="blog-hero-image"
          />
        </div>
      ) : null}

      <section className="blog-article-fullwidth">
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: blog.body || "" }}
        />

        {tagList.length > 0 ? (
          <div className="blog-tag-section">
            {tagList.map((tag) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </section>

      <section className="section">
        <div className="card card-soft-primary">
          <div className="section-label">Enter the atmosphere</div>
          <h2>Found this useful?</h2>
          <p>
            Whether you are building something, rethinking something, or looking
            for the right people and perspective around you, Spadosphere is designed
            to meet you there.
          </p>

          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Enter the Atmosphere
            </Link>
          </div>
        </div>
      </section>

      <div className="blog-article-footer-nav">
        <div className="blog-prev-next-grid">
          <div className="blog-prev-next-card">
            <div className="blog-side-label">Previous article</div>
            {previousBlog?.slug ? (
              <Link href={`/blog/${previousBlog.slug}`} className="blog-prev-next-link">
                ← {previousBlog.title}
              </Link>
            ) : (
              <span className="blog-prev-next-empty">No previous article</span>
            )}
          </div>

          <div className="blog-prev-next-card">
            <div className="blog-side-label">Next article</div>
            {nextBlog?.slug ? (
              <Link href={`/blog/${nextBlog.slug}`} className="blog-prev-next-link">
                {nextBlog.title} →
              </Link>
            ) : (
              <span className="blog-prev-next-empty">No next article</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}