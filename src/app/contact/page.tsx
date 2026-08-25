import Image from "next/image";

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero section">
        <div className="hero-content">
          <div className="section-label">Contact · Enter the Atmosphere</div>
          <h1>
            Let&apos;s find the right <span className="hero-typing">way into Spadosphere.</span>
          </h1>
          <p>
            Whether you are evaluating Enterprise AI &amp; DPDPA Governance, seeking strategic product direction, or exploring immersive workshops and retreats, this is the place to begin.
          </p>
          <p>
            Tell us about your organization, your compliance or product challenge, and the kind of collaboration you are looking for.
          </p>
        </div>
      </section>

      {/* Intake & Location */}
      <section className="section">
        <div className="section-label">Start the Conversation</div>
        <div className="grid-2">
          <div>
            <h2>Begin with context, not just contact details.</h2>
            <p>
              The best starting point is a simple note that helps us understand your current operational stage, your regulatory or technical challenge, and the kind of support you need.
            </p>
            <p>
              Email us at{" "}
              <a href="mailto:hello@spadosphere.com" className="link-text">
                hello@spadosphere.com
              </a>{" "}
              and tell us what&apos;s on your mind.
            </p>
            <p>
              Feel free to outline your immediate goals—whether that&apos;s an AI Risk Audit, DPDPA Compliance architecture, employee privacy training, product strategy, or an executive workshop.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card card-soft-primary">
              <h3>Where we are based</h3>
              <p>
                Spadosphere India Private Limited
                <br />
                Chennai, India
              </p>
              <p className="section-label">
                We serve small and medium enterprises, high-growth startups, and leadership teams globally across remote and hybrid formats.
              </p>
            </div>

            {/* Recognition Card */}
            <div 
              className="card" 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between", 
                gap: "1rem",
                padding: "1.25rem 1.5rem"
              }}
            >
              <div>
                <div className="section-label" style={{ marginBottom: "0.2rem", fontSize: "0.75rem" }}>Government Recognition</div>
                <h4 style={{ margin: 0, fontSize: "0.95rem" }}>Recognized by DPIIT &amp; Startup India</h4>
              </div>
              <Image
                src="/dpiit-logo.png"
                alt="Recognized by DPIIT Startup India"
                width={140}
                height={60}
                style={{ height: "auto", width: "100%", maxWidth: "130px", objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Enter / Engagement Tracks */}
      <section className="section">
        <div className="section-label">Ways to Engage</div>
        <div className="grid-3">
          <div className="card service-card">
            <div className="service-tag">Governance &amp; Risk</div>
            <h3>AI &amp; DPDPA Solutions</h3>
            <p>
              For enterprise leaders, legal teams, and CISOs needing algorithmic auditing, NIST/ISO 42001 alignment, DPDPA data privacy frameworks, and workforce training programs.
            </p>
          </div>
          <div className="card service-card">
            <div className="service-tag">Product &amp; Strategy</div>
            <h3>Strategic Advisory</h3>
            <p>
              For founders and tech leaders needing sharper positioning, product design sprint support, roadmap architecture, and go-to-market direction.
            </p>
          </div>
          <div className="card service-card">
            <div className="service-tag">Learning &amp; Community</div>
            <h3>Workshops &amp; Retreats</h3>
            <p>
              For teams and builders interested in interactive executive briefings, hands-on privacy workshops, and immersive community-led retreat gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Call Booking */}
      <section className="section">
        <div className="section-label">Book a Discovery Call</div>
        <div className="card card-soft-primary">
          <h2>Prefer a direct conversation?</h2>
          <p>
            Schedule a focused discovery session to discuss your governance posture, data privacy requirements, or product roadmap with our team.
          </p>
          <div className="button-row">
            <a
              href="https://topmate.io/suraj_b93/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="section">
        <div className="section-label">What Happens Next</div>
        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-index">1</div>
            <div>
              <h3>Initial Review</h3>
              <p>
                We review your inquiry, your technical/regulatory context, and your primary operational objectives.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-index">2</div>
            <div>
              <h3>Strategic Discovery</h3>
              <p>
                We host a brief call to dive deeper into your existing architecture, compliance mandates, or product goals.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-index">3</div>
            <div>
              <h3>Tailored Roadmap</h3>
              <p>
                We propose a structured, breathable engagement plan—whether that&apos;s a full governance audit, active workforce training, or ongoing advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-label">Frequently Asked Questions</div>
        <div className="grid-2">
          <div className="card">
            <h3>Do you work with non-startup enterprise corporate clients?</h3>
            <p>
              Yes. Spadosphere provides enterprise-grade AI governance, model risk auditing, DPDPA, GDPR, and US Privacy Act compliance frameworks for established corporations alongside high-growth tech startups.
            </p>
          </div>

          <div className="card">
            <h3>Can we engage Spadosphere purely for workforce privacy training?</h3>
            <p>
              Absolutely. We design customized active onboarding workshops and recurring refresher training programs for technical, legal, HR, and customer success personnel.
            </p>
          </div>

          <div className="card">
            <h3>Can I reach out if I&apos;m not ready for a full governance audit?</h3>
            <p>
              Yes. Many clients begin with an initial discovery conversation or a single-topic executive briefing to evaluate their current readiness before embarking on full implementation.
            </p>
          </div>

          <div className="card">
            <h3>How do you handle remote vs in-person engagements?</h3>
            <p>
              We deliver strategic audits, governance frameworks, and technical advisories globally via remote collaboration, while hosting select training workshops and founder retreats in person.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">The Invitation</div>
          <h2>Start where you are. We&apos;ll build the structure forward.</h2>
          <p>
            Spadosphere brings clarity, boundary lines, and structural confidence to complex AI systems, global data privacy mandates, and enterprise products.
          </p>
          <div className="button-row">
            <a href="mailto:hello@spadosphere.com" className="btn btn-primary">
              Email Spadosphere
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}