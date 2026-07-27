import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Carlos Martín',
    role: 'CEO, ACP-SOLAR',
    text: 'Logical Net transformó completamente nuestra gestión de clientes. La app de control de energía solar que desarrollaron ha reducido nuestro tiempo administrativo un 40%.',
    metric: '-40%',
    metricLabel: 'tiempo administrativo',
    avatar: 'CM',
  },
  {
    name: 'María López',
    role: 'Directora, Dynamic Partners',
    text: 'El sistema de gestión de eventos que implementaron nos permitió escalar sin contratar más personal. Automatizaron todo el flujo de trabajo.',
    metric: '+60%',
    metricLabel: 'eficiencia',
    avatar: 'ML',
  },
  {
    name: 'Roberto Sánchez',
    role: 'Fundador, Effekt Security',
    text: 'Llevábamos años con un servidor obsoleto. Logical Net migró toda nuestra infraestructura a la nube en dos semanas. Cero downtime.',
    metric: '0',
    metricLabel: 'downtime',
    avatar: 'RS',
  },
];

function TestimonialCard({ item }: { item: typeof testimonials[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} glass-card rounded-2xl p-8 border border-white/5 hover:border-brand/20 transition-all duration-500`}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-brand font-bold text-sm">
          {item.avatar}
        </div>
        <div>
          <h4 className="text-white font-semibold">{item.name}</h4>
          <p className="text-apple-gray-1 text-sm">{item.role}</p>
        </div>
      </div>
      <p className="text-apple-gray-1 leading-relaxed mb-6 text-sm">"{item.text}"</p>
      <div className="flex items-center gap-2 pt-4 border-t border-white/5">
        <span className="text-2xl font-bold text-brand">{item.metric}</span>
        <span className="text-apple-gray-1 text-sm">{item.metricLabel}</span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 relative" style={{background: 'linear-gradient(180deg, #0c1830 0%, #101e38 50%, #0e1c35 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Testimonios
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight`}>
            Lo que dicen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
