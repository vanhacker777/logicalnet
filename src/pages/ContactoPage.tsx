import Contact from '../components/Contact';

export default function ContactoPage() {
  return (
    <div className="pt-32">
      <section className="py-16 text-center" style={{background: 'linear-gradient(180deg, #0d1a30 0%, #0a1428 100%)'}}>
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-brand text-xs tracking-widest uppercase font-medium">Contacto</span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mt-3 mb-4">Hablemos de tu proyecto</h1>
          <p className="text-white/70 text-lg">Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución.</p>
        </div>
      </section>
      <Contact />
    </div>
  );
}
