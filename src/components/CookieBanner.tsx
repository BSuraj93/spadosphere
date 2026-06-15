"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "all" | "necessary" | null;

const STORAGE_KEY = "spadosphere_cookie_consent";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [showModal, setShowModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentChoice;

    if (saved === "all" || saved === "necessary") {
      setConsent(saved);
      setAnalyticsEnabled(saved === "all");
    }

    const openHandler = () => setShowModal(true);
    window.addEventListener("open-cookie-preferences", openHandler);

    return () => {
      window.removeEventListener("open-cookie-preferences", openHandler);
    };
  }, []);

  const saveConsent = (value: Exclude<ConsentChoice, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setAnalyticsEnabled(value === "all");
    setShowModal(false);
  };

  const saveCustomPreferences = () => {
    const value: ConsentChoice = analyticsEnabled ? "all" : "necessary";
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setShowModal(false);
  };

  if (!mounted) return null;

  return (
    <>
      {!consent && (
        <div
          className="cookie-banner-wrap"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
        >
          <div className="cookie-banner">
            <div className="cookie-copy">
              <div className="cookie-eyebrow">Cookie Preferences</div>
              <h3>We use cookies to keep the experience clear and useful.</h3>
              <p>
                Necessary cookies help the website function properly. With your
                permission, we may also use analytics cookies to understand how
                visitors use the site. Read more in our{" "}
                <Link href="/cookies" className="link-text">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="link-text">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="cookie-actions">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setShowModal(true)}
              >
                Manage
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => saveConsent("necessary")}
              >
                Necessary only
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => saveConsent("all")}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="cookie-modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Manage cookie preferences"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cookie-modal-head">
              <div>
                <div className="cookie-eyebrow">Manage Preferences</div>
                <h3>Your cookie settings</h3>
              </div>
              <button
                type="button"
                className="cookie-close"
                onClick={() => setShowModal(false)}
                aria-label="Close cookie preferences"
              >
                ×
              </button>
            </div>

            <div className="cookie-pref-list">
              <div className="cookie-pref-card">
                <div className="cookie-pref-top">
                  <div>
                    <h4>Necessary cookies</h4>
                    <p>
                      Required for core website functions such as security,
                      navigation, and basic performance.
                    </p>
                  </div>
                  <div className="cookie-lock">Always active</div>
                </div>
              </div>

              <div className="cookie-pref-card">
                <div className="cookie-pref-top">
                  <div>
                    <h4>Analytical / performance cookies</h4>
                    <p>
                      Used to understand traffic, visitor behavior, and areas
                      for improvement. This includes planned analytics tools
                      such as Google Analytics and Mixpanel.
                    </p>
                  </div>

                  <label className="cookie-switch">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    />
                    <span className="cookie-slider" />
                  </label>
                </div>
              </div>
            </div>

            <div className="cookie-modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  setAnalyticsEnabled(false);
                  saveConsent("necessary");
                }}
              >
                Necessary only
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={saveCustomPreferences}
              >
                Save preferences
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setAnalyticsEnabled(true);
                  saveConsent("all");
                }}
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}