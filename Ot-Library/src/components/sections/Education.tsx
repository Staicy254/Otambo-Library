
import React from 'react';
import { useInView } from '@/utils/animations';
import RevealText from '../ui/RevealText';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period?: string;
}

const Education = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of The People",
      location: "California, PA",
    },
    {
      degree: "Diploma in Information Communication Technology",
      institution: "Meru University of Science & Technology",
      location: "Meru, Kenya",
    },
    {
      degree: "Kenya Certificate of Secondary Education",
      institution: "St. George's Girls' Secondary School",
      location: "Nairobi, Kenya",
    },
  ];

  const professionalDevelopment = [
    "Attended Build Americas Conference for AI & Apps – Snowflake",
    "Studied Blockchain & Web3 Technologies through self-paced training",
  ];

  const achievements = [
    "Awarded Employee of the Month at Capabuil LTD for the successful launch of an LMS system.",
  ];

  return (
    <section 
      id="education" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <RevealText as="h2" className="section-title" threshold={0.5}>
          Education & Achievements
        </RevealText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education column */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6">Academic Background</h3>
            
            <div className="space-y-6">
              {educationItems.map((edu, index) => (
                <div 
                  key={index}
                  className={`glass-card p-6 transform transition-all duration-700 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-foreground/80 mt-1">
                        {edu.institution} • {edu.location}
                      </p>
                      {edu.period && (
                        <p className="text-sm text-foreground/60 mt-1">{edu.period}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Development & Achievements */}
          <div>
            <div 
              className={`mb-10 transform transition-all duration-700 delay-300 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-heading font-semibold mb-6">Professional Development</h3>
              <div className="glass-card p-6">
                <ul className="space-y-4">
                  {professionalDevelopment.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div 
              className={`transform transition-all duration-700 delay-400 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-heading font-semibold mb-6">Achievements</h3>
              <div className="glass-card p-6">
                <ul className="space-y-4">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div 
              className={`mt-10 transform transition-all duration-700 delay-500 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-heading font-semibold mb-6">Interests</h3>
              <div className="glass-card p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                    <p>Blockchain & Web3 – Smart contract development, DeFi, and NFTs.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                    <p>Technology & Gadgets – Keeping up with the latest trends in AI and fintech.</p>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                    <p>Customer Service Excellence – Building intuitive and user-friendly experiences.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
