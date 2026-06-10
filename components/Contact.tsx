'use client';

import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-manrope)' }}>
            Let&apos;s Connect
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m always open to discussing product, technology, business analysis, and new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <a
                href="mailto:hansinisamrathunga65@gmail.com"
                className="flex items-start gap-4 p-4 sm:p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/50 transition-all group animate-fade-in-up"
              >
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-foreground text-sm break-all">hansinisamrathunga65@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 sm:p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/50 transition-all group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-accent flex-shrink-0 mt-1 text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-foreground text-sm">+94 71 045 1460</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hansinisamarathunga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 sm:p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/50 transition-all group animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                <Linkedin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">LinkedIn</h3>
                  <p className="text-foreground text-sm break-all">Hansini Samarathunga</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hansini101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 sm:p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-accent/50 transition-all group animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Github className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">GitHub</h3>
                  <p className="text-foreground text-sm break-all">@hansini101</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border p-6 sm:p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 rounded bg-green-50 border border-green-200 text-green-800">
                  <p className="font-medium">Thanks for reaching out! I&apos;ll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
