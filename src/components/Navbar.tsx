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
    { label: 'IA & Automatización', href: '/#servicios' },
    { label: 'Desarrollo Web', href: '/#proyectos' },
    { label: 'Soporte IT', href: '/#soporte' },
  ];

  const portfolioLink = { label: 'Portfolio', href: '/portfolio' };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s',
        background: scrolled ? 'rgba(10, 22, 40, 0.95)' : 'rgba(10, 22, 40, 0.6)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div style={{maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem'}}>
          <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img src="/logo.png" alt="Logical Net" style={{height: '2.5rem', width: 'auto'}} />
          </Link>

          {isDesktop ? (
            <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to={portfolioLink.href}
                style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                {portfolioLink.label}
              </Link>
              <a
                href="https://wa.me/34601475239"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#2997ff',
                  color: 'white',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#0077ed'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#2997ff'}
              >
                Contactar
              </a>
            </div>
          ) : (
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <a
                href="https://wa.me/34601475239"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#2997ff',
                  color: 'white',
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg style={{width: '1rem', height: '1rem'}} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{color: 'white', padding: '0.5rem'}}
              >
                <svg style={{width: '1.25rem', height: '1.25rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {isOpen && !isDesktop && (
        <div style={{
          background: 'rgba(10, 22, 40, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
              >
                {link.label}
              </a>
            ))}
            <Link
              to={portfolioLink.href}
              onClick={() => setIsOpen(false)}
              style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
            >
              {portfolioLink.label}
            </Link>
            <a
              href="tel:+34601475239"
              style={{
                background: '#2997ff',
                color: 'white',
                textAlign: 'center',
                padding: '0.75rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Llamar: 601 475 239
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
