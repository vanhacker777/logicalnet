import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '+', label: 'Proyectos entregados' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
  { value: 24, suffix: '/7', label: 'Soporte continuo' },
];

function useCountUp(target: number, start: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [start, target]);

  return count;
}

function StatItem({ stat, isVisible, index }: { stat: typeof stats[0]; isVisible: boolean; index: number }) {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div
      className={`scroll-hidden flex flex-col items-center text-center px-6 py-8 glass-card rounded-2xl border border-white/5 hover:border-brand/20 transition-all duration-300 hover:scale-105`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-white/60 text-sm font-medium">{stat.label}</div>
    </div>
  );
}

export default function StatsCounter() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 relative" style={{background: 'linear-gradient(180deg, #0c1830 0%, #0a1428 100%)'}}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
