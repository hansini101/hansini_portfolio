export default function WhatIDo() {
  const services = [
    {
      icon: '📊',
      title: 'Business Analysis',
      description: 'Understanding requirements, identifying business needs, and translating problems into actionable solutions.',
    },
    {
      icon: '🎨',
      title: 'User Experience Design',
      description: 'Designing intuitive and user-centered digital experiences through research and design thinking.',
    },
    {
      icon: '✓',
      title: 'Quality Assurance',
      description: 'Ensuring software quality through testing, validation, and continuous improvement.',
    },
    {
      icon: '⚙️',
      title: 'Technology Solutions',
      description: 'Building web, mobile, AI, and IoT applications that solve real-world problems.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What I Do</h2>
          <p className="text-lg text-card-foreground max-w-2xl mx-auto">
            A blend of technical expertise, business thinking, and creative problem-solving
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-background"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
