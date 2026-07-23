const cases = [
  {
    title: 'Automatizacion de Atencion al Cliente',
    description: 'Implementamos un asistente IA que responde dudas frecuentes, gestiona citas y reduce un 70% el tiempo de atencion manual.',
    result: '+70% eficiencia',
    image: '/img-datacenter.jpg',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    title: 'Bot Comercial IA para Captacion',
    description: 'Creamos un bot que capta leads, califica clientes y envia propuestas automaticas, aumentando un 40% las conversiones.',
    result: '+40% conversiones',
    image: '/img-analytics.jpg',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'Optimizacion Web con IA',
    description: 'Analizamos la web con IA, corregimos errores, mejoramos SEO y generamos contenido optimizado, aumentando un 55% el trafico.',
    result: '+55% trafico',
    image: '/img-tech.jpg',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
];

export default function AICases() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold uppercase tracking-wider">
            Casos Reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Casos Reales de IA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluciones de Inteligencia Artificial aplicadas a empresas reales que ya estan obteniendo resultados
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-0 rounded-2xl overflow-hidden border ${item.borderColor} hover:scale-[1.01] transition-all duration-300`}
            >
              <div className="flex-1 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 lg:h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent" />
              </div>
              <div className={`flex-1 bg-gradient-to-br ${item.color} p-8 sm:p-10 flex flex-col justify-center`}>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 self-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-white font-semibold text-sm">Resultado: {item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
