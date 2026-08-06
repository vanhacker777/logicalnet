import Process from '../components/Process';
import AICases from '../components/AICases';
import BeforeAfter from '../components/BeforeAfter';
import SpecializedServices from '../components/SpecializedServices';
import CTA from '../components/CTA';

export default function Servicios() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden py-24 sm:py-32" style={{background: 'linear-gradient(135deg, #0a1628 0%, #0d1a30 40%, #081020 100%)'}}>
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[180px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            <span className="text-brand text-xs tracking-widest uppercase font-medium">Nuestros Servicios</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Soluciones completas para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">tu empresa</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Desde inteligencia artificial hasta soporte técnico integral. Todo lo que necesitas para crecer más rápido.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contacto" className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 inline-flex items-center gap-2">
              Solicitar diagnóstico
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="/contacto" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300">
              Hablar con un experto
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/5">
            {[
              { value: '100+', label: 'Proyectos entregados' },
              { value: '98%', label: 'Satisfacción' },
              { value: '24/7', label: 'Soporte continuo' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/50 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Process />
      <AICases />
      <BeforeAfter />
      <SpecializedServices />
      <CTA />
    </div>
  );
}
