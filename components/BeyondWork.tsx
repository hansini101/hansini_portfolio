export default function BeyondWork() {
  const interests = [
    { emoji: '🎨', title: 'Designing', description: 'Creating beautiful and functional designs' },
    { emoji: '🖌️', title: 'Painting & Crafting', description: 'Exploring creative expression through art' },
    { emoji: '📸', title: 'Photography', description: 'Capturing moments and perspectives' },
    { emoji: '🎤', title: 'Singing', description: 'Expressing myself through music' },
    { emoji: '💃', title: 'Dancing', description: 'Enjoying rhythm and movement' },
    { emoji: '📚', title: 'Reading', description: 'Learning from books and stories' },
    { emoji: '🤝', title: 'Volunteering', description: 'Giving back to the community' },
    { emoji: '🌍', title: 'Community Engagement', description: 'Making a positive impact' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
            Beyond Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I believe creativity, community, and continuous learning shape who I am. These interests help me bring fresh perspectives, empathy, and creativity into the solutions I build.
          </p>
        </div>

        {/* Interest Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-5xl mb-4">{interest.emoji}</div>
              <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-manrope)' }}>
                {interest.title}
              </h3>
              <p className="text-sm text-muted-foreground">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
