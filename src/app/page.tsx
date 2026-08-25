import Link from "next/link";
import Image from "next/image";
import BrevoChatWidget from "@/components/BrevoChatWidget";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero section">
        <div className="hero-content">
          <div className="section-label">The Breathable Idea-to-MLP Atmosphere</div>
          <h1>From Zero to <span className="hero-typing">Minimum Lovable Product.</span></h1>
          <p>
            Spadosphere creates the atmosphere where strategy, product, design, governance, and
            experiential learning come together to move ideas into responsible, resonant reality.
          </p>
          <p>
            Whether you are a founder, enterprise operator, student, or visionary builder, we help you
            navigate emerging systems, foster clarity, and build momentum with structural integrity.
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

      {/* Recognition Banner / Social Proof */}
      <section className="section" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
        <div 
          className="card card-soft-primary" 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            flexWrap: "wrap", 
            gap: "1.5rem", 
            padding: "1.75rem 2.5rem" 
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            <div className="section-label" style={{ marginBottom: "0.25rem" }}>Institutional Recognition</div>
            <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Recognized by DPIIT &amp; Startup India</h3>
            <p style={{ margin: "0.5rem 0 0 0", fontSize: "0.9rem", color: "var(--text-muted, #64748b)" }}>
              Spadosphere is officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India, under the #StartupIndia initiative.
            </p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <Image
              src="/dpiit-logo.png"
              alt="Recognized by DPIIT Startup India"
              width={260}
              height={110}
              style={{ height: "auto", width: "100%", maxWidth: "260px", objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="section-label">Our Capabilities</div>
        <div className="section-header-compact">
          <h2>Services for clarity, compliance, and creation.</h2>
          <p>
            From navigational frameworks for complex regulations to hands-on build consulting,
            our services bring structure and breathability to every stage of growth.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1: AI Governance */}
          <div className="card service-card">
            <div className="service-tag">Governance &amp; Risk</div>
            <h3>AI Governance &amp; Training</h3>
            <p>
              Establish practical ethical boundary lines, audit algorithmic risk, and equip your teams to adopt AI models safely without stalling innovation.
            </p>
            <div className="service-card-action">
              <Link href="/services/ai-governance" className="btn btn-secondary btn-sm">
                Explore AI Governance →
              </Link>
            </div>
          </div>

          {/* Card 2: DPDPA Governance */}
          <div className="card service-card">
            <div className="service-tag">Compliance &amp; Policy</div>
            <h3>DPDPA Governance &amp; Training</h3>
            <p>
              Navigate India&apos;s Digital Personal Data Protection Act seamlessly. We help align your data architecture and internal workflows with regulatory standards.
            </p>
            <div className="service-card-action">
              <Link href="/services/dpdpa-governance" className="btn btn-secondary btn-sm">
                Explore DPDPA Compliance →
              </Link>
            </div>
          </div>

          {/* Card 3: Early-Stage Startup Consulting */}
          <div className="card service-card">
            <div className="service-tag">Strategy &amp; Execution</div>
            <h3>Early-Stage Startup Consulting</h3>
            <p>
              Turn raw concepts into Minimum Lovable Products. Hands-on direction across positioning, functional design, and go-to-market architecture.
            </p>
            <div className="service-card-action">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Book a Consultation →
              </Link>
            </div>
          </div>

          {/* Card 4: Experiential Learning */}
          <div className="card service-card">
            <div className="service-tag">Growth &amp; Capability</div>
            <h3>Experiential Learning</h3>
            <p>
              Immersive, hands-on learning programs designed to teach product execution, systems thinking, and strategy by doing rather than lecturing.
            </p>
          </div>

          {/* Card 5: Retreat Networking */}
          <div className="card service-card">
            <div className="service-tag">Community &amp; Focus</div>
            <h3>Retreat Networking &amp; Ideation</h3>
            <p>
              Curated offline gatherings that bring builders, operators, and thinkers together to clarify vision and build unhurried, authentic connections.
            </p>
          </div>
        </div>
      </section>

      {/* The Viscosity Problem */}
      <section className="section">
        <div className="section-label">The Viscosity Problem</div>
        <div className="grid-2">
          <div>
            <h2>People with strong ideas should not have to figure everything out alone.</h2>
            <p>
              Most promising ideas get stuck in the viscosity between excitement and
              execution. You are juggling direction, regulatory compliance, product thinking, and design choices
              while trying to keep the original spark alive.
            </p>
          </div>
          <div className="card">
            <h3>The Spad Solution</h3>
            <p>
              By integrating Strategy, Governance, Product, and Design, Spadosphere creates an
              atmosphere where ideas can be explored, refined, tested, and moved
              forward through learning, collaboration, and selective support.
            </p>
          </div>
        </div>
      </section>

      {/* The Spad Breakdown */}
      <section className="section">
        <div className="section-label">The Spad Breakdown</div>
        <div className="grid-3">
          <div className="card">
            <h3>Strategy &amp; Governance · The Brain</h3>
            <p className="section-label">Market &amp; Regulatory Clarity.</p>
            <p>
              We help sharpen direction, establish responsible AI/DPDPA governance, and turn raw ideas into sound opportunities worth building toward.
            </p>
          </div>
          <div className="card">
            <h3>Product Design · The Heart</h3>
            <p className="section-label">Aesthetic Integrity.</p>
            <p>
              We explore how products should feel, flow, and connect so they do not
              just work, but resonate.
            </p>
          </div>
          <div className="card">
            <h3>Execution · The Hands</h3>
            <p className="section-label">Momentum in Motion.</p>
            <p>
              Through applied learning, structured experiences, networking, and
              selective support, we help ideas move out of theory and into the real
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Why Spadosphere? */}
      <section className="section">
        <div className="section-label">Why Spadosphere?</div>
        <div className="grid-2">
          <div>
            <h2>Why an MLP? Because viable is no longer enough.</h2>
          </div>
          <div>
            <p>
              In today’s market, people do not just connect with things that
              function. They connect with things that feel clear, compliant, intentional, and
              alive.
            </p>
            <p>
              Spadosphere exists at the intersection of technical direction, responsible governance, and human
              resonance, helping people turn ideas into experiences, and experiences
              into products worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* Retreats Highlight */}
      <section className="section">
        <div className="card card-soft-primary">
          <div className="section-label">Retreats at Spadosphere</div>
          <div className="grid-2">
            <div>
              <h2>Experiences designed for clarity, connection, and momentum.</h2>
              <p>
                Retreats are how the Spadosphere atmosphere becomes more lived, more
                embodied, and more human. They bring together strategy, reflection,
                creative energy, and meaningful conversation in spaces that help
                people think better and move forward with greater intention.
              </p>
            </div>

            <div>
              <p>
                Some people enter Spadosphere through product thinking. Others enter
                through governance, learning, community, and immersive experiences. Our retreats
                extend the same brand DNA into curated moments where ideas breathe,
                perspectives widen, and momentum becomes easier to access.
              </p>
              <div className="button-row">
                <Link href="/retreats" className="btn btn-primary">
                  Explore Retreats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Launch */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">The Launch</div>
          <h2>Ready to enter the atmosphere?</h2>
          <p>
            If you are building an idea, structuring your AI or DPDPA compliance, or looking for a
            more experiential way to learn, connect, and create, Spadosphere is where
            clarity begins to take shape.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>

      <BrevoChatWidget />
    </div>
  );
}