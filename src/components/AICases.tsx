import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cases = [
  {
    title: 'Atencion al Cliente',
    description: 'Asistente IA que responde dudas, gestiona citas y reduce un 70% el tiempo manual.',
    result: '+70%',
    resultLabel: 'eficiencia',
    image: '/img-ai-brain.jpg',
  },
  {
    title: 'Captacion de Leads',
    description: 'Bot que capta, califica clientes y envia propuestas automaticas.',
    result: '+40%',
    resultLabel: 'conversiones',
    image: '/img-cybersecurity.jpg',
  },
  {
    title: 'Optimizacion Web',
    description: 'IA que analiza, corrige errores y genera contenido optimizado.',
    result: '+55%',
    resultLabel: 'trafico',
    image: '/img-dashboard.jpg',
  },
];

function CaseItem({ item }: { item: typeof cases[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} glass-card rounded-3xl overflow-hidden glass-card-hover transition-all duration-500 group`}>
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
  );
}

export default function AICases() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Resultados
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight`}>
            Que hablan
          </h2>
        </div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <CaseItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
