export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Sidebar */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary border-l-4 border-accent pl-4">
              Education
            </h2>
            <p className="text-accent font-semibold italic">Continuous learning & growth</p>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* University */}
            <div className="pb-8 border-b border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🎓</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">NSBM Green University</h3>
                  <p className="text-lg text-accent font-semibold mb-2">
                    Bachelor of Science (Honours) in Computer Science
                  </p>
                  <p className="text-card-foreground mb-2">Expected Graduation: 2026</p>
                  <p className="text-card-foreground">Specialized in system design, software development, business analysis, and digital innovation</p>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Relevant Coursework & Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'System Analysis & Design',
                  'Computing Group Project',
                  'Mobile Application Development',
                  'Software Development Practices',
                  'Database Management',
                  'IoT Systems',
                  'Web Development',
                  'Product Design',
                ].map((course) => (
                  <div key={course} className="p-4 rounded bg-background border border-border hover:border-accent transition-colors">
                    <p className="text-card-foreground font-medium">{course}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Growth */}
            <div className="p-6 rounded-lg bg-background border-l-4 border-accent">
              <h3 className="text-lg font-bold text-primary mb-3">Philosophy on Learning</h3>
              <p className="text-card-foreground leading-relaxed">
                I believe that education extends beyond the classroom. Continuous learning, engaging with communities, and applying knowledge to solve real-world problems are integral to my growth journey. My academic foundation combined with practical project experience has shaped my approach to problem-solving and product thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
