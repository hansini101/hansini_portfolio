import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'EmoSense',
      subtitle: 'AI-Powered Emotion Recognition & Mental Wellness Platform',
      description:
        'A data-driven platform that leverages AI to detect student emotions and deliver personalized wellness interventions. Demonstrates product-market fit analysis, requirement engineering, and end-to-end product development lifecycle.',
      role: 'Product Owner • Business Analyst • Researcher • Developer',
      technologies: ['React', 'Django', 'TensorFlow', 'OpenCV', 'Python'],
      keyContributions: ['Product Planning', 'Requirements Analysis', 'Business Case Development', 'System Architecture', 'Stakeholder Engagement'],
      github: 'https://github.com/hansini101/EmoSense',
    },
    {
      title: 'FloodSense',
      subtitle: 'IoT-Based Flood Disaster Monitoring System',
      description:
        'A critical infrastructure monitoring solution integrating IoT sensors with real-time analytics. Demonstrates user-centric design, requirements prioritization, and stakeholder management in disaster management domain.',
      role: 'Mobile Application Developer • UI/UX Designer • Product Analyst',
      technologies: ['Flutter', 'ESP32', 'IoT Sensors', 'Firebase'],
      keyContributions: ['Requirements Gathering', 'UI/UX Design', 'Mobile App Development', 'System Integration & Testing'],
      github: 'https://github.com/nadeelifthi2003/Flood-Sense',
    },
    {
      title: 'UniBridge',
      subtitle: 'Student Collaboration & Resource Management Platform',
      description:
        'A comprehensive platform addressing fragmented student communication challenges through integrated collaboration features. Demonstrates problem identification, feature prioritization, and user feedback analysis in educational technology.',
      role: 'Business Analyst • System Designer • Developer',
      technologies: ['Full-Stack Development', 'Collaboration Features', 'Resource Management'],
      keyContributions: ['User Need Analysis', 'Feature Specification', 'System Architecture', 'User Testing & Feedback'],
      github: 'https://github.com/MUA1234/UniBridge',
    },
    {
      title: 'Livora',
      subtitle: 'Interior Design & Furniture Management Desktop Application',
      description:
        'A desktop application designed to streamline furniture inventory management, customer interactions, and interior design planning for furniture businesses.',
      role: 'UI/UX Designer • System Designer • Developer',
      technologies: ['Desktop Application', 'System Design', 'Database Management', 'UI/UX Design'],
      keyContributions: ['User Interface Design', 'Desktop Application Development', 'System Analysis', 'Furniture Management Features'],
      github: 'https://github.com/hansini101/Livora',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into impactful digital solutions through technology, design, and strategic thinking
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all duration-300 bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                      <p className="text-xl text-secondary font-semibold">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-8"></div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Role</p>
                    <p className="text-foreground leading-relaxed">{project.role}</p>
                    
                    <div className="mt-8">
                      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Key Contributions</p>
                      <div className="flex flex-wrap gap-3">
                        {project.keyContributions.map((contribution) => (
                          <span
                            key={contribution}
                            className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-accent/10 transition-colors"
                          >
                            {contribution}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium text-sm border border-accent/20 hover:border-accent transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-8"></div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all duration-300 font-medium group/btn"
                  >
                    <Github size={18} />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
