export default function Skills() {
  const skillCategories = [
    {
      title: 'Business & Product',
      skills: [
        'Requirement Gathering',
        'User Stories',
        'Use Cases',
        'Process Analysis',
        'Agile',
        'Scrum',
        'SDLC',
      ],
    },
    {
      title: 'User Experience',
      skills: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Figma',
        'User Flows',
      ],
    },
    {
      title: 'Quality Assurance',
      skills: [
        'Manual Testing',
        'API Testing',
        'Postman',
        'Bug Reporting',
        'Test Documentation',
      ],
    },
    {
      title: 'Technical',
      skills: [
        'React.js',
        'Next.js',
        'Flutter',
        'Django',
        'SQL',
        'MongoDB',
        'MySQL',
      ],
    },
    {
      title: 'Tools',
      skills: [
        'Jira',
        'Trello',
        'Figma',
        'Lucidchart',
        'Draw.io',
        'Excel',
        'PowerPoint',
        'Canva',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A versatile skill set spanning business analysis, product thinking, design, quality assurance, and technology
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-5 sm:mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-2 bg-accent/10 text-accent rounded-full font-medium text-xs sm:text-sm border border-accent/20 hover:border-accent hover:bg-accent/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
