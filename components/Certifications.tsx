export default function Certifications() {
  const certifications = [
    {
      title: 'Google Career Certificates',
      issuer: 'Google',
      description: 'Professional development in product and business fundamentals',
    },
    {
      title: 'Agile & Scrum Fundamentals',
      issuer: 'Professional Training Institute',
      description: 'Certified understanding of Agile methodologies and Scrum frameworks',
    },
    {
      title: 'Business Analysis Essentials',
      issuer: 'Professional Development Program',
      description: 'Core competencies in requirements gathering and stakeholder management',
    },
    {
      title: 'UI/UX Design Certification',
      issuer: 'Design Excellence Program',
      description: 'Advanced principles in user interface and user experience design',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Certifications & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in business analysis and product management
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">📜</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-1">{cert.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-card-foreground">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
