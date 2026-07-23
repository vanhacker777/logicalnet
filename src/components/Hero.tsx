export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 opacity-0 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-brand rounded-full" />
              <span className="text-white/60 text-xs tracking-widest uppercase">Logical Net</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-5 opacity-0 animate-fade-up delay-100">
              <span className="text-white">IA y automatizacion </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">
                para empresas
              </span>
            </h1>

            <p className="text-base sm:text-lg text-apple-gray-1 max-w-md mb-8 leading-relaxed font-light opacity-0 animate-fade-up delay-200">
              Digitalizamos, automatizamos y hacemos crecer tu negocio con soluciones inteligentes.
            </p>

            <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-up delay-300">
              <a
                href="https://wa.me/34620211374?text=Hola,%20me%20interesa%20vuestros%20servicios%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="tel:+34620211374"
                className="bg-white/5 hover:bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 flex items-center gap-2"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Llamar
              </a>
              <a
                href="#servicios"
                className="text-white/50 hover:text-white px-5 py-2.5 text-sm font-medium transition-colors duration-300"
              >
                Ver mas
              </a>
            </div>
          </div>

          <div className="relative opacity-0 animate-fade-up delay-300">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand/10 via-transparent to-blue-500/10 rounded-3xl blur-2xl" />
            <img
              src="/hero-ai.jpg"
              alt="IA para empresas"
              className="relative w-full h-[320px] sm:h-[400px] object-cover rounded-2xl border border-white/5"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
