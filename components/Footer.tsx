import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Hansini</h3>
            <p className="opacity-90">
              Computer Science graduate passionate about bridging technology and people
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="opacity-90 hover:opacity-100 transition-opacity">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/hansini101"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/hansinisamarathunga"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; 2026 Hansini Samarathunga. All rights reserved.</p>
            <p>
              Crafted with{' '}
              <span className="text-accent">
                ❤️
              </span>{' '}
              and passion for great products
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
