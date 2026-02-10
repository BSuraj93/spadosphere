'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 5%', position: 'fixed', width: '100%', top: 0, zIndex: 1000, backgroundColor: 'rgba(13, 13, 14, 0.8)', backdropFilter: 'blur(10px)' }}>
      <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 900, letterSpacing: '2px' }}>SPADOSPHERE</Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Desktop Links - Hidden on Mobile */}
        <div className="nav-links">
          <Link href="/method" style={linkStyle}>Method</Link>
          <Link href="/about" style={linkStyle}>About</Link>
        </div>

        {/* Contact CTA - Always Visible */}
        <Link href="/contact" className="gold-btn-ripple" style={{ padding: '10px 20px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>
          Contact Us
        </Link>

        {/* Hamburger Icon */}
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px' }}>
          <div style={{ width: '25px', height: '2px', background: '#fff' }}></div>
          <div style={{ width: '25px', height: '2px', background: '#fff' }}></div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: '#0D0D0E', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '40px', zIndex: 999 }}>
          <Link href="/method" onClick={() => setIsOpen(false)} style={{ color: '#fff', fontSize: '32px', textDecoration: 'none' }}>Method</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} style={{ color: '#fff', fontSize: '32px', textDecoration: 'none' }}>About</Link>
          <button onClick={() => setIsOpen(false)} style={{ color: '#D4AF37', border: 'none', background: 'none', fontSize: '18px' }}>Close</button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex !important; }
        }
        .nav-links { display: flex; gap: 30px; margin-right: 10px; }
      `}</style>
    </nav>
  );
}

const linkStyle = { color: '#A1A1AA', textDecoration: 'none', fontSize: '14px' };