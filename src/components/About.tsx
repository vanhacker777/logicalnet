export default function About() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand text-sm font-semibold uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Conoce a Logical Net y su Mision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Logical Net es una empresa dedicada a ofrecer soluciones <strong className="text-white">de IT a PYMEs</strong>. Nos enfocamos en brindar soluciones innovadoras que optimizan procesos y mejoran la experiencia del usuario.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nuestro equipo esta formado por expertos apasionados por la tecnologia. Trabajamos de la mano con nuestros clientes para alcanzar sus objetivos.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Fundada por <strong className="text-brand">Vicente Balseiro</strong>, un profesional con mas de 20 años de experiencia en el sector. Su vision es hacer accesibles las tecnologias avanzadas a las pequenas y medianas empresas, ayudandolas a prosperar.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-brand/20 to-accent/20 border border-brand/20 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand mb-1">20+</div>
                  <div className="text-gray-400 text-sm">Años de experiencia</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand mb-1">100+</div>
                  <div className="text-gray-400 text-sm">Proyectos realizados</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Soporte tecnico</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-brand mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Clientes satisfechos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
