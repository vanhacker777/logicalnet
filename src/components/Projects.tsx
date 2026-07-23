const projects = [
  {
    title: 'DYNAMIC-PARTNERS',
    url: 'dynamic-partners.es',
    description: 'Gestion integral de eventos y experiencias corporativas en España.',
    gradient: 'from-blue-600/20 to-indigo-700/20',
    border: 'border-blue-500/20',
  },
  {
    title: 'EFFEKT SECURITY',
    url: 'effektsecurity.com',
    description: 'Seguridad Integral con mas de 20 años de experiencia.',
    gradient: 'from-red-600/20 to-orange-600/20',
    border: 'border-red-500/20',
  },
  {
    title: 'SIN MOCHILA',
    url: 'sinmochila.es',
    description: 'Centro de psicologia acreditado en Las Rozas.',
    gradient: 'from-green-600/20 to-teal-600/20',
    border: 'border-green-500/20',
  },
  {
    title: 'COMPUTERMANIA.ES',
    url: 'computermania.es',
    description: 'Servicio tecnico de ordenadores y recuperacion de datos.',
    gradient: 'from-purple-600/20 to-violet-700/20',
    border: 'border-purple-500/20',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Proyectos
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Que transforman
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border ${project.border} flex items-center justify-center mb-6`}>
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <span className="text-apple-gray-1 text-sm">{project.url}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
              <p className="text-apple-gray-1 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
