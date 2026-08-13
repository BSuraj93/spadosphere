// src/app/page.tsx
import Link from "next/link";
import BrevoChatWidget from "@/components/BrevoChatWidget";

export const metadata = {
  title: 'Spadosphere | Strategy, Product & Design',
  openGraph: {
    title: 'Your Social Media Title Here',
    type: 'website',
    url: 'https://spadosphere.com/',
    images: [
      {
        url: 'https://spadosphere.com/Spadosphere.jpg',
        width: 1200,
        height: 630,
        alt: 'Spadosphere homepage preview image',
      },
    ],
  },
}


export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero section">
  <div className="hero-content">
    <div className="section-label">The Breathable Idea-to-MLP Atmosphere</div>
    <h1>From Zero to <span className="hero-typing">Minimum Lovable Product.</span></h1>
    <p>
      Spadosphere creates the atmosphere where strategy, product, design, and
      experiential learning come together to move ideas toward something real.
    </p>
    <p>
      Whether you are a founder, aspiring builder, student, operator, or simply
      someone with the right mindset and passion, we help you learn through
      experience, think with clarity, and move from idea to momentum.
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

<section className="section">
  <div className="section-label">The Viscosity Problem</div>
  <div className="grid-2">
    <div>
      <h2>People with strong ideas should not have to figure everything out alone.</h2>
      <p>
        Most promising ideas get stuck in the viscosity between excitement and
        execution. You are juggling direction, product thinking, design
        choices, feedback, and self-doubt while trying to keep the original
        spark alive.
      </p>
    </div>
    <div className="card">
      <h3>The Spad Solution</h3>
      <p>
        By integrating Strategy, Product, and Design, Spadosphere creates an
        atmosphere where ideas can be explored, refined, tested, and moved
        forward through learning, collaboration, and selective support.
      </p>
    </div>
  </div>
</section>

<section className="section">
  <div className="section-label">The Spad Breakdown</div>
  <div className="grid-3">
    <div className="card">
      <h3>Strategy · The Brain</h3>
      <p className="section-label">Market-First Thinking.</p>
      <p>
        We help sharpen direction, refine value, and turn raw ideas into
        clearer opportunities worth building toward.
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

<section className="section">
  <div className="section-label">Why Spadosphere?</div>
  <div className="grid-2">
    <div>
      <h2>Why an MLP? Because viable is no longer enough.</h2>
    </div>
    <div>
      <p>
        In today’s market, people do not just connect with things that
        function. They connect with things that feel clear, intentional, and
        alive.
      </p>
      <p>
        Spadosphere exists at the intersection of technical direction and human
        resonance, helping people turn ideas into experiences, and experiences
        into products worth remembering.
      </p>
    </div>
  </div>
</section>

<section className="section">
  <div className="section-label">Two Disciplines. One Atmosphere.</div>
  <div className="grid-2">
    <div>
      <h2>Powered by strategy and design, expanded through experience.</h2>
    </div>
    <div>
      <p>
        Spadosphere is built on the synergy of Product Management strategy and
        high-fidelity Product Design.
      </p>
      <p>
        What makes the atmosphere work is how that foundation opens into
        experiential learning, thoughtful networking, and real-world momentum,
        without the usual hand-off friction or lost-in-translation gaps.
      </p>
    </div>
  </div>
</section>

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
          through learning, community, and immersive experiences. Our retreats
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

<section className="section">
  <div className="card card-soft-accent">
    <div className="section-label">The Launch</div>
    <h2>Ready to enter the atmosphere?</h2>
    <p>
      If you are building an idea, exploring your next move, or looking for a
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
      <>
  {/* your existing page content */}
  <BrevoChatWidget />
</>
    </div>
  );
}
