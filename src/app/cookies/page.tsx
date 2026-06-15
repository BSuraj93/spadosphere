// src/app/cookies/page.tsx
"use client";

import { useEffect } from "react";

export default function CookiesPage() {
  useEffect(() => {
    const openPreferences = () => {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    };

    const buttons = document.querySelectorAll("[data-open-cookie-preferences]");
    buttons.forEach((button) => {
      button.addEventListener("click", openPreferences);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", openPreferences);
      });
    };
  }, []);

  return (
    <div>
      <section className="section legal-hero">
        <div className="legal-shell">
          <div className="section-label">Legal</div>
          <h1>Cookie Policy</h1>
          <p className="legal-updated">Last Updated: June 15, 2026</p>
          <p>
            This Cookie Policy explains how{" "}
            <strong>Spadosphere India Private Limited</strong> (&quot;Company,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a business entity located in
            Chennai, Tamil Nadu, India, uses cookies and similar tracking
            technologies on our website,{" "}
            <a
              href="https://www.spadosphere.com"
              target="_blank"
              rel="noreferrer"
              className="link-text"
            >
              https://www.spadosphere.com
            </a>{" "}
            (the &quot;Website&quot;).
          </p>
          <p>
            We believe in being clear and transparent about how we collect and
            process data related to you. In line with this, this policy provides
            detailed information about how and when we use cookies on our
            Website.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="legal-shell">
          <div className="legal-grid">
            <aside className="legal-sidebar card">
              <div className="legal-sidebar-title">On this page</div>
              <a href="#what-are-cookies" className="legal-anchor">
                1. What Are Cookies?
              </a>
              <a href="#how-we-use-cookies" className="legal-anchor">
                2. How We Use Cookies
              </a>
              <a href="#what-we-do-not-use" className="legal-anchor">
                3. What We Do NOT Use
              </a>
              <a href="#managing-cookies" className="legal-anchor">
                4. Managing and Disabling Cookies
              </a>
              <a href="#governing-law" className="legal-anchor">
                5. Governing Law
              </a>
              <a href="#contact" className="legal-anchor">
                6. Contact Us
              </a>
            </aside>

            <div className="legal-content">
              <section id="what-are-cookies" className="card legal-card">
                <div className="legal-number">01</div>
                <h2>What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are downloaded to your
                  computer or mobile device when you visit a website. They are
                  widely used to make websites work, or work more efficiently,
                  as well as to provide reporting information and assist with
                  website optimization.
                </p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>First-party cookies</strong> are set by the
                      website you are visiting.
                    </p>
                  </div>
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Third-party cookies</strong> are set by a party
                      other than the website owner (such as analytics
                      providers).
                    </p>
                  </div>
                </div>
              </section>

              <section id="how-we-use-cookies" className="card legal-card">
                <div className="legal-number">02</div>
                <h2>How We Use Cookies</h2>
                <p>
                  Our Website uses a cookie consent banner to ensure you have
                  control over the cookies we place on your device. We use
                  cookies to analyze performance, track user traffic patterns,
                  and optimize your overall browsing experience.
                </p>
                <p>
                  We classify the cookies used on our Website into the following
                  categories:
                </p>

                <div className="cookie-category-grid">
                  <div className="cookie-category-card">
                    <div className="cookie-category-tag">A</div>
                    <h3>Necessary Cookies</h3>
                    <p>
                      These cookies are essential for the basic operation of the
                      Website. They enable core functionalities such as page
                      navigation and security. The Website cannot function
                      properly without these cookies.
                    </p>
                    <div className="cookie-status-pill cookie-status-on">
                      Always active
                    </div>
                  </div>

                  <div className="cookie-category-card">
                    <div className="cookie-category-tag">B</div>
                    <h3>Analytical/Performance Cookies (Planned)</h3>
                    <p>
                      We plan to use third-party analytics tools to help us
                      measure traffic, understand visitor behavior, and identify
                      areas for improvement. These cookies collect information in
                      an aggregate, anonymous form.
                    </p>

                    <div className="legal-list">
                      <div className="legal-list-item">
                        <span className="legal-bullet" />
                        <p>
                          <strong>Google Analytics:</strong> Helps us track
                          website traffic and user engagement patterns.
                        </p>
                      </div>
                      <div className="legal-list-item">
                        <span className="legal-bullet" />
                        <p>
                          <strong>Mixpanel:</strong> Helps us analyze specific
                          user actions and interactions on the Website to
                          improve performance.
                        </p>
                      </div>
                    </div>

                    <div className="cookie-status-pill cookie-status-optional">
                      Optional
                    </div>
                  </div>
                </div>

                <div className="button-row">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-open-cookie-preferences
                  >
                    Manage Cookie Preferences
                  </button>
                </div>
              </section>

              <section id="what-we-do-not-use" className="card legal-card">
                <div className="legal-number">03</div>
                <h2>What We Do NOT Use</h2>
                <p>
                  To ensure your digital privacy is highly protected, please
                  note that our Website:
                </p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Does NOT use advertising tracking pixels:</strong>{" "}
                      We do not partner with third-party advertising networks,
                      and we do not use tracking cookies to serve targeted ads.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>
                        Does NOT use social media integration cookies:
                      </strong>{" "}
                      We do not embed social media &quot;Like,&quot; &quot;Follow,&quot; or
                      sharing buttons that track your web activity across other
                      platforms.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Does NOT use authentication cookies:</strong>{" "}
                      Because we do not offer user accounts or &quot;Log-in&quot;
                      options, no cookies are used to manage user sessions or
                      accounts.
                    </p>
                  </div>
                </div>
              </section>

              <section id="managing-cookies" className="card legal-card">
                <div className="legal-number">04</div>
                <h2>Managing and Disabling Cookies</h2>
                <p>
                  You have the right to decide whether to accept or reject
                  cookies.
                </p>

                <div className="legal-list">
                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Our Cookie Banner:</strong> When you first visit
                      our Website, you will see a cookie notification banner.
                      You can use it to customize your analytical cookie
                      preferences.
                    </p>
                  </div>

                  <div className="legal-list-item">
                    <span className="legal-bullet" />
                    <p>
                      <strong>Browser Controls:</strong> Most web browsers allow
                      you to control cookies through their settings preferences.
                      You can set your browser to refuse all cookies or to
                      indicate when a cookie is being sent. Please note that if
                      you disable necessary cookies entirely, some parts of our
                      Website may not function properly.
                    </p>
                  </div>
                </div>

                <div className="button-row">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-open-cookie-preferences
                  >
                    Open Cookie Preferences
                  </button>
                </div>
              </section>

              <section id="governing-law" className="card legal-card">
                <div className="legal-number">05</div>
                <h2>Governing Law</h2>
                <p>
                  This Cookie Policy is governed by the laws of{" "}
                  <strong>India</strong> and the State of{" "}
                  <strong>Tamil Nadu</strong>.
                </p>
                <p>
                  Any disputes arising out of the use of tracking technologies
                  on this platform shall be handled exclusively by the courts in{" "}
                  <strong>Chennai, India</strong>.
                </p>
              </section>

              <section id="contact" className="card legal-card legal-contact-card">
                <div className="legal-number">06</div>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions or concerns about our use of cookies
                  or this Cookie Policy, please feel free to reach out to us:
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
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}