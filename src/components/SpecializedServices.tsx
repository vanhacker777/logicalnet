import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Marketing Digital',
    description: 'Infraestructura IT y presencia online para que tu empresa crezca.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO y Google Ads',
    description: 'Posicionamos tu web y gestionamos campañas que generan resultados.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Software a medida',
    description: 'Apps y paneles de gestión que se integran con tu forma de trabajar.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Diseño web',
    description: 'Páginas y tiendas online que convierten visitas en ventas.',
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group`}>
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-brand mb-5 group-hover:bg-brand/10 transition-colors duration-300">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
      <p className="text-apple-gray-1 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function SpecializedServices() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 relative" style={{background: 'linear-gradient(180deg, #0c1830 0%, #101e38 50%, #0e1c35 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Más servicios
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight`}>
            Todo en uno
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
