import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);

    checkDesktop();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkDesktop);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkDesktop);
    };
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Soporte IT', href: '/soporte' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  ];

  return (
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50}}>
      {/* Top Bar */}
      <div style={{
        background: '#0a1628',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '0.5rem 0',
        fontSize: '0.75rem',
      }}>
        <div style={{maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'rgba(255,255,255,0.7)'}}>
            <a href="tel:+34601475239" style={{display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'inherit', textDecoration: 'none', transition: 'color 0.2s'}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              <svg style={{width: '0.875rem', height: '0.875rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              601 475 239
            </a>
            <span style={{color: 'rgba(255,255,255,0.2)'}}>|</span>
            <a href="mailto:info@logicalnet.es" style={{color: 'inherit', textDecoration: 'none', transition: 'color 0.2s'}}
              onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              info@logicalnet.es
            </a>
            <span style={{color: 'rgba(255,255,255,0.2)'}}>|</span>
            <span>Lun-Vie 9:00-18:00 · Soporte 24/7</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <Link to="/contacto" style={{
              background: 'linear-gradient(135deg, #2997ff, #0077ed)',
              color: 'white',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.7rem',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>
              Diagnóstico GRATIS
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s',
      }}>
        <div style={{maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem'}}>
            {/* Logo */}
            <Link to="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
              <img src="/logo.png" alt="Logical Net" style={{height: '2.25rem', width: 'auto'}} />
              <span style={{fontSize: '1.25rem', fontWeight: 700, color: '#0a1628', letterSpacing: '-0.02em'}}>
                Logical<span style={{color: '#2997ff'}}>Net</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            {isDesktop ? (
              <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    style={{color: '#374151', fontSize: '0.9rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {/* CTA Buttons */}
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              {isDesktop ? (
                <>
                  <Link
                    to="/contacto"
                    style={{
                      color: '#374151',
                      border: '1px solid #e5e7eb',
                      padding: '0.625rem 1.25rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {e.currentTarget.style.borderColor = '#2997ff'; e.currentTarget.style.color = '#2997ff'}}
                    onMouseLeave={(e) => {e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#374151'}}
                  >
                    Diagnóstico Gratis
                  </Link>
                  <a
                    href="tel:+34601475239"
                    style={{
                      background: '#25d366',
                      color: 'white',
                      padding: '0.625rem 1.25rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#20bd5a'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#25d366'}
                  >
                    <svg style={{width: '1rem', height: '1rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Llamar
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="tel:+34601475239"
                    style={{
                      background: '#25d366',
                      color: 'white',
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                    }}
                  >
                    <svg style={{width: '1.125rem', height: '1.125rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </a>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{color: '#374151', padding: '0.5rem'}}
                  >
                    <svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && !isDesktop && (
        <div style={{
          background: 'white',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        }}>
          <div style={{padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                style={{color: '#374151', fontSize: '1rem', fontWeight: 500, textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid #f3f4f6'}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              style={{
                background: '#25d366',
                color: 'white',
                textAlign: 'center',
                padding: '0.875rem',
                borderRadius: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                marginTop: '0.5rem',
              }}
            >
              Diagnóstico Gratis
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
