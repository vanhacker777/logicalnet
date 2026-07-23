const advantages = [
  'Ahorro de tiempo y costos, sin desplazamientos.',
  'Asesoramiento y formacion personalizada.',
  'Transparencia total en cada accion.',
  'Sin instalaciones complicadas.',
  'Sin cuotas ni gastos ocultos.',
  'Servicio eficaz y rapido.',
];

export default function RemoteSupport() {
  return (
    <section id="soporte" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src="/img-team-collab.jpg"
                alt="Soporte tecnico remoto"
                className="w-full h-64 lg:h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
            </div>

            <div className="p-8 sm:p-12">
              <span className="text-brand text-sm font-medium tracking-widest uppercase">
                Soporte IT
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 tracking-tight">
                Tecnico Remoto
              </h2>
              <p className="text-apple-gray-1 leading-relaxed mb-8 text-lg">
                Soluciones rapidas y seguras sin desplazamientos. Nuestros expertos resuelven tus problemas al instante a traves de Internet.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-apple-gray-1 text-sm">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="text-brand text-2xl">🕘</div>
                <div>
                  <p className="text-white font-semibold text-sm">Horario de atencion</p>
                  <p className="text-apple-gray-1 text-sm">Lunes a viernes de 9:00 a 14:00 y de 16:00 a 19:00</p>
                </div>
              </div>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
              >
                Saber mas
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
