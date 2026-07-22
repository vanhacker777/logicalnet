export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
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

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />
              <img
                src="/hero-ai.jpg"
                alt="Inteligencia Artificial para empresas"
                className="relative rounded-2xl shadow-2xl shadow-brand/20 w-full h-auto object-cover border border-white/10"
              />
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">+200 empresas</p>
                  <p className="text-gray-400 text-xs">digitalizadas con IA</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-white text-sm font-semibold">+70% eficiencia</span>
                </div>
              </div>
            </div>
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
