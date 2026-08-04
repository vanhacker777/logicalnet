import { useScrollAnimation } from '../hooks/useScrollAnimation';

const successCases = [
  {
    company: 'TechSolutions',
    description: 'Sistema de gestión que redujo el tiempo de entrega en un 30%.',
    metric: '-30%',
    metricLabel: 'tiempo de entrega',
    image: '/img-ai-brain.jpg',
  },
  {
    company: 'FinTech Innovators',
    description: 'App personalizada que aumentó usuarios en un 50% en seis meses.',
    metric: '+50%',
    metricLabel: 'usuarios',
    image: '/img-cybersecurity.jpg',
  },
];

function CaseItem({ item }: { item: typeof successCases[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} glass-card rounded-3xl overflow-hidden glass-card-hover transition-all duration-500 group`}>
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
            <span className="text-lg text-white/80 ml-2">{item.metricLabel}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{item.company}</h3>
          <p className="text-white/80 leading-relaxed text-lg">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessCases() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 relative" style={{background: 'linear-gradient(180deg, #0e1c35 0%, #0a1428 50%, #081020 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Casos de Éxito
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight`}>
            Qué inspiran
          </h2>
        </div>

        <div className="space-y-6">
          {successCases.map((item, index) => (
            <CaseItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
