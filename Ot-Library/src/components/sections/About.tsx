
import React from 'react';
import { useInView } from '@/utils/animations';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import RevealText from '../ui/RevealText';

const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const statsItems = [
    { 
      icon: <Briefcase className="w-6 h-6 text-primary" />, 
      value: "3+", 
      label: "Years Experience" 
    },
    { 
      icon: <GraduationCap className="w-6 h-6 text-primary" />, 
      value: "5+", 
      label: "Certifications" 
    },
    { 
      icon: <Code className="w-6 h-6 text-primary" />, 
      value: "15+", 
      label: "Technologies" 
    },
  ];
  
  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <RevealText 
          as="h2" 
          className="section-title mb-16" 
          threshold={0.5}
        >
          About Me
        </RevealText>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className={`transform transition-all duration-700 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="text-lg mb-6 leading-relaxed">
                I am a software engineer specializing in front-end and full-stack development, 
                with a strong ICT and Software Engineering foundation from ALX. 
              </p>
              
              <p className="text-lg mb-6 leading-relaxed">
                I have expertise in blockchain development, including smart contract creation, 
                Web3 integration, and compatibility with Ethereum Virtual Machine (EVM). 
              </p>
              
              <p className="text-lg leading-relaxed">
                I excel in building responsive, user-focused solutions using modern web technologies 
                like React, TypeScript, Next.js and Node.js. My passion lies in creating clean, 
                efficient code and intuitive user experiences.
              </p>
            </div>
          </div>
          
          <div>
            <div className={`glass-card p-6 transform transition-all duration-700 delay-200 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="font-heading text-xl font-semibold mb-6">Experience Highlights</h3>
              
              <div className="space-y-6">
                {statsItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4"
                    style={{ 
                      transitionDelay: `${200 + (index * 100)}ms`,
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'opacity 0.7s ease, transform 0.7s ease'
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading">{item.value}</div>
                      <div className="text-sm text-foreground/70">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 border-t border-border pt-6">
                <h4 className="font-medium mb-2">Location</h4>
                <p className="text-foreground/70">Nairobi, Kenya</p>
                
                <h4 className="font-medium mt-4 mb-2">Availability</h4>
                <p className="text-foreground/70">Full-time / Project-based</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
