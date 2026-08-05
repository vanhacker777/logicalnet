import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SalesFlowDiagram from './components/SalesFlowDiagram';
import Services from './components/Services';
import Process from './components/Process';
import AICases from './components/AICases';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Projects from './components/Projects';
import RemoteSupport from './components/RemoteSupport';
import About from './components/About';
import SuccessCases from './components/SuccessCases';
import Contact from './components/Contact';
import SpecializedServices from './components/SpecializedServices';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import BeforeAfter from './components/BeforeAfter';
import PhoneButton from './components/PhoneButton';
import BackToTop from './components/BackToTop';
import StatsCounter from './components/StatsCounter';
import ClientLogos from './components/ClientLogos';
import LeadCapture from './components/LeadCapture';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import NotFound from './pages/NotFound';

function Home() {
  return (
    <>
      <Hero />
      <SalesFlowDiagram />
      <StatsCounter />
      <Services />
      <ClientLogos />
      <Process />
      <AICases />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <CTA />
      <LeadCapture />
      <Projects />
      <RemoteSupport />
      <About />
      <SuccessCases />
      <Contact />
      <SpecializedServices />
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
