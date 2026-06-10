export default function Leadership() {
  const roles = [
    {
      title: 'FOSS Community of NSBM',
      position: 'Council Member',
      icon: '🌍',
    },
    {
      title: 'Women in FOSS',
      position: 'Organizing Committee Member',
      icon: '👩‍💼',
    },
    {
      title: 'Design Team',
      position: 'Team Lead & Community Organizer',
      icon: '🎨',
    },
    {
      title: 'Volunteer Initiatives',
      position: 'Technology Communities & Events',
      icon: '🤝',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Sidebar */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4">
              Leadership & Community
            </h2>
            <p className="text-accent font-semibold italic">Building communities beyond the classroom</p>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <p className="text-lg text-card-foreground leading-relaxed mb-12">
              I&apos;m passionate about creating meaningful communities and fostering collaboration in technology spaces. Through various leadership roles, I&apos;ve worked to empower students, promote open-source contributions, and organize community initiatives that strengthen our tech ecosystem.
            </p>

            {/* Leadership Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-background hover:border-accent hover:shadow-md transition-all"
                >
                  <div className="text-3xl mb-3">{role.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-2">{role.title}</h3>
                  <p className="text-card-foreground font-medium">{role.position}</p>
                </div>
              ))}
            </div>

            {/* Impact Section */}
            <div className="mt-12 p-8 rounded-lg bg-background border border-accent">
              <h3 className="text-xl font-bold text-primary mb-4">Impact & Engagement</h3>
              <ul className="space-y-3">
                {[
                  'Organizing community events and workshops',
                  'Mentoring students in technology and open-source',
                  'Advocating for diversity and inclusion in tech',
                  'Supporting student engagement and collaboration',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-card-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
