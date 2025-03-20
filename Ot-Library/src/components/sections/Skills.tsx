
import React from 'react';
import { useInView } from '@/utils/animations';
import RevealText from '../ui/RevealText';
import SkillBadge from '../ui/SkillBadge';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript", "Vue.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "APIs", "PostgreSQL", "MySQL", "MEAN Stack"]
    },
    {
      title: "Blockchain",
      skills: ["Solidity", "Web3.js", "Ether.js", "Smart Contracts", "EVM"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "AWS", "WordPress"]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-secondary/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <RevealText as="h2" className="section-title" threshold={0.5}>
          Technical Skills
        </RevealText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`glass-card p-6 md:p-8 transform transition-all duration-700 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-heading font-semibold mb-6">{category.title}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, i) => (
                  <SkillBadge 
                    key={skill} 
                    skill={skill} 
                    index={(index * 10) + i} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-12 text-center transform transition-all duration-700 delay-300 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            I'm continuously expanding my skill set and staying up-to-date with the latest technologies
            and best practices in software development and blockchain technologies.
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-heading font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                MEAN Stack Development
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Web Development – John Hopkins University
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Software Engineering – ALX Program
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                Cyfrin Updraft Blockchain Certification
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
