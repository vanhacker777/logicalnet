const advantages = [
  'Ahorro de tiempo y costos, sin desplazamientos innecesarios.',
  'Asesoramiento y formacion, para resolver dudas y aprender a manejar programas.',
  'Transparencia total, supervisa cada accion y desconectate cuando lo desees.',
  'Sin instalaciones ni configuraciones complicadas, acceso directo y sencillo.',
  'Sin cuotas ni gastos ocultos, pagas solo por cada asistencia.',
  'Servicio eficaz, con la mejor relacion entre calidad y rapidez.',
];

export default function RemoteSupport() {
  return (
    <section id="soporte" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-secondary to-accent border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src="/img-team.jpg"
                alt="Soporte tecnico remoto"
                className="w-full h-64 lg:h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/80" />
            </div>

            <div className="p-8 md:p-10">
              <span className="text-brand text-sm font-semibold uppercase tracking-wider">
                Soporte IT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3 mb-4">
                Soporte Tecnico Remoto
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                Los problemas informaticos mas comunes suelen estar relacionados con el software. ¿Imaginas contar con un tecnico que te ayude a resolverlos al instante, sin costos de desplazamiento?
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                Con nuestro <strong className="text-white">Servicio de Asistencia Tecnica Remota</strong>, puedes dar acceso a nuestros expertos a tu ordenador a traves de Internet. De forma sencilla, segura y sin esperas.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-xs">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3 mb-6">
                <div className="text-brand text-2xl">🕘</div>
                <div>
                  <p className="text-white font-semibold text-sm">Horario de atencion</p>
                  <p className="text-gray-400 text-xs">Lunes a viernes de 9:00 a 14:00 y de 16:00 a 19:00</p>
                </div>
              </div>

              <a
                href="#contacto"
                className="inline-block bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                Saber mas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
