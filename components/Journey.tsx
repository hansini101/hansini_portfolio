export default function Journey() {
  const milestones = [
    {
      icon: '🎨',
      title: 'Creative Explorer',
      description: 'Discovering the intersection of design and technology',
    },
    {
      icon: '💻',
      title: 'Computer Science Student',
      description: 'Building technical foundation at NSBM Green University',
    },
    {
      icon: '🚀',
      title: 'Product Builder',
      description: 'Creating solutions that solve real-world problems',
    },
    {
      icon: '📊',
      title: 'Business Analysis Enthusiast',
      description: 'Understanding business problems and translating needs',
    },
    {
      icon: '🎯',
      title: 'Future Product Manager',
      description: 'Leading products that create meaningful impact',
    },
  ];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">My Journey</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            A continuous evolution from creative exploration to transforming ideas into meaningful solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent to-muted transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex gap-6 md:gap-0 relative animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Timeline dot */}
                <div className="flex flex-col items-center md:w-1/2 md:text-right md:pr-16">
                  <div className="flex items-center justify-center">
                    <div className="absolute left-0 md:left-auto md:relative w-12 h-12 rounded-full bg-card border-4 border-accent shadow-lg flex items-center justify-center text-2xl z-10">
                      {milestone.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-20 md:pl-16 md:text-left animate-fade-in-up`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                    <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-foreground leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
