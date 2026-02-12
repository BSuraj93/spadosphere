// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="section-label">Contact · Get Started</div>
        <div className="grid-2">
          <div>
            <h1>Ready to leave the viscosity behind?</h1>
            <p>
              We only take on a select number of founders at a time to ensure
              your product gets the Spad focus it deserves.
            </p>
            <p>
              Tell us where you are, and let&apos;s see if we&apos;re the right
              atmosphere for your launch.
            </p>
          </div>
        </div>
      </section>

      {/* Intake – adapted since no form logic */}
      <section className="section">
        <div className="section-label">The Strategy Audit</div>
        <div className="grid-2">
          <div>
            <h2>Start with a founder-first intake.</h2>
            <p>
              Instead of just Name/Email, we focus on the substance of your
              challenge. Since we don&apos;t have form logic here, you can
              reach us directly.
            </p>
            <p>
              Email us at{" "}
              <a href="mailto:hello@spadosphere.com" className="link-text">
                hello@spadosphere.com
              </a>{" "}
              and tell us where you are in your journey.
            </p>
            <p>
              You can also mention your current stage, your biggest bottleneck,
              and what &quot;Minimum Lovable&quot; looks like for you.
            </p>
          </div>
          <div className="card">
            <h3>Where we are based</h3>
            <p>
              Spadosphere<br />
              [Your City, Country]<br />
            </p>
            <p className="section-label">
              We work with founders globally, remotely.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="section">
        <div className="section-label">Book a pulse check</div>
        <div className="card card-soft-primary">
          <h2>Prefer to skip the back-and-forth?</h2>
          <p>
            Use our calendar to grab a slot that fits your sprint.
          </p>
          <div className="button-row">
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Book a Calendly Slot
            </a>
          </div>
        </div>
      </section>

      {/* Direct line */}
      <section className="section">
        <div className="section-label">Alternative Contact</div>
        <div className="grid-2">
          <div>
            <h2>Prefer a direct orbit?</h2>
            <p>
              If you&apos;re a founder who prefers a quick pulse check over a
              form, find us where the builders hang out.
            </p>
          </div>
          <div className="card">
            {/* Replace with your real links */}
            <p>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="link-text"
              >
                LinkedIn Profile
              </a>
            </p>
            <p>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="link-text"
              >
                X (Twitter)
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section">
        <div className="section-label">What Happens Next?</div>
        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-index">1</div>
            <div>
              <h3>The Review</h3>
              <p>
                We&apos;ll look at your challenge and see if our Strategy ·
                Design duo is the right fit.
              </p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-index">2</div>
            <div>
              <h3>The Intro Call</h3>
              <p>
                A 20-minute, no-pitch session to dive deeper into your
                roadmap.
              </p>
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-index">3</div>
            <div>
              <h3>The Proposal</h3>
              <p>
                If there&apos;s chemistry, we&apos;ll outline exactly how we&apos;ll
                build your MLP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-label">FAQ · The Safety Net</div>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Do you work with non-technical founders?</h3>
            <p>Absolutely. We are your technical and strategic bridge.</p>
          </div>
          <div className="faq-item">
            <h3>How long does a typical Spadosphere sprint take?</h3>
            <p>Usually 6 to 12 weeks from strategy to high-fidelity MLP.</p>
          </div>
          <div className="faq-item">
            <h3>Are you an agency?</h3>
            <p>
              No. We are a Founder&apos;s Office. We don&apos;t just do tasks—we
              own outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
