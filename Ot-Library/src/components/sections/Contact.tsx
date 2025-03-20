import React, { useState } from 'react';
import { useInView } from '@/utils/animations';
import RevealText from '../ui/RevealText';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "jeanstaicy21@gmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+254748021385" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Nairobi, Kenya" }
  ];
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://linkedin.com" }
  ];

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <RevealText as="h2" className="section-title" threshold={0.5}>
          Get in Touch
        </RevealText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div 
            className={`transform transition-all duration-700 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-xl font-heading font-semibold mb-6">Send Me a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-primary/10 text-primary rounded-lg">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/70 dark:bg-black/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hover-effect w-full bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact information */}
          <div 
            className={`transform transition-all duration-700 delay-200 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="glass-card p-6 md:p-8 mb-8">
              <h3 className="text-xl font-heading font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-all hover:bg-primary/10 hover:text-primary"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              className={`glass-card p-6 md:p-8 transform transition-all duration-700 delay-300 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-xl font-heading font-semibold mb-6">Availability</h3>
              <p className="mb-4">
                I'm currently available for fulltime roles, freelance projects, or consultations
                in software engineering, front-end development, and blockchain projects.
              </p>
              <p className="text-foreground/80">
                Feel free to reach out if you have any questions or would like to discuss
                potential collaborations!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
