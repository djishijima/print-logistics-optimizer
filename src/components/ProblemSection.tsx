
import React, { useEffect, useRef } from 'react';
import { problemCategories } from './problems/problemData';
import ProblemCategory from './problems/ProblemCategory';
import ProblemBackground from './problems/ProblemBackground';
import ProblemHeader from './problems/ProblemHeader';
import ProblemCTA from './problems/ProblemCTA';

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section 
      id="problems" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-bunshodo-light-gray/30"
    >
      {/* Background elements */}
      <ProblemBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <ProblemHeader />
        
        {/* Render Problem Categories */}
        {problemCategories.map((category, categoryIndex) => (
          <ProblemCategory 
            key={category.name}
            category={category}
            categoryIndex={categoryIndex}
          />
        ))}
        
        <ProblemCTA />
      </div>
    </section>
  );
};

export default ProblemSection;
