
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  skill: string;
  className?: string;
  index?: number;
}

const SkillBadge = ({ skill, className, index = 0 }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center px-3 py-1.5 m-1 rounded-full text-sm font-medium",
        "bg-white/80 dark:bg-black/50 backdrop-blur-sm border border-primary/10",
        "transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md",
        "hover:bg-primary/10 hover:border-primary/30",
        className
      )}
      style={{ 
        animationDelay: `${index * 50}ms`,
        transitionDelay: `${index * 50}ms` 
      }}
    >
      {skill}
    </div>
  );
};

export default SkillBadge;
