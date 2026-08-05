import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SalesFlowDiagram from './components/SalesFlowDiagram';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import PhoneButton from './components/PhoneButton';
import BackToTop from './components/BackToTop';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Servicios from './pages/Servicios';
import Soporte from './pages/Soporte';
import SobreNosotros from './pages/SobreNosotros';
import FaqPage from './pages/FaqPage';
import ContactoPage from './pages/ContactoPage';
import NotFound from './pages/NotFound';

function Home() {
  return (
    <>
      <Hero />
      <SalesFlowDiagram />
      <Services />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{background: '#080c18'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppChat />
        <PhoneButton />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
