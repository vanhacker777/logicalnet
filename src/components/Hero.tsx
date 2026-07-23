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

            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/34620211374?text=Hola,%20me%20interesa%20vuestros%20servicios%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+34620211374"
                className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand/25 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                620 21 13 74
              </a>
              <a
                href="#contacto"
                className="border border-white/30 hover:border-white/60 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/5"
              >
                Diagnostico gratuito
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
