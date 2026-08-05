import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5" style={{background: 'linear-gradient(180deg, #081020 0%, #060a14 100%)'}}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <img src="/logo.png" alt="Logical Net" className="h-10 w-auto" />
            </div>
            <p className="text-apple-gray-1 leading-relaxed mb-6 max-w-sm text-sm">
              Empresa de IT dedicada a PYMEs. Soluciones innovadoras de Inteligencia Artificial, automatización, desarrollo web y soporte técnico.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm">
              <a href="tel:+34601475239" className="text-apple-gray-1 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                601 475 239
              </a>
              <a href="https://wa.me/34601475239" target="_blank" rel="noopener noreferrer" className="text-apple-gray-1 hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </a>
            </div>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'x', 'linkedin'].map((social) => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-apple-gray-1 hover:text-white hover:border-brand/30 transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 17.176c-.149.267-.469.356-.734.208-2.013-1.229-4.546-1.505-7.528-.824-.287.065-.571-.113-.636-.397-.065-.284.113-.571.397-.636 3.312-.753 6.102-.431 8.359.943.265.148.354.468.206.734l.936-.028zm1.324-2.957c-.187.34-.588.453-.927.265-2.306-1.416-5.825-1.821-8.553-.997-.362.109-.742-.091-.851-.453-.109-.362.091-.742.453-.851 3.162-.957 7.072-.503 9.783 1.159.339.187.452.588.265.927l-.17.05zm.117-3.077C15.668 9.307 10.69 9.115 7.263 9.93c-.433.103-.881-.132-.984-.565-.103-.433.132-.881.565-.984 3.863-.927 9.496-.703 13.61 1.228.412.192.576.703.384 1.115-.192.412-.703.576-1.115.384z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Servicios</h3>
            <ul className="space-y-3">
              <li><Link to="/servicios" className="text-apple-gray-1 hover:text-white text-sm transition-colors">IA & Automatización</Link></li>
              <li><Link to="/servicios" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Desarrollo Web</Link></li>
              <li><Link to="/soporte" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Soporte IT</Link></li>
              <li><Link to="/servicios" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Marketing Digital</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Portfolio</Link></li>
              <li><Link to="/sobre-nosotros" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Sobre nosotros</Link></li>
              <li><Link to="/faq" className="text-apple-gray-1 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link to="/contacto" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-apple-gray-2 text-xs">
            &copy; {currentYear} Logical Net. Todos los derechos reservados.
          </p>
          <p className="text-apple-gray-2 text-xs">
            Logicalnet Group
          </p>
        </div>
      </div>
    </footer>
  );
}
