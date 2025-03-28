
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';
import { CheckCircle2 } from 'lucide-react';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  icon,
  title,
  description,
  benefits,
  index
}) => {
  return (
    <div className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <GlassPanelEffect
        className="p-8 h-full flex flex-col"
        intensity="light"
      >
        <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-2xl bg-white shadow-md">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-bunshodo-medium-gray mb-6">{description}</p>
        {/* 具体的なメリットをリスト表示 */}
        <div className="mt-auto">
          <div className="space-y-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-bunshodo-green mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-bunshodo-dark-gray">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default AdvantageCard;
