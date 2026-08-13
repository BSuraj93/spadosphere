"use client";

import { useEffect } from "react";
import Link from "next/link";
import { initMixpanel, trackEvent } from "@/lib/analytics";

const pillars = [
  {
    badge: "I",
    title: "Inspiration Source (I)",
    description:
      "Where your best ideas take root. Whether you recharge in quiet solitude or draw energy from high-velocity collaboration.",
  },
  {
    badge: "A",
    title: "Action Orientation (A)",
    description:
      "How you move from thought to execution. Balancing rapid real-world experimentation with calculated strategic planning.",
  },
  {
    badge: "M",
    title: "Mental Structure (M)",
    description:
      "How you organize complexity. Harnessing systematic frameworks versus fluid, intuitive adaptation.",
  },
  {
    badge: "M",
    title: "Motivation Driver (M)",
    description:
      "What fuels your persistence. Driven by deep mastery and craft versus high-impact, visible results.",
  },
  {
    badge: "E",
    title: "Emotional Resonance (E)",
    description:
      "How you make high-stakes decisions. Grounded in calm logical analysis versus human empathy and brand feel.",
  },
];

export default function IammeLandingPage() {
  useEffect(() => {
    initMixpanel();
    trackEvent("IAMME Landing Page Viewed");
  }, []);

  const handleCtaClick = (location: string) => {
    trackEvent("IAMME Start Test Clicked", { cta_location: location });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section">
        <div className="section-label">Spadosphere Internal Methodology</div>
        <div className="grid-2">
          <div>
            <h1>
              Discover the rhythm that drives how you <span className="method-hero-highlight">think, build, and move.</span>
            </h1>
            <p>
              The IAMME (I Am Me) Method is a quick, zero-tracking personality
              assessment designed to give founders, builders, students, and
              professionals radical clarity without the visual noise.
            </p>
            <div className="button-row">
              <Link
                href="/iamme-personality-test/quiz"
                className="btn btn-primary"
                onClick={() => handleCtaClick("hero")}
              >
                Begin the IAMME Assessment
              </Link>
            </div>
            <p className="section-label" style={{ marginTop: "1rem" }}>
              Takes 2 minutes · 10 questions · 100% private &amp; temporary (data deleted on exit)
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Core Problem */}
      <section className="section">
        <div className="section-label">The IAMME Philosophy</div>
        <div className="grid-2">
          <div>
            <h2>Traditional personality tests label you. IAMME activates you.</h2>
          </div>
          <div>
            <p>
              Most personality frameworks classify you into rigid corporate boxes
              or deliver bloated 30-page reports filled with fluff. But in
              high-velocity environments—whether you're launching a startup,
              building a project, or navigating a career transition—what you
              need isn't a complex label; you need clarity on your operational
              rhythm.
            </p>
            <p>
              The IAMME Method measures how you process inspiration, execute
              action, structure complexity, channel motivation, and anchor
              emotional decisions. It gives you immediate, high-leverage insights
              tailored specifically to who you are today.
            </p>
            <div className="button-row" style={{ marginTop: "1.5rem" }}>
              <Link
                href="/iamme-personality-test/quiz"
                className="btn btn-primary"
                onClick={() => handleCtaClick("philosophy")}
              >
                Begin the IAMME Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The 5 Psychological Pillars */}
      <section className="section">
        <div className="section-label">How It Works</div>
        <h2 style={{ marginBottom: "2rem" }}>Five dimensions of human momentum</h2>
        <div className="values-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="card">
              <div className="section-label">{pillar.badge}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="button-row" style={{ marginTop: "2rem" }}>
          <Link
            href="/iamme-personality-test/quiz"
            className="btn btn-primary"
            onClick={() => handleCtaClick("pillars")}
          >
            Begin the IAMME Assessment
          </Link>
        </div>
      </section>

      {/* Section 3: Privacy & Zero Friction Promise */}
      <section className="section">
        <div className="card card-soft-primary">
          <div className="section-label">No Friction</div>
          <div className="grid-2">
            <div>
              <h2>Your data stays yours. Period.</h2>
            </div>
            <div>
              <p>
                <strong>No Email Required:</strong> View your complete personal
                results instantly on screen.
              </p>
              <p>
                <strong>Zero Tracking Behind the Scenes:</strong> We do not track
                your behavior, store your responses, or build a profile on you.
              </p>
              <p>
                <strong>Instant Ephemeral Session:</strong> Your responses and
                personalizations exist only in your browser session and are
                automatically wiped clean the moment you leave or refresh the page.
              </p>
              <div className="button-row" style={{ marginTop: "1.5rem" }}>
                <Link
                  href="/iamme-personality-test/quiz"
                  className="btn btn-primary"
                  onClick={() => handleCtaClick("privacy")}
                >
                  Begin the IAMME Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Final Call to Action */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">Get Started</div>
          <h2>Know your strategic rhythm?</h2>
          <p>
            We can help you bring the much needed momentum to your ideas. Get in touch with us to explore how we can help you build, launch, and scale your ideas.
          </p>
          <div className="button-row">
            <Link
              href="/contact"
              className="btn btn-primary"
              onClick={() => handleCtaClick("final_cta")}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}