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
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Navbar />
      <Hero />
      <SectionDivider image="/img-datacenter.jpg" alt="Infraestructura tecnologica" />
      <Services />
      <SectionDivider image="/img-robot.jpg" alt="Robotica e inteligencia artificial" height="h-48" />
      <Process />
      <AICases />
      <SectionDivider image="/img-analytics.jpg" alt="Analisis de datos con IA" height="h-48" />
      <CTA />
      <Projects />
      <SectionDivider image="/img-cyber.jpg" alt="Ciberseguridad y soporte IT" />
      <RemoteSupport />
      <About />
      <SectionDivider image="/img-team.jpg" alt="Equipo de profesionales" height="h-48" />
      <SuccessCases />
      <Contact />
      <SpecializedServices />
      <Footer />
    </div>
  );
}
