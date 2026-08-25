"use client";

import Link from "next/link";
import BrevoChatWidget from "@/components/BrevoChatWidget";

export default function PDPAGovernancePage() {
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
            "name": "DPDPA Governance, Data Privacy & Training Services",
            "provider": {
              "@type": "Organization",
              "name": "Spadosphere"
            },
            "description": "Comprehensive DPDPA 2023 compliance, Data Protection Officer enablement, Data Principal rights management, active and refresher employee privacy training, and global alignment with GDPR and US Privacy Acts.",
            "areaServed": "Global",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Data Governance Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DPDPA Readiness & Data Architecture Audits"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consent Architecture & Data Principal Rights Workflows"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Active & Refresher Privacy Training Programs (DPDPA, GDPR, US Privacy Acts)"
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
          <div className="section-label">Enterprise Solutions · DPDPA & Global Privacy Governance</div>
          <h1>
            Navigate India’s DPDPA Act with <span className="hero-typing">Clarity & Structural Integrity.</span>
          </h1>
          <p>
            India’s Digital Personal Data Protection Act (DPDPA) fundamentally alters how organizations collect, process, and store personal data. Spadosphere helps enterprises transition from reactive compliance to proactive privacy architecture.
          </p>
          <p>
            We design end-to-end data governance systems, build notice-and-consent workflows, and conduct continuous workforce training that keeps your staff aligned with DPDPA, GDPR, and US Privacy Acts.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Book a DPDPA Compliance Readiness Audit
            </Link>
            <button onClick={scrollToFramework} className="btn btn-secondary">
              Explore Our Framework
            </button>
          </div>
        </div>
      </section>

      {/* The Regulatory Landscape / Problem */}
      <section className="section">
        <div className="section-label">The Compliance Reality</div>
        <div className="grid-2">
          <div>
            <h2>Compliance is no longer a legal footer - it is an operational system.</h2>
            <p>
              Under the DPDPA, every organization operating as a Data Fiduciary faces statutory obligations: explicit notice requirements, verifiable consent mechanisms, strict purpose limitation, and stringent penalty exposure for data breaches.
            </p>
            <p>
              Treating DPDPA as merely updating a website policy document leaves your organization vulnerable to technical operational gaps, unmanaged Data Principal requests, and severe enforcement penalties.
            </p>
          </div>
          <div className="card card-soft-primary">
            <h3>The Spadosphere Solution</h3>
            <p>
              We integrate data privacy directly into your product architecture, software engineering pipelines, and internal HR operations.
            </p>
            <p>
              Our governance frameworks translate statutory clauses into actionable engineering requirements, automated consent management, clear incident escalation paths, and comprehensive workforce enablement.
            </p>
          </div>
        </div>
      </section>

      {/* Global & Multi-Jurisdictional Privacy Support */}
      <section className="section">
        <div className="section-label">Global Privacy Reach</div>
        <div className="section-header-compact">
          <h2>Unified multi-jurisdictional privacy alignment.</h2>
          <p>
            If your enterprise serves global customers or handles cross-border data flows, DPDPA compliance cannot happen in a silo. We provide unified governance and workforce training across key international privacy regimes.
          </p>
        </div>
        <div className="grid-3">
          <div className="card">
            <div className="service-tag">Indian Regulatory Baseline</div>
            <h3>DPDPA Compliance</h3>
            <p>
              Full operational alignment with India's Digital Personal Data Protection Act, including Data Fiduciary mandates, Significant Data Fiduciary (SDF) requirements, and Data Protection Officer (DPO) enablement.
            </p>
          </div>
          <div className="card">
            <div className="service-tag">European Union Standard</div>
            <h3>GDPR Alignment</h3>
            <p>
              Data Protection Impact Assessments (DPIA), cross-border data transfer mechanisms (SCCs), and lawful processing frameworks designed for European regulatory standards.
            </p>
          </div>
          <div className="card">
            <div className="service-tag">United States Regulations</div>
            <h3>US Privacy Acts (CCPA / CPRA & State Laws)</h3>
            <p>
              Opt-out workflows, 'Do Not Sell or Share My Personal Info' mechanics, and state-level compliance strategies across California, Virginia, Colorado, and emerging US privacy acts.
            </p>
          </div>
        </div>
      </section>

      {/* Core Framework Pillars */}
      <section className="section" id="framework">
        <div className="section-label">Our Framework</div>
        <div className="section-header-compact">
          <h2>End-to-end DPDPA governance architecture.</h2>
          <p>
            A modular approach designed to evaluate your current data posture, implement necessary technical guardrails, and train your personnel for long-term compliance.
          </p>
        </div>
        <div className="grid-3">
          <div className="card service-card">
            <div>
              <div className="service-tag">Pillar I · Mapping & Audits</div>
              <h3>1. Data Discovery & Gap Analysis</h3>
              <p>
                Comprehensive mapping of personal data ingress, processing routes, storage silos, and third-party vendor transfers.
              </p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", margin: "1rem 0" }}>
                <li>Data Inventory & PII classification maps</li>
                <li>Legitimate use vs. consent-based processing audits</li>
                <li>Third-party Data Processor risk reviews</li>
                <li>Data minimization & retention policy design</li>
              </ul>
            </div>
          </div>

          <div className="card service-card">
            <div>
              <div className="service-tag">Pillar II · Architecture</div>
              <h3>2. Consent & Rights Management</h3>
              <p>
                Engineering notice, consent management systems (CMS), and Data Principal grievance redressal mechanisms.
              </p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", margin: "1rem 0" }}>
                <li>Multilingual notice & explicit consent architecture</li>
                <li>Data Principal Rights portals (Access, Erasure, Withdrawal)</li>
                <li>Consent Manager integration & API workflows</li>
                <li>Data Breach notification protocols & audit logs</li>
              </ul>
            </div>
          </div>

          <div className="card service-card">
            <div>
              <div className="service-tag">Pillar III · Workforce Training</div>
              <h3>3. Continuous Employee Enablement</h3>
              <p>
                Structured, ongoing education programs that transform compliance into a organizational habit across teams.
              </p>
              <ul style={{ paddingLeft: "1.2rem", fontSize: "0.9rem", color: "#64748b", margin: "1rem 0" }}>
                <li>Role-based active onboarding workshops</li>
                <li>Mandatory recurring refresher modules</li>
                <li>DPDPA, GDPR, & US Privacy Act curriculum</li>
                <li>Phishing, data handling, & breach simulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Active & Refresher Training Focus Section */}
      <section className="section">
        <div className="section-label">Capability Building</div>
        <div className="grid-2">
          <div>
            <h2>Privacy training that evolves with regulatory updates and team growth.</h2>
            <p>
              One-time compliance lectures fail because regulations change and staff forget protocols. Spadosphere delivers an active, continuous training model that ensures your personnel maintain peak operational privacy awareness.
            </p>
          </div>
          <div className="grid-2" style={{ gap: "1rem" }}>
            <div className="card">
              <div className="service-tag">Phase 01 · Initial Onboarding</div>
              <h4>Active Hands-on Training</h4>
              <p style={{ fontSize: "0.875rem" }}>
                Deep-dive interactive workshops for newly onboarded staff, software engineers, customer success reps, and HR teams tailored to their specific daily data interactions.
              </p>
            </div>
            <div className="card">
              <div className="service-tag">Phase 02 · Ongoing Cadence</div>
              <h4>Structured Refresher Programs</h4>
              <p style={{ fontSize: "0.875rem" }}>
                Quarterly and annual refresher training modules, regulatory delta updates, and real-world scenario testing to ensure long-term retention and audit readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs DPDPA Compliance */}
      <section className="section">
        <div className="section-label">Target Engagement</div>
        <div className="grid-2">
          <div>
            <h2>Who requires structured DPDPA governance?</h2>
            <p>
              Whether you are an enterprise handling millions of Indian consumer records or a B2B startup managing employee and client data, DPDPA applies to you.
            </p>
          </div>
          <div className="grid-2" style={{ gap: "1rem" }}>
            <div className="card">
              <h4>B2C & Consumer Platforms</h4>
              <p style={{ fontSize: "0.875rem" }}>Manage high-volume user data, itemized consent records, minor data protection, and instant withdrawal processing.</p>
            </div>
            <div className="card">
              <h4>Enterprise B2B SaaS</h4>
              <p style={{ fontSize: "0.875rem" }}>Fulfill Data Processor obligations, execute Data Processing Agreements (DPAs), and maintain enterprise audit trails.</p>
            </div>
            <div className="card">
              <h4>Healthcare & Fintech</h4>
              <p style={{ fontSize: "0.875rem" }}>Handle highly sensitive personal data under strict regulatory mandates, encrypted data flows, and specialized consent rules.</p>
            </div>
            <div className="card">
              <h4>Global Corporations in India</h4>
              <p style={{ fontSize: "0.875rem" }}>Harmonize global data privacy policies (GDPR/CCPA) with specific Indian DPDPA compliance nuances and local office oversight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section">
        <div className="section-label">Frequently Asked Questions</div>
        <div className="grid-2">
          <div className="card">
            <h3>What are the penalties for non-compliance under the DPDPA?</h3>
            <p>
              The DPDPA outlines substantial financial penalties up to ₹250 Crore per instance for significant security breaches, failure to protect personal data, or non-compliance with statutory duties regarding children's data.
            </p>
          </div>
          <div className="card">
            <h3>How frequently should employee privacy refresher training be conducted?</h3>
            <p>
              We recommend conducting mandatory refresher training annually at minimum, alongside quarterly micro-learning updates whenever regulatory rules or internal data architecture undergo significant updates.
            </p>
          </div>
          <div className="card">
            <h3>Do you cover GDPR and US Privacy Acts alongside DPDPA?</h3>
            <p>
              Yes. Our training modules and governance frameworks can be customized as a unified curriculum covering DPDPA, EU GDPR, and US State Privacy Laws (such as CCPA/CPRA), enabling your teams to understand global compliance in one coherent program.
            </p>
          </div>
          <div className="card">
            <h3>What is the role of a Data Protection Officer (DPO) under DPDPA?</h3>
            <p>
              For Significant Data Fiduciaries, appointing an India-based DPO is mandatory. The DPO serves as the point of contact for Data Principal grievances, coordinates with the Data Protection Board of India, and oversees internal privacy compliance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">The Next Move</div>
          <h2>Ready to establish transparent, compliant, and trusted data governance?</h2>
          <p>
            Connect with Spadosphere today to audit your current privacy posture and build a sustainable DPDPA compliance roadmap for your organization.
          </p>
          <div className="button-row">
            <Link href="/contact" className="btn btn-primary">
              Schedule a DPDPA Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <BrevoChatWidget />
    </div>
  );
}