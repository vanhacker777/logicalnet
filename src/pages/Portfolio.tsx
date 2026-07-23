import { projects } from '../components/Projects';

export default function Portfolio() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Nuestros Proyectos
          </h1>
          <p className="text-apple-gray-1 text-lg mt-4 max-w-2xl mx-auto">
            Soluciones reales que transforman negocios
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 group ${
                (project as any).highlight ? 'ring-1 ring-amber-500/30 sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} border ${project.border} flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                {(project as any).highlight && (
                  <span className="bg-amber-500/15 border border-amber-500/25 text-amber-400 text-xs px-2.5 py-0.5 rounded-full font-medium">
                    Destacado
                  </span>
                )}
              </div>
              <span className="text-apple-gray-1 text-sm">{project.url}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
              <p className="text-apple-gray-1 text-sm leading-relaxed mb-4">{project.description}</p>
              {(project as any).tags && (
                <div className="flex flex-wrap gap-2">
                  {(project as any).tags.map((tag: string) => (
                    <span key={tag} className="text-xs bg-white/5 border border-white/10 text-white/60 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}
