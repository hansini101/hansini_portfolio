import Image from 'next/image';

export default function Experience() {
  const experiences = [
    {
      title: 'Council Member',
      description: 'FOSS Community of NSBM - Active participant and council member in FOSS (Free and Open Source Software) community, contributing to tech community building and innovation.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2010.22.06-00HdHsrILVpvSXHnKbSZ7QDoYzkqfw.jpeg',
      alt: 'FOSS Community event'
    },
    {
      title: 'Designing Team Lead',
      description: 'Women in FOSS - Leading design initiatives and fostering collaboration among women in open-source communities, strengthening communication and teamwork.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2010.15.43-LdFaHHAh8rhgghM4081Cy8BIfICjJ7.jpeg',
      alt: 'Women in FOSS initiative'
    },
    {
      title: 'Event Volunteer',
      description: 'Arduino Day 2025 - Actively engaged in community initiatives, fostering collaboration and knowledge sharing among developers and makers.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2010.15.42-TPBURLe6k2f90aYKlT2L9iFVSo2ELF.jpeg',
      alt: 'Arduino Day 2025 community event'
    },
    {
      title: 'Community Organizer',
      description: 'HackTo Night 2.0 - Organizing community hackathons and professional networking opportunities, strengthening collaboration, communication, and organizational skills.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-04%20at%2010.15.43%20%281%29-2R44s4RNOZMD74joF1VbIMSmPt5Udl.jpeg',
      alt: 'HackTo Night 2.0 community event'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
            Experience & Community
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Beyond academics, I actively engage with communities, contribute to open-source initiatives, and participate in events that shape my professional growth
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-primary mb-3" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {exp.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
