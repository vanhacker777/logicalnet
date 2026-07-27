import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/img-tech.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div ref={heroRef} className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} text-center mb-12`}>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            <span className="text-white/60 text-xs tracking-widest uppercase">Logical Net</span>
          </div>
          <h1 className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-5`}>
            <span className="text-white">Tu empresa merece </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">más</span>
          </h1>
          <p className={`scroll-hidden scroll-hidden-delay-2 ${isVisible ? 'scroll-visible' : ''} text-base sm:text-lg text-apple-gray-1 max-w-lg mx-auto leading-relaxed font-light`}>
            Automatización, desarrollo web, soporte IT y migración a la nube. Todo lo que tu empresa necesita para crecer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className={`scroll-hidden scroll-hidden-delay-3 ${isVisible ? 'scroll-visible' : ''} glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-brand/20 transition-all duration-500`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">IA & Automatización</h3>
              <p className="text-apple-gray-1 text-sm leading-relaxed mb-4">Creamos webs que venden, apps a medida y automatizaciones IA que trabajan por ti 24/7.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Webs</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Apps</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Chatbots IA</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Automatizaciones</span>
              </div>
            </div>
          </div>

          <div className={`scroll-hidden scroll-hidden-delay-4 ${isVisible ? 'scroll-visible' : ''} glass-card rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Soporte IT & Mantenimiento</h3>
              <p className="text-apple-gray-1 text-sm leading-relaxed mb-4">Mejoramos tu infraestructura con las nuevas tecnologías. Servidores, correo y todo en la nube.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">NAS / Synology</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Servidores</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Correo nube</span>
                <span className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">Cloud</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`scroll-hidden scroll-hidden-delay-4 ${isVisible ? 'scroll-visible' : ''} flex flex-col sm:flex-row items-center justify-center gap-4 mb-12`}>
          <a
            href="#contacto"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 flex items-center gap-2"
          >
            Diagnóstico gratuito
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#soporte"
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
          >
            Ver soporte IT
          </a>
        </div>

        <div className={`scroll-hidden scroll-hidden-delay-4 ${isVisible ? 'scroll-visible' : ''} flex items-center justify-center gap-6`}>
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-apple-gray-2 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
