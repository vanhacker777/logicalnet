import RemoteSupport from '../components/RemoteSupport';
import CTA from '../components/CTA';

export default function Soporte() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center" style={{background: 'linear-gradient(180deg, #0d1a30 0%, #0a1428 100%)'}}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-brand text-xs tracking-widest uppercase font-medium">Soporte IT</span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4">Soporte técnico 24/7 para tu empresa</h1>
          <p className="text-white/70 text-lg">Mantenimiento, reparación y gestión de servidores, NAS, redes y más.</p>
        </div>
      </section>
      <RemoteSupport />
      <CTA />
    </div>
  );
}
