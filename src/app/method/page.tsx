// src/app/method/page.tsx
import Link from "next/link";

export default function MethodPage() {
  return (
    <div>
      {/* Hero - IMPROVED ALIGNMENT */}
<section className="hero section">
  <div className="hero-content">
    <div className="section-label">The Spad Method</div>
    <h1>We don&apos;t do <span className="method-hero-highlight">&quot;Random Acts of Building.&quot;</span></h1>
    <p>
      Most agencies take an order and build it. We take a vision and
      pressure-test it.
    </p>
    <p>
      The Spad Method is a symbiotic loop of Strategy (Sp) and Product
      Design (ad) designed to eliminate the &quot;viscosity&quot; that kills
      early-stage startups.
    </p>
  </div>
</section>


      {/* Atmosphere loop */}
      <section className="section">
        <div className="section-label">The Atmosphere Loop</div>
        <h2>A 3-step cycle for founders who want rigor, not random.</h2>
        <div className="stepper">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-label">Step 01</div>
            <div className="step-title">Strategic Deconstruction (The &apos;Sp&apos;)</div>
            <div className="step-meta">
              Strategy isn&apos;t a PDF—it&apos;s a Compass.
            </div>
            <p>
              We start by stripping your idea down to its core value
              proposition.
            </p>
            <ul>
              <li>
                <strong>The GTM Audit.</strong> Who are we fighting? Why do we
                win?
              </li>
              <li>
                <strong>Roadmap Definition.</strong> What is the 20% of the
                product that will provide 80% of the value?
              </li>
            </ul>
            <p className="step-outcome">
              <strong>Outcome.</strong> A lean, mean strategic blueprint that
              ensures we aren&apos;t building a product nobody wants.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-label">Step 02</div>
            <div className="step-title">High-Fidelity Craft (The &apos;ad&apos;)</div>
            <div className="step-meta">
              Design is the first thing your users &quot;feel.&quot;
            </div>
            <p>
              Led by our Head of Design, we translate the strategy into a visual
              language that resonates.
            </p>
            <ul>
              <li>
                <strong>The MLP Identity.</strong> Moving beyond a &quot;Functional&quot;
                MVP to a &quot;Lovable&quot; Product.
              </li>
              <li>
                <strong>UX Orchestration.</strong> Mapping every click to a
                user&apos;s emotional &quot;win.&quot;
              </li>
            </ul>
            <p className="step-outcome">
              <strong>Outcome.</strong> A high-fidelity, interactive prototype
              or build that looks like a Series B product on a Pre-Seed budget.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-label">Step 03</div>
            <div className="step-title">The Chief of Staff Integration (The Atmosphere)</div>
            <div className="step-meta">We close the gap between &quot;Doing&quot; and &quot;Leading.&quot;</div>
            <p>
              This is where we act as your Founder&apos;s Office. We don&apos;t
              just hand over files and wish you luck.
            </p>
            <ul>
              <li>
                <strong>The Viscosity Filter.</strong> We manage the project
                timelines, the technical trade-offs, and the launch
                preparation.
              </li>
              <li>
                <strong>Founder Focus.</strong> We handle the &quot;how&quot; so you can
                focus on fundraising, hiring, and the &quot;why.&quot;
              </li>
            </ul>
            <p className="step-outcome">
              <strong>Outcome.</strong> A smooth, controlled GTM launch.
            </p>
          </div>
        </div>
      </section>

      {/* MLP Manifesto - BOXED LAYOUT */}
      <section className="section">
        <div className="section-label">The MLP Manifesto</div>
        <h2>Why we build MLPs, not just MVPs.</h2>
        <div className="manifesto-grid">
          <div className="card manifesto-card manifesto-trap">
            <h3>The &quot;Viable&quot; Trap</h3>
            <p>
              In 2026, &quot;Viable&quot; is the floor. It&apos;s the bare
              minimum. It doesn&apos;t get you noticed, and it doesn&apos;t get you loved.
            </p>
          </div>
          <div className="card manifesto-card manifesto-advantage">
            <h3>The &quot;Lovable&quot; Advantage</h3>
            <p>
              A Minimum Lovable Product focuses on the emotional hook. It creates advocates, not just users.
            </p>
            <p>
              At Spadosphere, we build products that people actually want to
              tell their friends about.
            </p>
          </div>
        </div>
      </section>

      {/* Duo dynamic */}
      <section className="section">
        <div className="section-label">The Duo Dynamic</div>
        <div className="grid-2">
          <div>
            <h2>Why the &quot;Sp&quot; and the &quot;ad&quot; live under one roof.</h2>
          </div>
          <div>
            <p>
              Usually, you hire a strategist, and then you have to explain that
              strategy to a designer. Things get lost. Friction happens.
            </p>
            <p>
              In the Spadosphere, the strategy and the design are born at the
              same table. It&apos;s a seamless transition from{" "}
              <em>&quot;What should we do?&quot;</em> to <em>&quot;Look how beautiful this is.&quot;</em>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="card card-soft-primary">
          <div className="section-label">Ready to see the Method in action?</div>
          <h2>Let&apos;s run your roadmap through the Atmosphere.</h2>
          <p>
            Let&apos;s look at your current roadmap and see where we can add
            some Spadosphere clarity.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Request a Method Deep-Dive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
