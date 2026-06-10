import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'EmoSense',
      subtitle: 'AI-Powered Emotion Recognition & Mental Wellness Platform',
      description:
        'An AI-powered web application that detects human emotions through facial expression analysis and provides personalized wellness recommendations and mood tracking for users.',
      role: 'Requirement Analysis • User Journey Planning • Frontend Development • System Testing • Project Documentation • AI Feature Integration',
      technologies: ['React.js', 'Django', 'TensorFlow', 'OpenCV', 'Tailwind CSS', 'REST APIs'],
      keyContributions: ['Requirement Analysis', 'User Journey Planning', 'Frontend Development', 'System Testing', 'Project Documentation', 'AI Integration'],
      github: 'https://github.com/hansini101/EmoSense',
    },
    {
      title: 'FloodSense',
      subtitle: 'IoT-Based Flood Monitoring & Early Warning System',
      description:
        'An IoT-based disaster management solution that monitors environmental conditions and provides early flood warnings through a mobile application and sensor network.',
      role: 'Requirement Gathering • Mobile Application Development • Testing & Validation • Documentation • Software-Hardware Integration',
      technologies: ['Flutter', 'Firebase', 'ESP32', 'IoT Sensors', 'GSM Module'],
      keyContributions: ['Requirement Gathering', 'Mobile App Development', 'Testing & Validation', 'Documentation', 'Hardware Integration'],
      github: 'https://github.com/nadeelifthi2003/Flood-Sense',
    },
    {
      title: 'DocuHealth',
      subtitle: 'Patient Record Management System',
      description:
        'A healthcare management platform designed to streamline patient record management, appointment workflows, and healthcare operations.',
      role: 'Workflow Analysis • Frontend Development • UI Implementation • Testing • UX Improvements',
      technologies: ['Next.js', 'React.js', 'MongoDB', 'Tailwind CSS'],
      keyContributions: ['Workflow Analysis', 'Frontend Development', 'UI Implementation', 'Testing', 'UX Improvements'],
      github: 'https://github.com/hansini101/DocuHealth',
    },
    {
      title: 'UniBridge',
      subtitle: 'University Events & News Platform',
      description:
        'A web-based platform that enables students to discover university events, announcements, and news while improving engagement and communication across the university community.',
      role: 'Authentication Module Development • Admin Dashboard Development • User Profile Management • UI/UX Improvements',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      keyContributions: ['Authentication Module', 'Admin Dashboard', 'User Profile Management', 'UI/UX Improvements', 'Student Engagement'],
      github: 'https://github.com/MUA1234/UniBridge',
    },
    {
      title: 'Livora',
      subtitle: 'Interior Design & Furniture Management Desktop Application',
      description:
        'A desktop application developed for furniture and interior design businesses to manage products, customer interactions, and business operations efficiently.',
      role: 'UI Design • Feature Planning • Development Support • User Experience Design',
      technologies: ['Java', 'Desktop Application', 'Database Management', 'UI/UX Design'],
      keyContributions: ['UI Design', 'Feature Planning', 'Development Support', 'UX Design', 'Business Workflow'],
      github: 'https://github.com/hansini101/Livora',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">Featured Projects</h2>
          <p className="text-base sm:text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
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
              <div className="p-6 sm:p-8 md:p-12">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors break-words">{project.title}</h3>
                      <p className="text-base sm:text-xl text-secondary font-semibold leading-snug">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-foreground text-base sm:text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-8"></div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                  {/* Left Column */}
                  <div>
                    <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Role</p>
                    <p className="text-foreground leading-relaxed">{project.role}</p>
                    
                    <div className="mt-8">
                      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Key Contributions</p>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.keyContributions.map((contribution) => (
                          <span
                            key={contribution}
                            className="px-3 sm:px-4 py-2 bg-muted text-foreground rounded-lg text-xs sm:text-sm font-medium hover:bg-accent/10 transition-colors"
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
                          className="px-3 sm:px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium text-xs sm:text-sm border border-accent/20 hover:border-accent transition-colors"
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all duration-300 font-medium group/btn w-full sm:w-auto"
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
