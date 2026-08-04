import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLFormElement>(0.1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.nombre && formData.email) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mwpewwzk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          asunto: formData.asunto,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
        setStep(1);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm";
  const labelClass = "block text-white/60 text-sm mb-2";

  return (
    <section id="contacto" className="py-32 relative" style={{background: 'linear-gradient(180deg, #0e1c35 0%, #12243f 50%, #101e38 100%)'}}>
      <div className="max-w-3xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            Contacto
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl font-bold text-white mt-4 tracking-tight`}>
            Hablemos
          </h2>
          <div className={`scroll-hidden scroll-hidden-delay-2 ${titleVisible ? 'scroll-visible' : ''} flex items-center justify-center gap-6 mt-6 text-sm`}>
            <a href="tel:+34601475239" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              601 475 239
            </a>
            <a href="https://wa.me/34601475239?text=Hola,%20me%20interesa%20vuestros%20servicios" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {status === 'sent' ? (
          <div className="glass-card rounded-2xl p-12 text-center border border-white/5">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mensaje enviado</h3>
            <p className="text-white/60">Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-brand hover:text-brand-dark text-sm font-medium transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className={`scroll-hidden ${formVisible ? 'scroll-visible' : ''}`}>
            {/* Progress bar */}
            <div className="flex items-center gap-3 mb-8">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brand' : 'text-white/30'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${step >= 1 ? 'bg-brand/20 border-brand/40 text-brand' : 'border-white/10 text-white/30'}`}>1</div>
                <span className="text-sm font-medium hidden sm:inline">Datos</span>
              </div>
              <div className={`flex-1 h-px ${step >= 2 ? 'bg-brand' : 'bg-white/10'} transition-colors duration-500`} />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brand' : 'text-white/30'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${step >= 2 ? 'bg-brand/20 border-brand/40 text-brand' : 'border-white/10 text-white/30'}`}>2</div>
                <span className="text-sm font-medium hidden sm:inline">Mensaje</span>
              </div>
            </div>

            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Nombre *</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className={inputClass} placeholder="Tu nombre" />
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="email@ejemplo.com" />
                </div>
                <div>
                  <label className={labelClass}>Teléfono (opcional)</label>
                  <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className={inputClass} placeholder="Tu teléfono" />
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.nombre || !formData.email}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-medium py-4 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Siguiente
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className={labelClass}>Asunto *</label>
                  <select name="asunto" value={formData.asunto} onChange={handleChange} required className={inputClass}>
                    <option value="" className="bg-[#0c1830]">Selecciona</option>
                    <option value="ia" className="bg-[#0c1830]">IA & Automatización</option>
                    <option value="web" className="bg-[#0c1830]">Desarrollo Web</option>
                    <option value="soporte" className="bg-[#0c1830]">Soporte IT</option>
                    <option value="otro" className="bg-[#0c1830]">Otro</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Mensaje *</label>
                  <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} required className={`${inputClass} resize-none`} placeholder="Describe tu proyecto..." />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-4 rounded-full text-sm font-medium border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'sending' || !formData.asunto || !formData.mensaje}
                    className="flex-1 bg-brand hover:bg-brand-dark text-white font-medium py-4 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </div>
              </div>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center mt-4">Error al enviar. Inténtalo de nuevo o contáctanos por WhatsApp.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
