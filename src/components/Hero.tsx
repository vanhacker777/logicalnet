import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Particles from './Particles';

export default function Hero() {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{background: 'linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #081020 100%)'}}>
      <Particles />
      <div className="absolute inset-0">
        <img
          src="/img-tech.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0d1a30]/60 to-[#081020]" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div ref={heroRef} className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
                <span className="text-white/60 text-xs tracking-widest uppercase">Logical Net</span>
              </div>
            </div>

            <h1 className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] mb-5`}>
              <span className="text-white">Tu empresa merece </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">más</span>
            </h1>

            <p className={`scroll-hidden scroll-hidden-delay-2 ${isVisible ? 'scroll-visible' : ''} text-base sm:text-lg text-apple-gray-1 max-w-md mb-8 leading-relaxed font-light`}>
              Automatización, desarrollo web, soporte IT y migración a la nube. Todo lo que tu empresa necesita para crecer.
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
              <a
                href="#soporte"
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
              >
                Ver soporte IT
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

          <div className={`scroll-scale ${isVisible ? 'scroll-visible' : ''} relative hidden lg:block`}>
            <div className="absolute -inset-6 bg-gradient-to-br from-brand/15 via-blue-500/10 to-cyan-500/10 rounded-[2rem] blur-3xl animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm">
              <img
                src="/hero-ai.jpg"
                alt="IA para empresas"
                className="w-full h-[420px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-medium">Automatización</p>
                <p className="text-apple-gray-1 text-[10px]">Activa 24/7</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3 border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3" />
                </svg>
              </div>
              <div>
                <p className="text-white text-xs font-medium">Cloud</p>
                <p className="text-apple-gray-1 text-[10px]">Migración completa</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`scroll-hidden scroll-hidden-delay-4 ${isVisible ? 'scroll-visible' : ''} grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16`}>
          {[
            { icon: '⚡', title: 'IA & Automatización', desc: 'Webs, apps y chatbots' },
            { icon: '☁️', title: 'Servidores Cloud', desc: 'Correo y nube' },
            { icon: '🔒', title: 'Ciberseguridad', desc: 'Protección total' },
            { icon: '🛠️', title: 'Soporte IT', desc: 'NAS, servidores, redes' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-4 text-center border border-white/5 hover:border-brand/20 transition-all duration-300">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
              <p className="text-apple-gray-1 text-xs">{item.desc}</p>
            </div>
          ))}
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
