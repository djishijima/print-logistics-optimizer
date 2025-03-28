
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';
import { Award } from 'lucide-react';

const AwardSection: React.FC = () => {
  return (
    <div className="mt-20 reveal">
      <GlassPanelEffect
        className="p-8 md:p-12 rounded-2xl"
        intensity="medium"
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-8 lg:mb-0 lg:mr-12 lg:w-1/3">
            <div className="flex items-center justify-center h-28 w-28 mx-auto rounded-full bg-bunshodo-blue/10 mb-6">
              <Award className="h-16 w-16 text-bunshodo-blue" />
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              経済産業大臣賞受賞の実績
            </h3>
            <p className="text-bunshodo-medium-gray mb-6">
              文唱堂印刷町屋総合工場は、第15回印刷産業環境優良工場表彰において「経済産業大臣賞」を受賞いたしました。この受賞は単なる印刷技術だけでなく、環境に配慮した持続可能な生産体制と、印刷から物流までの一貫したプロセス最適化が高く評価されたものです。経済産業省からは「印刷業界における次世代のビジネスモデル」として注目されています。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                環境配慮型印刷
              </span>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                SDGs貢献
              </span>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                持続可能な社会
              </span>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                品質保証
              </span>
            </div>
          </div>
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default AwardSection;
