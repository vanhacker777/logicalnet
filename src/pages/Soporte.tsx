import RemoteSupport from '../components/RemoteSupport';
import CTA from '../components/CTA';

export default function Soporte() {
  return (
    <div className="pt-32">
      <section className="relative overflow-hidden py-24 sm:py-32" style={{background: 'linear-gradient(135deg, #0a1628 0%, #0d1a30 40%, #081020 100%)'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs tracking-widest uppercase font-medium">Soporte IT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Soporte técnico{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-brand to-cyan-400">24/7</span>{' '}
            para tu empresa
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Mantenimiento, reparación y gestión de servidores, NAS, redes, correo en nube y más. Siempre disponibles cuando nos necesitas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+34601475239" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              Llamar ahora
            </a>
            <a href="/contacto" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300">
              Solicitar asesoría
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/5">
            {[
              { value: '20+', label: 'Años de experiencia' },
              { value: '24/7', label: 'Disponibilidad' },
              { value: '<2h', label: 'Tiempo de respuesta' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/50 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RemoteSupport />
      <CTA />
    </div>
  );
}
