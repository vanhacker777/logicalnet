const projects = [
  {
    title: 'DYNAMIC-PARTNERS',
    url: 'dynamic-partners.es',
    description: 'Gestion integral de eventos y experiencias corporativas en España. Diseno y desarrollo de la web corporativa de Dynamic Partners, agencia de gestion de eventos en España. Creamos una plataforma moderna, clara y adaptable que refleja su profesionalidad.',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    title: 'EFFEKT SECURITY',
    url: 'effektsecurity.com',
    description: 'Seguridad Integral (Vigilancia, Sistemas y Servicios Especializados). EFFEKT International Global Control es una destacada empresa de seguridad integral con mas de 20 años de experiencia.',
    gradient: 'from-red-600 to-orange-600',
  },
  {
    title: 'SIN MOCHILA',
    url: 'sinmochila.es',
    description: 'Centro de psicologia acreditado en Las Rozas. Terapia infantojuvenil, adultos, pareja, familia y unidades especificas: perinatal, sexologia, psicooncologia y terapia online.',
    gradient: 'from-green-600 to-teal-600',
  },
  {
    title: 'COMPUTERMANIA.ES',
    url: 'computermania.es',
    description: 'Servicio tecnico de ordenadores, portatiles, impresoras, monitores. Instalacion de sistemas Windows y Apple (OSX), copias de seguridad y recuperacion de datos.',
    gradient: 'from-purple-600 to-violet-700',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold uppercase tracking-wider">
            Nuestro Trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Proyectos que transforman
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium">{project.url}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-brand text-xs font-semibold uppercase tracking-wider">WEB</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
