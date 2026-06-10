export default function CareerInterests() {
  const interests = [
    'Business Analysis',
    'Product Management',
    'Product Analytics',
    'Digital Transformation',
    'FinTech',
    'Quality Assurance',
    'User Experience Design'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-manrope)' }}>
            Career Interests
          </h2>
          <p className="text-lg text-foreground/80">
            Areas where I'm focused on building expertise and creating impact
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300 animate-fade-in-up flex items-center justify-center text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <p className="text-base font-semibold text-foreground">
                {interest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
