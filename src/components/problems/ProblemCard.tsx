
import React from 'react';
import { Check } from 'lucide-react';
import GlassPanelEffect from '../GlassPanelEffect';
import { ProblemItem } from './problemData';

interface ProblemCardProps {
  problem: ProblemItem;
  index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, index }) => {
  return (
    <div 
      className="reveal transition-all duration-500 ease-out"
      style={{ transitionDelay: `${(index * 100) + 100}ms` }}
    >
      <div className="h-full group">
        <GlassPanelEffect
          className="p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
          intensity="medium"
          color="white"
        >
          <div className="flex flex-col h-full">
            <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-bunshodo-blue/10 to-bunshodo-green/10 flex items-center justify-center text-bunshodo-blue">
              {problem.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-bunshodo-dark-blue">{problem.title}</h3>
            <p className="text-bunshodo-medium-gray mb-6 flex-grow">{problem.description}</p>
            <div className="mt-auto pt-2 border-t border-bunshodo-light-gray">
              <div className="flex items-center mt-3 text-bunshodo-green font-medium">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-bunshodo-green/10 mr-3">
                  <Check className="h-4 w-4" />
                </div>
                <span>文唱堂印刷なら解決できます</span>
              </div>
            </div>
          </div>
        </GlassPanelEffect>
      </div>
    </div>
  );
};

export default ProblemCard;
