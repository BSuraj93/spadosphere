import { Quicksand, Nunito as NunitoFont } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" });
const nunito = NunitoFont({ subsets: ["latin"], variable: "--font-nunito" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ backgroundColor: '#000000' }}>
      <body className={`${quicksand.variable} ${nunito.variable}`} style={{ 
        margin: 0, 
        backgroundColor: '#000000', 
        color: '#ffffff', 
        fontFamily: 'var(--font-nunito), sans-serif',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        
        {/* NAVIGATION */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 5%',
          height: '70px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          boxSizing: 'border-box'
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/Spadosphere.svg" alt="Logo" style={{ height: '24px', width: 'auto' }} />
            <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: '700', fontFamily: 'var(--font-quicksand)', letterSpacing: '-0.5px' }}>
              Spadosphere
            </span>
          </Link>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontWeight: '500', opacity: 0.7 }}>Home</Link>
            <Link href="/method" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontWeight: '500', opacity: 0.7 }}>The Spad Method</Link>
            <Link href="/about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontWeight: '500', opacity: 0.7 }}>About Us</Link>
            <Link href="/blogs" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontWeight: '500', opacity: 0.7 }}>Blogs</Link>
            <Link href="/contact" style={{ 
              backgroundColor: '#D4AF37', 
              padding: '10px 20px', 
              borderRadius: '6px', 
              textDecoration: 'none',
              color: '#000000',
              fontWeight: '700',
              fontSize: '13px'
            }}>
              Contact us
            </Link>
          </div>
        </nav>

        <main style={{ flex: '1' }}>
          {children}
        </main>

        {/* FOOTER - STYLED PER YOUR COPY */}
        <footer style={{ 
  padding: '80px 5% 40px 5%', 
  borderTop: '1px solid rgba(255,255,255,0.08)',
  backgroundColor: '#0D0D0E',
}}>
  <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
    <div>
      <h3 style={{ color: '#D4AF37', fontFamily: 'var(--font-quicksand)', fontSize: '20px', marginBottom: '8px' }}>Spadosphere</h3>
      <p style={{ color: '#F4F4F5', fontSize: '14px', opacity: 0.8 }}>Strategy, Product & Design.</p>
    </div>
    
    <div>
      <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: '#D4AF37', letterSpacing: '1px', marginBottom: '16px' }}>Social</h4>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>LinkedIn</a>
        <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Substack</a>
      </div>
    </div>
  </div>
  
  <div style={{ maxWidth: '1100px', margin: '40px auto 0 auto', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    {/* Increased visibility for copyright info */}
    <p style={{ color: '#A1A1AA', fontSize: '13px', fontWeight: '500' }}>Built in the Spadosphere. © 2026.</p>
  </div>
</footer>
      </body>
    </html>
  );
}