'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [isMerged, setIsMerged] = useState(false);

  const sectionPadding = { paddingTop: '100px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%' };
  const container = { maxWidth: '1100px', margin: '0 auto' };
  const labelStyle = { 
    color: '#D4AF37', 
    fontSize: '12px', 
    fontWeight: '700', 
    letterSpacing: '2px', 
    textTransform: 'uppercase' as const,
    marginBottom: '16px',
    display: 'block',
    textAlign: 'center' as const
  };

  return (
    <div style={{ backgroundColor: '#0D0D0E', color: '#F4F4F5' }}>
      
      {/* 1. HERO SECTION & SYNERGY ANIMATION */}
      <section style={{ ...sectionPadding, textAlign: 'center', paddingTop: '160px' }}>
        <div style={container}>
          {/* Interactive Synergy Element */}
          <div 
            onMouseEnter={() => setIsMerged(true)}
            onMouseLeave={() => setIsMerged(false)}
            style={{ marginBottom: '40px', cursor: 'pointer', display: 'inline-block' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: isMerged ? '-20px' : '20px', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              <div style={{ ...circleStyle, border: '1px solid #D4AF37', color: '#D4AF37' }}>Sp</div>
              <div style={{ fontSize: '24px', opacity: isMerged ? 0 : 1 }}>+</div>
              <div style={{ ...circleStyle, border: '1px solid #ffffff', color: '#ffffff' }}>ad</div>
            </div>
          </div>

          <span style={labelStyle}>The Mission</span>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontFamily: 'var(--font-quicksand)', fontWeight: 700, marginBottom: '24px' }}>
            We are the <span style={{ color: '#D4AF37' }}>Spadosphere.</span>
          </h1>
          <p style={{ fontSize: '22px', color: '#A1A1AA', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            We built this because we saw too many brilliant founders drowning in the "viscosity" of product builds. We’re here to clear the air, so you can breathe, lead, and launch.
          </p>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY */}
      <section style={{ ...sectionPadding, backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ ...container, maxWidth: '800px', textAlign: 'center' }}>
          <span style={labelStyle}>Section 01 — Our Why</span>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Two Disciplines. One Shared Vision.</h2>
          <p style={{ fontSize: '18px', color: '#A1A1AA', lineHeight: 1.8, marginBottom: '20px' }}>
            Spadosphere didn't start in a boardroom; it started with a realization. Startups often fail not because the idea is bad, but because the execution is fragmented. You hire a strategist who doesn't understand design, or a designer who doesn't understand the business model.
          </p>
          <p style={{ fontSize: '18px', color: '#A1A1AA', lineHeight: 1.8 }}>
            We decided to bridge that gap. By combining high-level Product Management & GTM Strategy with world-class Product Design, we created a <strong style={{ color: '#ffffff' }}>"Founder’s Office"</strong> that speaks both languages fluently.
          </p>
        </div>
      </section>

      {/* 3. MEET THE DUO (SPLIT SCREEN) */}
      <section style={{ ...sectionPadding }}>
        <div style={container}>
          <span style={labelStyle}>Section 02 — The Duo</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginTop: '40px' }}>
            
            {/* Strategist Profile */}
            <div style={profileCardStyle}>
              <div style={imagePlaceholder}>[Your Photo: The Strategist]</div>
              <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '2px', marginBottom: '8px' }}>STRATEGY & PRODUCT MANAGEMENT</h4>
              <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>[Your Name]</h3>
              <p style={{ fontStyle: 'italic', color: '#A1A1AA', marginBottom: '16px' }}>"The North Star"</p>
              <p style={{ color: '#A1A1AA', lineHeight: 1.6, fontSize: '15px' }}>
                With a background in navigating the complex waters of product management and GTM strategy, [Your Name] focuses on the "Why" and the "How." He’s the one who ensures the roadmap leads to a market win, handling the operational heavy lifting so founders don't have to.
              </p>
            </div>

            {/* Designer Profile */}
            <div style={profileCardStyle}>
              <div style={imagePlaceholder}>[Sister's Photo: The Designer]</div>
              <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '2px', marginBottom: '8px' }}>PRODUCT DESIGN & UX</h4>
              <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>[Sister's Name]</h3>
              <p style={{ fontStyle: 'italic', color: '#A1A1AA', marginBottom: '16px' }}>"The Soul of the Product"</p>
              <p style={{ color: '#A1A1AA', lineHeight: 1.6, fontSize: '15px' }}>
                A master of visual storytelling and user experience, [Sister's Name] turns abstract strategy into "Lovable" reality. She believes that design isn't just how it looks, but how it builds trust with the user from the very first click.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE PHILOSOPHY */}
      <section style={{ ...sectionPadding, backgroundColor: '#161617', textAlign: 'center' }}>
        <div style={{ ...container, maxWidth: '850px' }}>
          <span style={labelStyle}>Section 03 — The Philosophy</span>
          <h2 style={{ fontSize: '42px', marginBottom: '24px' }}>We aren't just vendors. <br/> We’re your <span style={{ color: '#D4AF37' }}>Second Brain.</span></h2>
          <p style={{ fontSize: '20px', color: '#A1A1AA', lineHeight: 1.7 }}>
            Hiring an agency often feels like adding more management to your plate. Hiring Spadosphere feels like taking it off. As your Fractional Chief of Staff, we sit in the trenches with you. We manage the timelines, filter the noise, and ensure that when you hit the market, you aren't just launching—you're landing.
          </p>
        </div>
      </section>

      {/* 5. OUR VALUES */}
      <section style={sectionPadding}>
        <div style={container}>
          <span style={labelStyle}>Section 04 — The Atmosphere</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div style={valueBoxStyle}>
              <h4 style={valueTitle}>Radical Candor</h4>
              <p style={valueText}>We tell you what your product needs to hear, not just what you want to hear.</p>
            </div>
            <div style={valueBoxStyle}>
              <h4 style={valueTitle}>Aesthetic Integrity</h4>
              <p style={valueText}>We don't ship ugly products. Period. Design is a promise of quality.</p>
            </div>
            <div style={valueBoxStyle}>
              <h4 style={valueTitle}>Speed Over Viscosity</h4>
              <p style={valueText}>In early stages, momentum is your only real currency. We keep you moving.</p>
            </div>
            <div style={valueBoxStyle}>
              <h4 style={valueTitle}>Lovability</h4>
              <p style={valueText}>If a user doesn't smile within the first 30 seconds, we haven't done our job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section style={{ ...sectionPadding, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={container}>
          <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '32px' }}>Let’s add some "Spad" <br/> to your startup.</h2>
          <Link href="/contact" style={{ backgroundColor: '#D4AF37', color: '#000000', padding: '18px 48px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}

// Styles
const circleStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: '700',
  fontFamily: 'var(--font-quicksand)',
  transition: 'all 0.6s ease'
};

const profileCardStyle = {
  backgroundColor: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '24px',
  padding: '40px',
  textAlign: 'left' as const
};

const imagePlaceholder = {
  width: '100%',
  height: '350px',
  backgroundColor: '#1C1C1E',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#444',
  fontSize: '14px',
  marginBottom: '24px',
  border: '1px dashed rgba(255,255,255,0.1)'
};

const valueBoxStyle = {
  padding: '30px',
  border: '1px solid rgba(212, 175, 55, 0.1)',
  borderRadius: '16px',
  background: 'linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)'
};

const valueTitle = {
  color: '#ffffff',
  fontSize: '18px',
  marginBottom: '10px'
};

const valueText = {
  color: '#A1A1AA',
  fontSize: '14px',
  lineHeight: '1.5'
};