// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero section">
        <div className="hero-content">
          <div className="section-label">The Breathable Startup Launchpad</div>
          <h1>From Zero to <span className="hero-typing">Minimum Lovable Product.</span></h1>
          <p>
            Founders bring the vision. We provide the Spad—the Strategy and
            Product Design atmosphere needed to hit the market with impact.
          </p>
          <p>
            We are your Fractional Chief of Staff, turning founder-anxiety
            into market-readiness.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Enter the Atmosphere
            </Link>
            <Link href="/method" className="btn btn-secondary">
              View Our Method
            </Link>
          </div>
        </div>
      </section>

      {/* Problem space */}
      <section className="section">
        <div className="section-label">The Viscosity Problem</div>
        <div className="grid-2">
          <div>
            <h2>Founders shouldn&apos;t have to do everything.</h2>
            <p>
              Most early-stage startups fail in the viscosity of the build.
              You&apos;re juggling GTM strategy, investor decks, and UI/UX
              wireframes while trying to keep the vision alive.
            </p>
          </div>
          <div className="card">
            <h3>The Spad Solution</h3>
            <p>
              We remove the friction. By integrating Strategy (Sp) and Product
              Design (ad), we create an Atmosphere where your product doesn&apos;t
              just function—it thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="section">
        <div className="section-label">The Spad Breakdown</div>
        <div className="grid-3">
          <div className="card">
            <h3>Strategy · The Brain</h3>
            <p className="section-label">Market-First Thinking.</p>
            <p>
              We define your GTM, refine your value proposition, and map out
              the roadmap.
            </p>
            <p>
              We don&apos;t just build features—we build a business case.
            </p>
          </div>
          <div className="card">
            <h3>Product Design · The Heart</h3>
            <p className="section-label">Aesthetic Integrity.</p>
            <p>
              Led by world-class design expertise, we craft interfaces that
              users love to touch.
            </p>
            <p>We move past Viable and straight to Lovable.</p>
          </div>
          <div className="card">
            <h3>Founders Office · The Hands</h3>
            <p className="section-label">Fractional Chief of Staff.</p>
            <p>
              Consider us your tactical partners. We manage the timelines, the
              viscosity, and the operational hurdles so you can focus on being
              the Founder.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section">
        <div className="section-label">Why Spadosphere?</div>
        <div className="grid-2">
          <div>
            <h2>Why an MLP? Because Viable is no longer enough.</h2>
          </div>
          <div>
            <p>
              In today&apos;s market, users don&apos;t just want a product that
              works—they want a product that resonates.
            </p>
            <p>
              The Spadosphere is where your technical requirements meet human
              emotion. We help you leave behind the worry and launch a product
              that people actually talk about.
            </p>
          </div>
        </div>
      </section>

      {/* Duo advantage */}
      <section className="section">
        <div className="section-label">Two Disciplines. One Atmosphere.</div>
        <div className="grid-2">
          <div>
            <h2>Powered by Strategy and Design in one orbit.</h2>
          </div>
          <div>
            <p>
              Spadosphere is powered by a unique synergy of Product Management
              strategy and high-fidelity Product Design.
            </p>
            <p>
              No hand-off friction. No lost-in-translation. Just a seamless
              path to GTM.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">The Launch</div>
          <h2>Ready to clear the air?</h2>
          <p>
            Stop worrying about the how and start focusing on the why. Let&apos;s
            build your Minimum Lovable Product together.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Book Your Strategy Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
