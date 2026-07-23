export default function About() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand text-sm font-medium tracking-widest uppercase">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-8 tracking-tight">
              Logical Net
            </h2>
            <p className="text-xl text-apple-gray-1 leading-relaxed mb-6">
              Empresa dedicada a ofrecer soluciones <strong className="text-white font-semibold">de IT a PYMEs</strong>. Soluciones innovadoras que optimizan procesos y mejoran la experiencia del usuario.
            </p>
            <p className="text-lg text-apple-gray-1 leading-relaxed mb-6">
              Nuestro equipo esta formado por expertos apasionados por la tecnologia. Trabajamos de la mano con nuestros clientes para alcanzar sus objetivos.
            </p>
            <p className="text-lg text-apple-gray-1 leading-relaxed">
              Fundada por <strong className="text-brand">Vicente Balseiro</strong>, un profesional con mas de 20 años de experiencia en el sector.
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/img-office.jpg"
                alt="Equipo Logical Net"
                className="w-full h-96 lg:h-[420px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-5 text-center backdrop-blur-xl">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-apple-gray-1 text-sm">Años de experiencia</div>
              </div>
              <div className="glass-card rounded-2xl p-5 text-center backdrop-blur-xl">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-apple-gray-1 text-sm">Proyectos realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
