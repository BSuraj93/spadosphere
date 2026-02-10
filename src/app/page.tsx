import Link from 'next/link';

export default function Home() {
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
    textAlign: 'center' as const // Forced center for consistency
  };

  const centerHeadingStyle = {
    fontSize: '42px',
    fontFamily: 'var(--font-quicksand)',
    lineHeight: 1.2,
    textAlign: 'center' as const,
    marginBottom: '48px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section style={{ ...sectionPadding, textAlign: 'center', paddingTop: '180px', paddingBottom: '120px' }}>
        <div style={container}>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 84px)', fontFamily: 'var(--font-quicksand)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
            From Zero to <br/> <span style={{ color: '#D4AF37' }}>Minimum Lovable Product.</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#A1A1AA', maxWidth: '750px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
            Founders bring the vision. We provide the <span style={{ color: '#ffffff', fontWeight: '500' }}>Spad</span> - the Strategy and Product Design atmosphere needed to hit the market with impact. We are your Fractional Chief of Staff, turning founder-anxiety into market-readiness.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#problem-space" style={{ backgroundColor: '#D4AF37', color: '#000000', padding: '16px 32px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '15px' }}>
              Enter the Atmosphere
            </a>
            <Link href="/method" style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', fontSize: '15px' }}>
              View Our Method
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM SPACE (VISCOSITY) */}
      <section id="problem-space" style={{ ...sectionPadding, backgroundColor: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={container}>
          <span style={labelStyle}>Section 01 — The Problem Space</span>
          <h2 style={centerHeadingStyle}>
            Founders shouldn't <br/> have to do everything.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
            <p style={{ color: '#A1A1AA', fontSize: '18px', lineHeight: 1.7 }}>
              Most early-stage startups fail in the <span style={{ color: '#ffffff', fontWeight: '600' }}>"viscosity"</span> of the build. You’re juggling GTM strategy, investor decks, and UI/UX wireframes while trying to keep the vision alive.
            </p>
            <p style={{ fontSize: '20px', fontWeight: 300, color: '#ffffff', borderLeft: '2px solid #D4AF37', paddingLeft: '24px' }}>
              <strong style={{ color: '#D4AF37', display: 'block', fontSize: '14px', letterSpacing: '1px', marginBottom: '8px' }}>THE SPAD SOLUTION</strong>
              We remove the friction. By integrating Strategy (Sp) and Product Design (ad), we create an Atmosphere where your product doesn't just function - it thrives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE CORE PILLARS */}
      <section style={sectionPadding}>
        <div style={container}>
          <span style={labelStyle}>Section 02 — The Core Pillars</span>
          <h2 style={centerHeadingStyle}>The "Spad" Breakdown</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {/* Pillar 1 */}
            <div style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', background: '#161617' }}>
              <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '1px', marginBottom: '12px' }}>STRATEGY (THE BRAIN)</h4>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Market-First Thinking.</h3>
              <p style={{ color: '#A1A1AA', fontSize: '15px', lineHeight: 1.6 }}>We define your GTM, refine your value proposition, and map out the roadmap. We don’t just build features; we build a business case.</p>
            </div>
            {/* Pillar 2 */}
            <div style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', background: '#161617' }}>
              <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '1px', marginBottom: '12px' }}>PRODUCT DESIGN (THE HEART)</h4>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Aesthetic Integrity.</h3>
              <p style={{ color: '#A1A1AA', fontSize: '15px', lineHeight: 1.6 }}>Led by world-class design expertise, we craft interfaces that users love to touch. We move past "Viable" and straight to "Lovable."</p>
            </div>
            {/* Pillar 3 */}
            <div style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', background: '#161617' }}>
              <h4 style={{ color: '#D4AF37', fontSize: '11px', letterSpacing: '1px', marginBottom: '12px' }}>FOUNDER’S OFFICE (THE HANDS)</h4>
              <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Fractional Chief of Staff.</h3>
              <p style={{ color: '#A1A1AA', fontSize: '15px', lineHeight: 1.6 }}>Consider us your tactical partners. We manage the timelines, the "viscosity," and the operational hurdles so you can focus on being the Founder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE PHILOSOPHY */}
      <section style={{ ...sectionPadding, backgroundColor: 'rgba(212, 175, 55, 0.03)', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
        <div style={{ ...container, textAlign: 'center', maxWidth: '850px' }}>
          <span style={labelStyle}>Section 03 — The Philosophy</span>
          <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Why an MLP? Because "Viable" is no longer enough.</h2>
          <p style={{ fontSize: '19px', color: '#A1A1AA', lineHeight: 1.7 }}>
            In today's market, users don't just want a product that works; they want a product that resonates. The Spadosphere is where your technical requirements meet human emotion. We help you leave behind the "worry" and launch a product that people actually talk about.
          </p>
        </div>
      </section>

      {/* 5. THE DUO ADVANTAGE */}
      <section style={sectionPadding}>
        <div style={{ ...container, textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Two Disciplines. One Atmosphere.</h2>
          <p style={{ fontSize: '18px', color: '#A1A1AA', maxWidth: '700px', margin: '0 auto' }}>
            Spadosphere is powered by a unique synergy of Product Management strategy and high-fidelity Product Design. No hand-off friction. No lost-in-translation. Just a seamless path to GTM.
          </p>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section style={{ ...sectionPadding, backgroundColor: '#161617', textAlign: 'center' }}>
        <div style={container}>
          <h2 style={{ fontSize: '52px', fontWeight: 700, marginBottom: '12px' }}>Ready to clear the air?</h2>
          <p style={{ fontSize: '18px', color: '#A1A1AA', marginBottom: '32px' }}>Stop worrying about the "how" and start focusing on the "why." Let's build your Minimum Lovable Product together.</p>
          <Link href="/contact" style={{ backgroundColor: '#ffffff', color: '#000000', padding: '18px 40px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none', fontSize: '16px' }}>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}