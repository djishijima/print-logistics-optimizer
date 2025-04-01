
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';
import { CheckCircle } from 'lucide-react';
import { CaseStudy } from './types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  return (
    <div className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <GlassPanelEffect
        className="p-8 h-full"
        intensity="light"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-6">
            <div className="mr-4 p-3 bg-bunshodo-blue/10 rounded-xl">
              {caseStudy.icon}
            </div>
            <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
          </div>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-bunshodo-medium-gray mb-2">課題</div>
            <p className="text-bunshodo-dark-gray">{caseStudy.challenge}</p>
          </div>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-bunshodo-medium-gray mb-2">解決策</div>
            <p className="text-bunshodo-dark-gray">{caseStudy.solution}</p>
          </div>
          
          <div className="mb-6">
            <div className="text-sm font-medium text-bunshodo-medium-gray mb-2">成果</div>
            <ul className="space-y-2">
              {caseStudy.results.map((result, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bunshodo-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto">
            <div className="bg-bunshodo-light-gray/30 p-4 rounded-lg border-l-4 border-bunshodo-blue">
              <p className="text-sm italic text-bunshodo-dark-gray mb-2">
                "{caseStudy.testimonial}"
              </p>
              <div className="text-xs font-medium text-bunshodo-blue">
                {caseStudy.roi}
              </div>
            </div>
          </div>
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default CaseStudyCard;
