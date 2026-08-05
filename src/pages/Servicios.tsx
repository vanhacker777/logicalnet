import Process from '../components/Process';
import AICases from '../components/AICases';
import BeforeAfter from '../components/BeforeAfter';
import SpecializedServices from '../components/SpecializedServices';
import CTA from '../components/CTA';

export default function Servicios() {
  return (
    <div className="pt-32">
      <section className="py-16 text-center" style={{background: 'linear-gradient(180deg, #0d1a30 0%, #0a1428 100%)'}}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-brand text-xs tracking-widest uppercase font-medium">Nuestros Servicios</span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4">Soluciones completas para tu empresa</h1>
          <p className="text-white/70 text-lg">Desde IA y automatización hasta soporte técnico integral.</p>
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
