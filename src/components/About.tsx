import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 relative" style={{background: 'linear-gradient(180deg, #0c1830 0%, #101e38 50%, #0e1c35 100%)'}}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div ref={textRef}>
            <span className={`scroll-hidden ${textVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
              Sobre Nosotros
            </span>
            <h2 className={`scroll-hidden scroll-hidden-delay-1 ${textVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl font-bold text-white mt-4 mb-8 tracking-tight`}>
              Logical Net
            </h2>
            <p className={`scroll-hidden scroll-hidden-delay-2 ${textVisible ? 'scroll-visible' : ''} text-xl text-apple-gray-1 leading-relaxed mb-6`}>
              Empresa dedicada a ofrecer <strong className="text-white font-semibold">soluciones de IT a PYMEs</strong>. Optimizamos procesos y mejoramos la experiencia del usuario.
            </p>
            <p className={`scroll-hidden scroll-hidden-delay-3 ${textVisible ? 'scroll-visible' : ''} text-lg text-apple-gray-1 leading-relaxed mb-6`}>
              Nuestro equipo está formado por expertos apasionados por la tecnología. Trabajamos de la mano con nuestros clientes.
            </p>
            <p className={`scroll-hidden scroll-hidden-delay-3 ${textVisible ? 'scroll-visible' : ''} text-lg text-apple-gray-1 leading-relaxed`}>
              Fundada por <strong className="text-brand">Vicente Balseiro</strong>, con más de 20 años de experiencia.
            </p>
          </div>

          <div ref={imageRef} className={`scroll-scale ${imageVisible ? 'scroll-visible' : ''} relative`}>
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
