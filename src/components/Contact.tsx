import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-32 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-medium tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 tracking-tight">
            Hablemos
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="block text-apple-gray-1 text-sm mb-2">Telefono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-apple-gray-2 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all text-sm"
                placeholder="Tu telefono"
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
                <option value="" className="bg-black">Selecciona</option>
                <option value="ia" className="bg-black">IA & Automatizacion</option>
                <option value="web" className="bg-black">Desarrollo Web</option>
                <option value="soporte" className="bg-black">Soporte IT</option>
                <option value="otro" className="bg-black">Otro</option>
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
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-apple-gray-2 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none text-sm"
              placeholder="Describe tu proyecto..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand hover:bg-brand-dark text-white font-medium py-4 rounded-full text-base transition-all duration-300 hover:shadow-lg hover:shadow-brand/25"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
