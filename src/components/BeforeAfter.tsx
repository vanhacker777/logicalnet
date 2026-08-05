import { useScrollAnimation } from '../hooks/useScrollAnimation';

const comparisons = [
  {
    before: { icon: '📞', title: 'Llamadas manuales', desc: 'Tu equipo llama cliente por cliente' },
    after: { icon: '🤖', title: 'Chatbot 24/7', desc: 'IA atiende y qualifica leads automáticamente' },
  },
  {
    before: { icon: '📋', title: 'Seguimiento en papel', desc: 'Notas, Excel, Recordatorios perdidos' },
    after: { icon: '⚡', title: 'CRM automatizado', desc: 'Seguimiento programado, nada se escapa' },
  },
  {
    before: { icon: '🕐', title: 'Respuestas lentas', desc: 'Horas o días para contestar consultas' },
    after: { icon: '💬', title: 'Respuesta instantánea', desc: 'IA responde al instante, 24 horas al día' },
  },
  {
    before: { icon: '📊', title: 'Informes manuales', desc: 'Horas creando reportes cada semana' },
    after: { icon: '📈', title: 'Dashboard en tiempo real', desc: 'Métricas automáticas siempre actualizadas' },
  },
];

export default function BeforeAfter() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 50%, #ffffff 100%)'}}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px]" />
      </div>

      <div ref={titleRef} className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Transformación
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 tracking-tight`}>
            Antes vs Después de la IA
          </h2>
          <p className={`scroll-hidden scroll-hidden-delay-2 ${titleVisible ? 'scroll-visible' : ''} text-gray-600 text-lg mt-6 max-w-2xl mx-auto`}>
            Mira cómo cambia tu empresa cuando implementas inteligencia artificial.
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((item, i) => (
            <ComparisonRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({ item }: { item: typeof comparisons[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <div ref={ref} className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
        {/* Before */}
        <div className="glass-card-light rounded-2xl p-6 sm:p-8 border border-gray-200 bg-red-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500/30" />
          <span className="text-red-400/60 text-xs font-medium uppercase tracking-widest mb-3 block">Antes</span>
          <div className="flex items-start gap-4">
            <span className="text-3xl">{item.before.icon}</span>
            <div>
              <h3 className="text-gray-900 font-bold text-lg">{item.before.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.before.desc}</p>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand/20 border border-brand/30 items-center justify-center z-10">
          <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        {/* After */}
        <div className="glass-card-light rounded-2xl p-6 sm:p-8 border border-gray-200 bg-green-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-green-500/30" />
          <span className="text-green-400/60 text-xs font-medium uppercase tracking-widest mb-3 block">Después</span>
          <div className="flex items-start gap-4">
            <span className="text-3xl">{item.after.icon}</span>
            <div>
              <h3 className="text-gray-900 font-bold text-lg">{item.after.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{item.after.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
