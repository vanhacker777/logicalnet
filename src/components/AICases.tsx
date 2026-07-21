const cases = [
  {
    title: 'Automatizacion de Atencion al Cliente',
    description: 'Implementamos un asistente IA que responde dudas frecuentes, gestiona citas y reduce un 70% el tiempo de atencion manual.',
    result: '+70% eficiencia',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    title: 'Bot Comercial IA para Captacion',
    description: 'Creamos un bot que capta leads, califica clientes y envia propuestas automaticas, aumentando un 40% las conversiones.',
    result: '+40% conversiones',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    title: 'Optimizacion Web con IA',
    description: 'Analizamos la web con IA, corregimos errores, mejoramos SEO y generamos contenido optimizado, aumentando un 55% el trafico.',
    result: '+55% trafico',
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

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300`}
            >
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{item.description}</p>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-white font-semibold text-sm">Resultado: {item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
