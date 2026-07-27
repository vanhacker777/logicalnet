import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
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
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
        </div>

        {status === 'sent' ? (
          <div className="glass-card rounded-2xl p-12 text-center border border-white/5">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Mensaje enviado</h3>
            <p className="text-apple-gray-1">Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-brand hover:text-brand-dark text-sm font-medium transition-colors"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className={`scroll-hidden ${formVisible ? 'scroll-visible' : ''} space-y-6`}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-apple-gray-1 text-sm mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-apple-gray-2 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-apple-gray-1 text-sm mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-apple-gray-2 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm"
                  placeholder="email@ejemplo.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-apple-gray-1 text-sm mb-2">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-apple-gray-2 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm"
                  placeholder="Tu teléfono"
                />
              </div>
              <div>
                <label className="block text-apple-gray-1 text-sm mb-2">Asunto</label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm"
                >
                  <option value="" className="bg-[#0c1830]">Selecciona</option>
                  <option value="ia" className="bg-[#0c1830]">IA & Automatización</option>
                  <option value="web" className="bg-[#0c1830]">Desarrollo Web</option>
                  <option value="soporte" className="bg-[#0c1830]">Soporte IT</option>
                  <option value="otro" className="bg-[#0c1830]">Otro</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-apple-gray-1 text-sm mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-apple-gray-2 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none text-sm"
                placeholder="Describe tu proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-brand hover:bg-brand-dark text-white font-medium py-4 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Error al enviar. Inténtalo de nuevo o contáctanos por WhatsApp.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
