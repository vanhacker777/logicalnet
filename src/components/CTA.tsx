export default function CTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          ¿Listo para empezar?
        </h2>
        <p className="text-xl text-apple-gray-1 mb-12 max-w-2xl mx-auto leading-relaxed">
          Te ayudamos a automatizar procesos, mejorar tu web y aumentar tus resultados con Inteligencia Artificial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34620211374?text=Hola,%20me%20interesa%20vuestros%20servicios%20de%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25"
          >
            Empezar ahora
          </a>
          <a
            href="#contacto"
            className="text-white/60 hover:text-white px-10 py-4 text-lg font-medium transition-colors duration-300 border border-white/10 rounded-full hover:border-white/20"
          >
            Saber mas
          </a>
        </div>
      </div>
    </section>
  );
}
