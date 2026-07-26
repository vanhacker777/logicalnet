import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div ref={heroRef} className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
                <span className="text-white/60 text-xs tracking-widest uppercase">Logical Net</span>
              </div>
            </div>

            <h1 className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-5`}>
              <span className="text-white">Tu empresa merece </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">
                más
              </span>
            </h1>

            <p className={`scroll-hidden scroll-hidden-delay-2 ${isVisible ? 'scroll-visible' : ''} text-base sm:text-lg text-apple-gray-1 max-w-md mb-8 leading-relaxed font-light`}>
              Creamos webs que venden, apps a medida y automatizaciones IA que trabajan por ti 24/7.
            </p>

            <div className={`scroll-hidden scroll-hidden-delay-3 ${isVisible ? 'scroll-visible' : ''} flex flex-wrap items-center gap-4 mb-10`}>
              <a
                href="#contacto"
                className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 flex items-center gap-2"
              >
                Diagnóstico gratuito
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className={`scroll-hidden scroll-hidden-delay-4 ${isVisible ? 'scroll-visible' : ''} flex items-center gap-6`}>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">20+</span>
                <span className="text-xs text-apple-gray-1 leading-tight">años de<br/>experiencia</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">100+</span>
                <span className="text-xs text-apple-gray-1 leading-tight">proyectos<br/>entregados</span>
              </div>
            </div>
          </div>

          <div className={`scroll-scale ${isVisible ? 'scroll-visible' : ''} relative`}>
            <div className="absolute -inset-8 bg-gradient-to-br from-brand/15 via-blue-500/10 to-cyan-500/10 rounded-[2rem] blur-3xl animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-br from-brand/10 via-transparent to-blue-500/10 rounded-3xl blur-2xl" />
            <img
              src="/hero-ai.jpg"
              alt="IA para empresas"
              className="relative w-full h-[320px] sm:h-[400px] object-cover rounded-2xl border border-white/5"
              loading="eager"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-medium">Automatización</p>
                <p className="text-apple-gray-1 text-[10px]">Activa ahora</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-apple-gray-2 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
