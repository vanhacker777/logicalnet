const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Agencia Marketing Digital Madrid',
    description: 'Desde la infraestructura IT hasta su presencia online, nos encargamos de todo para que su empresa crezca sin complicaciones. Nos especializamos en tecnologias avanzadas (IA, automatizacion) para ofrecer una clara ventaja sobre sus competidores.',
    link: '#',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'SEO local y campanas en Google Ads',
    description: 'Aparece cuando tus clientes te buscan. Posicionamos tu web en Google con SEO local y gestionamos campanas de Google Ads que generan resultados reales. Tu decides el presupuesto, nosotros lo convertimos en clientes.',
    features: ['Auditoria SEO gratuita', 'Campanas segmentadas por zona y perfil', 'Informes mensuales con resultados'],
    link: '#',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    title: 'Desarrollo de apps y software a medida',
    description: '¿Necesitas una app para fidelizar clientes, gestionar reservas o automatizar procesos? Desarrollamos soluciones a medida que se integran con tu forma de trabajar y te hacen ganar tiempo.',
    features: ['Apps moviles y web personalizadas', 'Paneles de gestion intuitivos', 'Escalables y seguras'],
    link: '#',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Diseno web y tiendas online',
    description: 'Creamos paginas web profesionales y tiendas online que atraen clientes, posicionan en Google y convierten visitas en ventas. Adaptadas a tu marca, faciles de gestionar y optimizadas para moviles.',
    features: ['Diseno responsive y personalizado', 'Integracion con pasarelas de pago y stock', 'SEO local incluido desde el inicio'],
    link: '#',
  },
];

export default function SpecializedServices() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold uppercase tracking-wider">
            Especializados
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Nuestros Servicios Especializados
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-brand/10 border border-brand/30 rounded-xl flex items-center justify-center text-brand flex-shrink-0 group-hover:bg-brand/20 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm mb-4">{service.description}</p>
                  {service.features && (
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex gap-3">
                    <a href="#contacto" className="text-brand hover:text-brand-dark font-semibold text-sm transition-colors">
                      Solicitar ahora →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
