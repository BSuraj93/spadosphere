// src/app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="section-label">The Sibling Synergy</div>
        <div className="grid-2">
          <div>
            <h1>We are the Spadosphere.</h1>
            <p>
              We built this because we saw too many brilliant founders
              drowning in the viscosity of product builds.
            </p>
            <p>
              We&apos;re here to clear the air, so you can breathe, lead, and
              launch.
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="section">
        <div className="section-label">The Origin Story</div>
        <div className="grid-2">
          <div>
            <h2>Two Disciplines. One Shared Vision.</h2>
          </div>
          <div>
            <p>
              Spadosphere didn&apos;t start in a boardroom—it started with a
              realization. Startups often fail not because the idea is bad,
              but because the execution is fragmented.
            </p>
            <p>
              You hire a strategist who doesn&apos;t understand design, or a
              designer who doesn&apos;t understand the business model. We
              decided to bridge that gap.
            </p>
            <p>
              By combining high-level Product Management &amp; GTM Strategy
              with world-class Product Design, we created a Founder&apos;s
              Office that speaks both languages fluently.
            </p>
          </div>
        </div>
      </section>

      {/* Duo profiles */}
<section className="section">
  <div className="section-label">Meet the Duo</div>
  <div className="duo-grid">
    <div className="card duo-card">
      <img src="/strategist-photo.jpg" alt="The Strategist" className="person-image" />
      <div className="duo-content">
        <h3>The Strategist</h3>
        <p className="section-label">Your Name · Strategy &amp; Product Management</p>
        <p>
          <strong>The Vibe.</strong> The North Star.
        </p>
        <p>
          With a background in navigating the complex waters of product
          management and GTM strategy, Your Name focuses on the why and
          the how.
        </p>
        <p>
          He&apos;s the one who ensures the roadmap leads to a market win,
          handling the operational heavy lifting so founders don&apos;t
          have to.
        </p>
      </div>
    </div>
    <div className="card duo-card">
      <img src="/designer-photo.jpg" alt="The Designer" className="person-image" />
      <div className="duo-content">
        <h3>The Designer</h3>
        <p className="section-label">Sister&apos;s Name · Product Design &amp; UX</p>
        <p>
          <strong>The Vibe.</strong> The Soul of the Product.
        </p>
        <p>
          A master of visual storytelling and user experience, Sister&apos;s
          Name turns abstract strategy into lovable reality.
        </p>
        <p>
          She believes that design isn&apos;t just how it looks, but how
          it builds trust with the user from the very first click.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Founders Office philosophy */}
      <section className="section">
        <div className="section-label">The Founder&apos;s Office Philosophy</div>
        <div className="grid-2">
          <div>
            <h2>We aren&apos;t just vendors. We&apos;re your Second Brain.</h2>
          </div>
          <div>
            <p>
              Hiring an agency often feels like adding more management to your
              plate. Hiring Spadosphere feels like taking it off.
            </p>
            <p>
              As your Fractional Chief of Staff, we don&apos;t just take
              orders. We sit in the trenches with you.
            </p>
            <p>
              We manage the timelines, we filter the noise, and we ensure that
              when you hit the market, you aren&apos;t just launching—you&apos;re
              landing.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="section-label">The Atmosphere · Our Values</div>
        <div className="values-grid">
          <div className="card">
            <h3>Radical Candor</h3>
            <p>
              We tell you what your product needs to hear, not just what you
              want to hear.
            </p>
          </div>
          <div className="card">
            <h3>Aesthetic Integrity</h3>
            <p>We don&apos;t ship ugly products. Period.</p>
          </div>
          <div className="card">
            <h3>Speed Over Viscosity</h3>
            <p>
              We move fast, because in the early stages, momentum is your only
              real currency.
            </p>
          </div>
          <div className="card">
            <h3>Lovability</h3>
            <p>
              If a user doesn&apos;t smile within the first 30 seconds, we
              haven&apos;t done our job.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">Final Call</div>
          <h2>Let&apos;s add some Spad to your startup.</h2>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
