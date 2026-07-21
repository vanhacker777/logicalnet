export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            <span className="text-brand text-sm font-medium">Inteligencia Artificial para Empresas</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Automatizacion y Marketing con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-300">
              IA para empresas
            </span>{' '}
            que quieren avanzar
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Soluciones inteligentes para digitalizar, automatizar y hacer crecer tu negocio
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-0.5 text-center"
            >
              Solicitar diagnostico IA gratuito
            </a>
            <a
              href="#servicios"
              className="border border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white/5 text-center"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L48 108C96 96 192 72 288 66C384 60 480 72 576 78C672 84 768 84 864 78C960 72 1056 60 1152 60C1248 60 1344 72 1392 78L1440 84V120H0Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
}
