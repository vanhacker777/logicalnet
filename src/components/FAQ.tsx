import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    q: '¿Qué servicios ofrece Logical Net?',
    a: 'Ofrecemos IA y automatización, desarrollo web, soporte IT y migración a la nube. Nos especializamos en PYMEs que quieren digitalizarse y aumentar sus ventas.',
  },
  {
    q: '¿Cómo puede la IA aumentar mis ventas?',
    a: 'La IA automatiza la captación de clientes, mejora la atención 24/7 y optimiza tus procesos comerciales para convertir más visitas en ventas. Nuestros clientes ven un incremento medio del 30-40% en conversiones.',
  },
  {
    q: '¿Es gratis el diagnóstico?',
    a: 'Sí, nuestro diagnóstico inicial es gratuito y sin compromiso. Analizamos tu empresa y te mostramos dónde la IA puede ahorrarte tiempo y dinero.',
  },
  {
    q: '¿Trabajáis solo en Madrid?',
    a: 'No, trabajamos en toda España. Muchos de nuestros clientes están en Madrid, pero damos soporte remoto a empresas de cualquier comunidad autónoma.',
  },
  {
    q: '¿Hacéis soporte de servidores y NAS?',
    a: 'Sí, damos mantenimiento a servidores físicos y en la nube, NAS de Synology y correo en la nube. Soporte continuo o por incidencias.',
  },
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Cada proyecto es único. El diagnóstico inicial es gratuito y te damos un presupuesto cerrado sin compromiso. Trabajamos con presupuestos fijos, sin sorpresas.',
  },
  {
    q: '¿Necesito saber de tecnología?',
    a: 'No. Nosotros nos encargamos de todo. Tú nos cuentas qué necesitas y nosotros lo implementamos. Te explicamos todo en un lenguaje sencillo.',
  },
  {
    q: '¿Cuánto tarda un proyecto?',
    a: 'Depende de la complejidad. Una automatización sencilla puede estar lista en 1-2 semanas. Un desarrollo web o app puede tardar 1-3 meses. Siempre te damos plazos claros.',
  },
];

function FAQItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-gray-100 transition-colors duration-200 rounded-xl"
      >
        <span className="text-gray-900 font-medium text-base pr-4">{faq.q}</span>
        <svg
          className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation(0.1);

  return (
    <section id="faq" className="py-32 relative" style={{background: 'linear-gradient(180deg, #f5f7fa 0%, #ffffff 50%, #f5f7fa 100%)'}}>
      <div className="max-w-3xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <span className={`scroll-hidden ${titleVisible ? 'scroll-visible' : ''} text-brand text-sm font-medium tracking-widest uppercase`}>
            FAQ
          </span>
          <h2 className={`scroll-hidden scroll-hidden-delay-1 ${titleVisible ? 'scroll-visible' : ''} text-4xl sm:text-5xl font-bold text-gray-900 mt-4 tracking-tight`}>
            Preguntas frecuentes
          </h2>
          <p className={`scroll-hidden scroll-hidden-delay-2 ${titleVisible ? 'scroll-visible' : ''} text-gray-600 text-lg mt-4 max-w-xl mx-auto`}>
            Resolvemos tus dudas antes de que las tengas.
          </p>
        </div>

        <div ref={listRef} className={`scroll-hidden ${listVisible ? 'scroll-visible' : ''} glass-card-light rounded-2xl overflow-hidden border border-gray-200`}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <p className={`scroll-hidden scroll-hidden-delay-3 ${listVisible ? 'scroll-visible' : ''} text-center text-gray-500 text-sm mt-8`}>
          ¿No encuentras tu pregunta? <a href="https://wa.me/34601475239" target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark transition-colors">Pregúntanos por WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
