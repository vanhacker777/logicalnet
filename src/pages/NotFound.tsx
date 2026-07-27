import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center relative" style={{background: 'linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #081020 100%)'}}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative text-center px-6">
        <div className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand to-cyan-400 mb-4">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Página no encontrada</h1>
        <p className="text-apple-gray-1 text-lg mb-8 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25"
        >
          Volver al inicio
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
