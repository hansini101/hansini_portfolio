export default function CurrentlyLearning() {
  const learningAreas = [
    {
      title: 'SQL & Database Design',
      description: 'Mastering advanced SQL queries, database optimization, and data modeling for product analytics',
      icon: '💾',
    },
    {
      title: 'Agile & Scrum Frameworks',
      description: 'Deep dive into Agile methodologies, sprint planning, and iterative product development',
      icon: '⚡',
    },
    {
      title: 'Jira & Project Management',
      description: 'Advanced Jira workflows, issue tracking, and team collaboration tools for product teams',
      icon: '📊',
    },
    {
      title: 'Product Strategy & Vision',
      description: 'Understanding product roadmapping, market positioning, and competitive analysis',
      icon: '🎯',
    },
    {
      title: 'Business Analysis Frameworks',
      description: 'SWOT analysis, process mapping, and stakeholder analysis for strategic decisions',
      icon: '📈',
    },
    {
      title: 'Advanced Data Analytics',
      description: 'Metrics, KPIs, and data-driven decision making for product improvement',
      icon: '📉',
    },
  ];

  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Currently Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding expertise in business analysis, product management, and data-driven decision making
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningAreas.map((area, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow hover:border-accent"
            >
              <div className="mb-4 text-4xl">{area.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{area.title}</h3>
              <p className="text-card-foreground leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div className="mt-12 p-8 rounded-lg bg-card border-l-4 border-accent">
          <h3 className="text-2xl font-bold text-primary mb-4">My Learning Approach</h3>
          <p className="text-card-foreground leading-relaxed mb-4">
            I believe that staying ahead in business analysis and product management requires continuous learning. I actively pursue knowledge in emerging tools, frameworks, and methodologies to deliver better product solutions and drive meaningful business impact.
          </p>
          <p className="text-card-foreground leading-relaxed">
            My learning strategy focuses on both theoretical understanding and practical application, ensuring that every skill I develop can be immediately applied to solve real-world product challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
