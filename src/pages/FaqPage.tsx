import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function FaqPage() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center" style={{background: 'linear-gradient(180deg, #0d1a30 0%, #0a1428 100%)'}}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-brand text-xs tracking-widest uppercase font-medium">FAQ</span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4">Preguntas frecuentes</h1>
          <p className="text-white/70 text-lg">Resolvemos tus dudas sobre nuestros servicios.</p>
        </div>
      </section>
      <FAQ />
      <CTA />
    </div>
  );
}
