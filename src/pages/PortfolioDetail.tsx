import { useParams, Link } from 'react-router-dom';
import { projects } from '../components/Projects';

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.title.toLowerCase().replace(/[^a-z]/g, '') === id);

  if (!project) {
    return (
      <section className="pt-32 pb-20 min-h-screen flex items-center justify-center" style={{background: '#080c18'}}>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Proyecto no encontrado</h1>
          <Link to="/portfolio" className="text-brand hover:text-brand-dark transition-colors">
            Volver al portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 min-h-screen" style={{background: '#080c18'}}>
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/portfolio" className="inline-flex items-center gap-2 text-brand text-sm mb-8 hover:gap-3 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al portfolio
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} border ${project.border} flex items-center justify-center`}>
            <svg className="w-8 h-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h1>
            <span className="text-white/60 text-sm">{project.url}</span>
          </div>
        </div>

        <p className="text-white/80 text-xl leading-relaxed mb-12">
          {project.description}
        </p>

        {(project as any).tags && (
          <div className="flex flex-wrap gap-3 mb-12">
            {(project as any).tags.map((tag: string) => (
              <span key={tag} className="text-sm bg-white/5 border border-white/10 text-white/60 px-4 py-2 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="glass-card rounded-2xl p-8 border border-white/5 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Sobre el proyecto</h2>
          <p className="text-white/80 leading-relaxed mb-6">
            {project.description} Este proyecto fue desarrollado por Logical Net con tecnologías modernas y un enfoque en la experiencia del usuario.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
              <span className="text-brand text-sm font-medium">Cliente</span>
              <p className="text-white mt-1">{project.title}</p>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-5 border border-white/5">
              <span className="text-brand text-sm font-medium">Servicio</span>
              <p className="text-white mt-1">Desarrollo Web</p>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 text-center border border-white/5">
          <h3 className="text-xl font-bold text-white mb-3">¿Quieres algo similar?</h3>
          <p className="text-white/80 mb-6">Cuéntanos tu idea y te damos un presupuesto sin compromiso.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/34601475239?text=Hola,%20me%20interesa%20un%20proyecto%20similar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Contactar por WhatsApp
            </a>
            <a
              href="#contacto"
              className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
