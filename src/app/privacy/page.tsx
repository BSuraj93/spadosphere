// src/app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section legal-hero">
        <div className="legal-shell">
          <div className="section-label">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: June 15, 2026</p>
          <p className="legal-intro">Welcome to Spadosphere!</p>
          <p>
            <strong>Spadosphere India Private Limited</strong> (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located in Chennai, Tamil Nadu,
            India, operates the website{" "}
            <a
              href="https://www.spadosphere.com"
              target="_blank"
              rel="noreferrer"
              className="link-text"
            >
              https://www.spadosphere.com
            </a>{" "}
            (the &quot;Website&quot;). We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our Website.
          </p>
          <p>
            By using the Website, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="legal-shell">
          <div className="legal-grid">
            <aside className="legal-sidebar card">
              <div className="legal-sidebar-title">On this page</div>
              <a href="#information-collect" className="legal-anchor">
                1. Information We Collect
              </a>
              <a href="#how-we-use" className="legal-anchor">
                2. How We Use Your Information
              </a>
              <a href="#third-party" className="legal-anchor">
                3. Third-Party Service Providers &amp; Data Sharing
              </a>
              <a href="#advertising" className="legal-anchor">
                4. Advertising and Remarketing
              </a>
              <a href="#children" className="legal-anchor">
                5. Children&apos;s Privacy
              </a>
              <a href="#california" className="legal-anchor">
                6. California Privacy Disclosures
              </a>
              <a href="#gdpr" className="legal-anchor">
                7. GDPR
              </a>
              <a href="#governing-law" className="legal-anchor">
                8. Governing Law
              </a>
              <a href="#changes" className="legal-anchor">
                9. Changes to This Privacy Policy
              </a>
              <a href="#contact" className="legal-anchor">
                10. Contact Us
              </a>
            </aside>

            <div className="legal-content">
              <section id="information-collect" className="card legal-card">
                <div className="legal-number">01</div>
                <h2>Information We Collect</h2>

                <div className="legal-subsection">
                  <h3>Voluntarily Provided Information</h3>
                  <p>
                    We do not explicitly prompt you to create an account or
                    input personal data on our Website. However, if you choose
                    to contact us directly via email (e.g., at{" "}
                    <a
                      href="mailto:hello@spadosphere.com"
                      className="link-text"
                    >
                      hello@spadosphere.com
                    </a>
                    ), we will receive:
                  </p>

                  <div className="legal-list">
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Your email address.</p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Your name (if provided).</p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        Any other personal information you voluntarily choose to
                        include in the subject line or body of your email.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="legal-subsection">
                  <h3>Automatically Collected Information (Cookies &amp; Tracking)</h3>
                  <p>
                    When you visit our Website, certain information is collected
                    automatically through third-party tracking tools. We use{" "}
                    <strong>Google Analytics</strong> and <strong>Mixpanel</strong>{" "}
                    to understand how visitors interact with our Website. This
                    data may include:
                  </p>

                  <div className="legal-list">
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Your IP address, browser type, and operating system.</p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        The pages you view, the links you click, and the
                        time/date of your visit.
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        Device event information (such as crashes or system
                        activity).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="how-we-use" className="card legal-card">
                <div className="legal-number">02</div>
                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>Respond to your inquiries, questions, and feedback.</p>
                  </div>
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      Maintain, analyze, and improve the performance and user
                      experience of our Website.
                    </p>
                  </div>
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      Communicate with you. By initiating email correspondence
                      with us, you consent to receive emails from us regarding
                      your inquiry.
                    </p>
                  </div>
                </div>
              </section>

              <section id="third-party" className="card legal-card">
                <div className="legal-number">03</div>
                <h2>Third-Party Service Providers &amp; Data Sharing</h2>
                <p>
                  We do not sell your personal data. We only share information
                  with trusted third-party service providers who assist us in
                  operating our business:
                </p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Email Communication:</strong> We use{" "}
                      <strong>Brevo</strong> to manage and send emails. When you
                      correspond with us, your email data may be processed
                      through Brevo. You can review their privacy practices
                      here:{" "}
                      <a
                        href="https://www.brevo.com/legal/privacypolicy/"
                        target="_blank"
                        rel="noreferrer"
                        className="link-text"
                      >
                        Brevo Privacy Policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Analytics Providers:</strong> Google Analytics and
                      Mixpanel process automated usage data to help us optimize
                      our Website.
                    </p>
                  </div>
                </div>

                <div className="legal-note-box">
                  <div className="legal-note-title">
                    Note on Financial Transactions
                  </div>
                  <p>
                    We do not sell products or process payments directly on this
                    Website. If you purchase services from us, billing and
                    payments are handled separately outside of this Website.
                  </p>
                </div>
              </section>

              <section id="advertising" className="card legal-card">
                <div className="legal-number">04</div>
                <h2>Advertising and Remarketing</h2>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Advertisements:</strong> We do not currently
                      display third-party advertisements on our Website.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Remarketing:</strong> We do not currently use
                      remarketing tracking pixels, though we reserve the right
                      to do so in the future. If we implement remarketing tools,
                      this policy will be updated accordingly.
                    </p>
                  </div>
                </div>
              </section>

              <section id="children" className="card legal-card">
                <div className="legal-number">05</div>
                <h2>Children&apos;s Privacy (COPPA Compliance)</h2>
                <p>
                  Our Website is accessible to children under the age of 13.
                  However, we do not knowingly or explicitly solicit or collect
                  personal information from children under 13.
                </p>
                <p>
                  If a child under 13 contacts us voluntarily via email, we
                  will only receive the information provided within that email.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us at{" "}
                  <a
                    href="mailto:hello@spadosphere.com"
                    className="link-text"
                  >
                    hello@spadosphere.com
                  </a>
                  , and we will delete it promptly.
                </p>
              </section>

              <section id="california" className="card legal-card">
                <div className="legal-number">06</div>
                <h2>California Privacy Disclosures (CalOPPA, CCPA &amp; CPRA)</h2>

                <div className="legal-subsection">
                  <h3>CalOPPA (California Online Privacy Protection Act)</h3>
                  <div className="legal-list">
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        We comply with CalOPPA by explicitly detailing the
                        categories of personally identifiable information we
                        collect and the third parties with whom it is shared.
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        <strong>Do Not Track (DNT) Signals:</strong> We do not
                        currently respond to browser Do Not Track signals, as no
                        universal standard has been established.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="legal-subsection">
                  <h3>
                    CCPA/CPRA (California Consumer Privacy Act &amp; California
                    Privacy Rights Act)
                  </h3>
                  <p>
                    If you are a resident of California, you have specific
                    rights regarding your personal information:
                  </p>

                  <div className="legal-list">
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        <strong>Right to Know/Access:</strong> You have the
                        right to request a disclosure of what personal data we
                        have collected about you over the past 12 months.
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        <strong>Right to Delete:</strong> You have the right to
                        request the deletion of personal data we have collected
                        from you.
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        <strong>Right to Correct:</strong> You have the right to
                        request the correction of inaccurate personal data.
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        <strong>Right to Opt-Out of Sale or Sharing:</strong> We{" "}
                        <strong>do not sell</strong> your personal information
                        or share it for cross-context behavioral advertising.
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        <strong>Non-Discrimination:</strong> We will not
                        discriminate against you for exercising any of your
                        CCPA/CPRA rights.
                      </p>
                    </div>
                  </div>

                  <p>
                    To exercise any of these rights, please contact us at{" "}
                    <a
                      href="mailto:hello@spadosphere.com"
                      className="link-text"
                    >
                      hello@spadosphere.com
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="gdpr" className="card legal-card">
                <div className="legal-number">07</div>
                <h2>European Union General Data Protection Regulation (GDPR)</h2>
                <p>
                  If you are located in the European Economic Area (EEA), the
                  United Kingdom (UK), or Switzerland, Spadosphere India Private
                  Limited is the <strong>Data Controller</strong> for your
                  personal data.
                </p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Legal Basis for Processing:</strong> Our legal
                      basis for processing your data is your <strong>consent</strong>{" "}
                      (when you voluntarily email us or accept analytical
                      cookies) and our <strong>legitimate interest</strong>{" "}
                      (analyzing website traffic to improve our platform).
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>International Data Transfers:</strong> Because we
                      are located in India, the information you provide to us
                      will be transferred outside the EEA/UK. We ensure
                      appropriate safeguards are in place via our third-party
                      processors (such as Brevo, Google, and Mixpanel).
                    </p>
                  </div>
                </div>

                <div className="legal-subsection">
                  <h3>Your GDPR Rights</h3>
                  <div className="legal-list">
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Right of access, rectification, or erasure of your personal data.</p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Right to restrict or object to processing.</p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Right to data portability.</p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>
                        Right to withdraw consent at any time (without affecting
                        the lawfulness of processing prior to withdrawal).
                      </p>
                    </div>
                    <div className="legal-list-item">
                      <span className="legal-bullet" />
                      <p>Right to lodge a complaint with a Data Protection Authority.</p>
                    </div>
                  </div>

                  <p>
                    To exercise these rights, please email us at{" "}
                    <a
                      href="mailto:hello@spadosphere.com"
                      className="link-text"
                    >
                      hello@spadosphere.com
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section id="governing-law" className="card legal-card">
                <div className="legal-number">08</div>
                <h2>Governing Law</h2>
                <p>
                  This Privacy Policy and your use of the Website are governed
                  by the laws of <strong>India</strong> and the State of{" "}
                  <strong>Tamil Nadu</strong>.
                </p>
                <p>
                  Any legal disputes concerning data privacy shall be subject to
                  the exclusive jurisdiction of the courts in{" "}
                  <strong>Chennai, India</strong>.
                </p>
              </section>

              <section id="changes" className="card legal-card">
                <div className="legal-number">09</div>
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time.
                </p>
                <p>
                  Any changes will be posted on this page with an updated
                  &quot;Last Updated&quot; date.
                </p>
                <p>
                  We encourage you to review this page periodically for any
                  updates.
                </p>
              </section>

              <section id="contact" className="card legal-card legal-contact-card">
                <div className="legal-number">10</div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or your personal data, please contact us
                  at:
                </p>

                <div className="legal-contact-grid">
                  <div className="legal-contact-item">
                    <div className="legal-contact-label">Entity Name</div>
                    <div className="legal-contact-value">
                      Spadosphere India Private Limited
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <div className="legal-contact-label">Address</div>
                    <div className="legal-contact-value">
                      Chennai, Tamil Nadu, India
                    </div>
                  </div>

                  <div className="legal-contact-item">
                    <div className="legal-contact-label">Email</div>
                    <a
                      href="mailto:hello@spadosphere.com"
                      className="legal-contact-value link-text"
                    >
                      hello@spadosphere.com
                    </a>
                  </div>
                </div>

                <div className="button-row">
                  <Link href="/contact" className="btn btn-primary">
                    Contact Spadosphere
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}