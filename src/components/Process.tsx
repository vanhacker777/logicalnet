import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tu empresa y detectamos donde la IA puede ahorrarte tiempo y dinero.',
  },
  {
    number: '02',
    title: 'Propuesta',
    description: 'Diseñamos la solución: automatizaciones, web, app o asistente IA.',
  },
  {
    number: '03',
    title: 'Implementación',
    description: 'Desarrollamos y configuramos todo con el mínimo impacto.',
  },
  {
    number: '04',
    title: 'Resultados',
    description: 'Medimos, optimizamos y ampliamos para que sigas creciendo.',
  },
];

function StepItem({ step }: { step: typeof steps[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} flex gap-8 items-start`}>
      <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-brand text-sm font-bold relative z-10">
        {step.number}
      </div>
      <div className="flex-1 glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300">
        <span className="md:hidden text-brand text-sm font-bold block mb-2">Paso {step.number}</span>
        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
        <p className="text-apple-gray-1 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Proceso
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight`}>
            Cómo funciona
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <StepItem key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
