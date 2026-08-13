// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="section-label">Contact · Enter the Atmosphere</div>
        <div className="grid-2">
          <div>
            <h1>Let&apos;s find the right <span className="method-hero-highlight">way into Spadosphere.</span></h1>
            <p>
              Whether you&apos;re exploring strategy, product direction, design
              thinking, experiential learning, workshops, retreats, or a more
              immersive collaboration, this is the place to begin.
            </p>
            <p>
              Tell us a little about where you are, what you&apos;re building or
              rethinking, and what kind of atmosphere you&apos;re looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Intake */}
      <section className="section">
        <div className="section-label">Start the Conversation</div>
        <div className="grid-2">
          <div>
            <h2>Begin with context, not just contact details.</h2>
            <p>
              The best starting point is a simple note that helps us understand
              your current stage, your challenge, and the kind of support or
              experience you&apos;re looking for.
            </p>
            <p>
              Email us at{" "}
              <a href="mailto:hello@spadosphere.com" className="link-text">
                hello@spadosphere.com
              </a>{" "}
              and tell us what&apos;s on your mind.
            </p>
            <p>
              You can mention what you&apos;re building, where things feel stuck,
              what kind of clarity you need, or whether you&apos;re reaching out
              for consulting, a workshop, a bootcamp, a retreat, or a strategic
              conversation.
            </p>
          </div>
          <div className="card">
            <h3>Where we are based</h3>
            <p>
              Spadosphere
              <br />
              Chennai, India
            </p>
            <p className="section-label">
              We work across locations, both remotely and through selected
              in-person experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to enter */}
      <section className="section">
        <div className="section-label">Ways to Enter</div>
        <div className="grid-3">
          <div className="card">
            <h3>Strategic Support</h3>
            <p className="section-label">For clarity and direction.</p>
            <p>
              Reach out if you need sharper thinking around product,
              positioning, roadmap, or launch direction.
            </p>
          </div>
          <div className="card">
            <h3>Experiential Programs</h3>
            <p className="section-label">For learning through doing.</p>
            <p>
              Reach out if you&apos;re interested in workshops, bootcamps,
              founder-learning formats, or applied learning experiences.
            </p>
          </div>
          <div className="card">
            <h3>Retreats &amp; Gatherings</h3>
            <p className="section-label">For reflection and connection.</p>
            <p>
              Reach out if you want to stay close to future retreats, curated
              rooms, and immersive community-led experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Call booking */}
      <section className="section">
        <div className="section-label">Book a Pulse Check</div>
        <div className="card card-soft-primary">
          <h2>Prefer to speak first?</h2>
          <p>
            If a live conversation feels like the better starting point, book a
            short call and we&apos;ll explore what kind of fit makes sense.
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

      {/* What happens next */}
      <section className="section">
        <div className="section-label">What Happens Next</div>
        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-index">1</div>
            <div>
              <h3>The Read</h3>
              <p>
                We review your note, your context, and what kind of support,
                experience, or conversation you&apos;re actually looking for.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-index">2</div>
            <div>
              <h3>The Conversation</h3>
              <p>
                If there&apos;s alignment, we set up a short call to understand
                the opportunity, the challenge, and the right next step.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-index">3</div>
            <div>
              <h3>The Path Forward</h3>
              <p>
                From there, we suggest the best format, whether that&apos;s
                strategic consulting, a learning experience, a workshop,
                a retreat, or a more tailored collaboration.
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
            <h3>Do you only work with founders?</h3>
            <p>
              No. Spadosphere is designed for founders, aspiring founders,
              builders, and thoughtful people who are drawn to strategy,
              product, design, experiential learning, and meaningful connection.
            </p>
          </div>

          <div className="faq-item">
            <h3>Are you only a consulting brand?</h3>
            <p>
              No. Consulting is one part of Spadosphere, alongside workshops,
              bootcamps, immersive learning formats, networking-led experiences,
              and retreats.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I reach out even if I&apos;m not ready for a full engagement?</h3>
            <p>
              Absolutely. Sometimes the right starting point is a conversation,
              a program, or simply staying close to what we&apos;re building next.
            </p>
          </div>

          <div className="faq-item">
            <h3>Do you work remotely or in person?</h3>
            <p>
              Both. We support people remotely across locations, and we&apos;re
              also building more in-person experiences through workshops,
              gatherings, and retreats.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">The Invitation</div>
          <h2>Start where you are. We&apos;ll help shape the next step.</h2>
          <p>
            Spadosphere is built for people who want more clarity, more depth,
            and a better environment for learning, building, and moving
            forward.
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