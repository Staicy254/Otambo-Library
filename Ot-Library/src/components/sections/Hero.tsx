
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import RevealText from '../ui/RevealText';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading time for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <div className="overflow-hidden mb-4">
            <p 
              className={`inline-block text-primary font-medium transform transition-transform duration-700 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              Software Engineer
            </p>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden">
            <RevealText as="span" delay={200} className="block">
              Jean Otambo
            </RevealText>
          </h1>
          
          <div className="overflow-hidden mb-8">
            <h2 
              className={`text-xl md:text-2xl text-foreground/80 max-w-2xl transform transition-all duration-700 delay-300 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              Front-End & Full-Stack Developer with Blockchain Expertise
            </h2>
          </div>
          
          <div className={`transform transition-all duration-700 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-hover-effect bg-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
              >
                Get in Touch
              </a>
              <a 
                href="#about" 
                className="btn-hover-effect bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-primary/20 text-foreground px-6 py-3 rounded-full font-medium transition-all hover:border-primary/40 hover:shadow-lg"
              >
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 text-foreground/70" />
      </a>
    </section>
  );
};

export default Hero;
