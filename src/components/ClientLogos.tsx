import { useScrollAnimation } from '../hooks/useScrollAnimation';

const clients = [
  { name: 'ACP-SOLAR', url: '#' },
  { name: 'Dynamic Partners', url: '#' },
  { name: 'Effekt Security', url: '#' },
  { name: 'Logical Net Group', url: '#' },
  { name: 'Synology', url: '#' },
];

export default function ClientLogos() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-20 relative" style={{background: 'linear-gradient(180deg, #0a1428 0%, #0c1830 100%)'}}>
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Confían en nosotros
          </span>
        </div>

        <div className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''} flex flex-wrap items-center justify-center gap-8 sm:gap-12`}>
          {clients.map((client, i) => (
            <a
              key={i}
              href={client.url}
              className="group px-6 py-4 rounded-xl border border-white/5 hover:border-brand/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              <span className="text-white/30 group-hover:text-white/70 text-lg font-semibold tracking-wide transition-colors duration-300">
                {client.name}
              </span>
            </a>
          ))}
        </div>

        <p className={`scroll-hidden scroll-hidden-delay-2 ${isVisible ? 'scroll-visible' : ''} text-center text-white/40 text-sm mt-10`}>
          +50 empresas ya confían en nosotros
        </p>
      </div>
    </section>
  );
}
