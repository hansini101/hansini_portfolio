export default function ProfessionalSummary() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
              Professional Summary
            </h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Computer Science student with experience in Business Analysis, Product Thinking, Quality Assurance, UI/UX Design, and Software Development. Experienced in gathering requirements, designing user-focused solutions, documenting systems, and collaborating in Agile teams across AI, Healthcare, IoT, and Web application projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
