
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-secondary/50 backdrop-blur-sm">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Jean Otambo</h3>
            <p className="text-muted-foreground max-w-md">
              Software Engineer specializing in front-end and full-stack development, 
              with expertise in blockchain technologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-all hover:bg-primary/10 hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-all hover:bg-primary/10 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:jeanstaicy21@gmail.com" 
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center transition-all hover:bg-primary/10 hover:text-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-muted-foreground">
              <a href="mailto:jeanstaicy21@gmail.com" className="hover:text-primary transition-colors">
                jeanstaicy21@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground">+254748021385</p>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Jean Otambo. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Software Engineer based in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
