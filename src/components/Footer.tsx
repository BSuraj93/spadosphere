// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <div className="footer-logo-row">
            <img src="/logo.svg" alt="Spadosphere" className="footer-logo" />

            <div className="footer-wordmark">Spadosphere</div>
          </div>
          <div className="footer-tagline">Strategy · Product · Design.</div>
          <div className="footer-microcopy">
            Built in the Spadosphere. 2026.
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <div className="footer-column-title">Navigate</div>
            <Link href="/" className="footer-link">
              Home
            </Link>
            <Link href="/method" className="footer-link">
              Methodology
            </Link>
            <Link href="/about" className="footer-link">
              About
            </Link>
            <Link href="/blog" className="footer-link">
              Blog
            </Link>
            <Link href="/contact" className="footer-link">
              Contact Us
            </Link>
          </div>

          <div>
            <div className="footer-column-title">Social</div>
            <a
              href="https://www.linkedin.com/company/spadosphere"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            {/*<a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              X (Twitter)
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Facebook
            </a> */}
          </div>

          <div>
            <div className="footer-column-title">Legal</div>
            <Link href="/terms" className="footer-link">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookies" className="footer-link">
              Cookies
            </Link>
            <Link href="/privacy" className="footer-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Spadosphere India Private Limited</span>
        <span>Atmosphere for early-stage founders</span>
      </div>
    </footer>
  );
}
