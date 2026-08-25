"use client";

import Link from "next/link";
import BrevoChatWidget from "@/components/BrevoChatWidget";

export default function AIGovernancePage() {
  const scrollToFramework = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("framework");
    if (element) {
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Governance and Training Services",
            "provider": {
              "@type": "Organization",
              "name": "Spadosphere"
            },
            "description": "Comprehensive AI governance, risk management, model auditing, enterprise training, and regulatory alignment including NIST AI RMF, ISO/IEC 42001, and EU AI Act.",
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Governance Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Algorithmic Risk Assessment & Model Auditing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise AI Policy & Acceptable Use Frameworks"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Executive & Technical AI Enablement Workshops"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-content">
          <div className="section-label">Enterprise Solutions · AI Governance & Risk Management</div>
          <h1>
            Deploy Generative & Autonomous AI with <span className="hero-typing">Boundary Lines & Vision.</span>
          </h1>
          <p>
            Artificial intelligence moves exponentially faster than enterprise policy. Spadosphere helps organizations establish actionable AI governance, audit model risks, guarantee regulatory compliance, and empower teams with practical safety frameworks.
          </p>
          <p>
            Bridge the gap between ambitious innovation and technical, legal, and operational integrity—without halting product velocity.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Request an AI Risk & Governance Audit
            </Link>
            <button onClick={scrollToFramework} className="btn btn-secondary">
              Explore Our Framework
            </button>
          </div>
        </div>
      </section>

      {/* Industry Imperative / The Friction */}
      <section className="section">
        <div className="section-label">The Operational Dilemma</div>
        <div className="grid-2">
          <div>
            <h2>Innovation without structured guardrails breeds invisible systemic risk.</h2>
            <p>
              Adopting Large Language Models (LLMs), agentic AI, and automated decision engines is no longer optional. However, rapid adoption creates severe exposure: unmonitored shadow AI, intellectual property leakage, hallucination-driven liability, and non-compliance with emerging mandates like the EU AI Act and ISO/IEC 42001.
            </p>
            <p>
              Most enterprises paralysis themselves between two toxic extremes: issuing blanket bans that destroy developer velocity, or allowing wild, ungoverned AI deployment that risks brand trust.
            </p>
          </div>
          <div className="card card-soft-primary">
            <h3>The Spadosphere Solution</h3>
            <p>
              We design breathable, hyper-practical AI governance architectures engineered around how your engineering, product, and legal teams actually work.
            </p>
            <p>
              Rather than delivering 200-page unread legal binders, we convert regulatory standards into executable operational checks, policy automation, human-in-the-loop triggers, and workforce capability building.
            </p>
          </div>
        </div>
      </section>

      {/* Global Regulatory Standards Alignment */}
      <section className="section">
        <div className="section-label">Compliance Architecture</div>
        <div className="section-header-compact">
          <h2>Aligned with international governance frameworks.</h2>
          <p>
            Our governance programs anchor your AI deployments directly into global benchmark frameworks, preparing your organization for enterprise audits and cross-border operations.
          </p>
        </div>
        <div className="grid-3">
          <div className="card">
            <div className="service-tag">Framework Alignment</div>
            <h3>NIST AI RMF</h3>
            <p>
              Implementation of the NIST AI Risk Management Framework across the four core functions: Governance, Mapping, Measuring, and Managing trustworthy AI systems.
            </p>
          </div>
          <div className="card">
            <div className="service-tag">Management Systems</div>
            <h3>ISO / IEC 42001</h3>
            <p>
              Structuring end-to-end Artificial Intelligence Management Systems (AIMS) required for formal organizational AI certification and vendor procurement verification.
            </p>
          </div>
          <div className="card">
            <div className="service-tag">Global Compliance</div>
            <h3>EU AI Act & Global Rules</h3>
            <p>
              Risk-tier categorization (Minimal, High, Prohibited) and technical documentation mapping to satisfy European and international cross-border requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Core Framework Pillars */}
      <section className="section" id="framework">
        <div className="section-label">Our Framework</div>
        <div className="section-header-compact">
          <h2>End-to-end AI governance architecture.</h2>
          <p>
            From raw data intake to executive board oversight, our three core pillars deliver holistic coverage across your AI transformation lifecycle.
          </p>
        </div>
        <div className="grid-3">
          <div className="card service-card">
            <div>
              <div className="service-tag">Pillar I · Assessment</div>
              <h3>1. Model & Data Risk Auditing</h3>
              <p>
                Comprehensive risk mapping across third-party SaaS tools, custom fine-tuned LLMs, and internal algorithms.
              </p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", margin: "1rem 0" }}>
                <li>Data pipeline & PII leakage audits</li>
                <li>Hallucination & bias vulnerability profiling</li>
                <li>Vendor AI risk assessment frameworks</li>
                <li>Shadow AI identification & remediation</li>
              </ul>
            </div>
          </div>

          <div className="card service-card">
            <div>
              <div className="service-tag">Pillar II · Policy</div>
              <h3>2. Governance Guardrails & Policy</h3>
              <p>
                Designing agile, enterprise-wide acceptable use policies and operational oversight protocols.
              </p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", margin: "1rem 0" }}>
                <li>Corporate Generative AI Acceptable Use Policy</li>
                <li>Human-In-The-Loop (HITL) gatekeeping rules</li>
                <li>IP protection & prompt security guidelines</li>
                <li>Incident response plans for AI failures</li>
              </ul>
            </div>
          </div>

          <div className="card service-card">
            <div>
              <div className="service-tag">Pillar III · Enablement</div>
              <h3>3. Workforce Training & Culture</h3>
              <p>
                Up-skilling technical leaders, product teams, and general employees to use AI responsibly and effectively.
              </p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", margin: "1rem 0" }}>
                <li>Executive briefing: AI risk, ROI, & liability</li>
                <li>Technical workshops: Safe prompt engineering</li>
                <li>Ethics in product development sprints</li>
                <li>Continuous monitoring & governance certification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section">
        <div className="section-label">Target Engagement</div>
        <div className="grid-2">
          <div>
            <h2>Who requires AI governance today?</h2>
            <p>
              AI governance is no longer just for enterprise compliance officers. It is a fundamental growth enabler for forward-thinking leadership.
            </p>
          </div>
          <div className="grid-2" style={{ gap: "1rem" }}>
            <div className="card">
              <h4>Founders & Tech CTOs</h4>
              <p style={{ fontSize: "0.875rem" }}>Ensure proprietary models and product features don't infringe IP or create client security vulnerabilities.</p>
            </div>
            <div className="card">
              <h4>Enterprise Legal & CISOs</h4>
              <p style={{ fontSize: "0.875rem" }}>Establish audit trails, vendor liability limits, and strict regulatory compliance across business units.</p>
            </div>
            <div className="card">
              <h4>Product & Operations Leaders</h4>
              <p style={{ fontSize: "0.875rem" }}>Integrate generative capabilities into core user workflows without degrading brand resonance or security.</p>
            </div>
            <div className="card">
              <h4>Board Members & Investors</h4>
              <p style={{ fontSize: "0.875rem" }}>Protect equity value and brand equity by mitigating systemic algorithmic risk across portfolio assets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Roadmap / Process */}
      <section className="section">
        <div className="section-label">Engagement Roadmap</div>
        <div className="section-header-compact">
          <h2>How we collaborate with your team.</h2>
        </div>
        <div className="grid-3">
          <div className="card">
            <p className="section-label">Phase 01 · 2 Weeks</p>
            <h3>Discovery & Risk Mapping</h3>
            <p>We audit your current tech stack, vendor tools, and internal workflows to pinpoint data leakage vectors, regulatory gaps, and unmonitored AI usage.</p>
          </div>
          <div className="card">
            <p className="section-label">Phase 02 · 3 Weeks</p>
            <h3>Architecture & Policy Design</h3>
            <p>We craft tailor-made governance structures, acceptable use matrices, and technical guardrails that integrate smoothly into existing operational platforms.</p>
          </div>
          <div className="card">
            <p className="section-label">Phase 03 · Ongoing</p>
            <h3>Training & Continuous Oversight</h3>
            <p>Interactive enablement workshops for your staff, executive leadership training, and recurring audit reviews as new AI capabilities emerge.</p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (SEO Keyword Rich) */}
      <section className="section">
        <div className="section-label">Frequently Asked Questions</div>
        <div className="grid-2">
          <div className="card">
            <h3>Why do we need AI governance if we only use enterprise ChatGPT or Claude?</h3>
            <p>
              Even enterprise SaaS subscriptions require clear data handling policies, employee usage guidelines, and oversight. Governance ensures employees do not paste sensitive client data, trade secrets, or copyrighted materials into AI interfaces.
            </p>
          </div>
          <div className="card">
            <h3>Will AI governance slow down our development and innovation speed?</h3>
            <p>
              No. Bad governance slows companies down by causing hesitation and legal roadblocks. Spadosphere's breathable governance provides clear 'green lanes' so your builders know exactly what they can deploy safely without waiting for ad-hoc legal approval.
            </p>
          </div>
          <div className="card">
            <h3>How does AI Governance interface with DPDPA and privacy laws?</h3>
            <p>
              AI models rely on data training sets. Our governance frameworks bridge the gap between AI operations and personal data protection mandates like India's DPDPA and global GDPR laws, guaranteeing that training data meets consent guidelines.
            </p>
          </div>
          <div className="card">
            <h3>What deliverables do we receive at the end of an engagement?</h3>
            <p>
              You receive a full AI Risk Audit Report, customized Enterprise AI Policies, an Operational Guardrail Integration Map, interactive workshop collateral, and employee certification materials.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">The Next Move</div>
          <h2>Ready to build trusted, compliant, and accelerated AI systems?</h2>
          <p>
            Schedule a strategic discovery session with Spadosphere. We will evaluate your current AI posture and chart a clear, breathable path toward enterprise governance maturity.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Schedule a Governance Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <BrevoChatWidget />
    </div>
  );
}