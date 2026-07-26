import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CTA() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight`}>
          Empezamos?
        </h2>
        <p className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''} text-xl text-apple-gray-1 mb-12 max-w-2xl mx-auto leading-relaxed`}>
          Diagnostico gratuito. Sin compromiso.
        </p>
        <div className={`scroll-hidden scroll-hidden-delay-2 ${isVisible ? 'scroll-visible' : ''}`}>
          <a
            href="#contacto"
            className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 inline-flex items-center gap-3"
          >
            Pedir diagnostico
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
