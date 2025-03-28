
import React from 'react';
import AnimatedText from './AnimatedText';
import ComparisonSection from './advantages/ComparisonSection';
import AdvantageCard from './advantages/AdvantageCard';
import AdditionalBenefitsSection from './advantages/AdditionalBenefitsSection';
import AwardSection from './advantages/AwardSection';
import { advantages, additionalBenefits, integrationExplanation } from './advantages/advantagesData';

const AdvantagesSection: React.FC = () => {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-bunshodo-light-gray">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-bunshodo-blue/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-bunshodo-green/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 reveal">
            文唱堂の強み
          </span>
          <h2 className="section-title reveal">
            なぜ文唱堂が選ばれるのか
          </h2>
          <p className="section-subtitle reveal">
            印刷会社でありながら物流もできる文唱堂ならではの統合アプローチの強みをご紹介します
          </p>
        </div>
        
        {/* 比較図を追加 - 従来方式と統合方式 */}
        <ComparisonSection 
          title={integrationExplanation.title}
          description={integrationExplanation.description}
          traditionalSystem={integrationExplanation.traditionalSystem}
          integratedSystem={integrationExplanation.integratedSystem}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              benefits={advantage.benefits}
              index={index}
            />
          ))}
        </div>
        
        <AdditionalBenefitsSection benefits={additionalBenefits} />
        
        <AwardSection />
      </div>
    </section>
  );
};

export default AdvantagesSection;
