// src/app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section legal-hero">
        <div className="legal-shell">
          <div className="section-label">Legal</div>
          <h1>Terms &amp; Conditions</h1>
          <p className="legal-updated">
            Last Updated: June 15, 2026
          </p>
          <p className="legal-intro">
            Welcome to Spadosphere!
          </p>
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your use of our
            website located at{" "}
            <a
              href="https://www.spadosphere.com"
              target="_blank"
              rel="noreferrer"
              className="link-text"
            >
              https://www.spadosphere.com
            </a>{" "}
            (the &quot;Website&quot;), which is owned and operated by{" "}
            <strong>Spadosphere India Private Limited</strong> (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a business entity located in Chennai,
            Tamil Nadu, India.
          </p>
          <p>
            By accessing or using our Website, you agree to be bound by these
            Terms. If you do not agree with any part of these Terms, you must
            not use or access the Website.
          </p>
        </div>
      </section>

      {/* Legal content */}
      <section className="section">
        <div className="legal-shell">
          <div className="legal-grid">
            <aside className="legal-sidebar card">
              <div className="legal-sidebar-title">On this page</div>
              <a href="#intellectual-property" className="legal-anchor">
                1. Intellectual Property Rights
              </a>
              <a href="#website-use" className="legal-anchor">
                2. Website Use and Restrictions
              </a>
              <a href="#feedback" className="legal-anchor">
                3. Feedback and Suggestions
              </a>
              <a href="#disclaimer" className="legal-anchor">
                4. Disclaimer of Warranties
              </a>
              <a href="#liability" className="legal-anchor">
                5. Limitation of Liability
              </a>
              <a href="#governing-law" className="legal-anchor">
                6. Governing Law and Jurisdiction
              </a>
              <a href="#changes" className="legal-anchor">
                7. Changes to These Terms
              </a>
              <a href="#contact" className="legal-anchor">
                8. Contact Us
              </a>
            </aside>

            <div className="legal-content">
              <section id="intellectual-property" className="card legal-card">
                <div className="legal-number">01</div>
                <h2>Intellectual Property Rights</h2>
                <p>
                  All content, features, and functionality on this Website—
                  including but not limited to text, graphics, logos, icons,
                  images, audio clips, digital downloads, data compilations,
                  software, and trademarks—are the exclusive property of
                  Spadosphere India Private Limited or its licensors.
                </p>
                <p>
                  They are protected by Indian and international copyright,
                  trademark, patent, trade secret, and other intellectual
                  property or proprietary rights laws.
                </p>
                <p>
                  You may not copy, reproduce, distribute, or create derivative
                  works from our content without our express written permission.
                </p>
              </section>

              <section id="website-use" className="card legal-card">
                <div className="legal-number">02</div>
                <h2>Website Use and Restrictions</h2>
                <p>
                  Our Website is provided for informational and business
                  purposes.
                </p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>No User Accounts:</strong> Users are not required,
                      and do not have the option, to create an account or
                      profile on our Website.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>No User-Generated Content:</strong> Users cannot
                      create, post, or upload any content (such as text, images,
                      or comments) directly onto the Website.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>No E-Commerce/Purchases:</strong> Users cannot
                      purchase goods, products, or items directly through the
                      Website.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>No Subscriptions:</strong> We do not offer paid
                      subscription plans on this Website.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>No Promotions:</strong> We do not host promotions,
                      contests, or sweepstakes on this Website.
                    </p>
                  </div>
                </div>
              </section>

              <section id="feedback" className="card legal-card">
                <div className="legal-number">03</div>
                <h2>Feedback and Suggestions</h2>
                <p>
                  We welcome your questions, comments, and feedback. However,
                  please note that if you submit or provide any feedback, ideas,
                  or suggestions to us (via email or other communication
                  channels), you agree that we may use, disclose, reproduce,
                  modify, license, or distribute these submissions for any
                  purpose whatsoever, without any obligation, compensation, or
                  credit to you.
                </p>
              </section>

              <section id="disclaimer" className="card legal-card">
                <div className="legal-number">04</div>
                <h2>Disclaimer of Warranties</h2>
                <p>
                  The Website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
                  basis.
                </p>
                <p>
                  Spadosphere India Private Limited makes no representations or
                  warranties of any kind, express or implied, as to the
                  operation of the Website or the information, content, or
                  materials included on it.
                </p>
                <p>
                  To the full extent permissible by applicable law, we disclaim
                  all warranties, express or implied, including but not limited
                  to implied warranties of merchantability and fitness for a
                  particular purpose.
                </p>
              </section>

              <section id="liability" className="card legal-card">
                <div className="legal-number">05</div>
                <h2>Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Spadosphere
                  India Private Limited, its directors, employees, or agents
                  shall not be liable for any direct, indirect, incidental,
                  consequential, or punitive damages arising out of or relating
                  to your use of, or inability to use, the Website.
                </p>
              </section>

              <section id="governing-law" className="card legal-card">
                <div className="legal-number">06</div>
                <h2>Governing Law and Jurisdiction</h2>
                <p>
                  These Terms and your use of the Website are governed by and
                  construed in accordance with the laws of <strong>India</strong>{" "}
                  and the State of <strong>Tamil Nadu</strong>, without regard
                  to its conflict of law principles.
                </p>
                <p>
                  Any legal action or proceeding related to this Website shall
                  be brought exclusively in the courts located in{" "}
                  <strong>Chennai, India</strong>.
                </p>
              </section>

              <section id="changes" className="card legal-card">
                <div className="legal-number">07</div>
                <h2>Changes to These Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or
                  replace these Terms at any time.
                </p>
                <p>
                  We will post the revised Terms on this page and update the
                  &quot;Last Updated&quot; date at the top.
                </p>
                <p>
                  Your continued use of the Website after any changes constitute
                  your acceptance of the new Terms.
                </p>
              </section>

              <section id="contact" className="card legal-card legal-contact-card">
                <div className="legal-number">08</div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns regarding these Terms
                  and Conditions, please contact us at:
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