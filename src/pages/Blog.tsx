import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <section className="pt-32 pb-20 min-h-screen" style={{background: '#080c18'}}>
      <div className="relative overflow-hidden py-24 sm:py-32" style={{background: 'linear-gradient(135deg, #0a1628 0%, #0d1a30 40%, #081020 100%)'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            <span className="text-brand text-xs tracking-widest uppercase font-medium">Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Artículos y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400">noticias</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Ideas, consejos y tendencias sobre IA, automatización y tecnología para empresas.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block glass-card rounded-2xl p-8 glass-card-hover transition-all duration-300 hover:scale-[1.01] border border-white/5 hover:border-brand/20"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-brand text-xs font-medium bg-brand/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-white/40 text-xs">{post.date}</span>
                <span className="text-white/40 text-xs">• {post.readTime} lectura</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{post.title}</h2>
              <p className="text-white/80 leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-2 text-brand text-sm font-medium group-hover:gap-3 transition-all">
                Leer más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
