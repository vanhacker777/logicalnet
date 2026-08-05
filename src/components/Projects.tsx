import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const projects = [
  {
    title: 'ACP-SOLAR',
    url: 'acp-solar.com',
    description: 'Web con app de control de clientes y área privada para gestión de energía solar.',
    gradient: 'from-amber-600/20 to-yellow-500/20',
    border: 'border-amber-500/20',
    highlight: true,
    tags: ['App clientes', 'Área privada', 'Control de proyectos'],
  },
  {
    title: 'DYNAMIC-PARTNERS',
    url: 'dynamic-partners.es',
    description: 'Gestión integral de eventos y experiencias corporativas.',
    gradient: 'from-blue-600/20 to-indigo-700/20',
    border: 'border-blue-500/20',
    tags: ['Eventos', 'Corporate'],
  },
  {
    title: 'EFFEKT SECURITY',
    url: 'effektsecurity.com',
    description: 'Seguridad integral con más de 20 años de experiencia.',
    gradient: 'from-red-600/20 to-orange-600/20',
    border: 'border-red-500/20',
    tags: ['Seguridad', 'Integral'],
  },
  {
    title: 'SIN MOCHILA',
    url: 'sinmochila.es',
    description: 'Centro de psicología acreditado en Las Rozas.',
    gradient: 'from-green-600/20 to-teal-600/20',
    border: 'border-green-500/20',
    tags: ['Salud', 'Psicología'],
  },
  {
    title: 'COMPUTERMANIA.ES',
    url: 'computermania.es',
    description: 'Servicio técnico de ordenadores y recuperación de datos.',
    gradient: 'from-purple-600/20 to-violet-700/20',
    border: 'border-purple-500/20',
    tags: ['IT', 'Soporte'],
  },
];

export default function Projects() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section id="proyectos" className="py-32 relative" style={{background: 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 50%, #ffffff 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-20">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Portfolio
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-4 tracking-tight`}>
            Qué creamos
          </h2>
        </div>

        <div ref={gridRef} className={`scroll-hidden ${gridVisible ? 'scroll-visible' : ''} grid sm:grid-cols-2 gap-6 mb-12`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card-light rounded-2xl p-8 hover:border-brand/20 transition-all duration-300 group cursor-pointer ${
                (project as any).highlight ? 'ring-1 ring-amber-500/30' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border ${project.border} flex items-center justify-center`}>
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                {(project as any).highlight && (
                  <span className="bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Destacado
                  </span>
                )}
              </div>
              <span className="text-gray-500 text-sm">{project.url}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              {(project as any).tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {(project as any).tags.map((tag: string) => (
                    <span key={tag} className="text-xs bg-gray-100 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`scroll-hidden ${gridVisible ? 'scroll-visible' : ''} text-center`}>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          >
            Ver todo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
