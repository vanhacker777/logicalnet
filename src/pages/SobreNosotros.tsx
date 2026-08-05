import About from '../components/About';
import StatsCounter from '../components/StatsCounter';
import SuccessCases from '../components/SuccessCases';
import CTA from '../components/CTA';

export default function SobreNosotros() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center" style={{background: 'linear-gradient(180deg, #0d1a30 0%, #0a1428 100%)'}}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-brand text-xs tracking-widest uppercase font-medium">Sobre Nosotros</span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4">Más de 20 años impulsando empresas</h1>
          <p className="text-white/70 text-lg">Conocer a Logical Net, nuestra historia y los resultados de nuestros clientes.</p>
        </div>
      </section>
      <About />
      <StatsCounter />
      <SuccessCases />
      <CTA />
    </div>
  );
}
