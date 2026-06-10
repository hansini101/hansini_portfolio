import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowIContribute from '@/components/HowIContribute';
import Journey from '@/components/Journey';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
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
      <About />
      <HowIContribute />
      <Journey />
      <Projects />
      <Experience />
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
