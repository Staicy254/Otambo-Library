
import React from 'react';
import { useInView } from '@/utils/animations';
import RevealText from '../ui/RevealText';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  
  const experiences: ExperienceItem[] = [
    {
      role: "Software Engineer | IT Manager",
      company: "ProsperMinds Limited",
      location: "Nairobi, Kenya",
      period: "03/2024 - 02/2025",
      description: [
        "Engineered and launched an online LMS.",
        "Collaborated with clients to gather requirements and deliver custom web solutions on time and within budget.",
        "Implemented media queries and breakpoints to ensure seamless responsiveness across all devices. Utilized proper tests and stress testing.",
        "Regularly monitored website responsiveness and client outreach."
      ]
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Zendawa Africa",
      location: "Nairobi, Kenya",
      period: "04/2024 - 07/2024",
      description: [
        "Developed and maintained the Zendawa web app and website.",
        "Utilized Google Analytics to track user interactions, improving bounce rate by 15%."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Oasis Infobyte",
      location: "New Delhi, India",
      period: "02/2024 - 03/2024",
      description: [
        "Created various projects using HTML, CSS, and JavaScript.",
        "Implemented SEO techniques, improving website visibility by 20%."
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Upwork",
      location: "Nairobi, Kenya",
      period: "01/2023 - 01/2024",
      description: [
        "Developed and deployed websites for various clients."
      ]
    },
    {
      role: "IT Technician",
      company: "Pivot Networks",
      location: "Nairobi, Kenya",
      period: "06/2023 - 12/2023",
      description: [
        "Maintained a comprehensive inventory of hardware and software for all company servers, laptops, and mobile devices.",
        "Maintained an up-to-date security alert database for all company sites and servers.",
        "Provided tech support for various customers in the IT department.",
        "Managed and maintained the ticketing system."
      ]
    }
  ];

  return (
    <section 
      id="experience" 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <RevealText as="h2" className="section-title" threshold={0.5}>
          Work Experience
        </RevealText>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease'
              }}
            >
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-y-2 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold">{exp.role}</h3>
                    <div className="flex items-center mt-1">
                      <Briefcase className="w-4 h-4 text-primary mr-2" />
                      <p className="text-foreground/80">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="min-w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3"></div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
