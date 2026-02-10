'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    startup: '',
    stage: 'Ideation',
    viscosity: '',
    goal: ''
  });

  const sectionPadding = { paddingTop: '100px', paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%' };
  const container = { maxWidth: '900px', margin: '0 auto' };
  const inputStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    padding: '16px 0',
    color: '#ffffff',
    fontSize: '18px',
    outline: 'none',
    marginBottom: '40px',
    transition: 'border-color 0.3s ease'
  };

  const labelStyle = {
    fontSize: '11px',
    color: '#D4AF37',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
    fontWeight: '700'
  };

  return (
    <div style={{ backgroundColor: '#0D0D0E', color: '#F4F4F5' }}>
      
      {/* 1. HERO (THE INVITATION) */}
      <section style={{ ...sectionPadding, textAlign: 'center', paddingTop: '180px' }}>
        <div style={container}>
          <span style={{ color: '#D4AF37', fontWeight: '700', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Apply to the Atmosphere
          </span>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)', fontFamily: 'var(--font-quicksand)', fontWeight: 700, margin: '16px 0 24px 0' }}>
            Ready to leave the <br/> <span style={{ color: '#D4AF37' }}>viscosity</span> behind?
          </h1>
          <p style={{ fontSize: '19px', color: '#A1A1AA', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            We only take on a select number of founders at a time to ensure your product gets the "Spad" focus it deserves. Tell us where you are, and let’s see if we’re the right atmosphere for your launch.
          </p>
        </div>
      </section>

      {/* 2. THE INTAKE FORM */}
      <section style={{ paddingBottom: '100px', paddingLeft: '5%', paddingRight: '5%' }}>
        <div style={{ ...container, backgroundColor: '#161617', padding: '60px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <form>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <label style={labelStyle}>Name & Role</label>
                <input style={inputStyle} placeholder="Jane Doe, Founder/CEO" />
              </div>
              <div>
                <label style={labelStyle}>Startup Name & URL</label>
                <input style={inputStyle} placeholder="YourStartup.com" />
              </div>
            </div>

            <label style={labelStyle}>What stage are you in?</label>
            <select style={{ ...inputStyle, backgroundColor: '#161617', appearance: 'none' }}>
              <option>Ideation</option>
              <option>Pre-Seed</option>
              <option>Seed</option>
              <option>Stuck in the build</option>
            </select>

            <label style={labelStyle}>What is your biggest "Viscosity" right now?</label>
            <textarea style={{ ...inputStyle, height: '100px', resize: 'none' }} placeholder="e.g., I have the tech but the UI is messy, or I don't know my GTM strategy." />

            <label style={labelStyle}>The Goal: What does a "Lovable" launch look like for you?</label>
            <textarea style={{ ...inputStyle, height: '100px', resize: 'none' }} placeholder="Tell us about the dream state..." />

            <button type="button" style={{ 
              backgroundColor: '#D4AF37', 
              color: '#000000', 
              width: '100%', 
              padding: '20px', 
              borderRadius: '12px', 
              fontWeight: '700', 
              fontSize: '16px',
              cursor: 'pointer',
              border: 'none',
              marginTop: '20px'
            }}>
              Request a Strategy Audit
            </button>
          </form>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT? */}
      <section style={{ ...sectionPadding, backgroundColor: 'rgba(212, 175, 55, 0.03)' }}>
        <div style={container}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '60px' }}>What happens next?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={stepStyle}>
              <span style={stepNumber}>01</span>
              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>The Review</h4>
              <p style={{ color: '#A1A1AA', fontSize: '15px' }}>We’ll look at your challenge and see if our Strategy + Design duo is the right fit.</p>
            </div>
            <div style={stepStyle}>
              <span style={stepNumber}>02</span>
              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>The Intro Call</h4>
              <p style={{ color: '#A1A1AA', fontSize: '15px' }}>A 20-minute "No-Pitch" session to dive deeper into your roadmap and vision.</p>
            </div>
            <div style={stepStyle}>
              <span style={stepNumber}>03</span>
              <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>The Proposal</h4>
              <p style={{ color: '#A1A1AA', fontSize: '15px' }}>If there’s chemistry, we’ll outline exactly how we’ll build your MLP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SAFETY NET FAQ */}
      <section style={sectionPadding}>
        <div style={container}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '48px' }}>Common Orbit Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div style={faqCard}>
              <h5 style={{ color: '#ffffff', marginBottom: '8px' }}>Do you work with non-technical founders?</h5>
              <p style={{ color: '#A1A1AA', fontSize: '14px' }}>Absolutely. We are your technical and strategic bridge, turning vision into code and design.</p>
            </div>
            <div style={faqCard}>
              <h5 style={{ color: '#ffffff', marginBottom: '8px' }}>How long does a typical sprint take?</h5>
              <p style={{ color: '#A1A1AA', fontSize: '14px' }}>Usually 6 to 12 weeks from strategy to high-fidelity MLP, depending on complexity.</p>
            </div>
            <div style={faqCard}>
              <h5 style={{ color: '#ffffff', marginBottom: '8px' }}>Are you an agency?</h5>
              <p style={{ color: '#A1A1AA', fontSize: '14px' }}>No. We are a Founder’s Office. We don't just "do tasks"; we own outcomes and skin in the game.</p>
            </div>
            <div style={faqCard}>
              <h5 style={{ color: '#ffffff', marginBottom: '8px' }}>Prefer a direct orbit?</h5>
              <p style={{ color: '#A1A1AA', fontSize: '14px' }}>
                Skip the form and find us on <a href="#" style={{ color: '#D4AF37' }}>LinkedIn</a> or <a href="#" style={{ color: '#D4AF37' }}>Twitter/X</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const stepStyle = {
  textAlign: 'center' as const,
  padding: '20px'
};

const stepNumber = {
  display: 'block',
  fontSize: '48px',
  fontWeight: '800',
  color: 'rgba(212, 175, 55, 0.2)',
  marginBottom: '10px',
  fontFamily: 'var(--font-quicksand)'
};

const faqCard = {
  padding: '24px',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.05)',
  backgroundColor: 'rgba(255,255,255,0.01)'
};