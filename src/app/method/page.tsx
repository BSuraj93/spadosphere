'use client'; // Required for the hover interactions

import React, { useState } from 'react';
import Link from 'next/link';

export default function MethodPage() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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
      
      {/* 1. THE INTRO */}
      <section style={{ ...sectionPadding, textAlign: 'center', paddingTop: '180px' }}>
        <div style={container}>
          <span style={labelStyle}>The Process</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontFamily: 'var(--font-quicksand)', fontWeight: 700, marginBottom: '24px' }}>
            We don’t do <br/> <span style={{ color: '#D4AF37' }}>"Random Acts of Building."</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#A1A1AA', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Most agencies take an order and build it. We take a vision and pressure-test it. The Spad Method is a symbiotic loop of Strategy (Sp) and Product Design (ad) designed to eliminate the "viscosity" that kills early-stage startups.
          </p>
        </div>
      </section>

      {/* 2. THE ATMOSPHERE LOOP (STEPPER) */}
      <section style={sectionPadding}>
        <div style={{ ...container, position: 'relative' }}>
          <span style={labelStyle}>Section 01 — The Atmosphere Loop</span>
          
          {/* The Connecting Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '250px', 
            bottom: '150px', 
            width: '1px', 
            backgroundColor: 'rgba(212, 175, 55, 0.2)',
            zIndex: 0
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 1 }}>
            
            {/* Step 01 */}
            <div 
              onMouseEnter={() => setHoveredStep(1)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: hoveredStep === 1 ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease',
                flexDirection: 'column'
              }}
            >
              <div style={stepCircleStyle(hoveredStep === 1)}>01</div>
              <div style={stepCardStyle}>
                <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '1px', marginBottom: '8px' }}>STRATEGIC DECONSTRUCTION (THE 'SP')</h4>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Strategy isn’t a PDF; it’s a Compass.</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', textAlign: 'left' }}>
                  <p style={stepTextBody}><strong>The GTM Audit:</strong> Who are we fighting? Why do we win? <br/><strong>Roadmap Definition:</strong> What is the 20% of the product that will provide 80% of the value?</p>
                  <p style={{ ...stepTextBody, borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>OUTCOME:</span><br/> A lean, mean strategic blueprint that ensures we aren't building a product nobody wants.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div 
              onMouseEnter={() => setHoveredStep(2)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={stepCircleStyle(hoveredStep === 2)}>02</div>
              <div style={stepCardStyle}>
                <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '1px', marginBottom: '8px' }}>HIGH-FIDELITY CRAFT (THE 'AD')</h4>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Design is the first thing your users "feel."</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', textAlign: 'left' }}>
                  <p style={stepTextBody}><strong>The MLP Identity:</strong> Moving beyond a "Functional" MVP to a "Lovable" Product.<br/><strong>UX Orchestration:</strong> Mapping every click to a user's emotional "win."</p>
                  <p style={{ ...stepTextBody, borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>OUTCOME:</span><br/> A high-fidelity prototype that looks like a Series B product on a Pre-Seed budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div 
              onMouseEnter={() => setHoveredStep(3)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={stepCircleStyle(hoveredStep === 3)}>03</div>
              <div style={stepCardStyle}>
                <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '1px', marginBottom: '8px' }}>CHIEF OF STAFF INTEGRATION</h4>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>We close the gap between "Doing" and "Leading."</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', textAlign: 'left' }}>
                  <p style={stepTextBody}><strong>The Viscosity Filter:</strong> We manage project timelines, technical trade-offs, and launch prep.<br/><strong>Founder Focus:</strong> We handle the "how" so you can focus on fundraising.</p>
                  <p style={{ ...stepTextBody, borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '20px' }}>
                    <span style={{ color: '#ffffff', fontWeight: '600' }}>OUTCOME:</span><br/> A smooth, controlled GTM launch.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE MANIFESTO */}
      <section style={{ ...sectionPadding, backgroundColor: '#161617' }}>
        <div style={{ ...container, maxWidth: '800px', textAlign: 'center' }}>
          <span style={labelStyle}>Section 02 — The MLP Manifesto</span>
          <h2 style={{ fontSize: '36px', marginBottom: '32px' }}>Why we build MLPs, not just MVPs.</h2>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={manifestoItem}>
              <strong style={{ color: '#D4AF37', fontSize: '18px' }}>The "Viable" Trap</strong>
              <p style={{ color: '#A1A1AA', marginTop: '8px' }}>In 2026, "Viable" is the floor. It’s the bare minimum. It doesn't get you noticed, and it doesn't get you loved. It's forgettable.</p>
            </div>
            <div style={manifestoItem}>
              <strong style={{ color: '#D4AF37', fontSize: '18px' }}>The "Lovable" Advantage</strong>
              <p style={{ color: '#A1A1AA', marginTop: '8px' }}>A Minimum Lovable Product focuses on the emotional hook. It creates advocates, not just users. We build products people actually want to tell their friends about.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE DUO DYNAMIC */}
      <section style={sectionPadding}>
        <div style={{ ...container, textAlign: 'center', maxWidth: '700px' }}>
          <span style={labelStyle}>The Secret Sauce</span>
          <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Why the "Sp" and the "ad" live under one roof.</h2>
          <p style={{ fontSize: '18px', color: '#A1A1AA', lineHeight: 1.7 }}>
            Usually, you hire a strategist, and then you have to explain that strategy to a designer. Things get lost. Friction happens. In the Spadosphere, the strategy and the design are born at the same table. It’s a seamless transition from <span style={{ color: '#ffffff' }}>"What should we do?"</span> to <span style={{ color: '#D4AF37' }}>"Look how beautiful this is."</span>
          </p>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section style={{ ...sectionPadding, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={container}>
          <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>Ready to see the Method in action?</h2>
          <p style={{ fontSize: '18px', color: '#A1A1AA', marginBottom: '40px' }}>Let’s look at your current roadmap and see where we can add some Spadosphere clarity.</p>
          <Link href="/contact" style={{ backgroundColor: '#D4AF37', color: '#000000', padding: '18px 48px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}

// Styles for the Stepper
const stepCircleStyle = (isActive: boolean) => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: isActive ? '2px solid #D4AF37' : '2px solid rgba(255,255,255,0.1)',
  backgroundColor: isActive ? '#D4AF37' : '#0D0D0E',
  color: isActive ? '#000000' : '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '18px',
  marginBottom: '20px',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: isActive ? '0 0 20px rgba(212, 175, 55, 0.4)' : 'none',
  zIndex: 2
});

const stepCardStyle = {
  backgroundColor: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '40px',
  width: '100%',
  maxWidth: '850px',
  textAlign: 'center' as const,
  backdropFilter: 'blur(10px)'
};

const stepTextBody = {
  fontSize: '15px',
  color: '#A1A1AA',
  lineHeight: 1.6
};

const manifestoItem = {
  padding: '30px',
  borderLeft: '2px solid rgba(212, 175, 55, 0.3)',
  backgroundColor: 'rgba(255,255,255,0.02)',
  borderRadius: '0 12px 12px 0'
};