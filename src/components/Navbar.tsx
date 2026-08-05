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
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  ];

  const faqLink = { label: 'FAQ', href: '/faq' };
  const portfolioLink = { label: 'Portfolio', href: '/portfolio' };
  const blogLink = { label: 'Blog', href: '/blog' };
  const contactLink = { label: 'Contacto', href: '/contacto' };

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
                <Link
                  key={link.href}
                  to={link.href}
                  style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to={faqLink.href}
                style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                {faqLink.label}
              </Link>
              <Link
                to={portfolioLink.href}
                style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                {portfolioLink.label}
              </Link>
              <Link
                to={blogLink.href}
                style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                {blogLink.label}
              </Link>
              <Link
                to={contactLink.href}
                style={{color: 'white', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2997ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                {contactLink.label}
              </Link>
              <a
                href="tel:+34601475239"
                style={{
                  background: '#25d366',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s',
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
                601 475 239
              </a>
            </div>
          ) : (
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <a
                href="tel:+34601475239"
                style={{
                  background: '#25d366',
                  color: 'white',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <svg style={{width: '0.875rem', height: '0.875rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                601 475 239
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
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={faqLink.href}
              onClick={() => setIsOpen(false)}
              style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
            >
              {faqLink.label}
            </Link>
            <Link
              to={portfolioLink.href}
              onClick={() => setIsOpen(false)}
              style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
            >
              {portfolioLink.label}
            </Link>
            <Link
              to={blogLink.href}
              onClick={() => setIsOpen(false)}
              style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
            >
              {blogLink.label}
            </Link>
            <Link
              to={contactLink.href}
              onClick={() => setIsOpen(false)}
              style={{color: '#86868b', fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0'}}
            >
              {contactLink.label}
            </Link>
            <a
              href="tel:+34601475239"
              style={{
                background: '#25d366',
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
