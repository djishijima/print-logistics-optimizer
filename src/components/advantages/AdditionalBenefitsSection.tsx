
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  data: string;
}

interface AdditionalBenefitsSectionProps {
  benefits: BenefitItem[];
}

const AdditionalBenefitsSection: React.FC<AdditionalBenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="mt-16 mb-20 reveal">
      <GlassPanelEffect
        className="p-8 rounded-2xl"
        intensity="light"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">印刷×物流×倉庫の一元化による追加メリット</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 p-3 bg-bunshodo-blue/5 rounded-full">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-bunshodo-medium-gray text-sm mb-3">{benefit.description}</p>
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-bunshodo-green/10 text-bunshodo-green rounded-full text-sm font-medium">
                  {benefit.data}
                </span>
              </div>
            </div>
          ))}
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default AdditionalBenefitsSection;
