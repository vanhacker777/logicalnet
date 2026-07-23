export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <img
        src="/img-cyber.jpg"
        alt="Transforma tu empresa con IA"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/80 to-cyan-600/90" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu empresa con IA?
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Te ayudamos a automatizar procesos, mejorar tu web y aumentar tus resultados con Inteligencia Artificial aplicada a tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-white text-brand font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Quiero empezar
          </a>
          <a
            href="#contacto"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-white/10 transition-all"
          >
            Solicitar diagnostico IA
          </a>
        </div>
      </div>
    </section>
  );
}
