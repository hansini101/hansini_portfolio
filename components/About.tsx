import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-03%20at%2018.03.28-bDcnGa5R9fBb2KdvFDKhFKLvoCDUyQ.jpeg"
                alt="Hansini with celestial backdrop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase">About Me</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary" style={{ fontFamily: 'var(--font-manrope)' }}>
                Who I Am
              </h2>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              I am a final-year BSc (Hons) Computer Science undergraduate at NSBM Green University, affiliated with Plymouth University (UK).
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              My interests extend beyond software development into Business Analysis, Product Management, User Experience Design, Quality Assurance, and Digital Transformation. I have contributed to AI, Healthcare, IoT, Mobile, and Web-based projects using Agile development practices.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I enjoy understanding user needs, analyzing business requirements, improving processes, and collaborating with teams to create solutions that deliver real value.
            </p>

            <div className="pt-6 space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest">Seeking Internship Opportunities In</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Business Analyst Intern',
                  'Product Analyst Intern',
                  'Associate Product Manager Intern',
                  'Digital Transformation Intern',
                  'Technology Analyst Intern',
                  'FinTech Analyst Intern',
                  'QA Intern',
                  'UI/UX Intern',
                ].map((role) => (
                  <div key={role} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></span>
                    <span className="text-foreground text-sm">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
