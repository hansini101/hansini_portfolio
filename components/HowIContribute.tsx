export default function HowIContribute() {
  const contributions = [
    {
      title: 'Business Analysis',
      icon: '📊',
      skills: [
        'Requirement Gathering',
        'Requirement Analysis',
        'User Stories',
        'Use Cases',
        'Process Mapping',
        'Stakeholder Communication',
        'Agile Methodology',
        'SDLC',
      ],
    },
    {
      title: 'Product Thinking',
      icon: '🎯',
      skills: [
        'Product Planning',
        'Sprint Planning',
        'Feature Prioritization',
        'Backlog Management',
        'User Journey Design',
        'Product Documentation',
      ],
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      skills: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'User Flows',
        'Responsive Design',
        'Design Thinking',
        'Figma',
      ],
    },
    {
      title: 'Quality Assurance',
      icon: '✓',
      skills: [
        'Manual Testing',
        'Test Cases',
        'Test Scenarios',
        'Bug Reporting',
        'API Testing',
        'Postman',
        'Test Documentation',
      ],
    },
    {
      title: 'Technology',
      icon: '⚙️',
      skills: [
        'React.js',
        'Next.js',
        'Flutter',
        'Django',
        'SQL',
        'MongoDB',
        'MySQL',
        'Firebase',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
            How I Contribute
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of business acumen, product thinking, design excellence, quality focus, and technical proficiency
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4">{contribution.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {contribution.title}
                </h3>

                {/* Skills */}
                <div className="space-y-2">
                  {contribution.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2">
                      <span className="text-accent text-lg mt-0.5">•</span>
                      <span className="text-sm text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
