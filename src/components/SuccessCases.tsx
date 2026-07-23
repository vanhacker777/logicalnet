const successCases = [
  {
    company: 'TechSolutions',
    description: 'Implementamos un sistema de gestion de proyectos que redujo el tiempo de entrega en un 30%.',
    metric: '-30%',
    metricLabel: 'tiempo de entrega',
    image: '/img-ai-brain.jpg',
  },
  {
    company: 'FinTech Innovators',
    description: 'Desarrollamos una aplicacion personalizada que aumento su base de usuarios en un 50% en solo seis meses.',
    metric: '+50%',
    metricLabel: 'usuarios',
    image: '/img-cybersecurity.jpg',
  },
];

export default function SuccessCases() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Casos de Exito
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Que nos inspiran
          </h2>
        </div>

        <div className="space-y-6">
          {successCases.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden glass-card-hover transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.company}
                    className="w-full h-56 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white">{item.metric}</span>
                    <span className="text-lg text-apple-gray-1 ml-2">{item.metricLabel}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.company}</h3>
                  <p className="text-apple-gray-1 leading-relaxed text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
