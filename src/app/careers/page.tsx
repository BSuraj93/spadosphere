"use client";

import { useState } from "react";
import Link from "next/link";
import BrevoChatWidget from "@/components/BrevoChatWidget";

interface JobPosting {
  id: string;
  datePosted: string;
  jobTitle: string;
  jobLocation: string;
  employmentType: string;
  reportingTo: string;
  jobSummary: string;
  jobDescription: string[];
  jobRequirements: string[];
  remuneration: {
    fixed: string;
    variable: string;
  };
  howToApply: string;
}

export default function CareersPage() {
  // Collapsed by default
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const scrollToJobs = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("open-positions");
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

  const toggleJob = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const jobPostings: JobPosting[] = [
    {
      id: "sales-partnerships-intern",
      datePosted: "August 24, 2026",
      jobTitle: "Sales & Partnerships Intern (B2B – AI & Data Governance)",
      jobLocation: "Remote (India)",
      employmentType: "Internship (3 Months)",
      reportingTo: "Founding Team",
      jobSummary:
        "Drive B2B lead generation and client acquisition for Spadosphere's core enterprise governance offerings: AI Governance & Risk Auditing and DPDPA Compliance & Training.",
      jobDescription: [
        "Identify, target, and build prospect lists of small and medium enterprises, high-growth startups, and corporate entities requiring DPDPA, GDPR, US Privacy Act, and AI governance solutions.",
        "Conduct multi-channel outreach via LinkedIn, email, and professional networks to pitch Spadosphere's services and book discovery calls.",
        "Execute full-cycle sales: pitch solutions, manage follow-ups, address client objections, and support contract negotiations through to deal closure.",
        "Map potential channel partners (legal advisories, tech consultancies, and HR platforms) to expand service distribution.",
        "Maintain structured pipeline records and deliver weekly progress reports to the leadership team."
      ],
      jobRequirements: [
        "Education & Focus: Preferably a Graduate or Post-Graduate degree in Sales, Marketing, Business Administration, or Law. (Requirement can be waived for candidates demonstrating exceptional sales acumen or technical/regulatory understanding).",
        "Students from Tier 2 and Tier 3 colleges are encouraged to apply.",
        "Skills: Excellent written and verbal communication, strong consultative pitching ability, and persistence in follow-ups.",
        "Domain Aptitude: Eagerness to quickly grasp high-level concepts surrounding data privacy (DPDPA/GDPR) and AI governance.",
        "Student Requirement: Current students must submit an official approval/NOC letter from their Head of Department (HOD) permitting them to undertake the internship. (Waived for non-students/graduates)."
      ],
      remuneration: {
        fixed: "₹2,000 / month",
        variable: "Uncapped percentage commission per successful deal closed (no cap on sales volume or earning potential)."
      },
      howToApply:
        "Send your Resume and a concise Cover Letter outlining your suitability for B2B sales to hello@spadosphere.com. If you are a current student, please attach your HOD approval letter with your application."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas does Spadosphere operate across?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spadosphere works at the intersection of Strategy, Product Design (MLPs), AI & DPDPA Governance, Experiential Learning, and Curated Retreats."
        }
      },
      {
        "@type": "Question",
        "name": "Are roles at Spadosphere remote or in-person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most of our advisory, enterprise sales, and research roles are fully remote across India, with opportunities for selective in-person workshops and retreat participation."
        }
      },
      {
        "@type": "Question",
        "name": "Are educational qualifications strictly required to apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While relevant degrees are preferred, Spadosphere prioritizes real-world skills, execution capability, and problem-solving aptitude over formal degrees."
        }
      },
      {
        "@type": "Question",
        "name": "Why is an HOD approval letter required for student applicants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To ensure compliance with academic institution guidelines and verify that students have official permission to balance academic commitments with professional internship work."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to hear back after submitting an application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team reviews applications on a rolling basis and typically responds within 3 to 5 business days if there is alignment with open positions."
        }
      }
    ]
  };

  return (
    <div>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="hero section">
        <div className="hero-content">
          <div className="section-label">Careers · Join the Atmosphere</div>
          <h1>
            Build Ideas, Systems, and <span className="hero-typing">Resonant Products.</span>
          </h1>
          <p>
            Spadosphere creates the atmosphere where strategy, product design, governance, experiential learning, and community come together to turn ambitious ideas into reality.
          </p>
          <p>
            Whether building Minimum Lovable Products, shaping enterprise governance, or hosting retreats, we look for curious, disciplined builders who care about craft and clarity.
          </p>
          <div className="button-row">
            <button onClick={scrollToJobs} className="btn btn-primary">
              Explore Open Opportunities ↓
            </button>
            <Link href="/about" className="btn btn-secondary">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Job Postings Listing */}
      <section className="section" id="open-positions">
        <div className="section-label">Current Openings</div>
        <div className="section-header-compact">
          <h2>Shape responsible technology, growth, and experiences.</h2>
          <p>
            Review our active openings below. Click on any listing to view detailed requirements and submission guidelines.
          </p>
        </div>

        {jobPostings.length > 0 ? (
          <div>
            {jobPostings.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div key={job.id} className="card job-card">
                  {/* Collapsed View */}
                  <div className="job-header-collapsed">
                    <div className="job-meta-row">
                      <span>Posted: {job.datePosted}</span>
                      <span className="job-meta-badge">{job.employmentType}</span>
                      <span>{job.jobLocation}</span>
                    </div>
                    <h3 style={{ margin: "0.25rem 0", fontSize: "1.35rem" }}>
                      {job.jobTitle}
                    </h3>
                    <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.5 }}>
                      {job.jobSummary}
                    </p>
                    <div style={{ marginTop: "0.75rem" }}>
                      <button
                        onClick={() => toggleJob(job.id)}
                        className="btn btn-secondary btn-sm"
                      >
                        {isExpanded ? "Hide Details ↑" : "View Details & Apply →"}
                      </button>
                    </div>
                  </div>

                  {/* Expanded View Accordion */}
                  {isExpanded && (
                    <div className="job-expanded-content">
                      <div className="job-detail-grid">
                        <div className="job-detail-item">
                          <h5>Reporting To</h5>
                          <p>{job.reportingTo}</p>
                        </div>
                        <div className="job-detail-item">
                          <h5>Location</h5>
                          <p>{job.jobLocation}</p>
                        </div>
                        <div className="job-detail-item">
                          <h5>Employment Type</h5>
                          <p>{job.employmentType}</p>
                        </div>
                        <div className="job-detail-item">
                          <h5>Fixed Remuneration</h5>
                          <p>{job.remuneration.fixed}</p>
                        </div>
                      </div>

                      <div className="job-section-block">
                        <h4>Job Description &amp; Responsibilities</h4>
                        <ul>
                          {job.jobDescription.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="job-section-block">
                        <h4>Requirements &amp; Eligibility</h4>
                        <ul>
                          {job.jobRequirements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="job-section-block">
                        <h4>Compensation &amp; Variable Incentives</h4>
                        <p style={{ margin: "0 0 0.25rem 0", fontSize: "0.95rem" }}>
                          <strong>Fixed Allowance:</strong> {job.remuneration.fixed}
                        </p>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                          <strong>Variable Structure:</strong> {job.remuneration.variable}
                        </p>
                      </div>

                      <div 
                        className="job-section-block card card-soft-primary" 
                        style={{ padding: "1.25rem" }}
                      >
                        <h4 style={{ marginTop: 0 }}>How to Apply</h4>
                        <p style={{ margin: 0, fontSize: "0.95rem" }}>
                          {job.howToApply}
                        </p>
                      </div>

                      <div style={{ marginTop: "1.5rem" }}>
                        <button
                          onClick={() => toggleJob(job.id)}
                          className="btn btn-secondary btn-sm"
                        >
                          Hide Details ↑
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="card empty-jobs-card">
            <h3>No Active Openings Right Now</h3>
            <p style={{ maxWidth: "500px", margin: "0.5rem auto 1.5rem auto" }}>
              We aren&apos;t actively hiring for new positions at this moment, but we are always eager to connect with exceptional talent across strategy, design, and governance.
            </p>
            <a href="mailto:hello@spadosphere.com" className="btn btn-primary">
              Send a Speculative Application
            </a>
          </div>
        )}
      </section>

      {/* Careers FAQ */}
      <section className="section">
        <div className="section-label">Frequently Asked Questions</div>
        <div className="grid-2">
          <div className="card">
            <h3>What areas does Spadosphere operate across?</h3>
            <p>
              Spadosphere works across Strategy Consulting, Product Design (MLPs), AI &amp; DPDPA Governance, Experiential Learning programs, and Curated Retreats.
            </p>
          </div>

          <div className="card">
            <h3>Are roles at Spadosphere remote or in-person?</h3>
            <p>
              Most of our advisory, enterprise sales, and research roles are fully remote across India, with opportunities for selective in-person workshops and retreat participation.
            </p>
          </div>

          <div className="card">
            <h3>Are educational qualifications strictly required to apply?</h3>
            <p>
              While relevant degrees are preferred, Spadosphere prioritizes real-world skills, execution capability, and problem-solving aptitude over formal degrees.
            </p>
          </div>

          <div className="card">
            <h3>Why is an HOD approval letter required for student applicants?</h3>
            <p>
              To ensure compliance with academic institution guidelines and verify that students have official permission to balance academic commitments with professional internship work.
            </p>
          </div>

          <div className="card" style={{ gridColumn: "1 / -1" }}>
            <h3>How long does it take to hear back after submitting an application?</h3>
            <p>
              Our team reviews applications on a rolling basis and typically responds within 3 to 5 business days if there is alignment with open positions.
            </p>
          </div>
        </div>
      </section>

      {/* Spontaneous Reach Out CTA */}
      <section className="section">
        <div className="card card-soft-accent">
          <div className="section-label">General Application</div>
          <h2>Don&apos;t see a role that fits your profile?</h2>
          <p>
            If you excel in product strategy, growth, governance, or experiential program design, send us a speculative application with your portfolio or resume.
          </p>
          <div className="button-row">
            <a href="mailto:hello@spadosphere.com" className="btn btn-primary">
              Email Your Resume to Spadosphere
            </a>
          </div>
        </div>
      </section>

      <BrevoChatWidget />
    </div>
  );
}