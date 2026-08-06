import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function FaqPage() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden py-24 sm:py-32" style={{background: 'linear-gradient(135deg, #0a1628 0%, #0d1a30 40%, #081020 100%)'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            <span className="text-brand text-xs tracking-widest uppercase font-medium">FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Preguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">frecuentes</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Resolvemos las dudas más comunes sobre nuestros servicios y cómo trabajamos.
          </p>
        </div>
      </section>
      <FAQ />
      <CTA />
    </div>
  );
}
