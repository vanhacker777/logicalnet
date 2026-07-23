export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 opacity-0 animate-fade-up">
          <span className="w-1.5 h-1.5 bg-brand rounded-full" />
          <span className="text-white/70 text-sm tracking-wide">Inteligencia Artificial para Empresas</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 opacity-0 animate-fade-up delay-100">
          <span className="text-white">Automatizacion y Marketing con </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">
            IA
          </span>
          <span className="text-white"> para empresas que quieren avanzar</span>
        </h1>

        <p className="text-xl sm:text-2xl text-apple-gray-1 max-w-2xl mx-auto mb-12 leading-relaxed font-light opacity-0 animate-fade-up delay-200">
          Soluciones inteligentes para digitalizar, automatizar y hacer crecer tu negocio
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
          <a
            href="https://wa.me/34620211374?text=Hola,%20me%20interesa%20vuestros%20servicios%20de%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 flex items-center gap-2.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribenos por WhatsApp
          </a>
          <a
            href="tel:+34620211374"
            className="bg-white/10 hover:bg-white/15 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 border border-white/10 hover:border-white/20 flex items-center gap-2.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            620 21 13 74
          </a>
          <a
            href="#servicios"
            className="text-white/60 hover:text-white px-6 py-3.5 text-base font-medium transition-colors duration-300 flex items-center gap-1"
          >
            Ver soluciones
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <div className="mt-20 opacity-0 animate-fade-up delay-500">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-b from-brand/20 to-transparent rounded-3xl blur-xl" />
            <img
              src="/hero-ai.jpg"
              alt="Inteligencia Artificial para empresas"
              className="relative w-full h-auto rounded-2xl border border-white/10"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
