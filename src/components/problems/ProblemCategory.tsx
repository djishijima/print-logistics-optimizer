
import React from 'react';
import ProblemCard from './ProblemCard';
import { ProblemCategory as ProblemCategoryType } from './problemData';

interface ProblemCategoryProps {
  category: ProblemCategoryType;
  categoryIndex: number;
}

const ProblemCategory: React.FC<ProblemCategoryProps> = ({ category, categoryIndex }) => {
  return (
    <div className="mb-16 last:mb-0 reveal" style={{ transitionDelay: `${categoryIndex * 100}ms` }}>
      <h3 className="text-2xl font-bold text-bunshodo-blue mb-8 text-center">
        <span className="inline-block px-6 py-2 bg-bunshodo-blue/10 rounded-full">
          {category.name}に関するお悩み
        </span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.problems.map((problem, index) => (
          <ProblemCard 
            key={index} 
            problem={problem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemCategory;
