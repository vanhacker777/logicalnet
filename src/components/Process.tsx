const steps = [
  {
    number: '01',
    title: 'Diagnostico IA gratuito',
    description: 'Analizamos tus procesos, tu web y tus necesidades para detectar oportunidades reales de automatizacion y mejora.',
  },
  {
    number: '02',
    title: 'Propuesta personalizada',
    description: 'Disenamos una solucion a medida: automatizaciones, asistentes IA, integraciones o mejoras en tu web.',
  },
  {
    number: '03',
    title: 'Implementacion rapida',
    description: 'Desarrollamos y configuramos la solucion IA en tu empresa con el minimo impacto y maxima eficiencia.',
  },
  {
    number: '04',
    title: 'Resultados y optimizacion',
    description: 'Medimos el impacto, optimizamos y ampliamos la solucion para que tu negocio siga creciendo.',
  },
];

export default function Process() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Proceso
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Como trabajamos
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-brand text-sm font-bold relative z-10">
                  {step.number}
                </div>
                <div className="flex-1 glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300">
                  <span className="md:hidden text-brand text-sm font-bold block mb-2">Paso {step.number}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-apple-gray-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
