import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProfessionalSummary from '@/components/ProfessionalSummary';
import About from '@/components/About';
import HowIContribute from '@/components/HowIContribute';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import CareerInterests from '@/components/CareerInterests';
import Leadership from '@/components/Leadership';
import Skills from '@/components/Skills';
import BeyondWork from '@/components/BeyondWork';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <ProfessionalSummary />
      <About />
      <HowIContribute />
      <Journey />
      <Projects />
      <Experience />
      <CareerInterests />
      <Leadership />
      <Skills />
      <BeyondWork />
      <CurrentlyLearning />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
