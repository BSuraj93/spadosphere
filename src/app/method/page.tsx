// src/app/method/page.tsx
import Link from "next/link";

export default function MethodPage() {
  return (
    <div className="method-page">
      <section className="hero section method-hero">
        <div className="hero-content">
          <div className="section-label">The Spad Method</div>
          <h1>
            We don&apos;t do{" "}
            <span className="method-hero-highlight">
              &quot;Random Acts of Building.&quot;
            </span>
          </h1>
          <p>
            Most people jump from idea to execution without enough clarity. We
            believe better outcomes begin with better thinking, better
            experience, and a more intentional path forward.
          </p>
          <p>
            The Spad Method is a living loop of Strategy, Product, and Design
            that helps ideas move through uncertainty and toward a Minimum
            Lovable Product with more clarity, resonance, and momentum.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-label">The Atmosphere Loop</div>
        <h2>A 3-step method for people who want clarity, not chaos.</h2>
        <div className="stepper">
          <div className="step-card">
            <div className="step-label">Step 01</div>
            <div className="step-title">Strategic Deconstruction (The “S”)</div>
            <div className="step-meta">
              Strategy isn&apos;t a PDF. It&apos;s a compass.
            </div>
            <p>
              We begin by stripping the idea back to its essential value,
              direction, and reason to exist. Before anything gets built, we
              create space for sharper questions, stronger framing, and clearer
              choices.
            </p>
            <ul>
              <li>
                <strong>Clarity Audit.</strong> What is the real idea here, who
                is it for, and why should it matter?
              </li>
              <li>
                <strong>Direction Mapping.</strong> What is the smallest,
                smartest path toward something meaningful and testable?
              </li>
            </ul>
            <p className="step-outcome">
              <strong>Outcome.</strong> A focused strategic foundation that
              prevents wasted motion and makes the next move more intentional.
            </p>
          </div>

          <div className="step-card">
            <div className="step-label">Step 02</div>
            <div className="step-title">High-Fidelity Craft (The “P” + “D”)</div>
            <div className="step-meta">
              Design is not decoration. It is how meaning takes form.
            </div>
            <p>
              Once the direction is clear, we translate it into product and
              design experiences that people can feel, understand, and respond
              to. This is where clarity becomes form, and form begins to create
              connection.
            </p>
            <ul>
              <li>
                <strong>MLP Identity.</strong> Moving beyond “functional enough”
                toward something people can actually remember, trust, and talk
                about.
              </li>
              <li>
                <strong>Experience Orchestration.</strong> Shaping the flow,
                interaction, and emotional rhythm of the product or idea in
                motion.
              </li>
            </ul>
            <p className="step-outcome">
              <strong>Outcome.</strong> A clearer, more resonant product
              experience that feels intentional, differentiated, and ready to be
              tested in the real world.
            </p>
          </div>

          <div className="step-card">
            <div className="step-label">Step 03</div>
            <div className="step-title">Atmosphere Integration (The Movement)</div>
            <div className="step-meta">
              This is where clarity becomes momentum.
            </div>
            <p>
              Ideas do not move forward on insight alone. They move through
              application, reflection, exposure, accountability, and the right
              conversations. This is where the Spadosphere becomes more than a
              method and starts feeling like an environment.
            </p>
            <ul>
              <li>
                <strong>Applied Momentum.</strong> We help turn insight into
                action through structured experiences, practical movement, and
                selective support where needed.
              </li>
              <li>
                <strong>Networked Growth.</strong> Learning deepens when people
                meet the right questions, perspectives, and collaborators at the
                right time.
              </li>
            </ul>
            <p className="step-outcome">
              <strong>Outcome.</strong> A more grounded, connected, and
              forward-moving path from idea to Minimum Lovable Product.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-label">The MLP Manifesto</div>
        <h2>Why we build MLPs, not just MVPs.</h2>
        <div className="manifesto-grid">
          <div className="card manifesto-card manifesto-trap">
            <h3>The “Viable” Trap</h3>
            <p>
              “Viable” is the floor. It may get something out into the world,
              but it rarely creates trust, memory, or emotional pull.
            </p>
          </div>
          <div className="card manifesto-card manifesto-advantage">
            <h3>The “Lovable” Advantage</h3>
            <p>
              A Minimum Lovable Product goes beyond utility. It creates
              connection, invites curiosity, and gives people a reason to come
              closer.
            </p>
            <p>
              At Spadosphere, we care about that same shift in the learning
              journey too: not just consuming information, but experiencing
              something memorable enough to change how you think and build.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-label">The Duo Dynamic</div>
        <div className="grid-2">
          <div>
            <h2>Why strategy and design live under one roof.</h2>
          </div>
          <div>
            <p>
              Usually, thinking and making happen in separate rooms. Strategy
              gets discussed in one place, design gets interpreted in another,
              and the original energy gets diluted in between.
            </p>
            <p>
              In the Spadosphere, strategy and design are shaped together, then
              expanded through learning, application, and connection. That is
              what makes the journey feel less fragmented and far more alive.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card card-soft-primary">
          <div className="section-label">Ready to experience the Method?</div>
          <h2>Step into the atmosphere.</h2>
          <p>
            Whether you are shaping an idea, refining a product, exploring
            experiential learning, or looking for the right strategic
            environment to grow in, the Spad Method is designed to help you move
            with more clarity.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Enter the Method
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}