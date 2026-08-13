import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

type BlogListItem = {
  id: string;
  title: string;
  subtitle: string | null;
  highlightintro: string | null;
  featuredimageurl: string | null;
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
    .filter(Boolean)
    .slice(0, 4);
}

export default async function BlogPage() {
  const supabase = await createClient();

  const { data: blogs, error } = await supabase
    .from("blogs")
    .select(
      "id, title, subtitle, highlightintro, featuredimageurl, slug, tags, likes, firstpublishedon, lastpublishedon, status"
    )
    .eq("status", "Live")
    .not("slug", "is", null)
    .order("lastpublishedon", { ascending: false });

  if (error) {
    return (
      <section className="blog-shell">
        <div className="blog-list-hero">
          <p className="section-label">Atmosphere Notes</p>
          <h1>Blog</h1>
          <p>We could not load the articles right now.</p>
        </div>
      </section>
    );
  }

  const safeBlogs = (blogs ?? []).filter((item) => item.slug);

  return (
    <section className="blog-shell">
      <div className="blog-list-hero">
        <p className="section-label">Atmosphere Notes</p>
        <h1>Founder notes, product thinking, and launch clarity.</h1>
        <p className="blog-list-intro">
          Essays, field notes, and perspective from the Spadosphere on strategy,
          product design, and building Minimum Lovable Products.
        </p>
      </div>

      {safeBlogs.length === 0 ? (
        <div className="blog-empty-state">
          <h2>No blog articles yet.</h2>
          <p>Published blogs will appear here once they go live from the CMS.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {safeBlogs.map((blog) => {
            const tagList = getTagList(blog.tags);

            return (
              <article key={blog.id} className="blog-card">
                {blog.featuredimageurl ? (
                  <Link href={`/blog/${blog.slug}`} className="blog-card-image-link">
                    <img
                      src={blog.featuredimageurl}
                      alt={blog.title}
                      className="blog-card-image"
                    />
                  </Link>
                ) : null}

                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{formatDate(blog.lastpublishedon || blog.firstpublishedon)}</span>
                    
                  </div>

                  <h2 className="blog-card-title">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  {blog.subtitle ? (
                    <p className="blog-card-subtitle">{blog.subtitle}</p>
                  ) : null}

                  {blog.highlightintro ? (
                    <p className="blog-card-excerpt">{blog.highlightintro}</p>
                  ) : null}

                  {tagList.length > 0 ? (
                    <div className="blog-tag-row">
                      {tagList.map((tag) => (
                        <span key={tag} className="blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="blog-card-actions">
                    <Link href={`/blog/${blog.slug}`} className="btn btn-primary">
                      Read article
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}