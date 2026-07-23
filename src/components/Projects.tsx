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

const aiMarketingFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Contenido generado por IA',
    description: 'Textos, imagenes y campañas automaticas que conectan con tu audiencia.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: 'SEO predictivo',
    description: 'Analisis inteligente para posicionar tu web antes de que tus competidores.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Campanas automaticas',
    description: 'Google Ads y redes sociales optimizados con IA en tiempo real.',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Desarrollo Web
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Que transforman
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-20">
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

        <div className="text-center mb-12">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Marketing con IA
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
            Contenido inteligente para tu negocio
          </h3>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {aiMarketingFeatures.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 glass-card-hover transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand mb-4 group-hover:bg-brand/20 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">{feature.title}</h4>
              <p className="text-apple-gray-1 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
