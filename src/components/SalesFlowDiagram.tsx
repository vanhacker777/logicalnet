import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Node({
  x,
  y,
  label,
  sub,
  icon,
  delay,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  icon: string;
  delay: string;
}) {
  return (
    <g style={{ animationDelay: delay }} className="node-pulse">
      <foreignObject x={x - 70} y={y - 38} width={140} height={100}>
        <div className="glass-card rounded-2xl px-3 py-2 flex flex-col items-center text-center hover:border-brand/30 transition-colors duration-300">
          <div className="text-xl leading-none mb-1" style={{ filter: 'saturate(1.2)' }}>
            {icon}
          </div>
          <div className="text-white font-bold text-[13px] leading-tight">{label}</div>
          <div className="text-apple-gray-1 text-[10px] leading-tight mt-0.5">{sub}</div>
        </div>
      </foreignObject>
    </g>
  );
}

export default function SalesFlowDiagram() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-32 relative overflow-hidden" style={{background: 'linear-gradient(180deg, #0c1830 0%, #0e1c35 50%, #0a1428 100%)'}}>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand/10 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Cómo lo hacemos
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 tracking-tight`}>
            De la captación a la venta
          </h2>
          <p className={`scroll-hidden scroll-hidden-delay-2 ${isVisible ? 'scroll-visible' : ''} text-xl text-apple-gray-1 max-w-2xl mx-auto mt-6 leading-relaxed`}>
            Un flujo continuo donde la IA convierte cada visita en una venta.
          </p>
        </div>

        <div className={`scroll-scale ${isVisible ? 'scroll-visible' : ''} relative`}>
          <svg viewBox="0 0 900 340" className="w-full h-auto" style={{ minHeight: '340px' }}>
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2997ff" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <Node x={90} y={100} icon="🧲" label="Captación" sub="Atraemos clientes" delay="0.2s" />
            <Node x={300} y={100} icon="🤖" label="IA & Automatización" sub="Datos y atención 24/7" delay="0.4s" />
            <Node x={510} y={170} icon="⚙️" label="Operativa" sub="Procesos optimizados" delay="0.6s" />
            <Node x={720} y={100} icon="💸" label="Cierre de venta" sub="Más ingresos" delay="0.8s" />

            <line x1={160} y1={100} x2={230} y2={100} stroke="url(#lineGrad)" strokeWidth={2} className="flow-line-animated" />
            <circle cx={195} cy={100} r={4} fill="#2997ff" filter="url(#glow)"><animate attributeName="cx" values="162;228;162" dur="2s" repeatCount="indefinite" /></circle>

            <line x1={370} y1={100} x2={510} y2={165} stroke="url(#lineGrad)" strokeWidth={2} className="flow-line-animated" />
            <circle cx={440} cy={132} r={4} fill="#06b6d4" filter="url(#glow)"><animate attributeName="cx" values="372;508;372" dur="2.5s" repeatCount="indefinite" /><animate attributeName="cy" values="100;165;100" dur="2.5s" repeatCount="indefinite" /></circle>

            <line x1={580} y1={170} x2={650} y2={105} stroke="url(#lineGrad)" strokeWidth={2} className="flow-line-animated" />
            <circle cx={615} cy={139} r={4} fill="#22c55e" filter="url(#glow)"><animate attributeName="cx" values="582;648;582" dur="2.2s" repeatCount="indefinite" /><animate attributeName="cy" values="170;105;170" dur="2.2s" repeatCount="indefinite" /></circle>

            <path d="M 720 165 C 760 240, 120 240, 90 160" fill="none" stroke="#22c55e" strokeOpacity="0.5" strokeWidth={1.5} strokeDasharray="4 6" className="flow-line-animated">
              <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
            </path>
          </svg>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm">
            <div className="flex items-center gap-2 text-apple-gray-1">
              <span className="w-3 h-3 rounded-full bg-brand" /> Captación
            </div>
            <div className="flex items-center gap-2 text-apple-gray-1">
              <span className="w-3 h-3 rounded-full bg-cyan-400" /> IA
            </div>
            <div className="flex items-center gap-2 text-apple-gray-1">
              <span className="w-3 h-3 rounded-full bg-green-400" /> Venta
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}