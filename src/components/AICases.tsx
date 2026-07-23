const cases = [
  {
    title: 'Automatizacion de Atencion al Cliente',
    description: 'Implementamos un asistente IA que responde dudas frecuentes, gestiona citas y reduce un 70% el tiempo de atencion manual.',
    result: '+70%',
    resultLabel: 'eficiencia',
    image: '/img-ai-brain.jpg',
  },
  {
    title: 'Bot Comercial IA para Captacion',
    description: 'Creamos un bot que capta leads, califica clientes y envia propuestas automaticas, aumentando un 40% las conversiones.',
    result: '+40%',
    resultLabel: 'conversiones',
    image: '/img-cybersecurity.jpg',
  },
  {
    title: 'Optimizacion Web con IA',
    description: 'Analizamos la web con IA, corregimos errores, mejoramos SEO y generamos contenido optimizado, aumentando un 55% el trafico.',
    result: '+55%',
    resultLabel: 'trafico',
    image: '/img-dashboard.jpg',
  },
];

export default function AICases() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Casos Reales
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Resultados que hablan
          </h2>
        </div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden glass-card-hover transition-all duration-500 group"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="text-5xl sm:text-6xl font-bold text-white">{item.result}</span>
                    <span className="text-xl text-apple-gray-1 ml-2">{item.resultLabel}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
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
