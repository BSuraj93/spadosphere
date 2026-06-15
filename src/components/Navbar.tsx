// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Methodology" },
  { href: "/about", label: "About" },
];

const resourceLinks = [
  { href: "/our-work", label: "Our work" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeMobile = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-left" onClick={closeMobile}>
          <img src="/logo.svg" alt="Spadosphere" className="nav-logo" />

          <div>
            <div className="nav-wordmark">Spadosphere</div>
            <div className="nav-tagline">Strategy · Product · Design</div>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              data-active={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-link nav-dropdown-trigger"
              data-active={resourceLinks.some((link) => isActive(link.href))}
              aria-haspopup="true"
            >
              Resources
              <span className="nav-dropdown-chevron" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-menu">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-dropdown-link"
                  data-active={isActive(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className="nav-cta btn btn-primary">
            Contact Us
          </Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="nav-toggle-bar" />
          <div className="nav-toggle-bar" />
        </button>
      </div>

      {open && (
        <div className="nav-mobile-sheet">
          <div className="nav-mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-mobile-link"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
            <div className="nav-mobile-group">
              <div className="nav-mobile-group-label">Resources</div>
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-mobile-link nav-mobile-sublink"
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="nav-mobile-link"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
