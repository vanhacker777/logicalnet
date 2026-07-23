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
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="text-left">
            <span className="text-brand text-sm font-semibold uppercase tracking-wider">
              Nuestro Proceso
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              Como trabajamos con IA
            </h2>
            <p className="text-gray-400 text-lg">
              Un proceso claro, rapido y orientado a resultados para transformar tu empresa con Inteligencia Artificial
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/img-robot.jpg"
              alt="Proceso de trabajo con IA"
              className="w-full h-64 lg:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-b from-brand/10 to-transparent border border-brand/20 rounded-2xl p-6 h-full hover:border-brand/50 transition-all duration-300">
                <span className="text-4xl font-black text-brand/20 block mb-3">{step.number}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-brand/40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
