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

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
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
      <Footer />
    </div>
  );
}
