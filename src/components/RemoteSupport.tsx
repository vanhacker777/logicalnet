import { useScrollAnimation } from '../hooks/useScrollAnimation';

const advantages = [
  'Sin desplazamientos.',
  'Formación personalizada.',
  'Transparencia total.',
  'Sin gastos ocultos.',
];

const specialities = [
  { label: 'NAS / Synology', icon: 'HDD' },
  { label: 'Servidores físicos', icon: 'SVR' },
  { label: 'Servidores en la nube', icon: 'CLD' },
  { label: 'Infraestructura IT', icon: 'NET' },
];

export default function RemoteSupport() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);

  return (
    <section id="soporte" className="py-32 relative" style={{background: 'linear-gradient(180deg, #0a1428 0%, #0e1c35 50%, #0c1830 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div ref={imageRef} className={`scroll-left ${imageVisible ? 'scroll-visible' : ''} relative`}>
              <img
                src="/img-team-collab.jpg"
                alt="Soporte técnico remoto"
                className="w-full h-64 lg:h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
            </div>

            <div ref={contentRef} className={`scroll-right ${contentVisible ? 'scroll-visible' : ''} p-8 sm:p-12`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-brand text-sm font-medium tracking-widest uppercase">
                  Soporte IT
                </span>
                <span className="text-[10px] bg-white/10 border border-white/10 text-white/60 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  EN / ES
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4 tracking-tight">
                IT Support
              </h2>
              <p className="text-apple-gray-1 leading-relaxed mb-6 text-lg">
                Departamento bilingue con amplia experiencia. Desde NAS y Synology hasta servidores en la nube.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {specialities.map((spec, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="text-brand text-[10px] font-bold bg-brand/10 px-2 py-0.5 rounded">{spec.icon}</span>
                    <span className="text-apple-gray-1 text-sm">{spec.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-apple-gray-1 text-xs">{advantage}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contactar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
