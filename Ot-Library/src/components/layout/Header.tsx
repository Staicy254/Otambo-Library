
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useScrollProgress } from '@/utils/animations';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const scrollProgress = useScrollProgress();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section for nav highlighting
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <div className={cn(
        "absolute inset-0 transition-all duration-300",
        isScrolled ? "backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-md" : "bg-transparent"
      )} />
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      
      <nav className="section-container py-4 relative">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-heading font-bold relative z-10 transition-all duration-300"
          >
            Jean <span className="text-primary">Otambo</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-item text-sm font-medium transition-all py-2",
                  activeSection === item.href.substring(1) 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "rotate-45 translate-y-1.5"
            )} />
            <div className={cn(
              "w-6 h-0.5 bg-foreground my-1.5 transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )} />
            <div className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "-rotate-45 -translate-y-1.5"
            )} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden absolute top-full left-0 w-full py-4 px-4",
          "transition-all duration-300 ease-in-out transform",
          "backdrop-blur-md bg-white/95 dark:bg-black/95 border-b border-border",
          mobileMenuOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "-translate-y-10 opacity-0 pointer-events-none"
        )}>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2 px-4 rounded-md transition-all",
                  activeSection === item.href.substring(1) 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground/80 hover:bg-primary/5 hover:text-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
