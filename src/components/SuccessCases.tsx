const successCases = [
  {
    company: 'TechSolutions',
    description: 'Implementamos un sistema de gestion de proyectos que redujo el tiempo de entrega en un 30%. TechSolutions ahora opera con mayor eficiencia y satisfaccion del cliente.',
    metric: '-30% tiempo de entrega',
    image: '/img-datacenter.jpg',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    company: 'FinTech Innovators',
    description: 'Desarrollamos una aplicacion personalizada que mejoro la interaccion con sus clientes. FinTech Innovators logro aumentar su base de usuarios en un 50% en solo seis meses.',
    metric: '+50% usuarios',
    image: '/img-analytics.jpg',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function SuccessCases() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold uppercase tracking-wider">
            Casos de Exito
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Casos de Exito que nos Inspiran
          </h2>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {successCases.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300`}
            >
              <div className="lg:w-2/5 relative">
                <img
                  src={item.image}
                  alt={item.company}
                  className="w-full h-56 lg:h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/40" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${item.gradient} mb-4`} />
                <h3 className="text-2xl font-bold text-white mb-3">{item.company}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>
                <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2 self-start">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-brand font-semibold text-sm">{item.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
