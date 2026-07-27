import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    image: '/img-coding.jpg',
    title: 'Automatizacion con IA',
    description: 'Eliminamos tareas repetitivas y optimizamos tus flujos de trabajo con sistemas inteligentes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    image: '/img-automation.jpg',
    title: 'Bots inteligentes',
    description: 'Asistentes personalizados que responden a clientes y automatizan atención 24/7.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    image: '/img-dashboard.jpg',
    title: 'Web y marketing',
    description: 'Mejoramos tu web, SEO y campañas digitales con análisis predictivo.',
  },
];

function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
    >
      <div className={`flex-1 ${isReversed ? 'scroll-right' : 'scroll-left'} ${isVisible ? 'scroll-visible' : ''}`}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-brand mb-6">
          {service.icon}
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
          {service.title}
        </h3>
        <p className="text-lg text-apple-gray-1 leading-relaxed max-w-lg">
          {service.description}
        </p>
      </div>
      <div className={`flex-1 w-full scroll-scale ${isVisible ? 'scroll-visible' : ''}`}>
        <div className="relative rounded-3xl overflow-hidden group">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section id="servicios" className="py-32 relative" style={{background: 'linear-gradient(180deg, #081020 0%, #0c1830 50%, #0a1428 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Servicios
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 tracking-tight`}>
            Que hacemos
          </h2>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
