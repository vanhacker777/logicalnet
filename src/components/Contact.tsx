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
    <section id="contacto" className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-brand text-sm font-semibold uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Contactanos y pide tu presupuesto
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Tu nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="Nombre completo"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Tu correo electronico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="email@ejemplo.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Telefono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="Tu telefono"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Asunto</label>
              <select
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
              >
                <option value="" className="bg-[#0f172a]">Selecciona un asunto</option>
                <option value="ia" className="bg-[#0f172a]">IA & Automatizacion</option>
                <option value="web" className="bg-[#0f172a]">Desarrollo Web</option>
                <option value="soporte" className="bg-[#0f172a]">Soporte IT</option>
                <option value="otro" className="bg-[#0f172a]">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">Tu mensaje (opcional)</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none"
              placeholder="Describe tu proyecto o necesidad..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-brand/25 hover:-translate-y-0.5"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
