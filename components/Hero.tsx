import Image from 'next/image';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Hansini Samarathunga
                </h1>
              </div>
              <div>
                <p className="text-2xl font-semibold text-secondary mb-3">
                  Business Analyst | Product Analyst | UI/UX Enthusiast
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Computer Science undergraduate passionate about Business Analysis, Product Thinking, User Experience Design, Quality Assurance, and building technology-driven solutions that create real value for users and organizations.
                </p>
              </div>
            </div>

            <div className="pt-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Bridging Business, Users, and Technology.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="/business-cv.pdf"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:shadow-lg hover:bg-primary/90 transition-all duration-300"
              >
                Download Business CV
              </a>
              <a
                href="/it-cv.pdf"
                className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:shadow-lg hover:bg-accent/90 transition-all duration-300"
              >
                Download IT CV
              </a>
              <a
                href="https://www.linkedin.com/in/hansinisamarathunga"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                View LinkedIn
              </a>
              <a
                href="https://github.com/hansini101"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                View GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a href="https://www.linkedin.com/in/hansinisamarathunga" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/hansini101" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:hansinisamrathunga65@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%2018.03.09-zcq5WpRKNvTQ5xGlXiEAIgBqbr0Nox.jpeg"
                alt="Hansini Samarathunga"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <ArrowDown className="text-accent" size={24} />
        </div>
      </div>
    </section>
  );
}
