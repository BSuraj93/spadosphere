export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D0D0E', padding: '100px 5% 40px 5%', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '100px' }}>
        <div>
          <span style={fLabel}>Navigation</span>
          <a href="/" style={fLink}>Home</a>
          <a href="/method" style={fLink}>The Method</a>
        </div>
        <div>
          <span style={fLabel}>Social</span>
          <a href="#" style={fLink}>LinkedIn</a>
        </div>
        <div>
          <span style={fLabel}>Contact</span>
          <p style={{ color: '#fff' }}>hello@spadosphere.com</p>
        </div>
      </div>
      
      {/* Expanded Wordmark */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
        <h1 style={{ fontSize: 'clamp(40px, 18vw, 250px)', fontWeight: 900, color: 'rgba(255,255,255,0.03)', textAlign: 'center', margin: 0, letterSpacing: '-0.05em' }}>
          SPADOSPHERE
        </h1>
      </div>
    </footer>
  );
}

const fLabel = { color: '#D4AF37', fontSize: '12px', fontWeight: '800', display: 'block', marginBottom: '20px' };
const fLink = { color: '#A1A1AA', display: 'block', textDecoration: 'none', marginBottom: '12px' };