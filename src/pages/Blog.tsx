import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <section className="pt-32 pb-20 min-h-screen" style={{background: '#080c18'}}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight">
            Artículos
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Ideas y consejos sobre IA, automatización y tecnología para empresas.
          </p>
        </div>

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
