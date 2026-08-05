import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LeadCapture() {
  const [formData, setFormData] = useState({ nombre: '', email: '', servicio: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/mwpewwzk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tipo: 'lead-capture',
          mensaje: `Solicitud de diagnóstico gratuito. Servicio: ${formData.servicio}`,
        }),
      });
      if (response.ok) {
        setStatus('sent');
        setFormData({ nombre: '', email: '', servicio: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all text-sm";
  const labelClass = "block text-gray-700 text-sm font-medium mb-2";

  return (
    <section className="py-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0a1628 0%, #0e1c35 50%, #12243f 100%)'}}>
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
            <span className="text-brand text-sm font-medium tracking-widest uppercase">
              Diagnóstico gratuito
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 tracking-tight leading-tight">
              ¿Cuánto podría ahorrarte la IA?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Analizamos tu empresa sin compromiso y te mostramos exactamente dónde la inteligencia artificial puede ahorrarte tiempo y dinero.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: '✓', text: 'Diagnóstico 100% gratuito' },
                { icon: '✓', text: 'Sin compromiso de contratación' },
                { icon: '✓', text: 'Resultados en menos de 48h' },
                { icon: '✓', text: 'Para PYMEs de cualquier sector' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Resposta en 24h
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                601 475 239
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`scroll-hidden scroll-hidden-delay-1 ${isVisible ? 'scroll-visible' : ''}`}>
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
              {status === 'sent' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">¡Gracias!</h3>
                  <p className="text-white/60 mb-6">Te contactaremos en menos de 24 horas con tu diagnóstico gratuito.</p>
                  <button onClick={() => setStatus('idle')} className="text-brand hover:text-brand-dark text-sm font-medium transition-colors">
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-1">Pide tu diagnóstico gratuito</h3>
                  <p className="text-white/50 text-sm mb-6">Rellena el formulario y te llamamos.</p>

                  <div>
                    <label className={labelClass}>Nombre *</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputClass} placeholder="Tu nombre" />
                  </div>

                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="email@empresa.com" />
                  </div>

                  <div>
                    <label className={labelClass}>¿Qué te interesa?</label>
                    <select name="servicio" value={formData.servicio} onChange={handleChange} className={inputClass}>
                      <option value="" className="bg-white">Selecciona un servicio</option>
                      <option value="ia" className="bg-white">IA & Automatización</option>
                      <option value="web" className="bg-white">Desarrollo Web</option>
                      <option value="soporte" className="bg-white">Soporte IT</option>
                      <option value="todo" className="bg-white">No sé, quiero saber más</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Quiero mi diagnóstico gratis'}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    Sin spam. Solo contactamos para darte tu diagnóstico.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
