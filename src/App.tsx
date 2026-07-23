import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import AICases from './components/AICases';
import CTA from './components/CTA';
import Projects from './components/Projects';
import RemoteSupport from './components/RemoteSupport';
import About from './components/About';
import SuccessCases from './components/SuccessCases';
import Contact from './components/Contact';
import SpecializedServices from './components/SpecializedServices';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PhoneButton from './components/PhoneButton';
import Portfolio from './pages/Portfolio';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <AICases />
      <CTA />
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
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <PhoneButton />
      </div>
    </BrowserRouter>
  );
}
