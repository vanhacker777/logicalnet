import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-4">
              <img src="/logo.png" alt="Logical Net" className="h-10 w-auto" />
            </div>
            <p className="text-apple-gray-1 leading-relaxed mb-6 max-w-sm text-sm">
              Empresa de IT dedicada a PYMEs. Soluciones innovadoras de Inteligencia Artificial, automatizacion, desarrollo web y soporte tecnico.
            </p>
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
              <li><a href="/#servicios" className="text-apple-gray-1 hover:text-white text-sm transition-colors">IA & Automatizacion</a></li>
              <li><a href="/#proyectos" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Desarrollo Web</a></li>
              <li><a href="/#soporte" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Soporte IT</a></li>
              <li><a href="/#servicios" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Marketing Digital</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/portfolio" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Portfolio</Link></li>
              <li><a href="/#about" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Sobre nosotros</a></li>
              <li><a href="/#contacto" className="text-apple-gray-1 hover:text-white text-sm transition-colors">Contacto</a></li>
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
