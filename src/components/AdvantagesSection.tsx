
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import AnimatedText from './AnimatedText';
import { Award, Clock, DollarSign, Leaf } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Clock className="h-12 w-12 text-bunshodo-blue" />,
      title: "一社完結だから早い！",
      description: "印刷から発送まで、全て文唱堂にお任せください。複数の業者間での調整が不要なため、大幅な時間短縮が可能です。"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-bunshodo-blue" />,
      title: "コスト削減が可能！",
      description: "複数の業者に依頼するより、断然お得です。印刷と物流を一括で行うことで、30%以上のコスト削減に成功した事例もあります。"
    },
    {
      icon: <Leaf className="h-12 w-12 text-bunshodo-green" />,
      title: "環境に優しい印刷＋物流！",
      description: "CO2排出量削減に貢献します。文唱堂の環境配慮型印刷工場は、経済産業大臣賞も受賞しています。"
    },
    {
      icon: <Award className="h-12 w-12 text-bunshodo-blue" />,
      title: "高品質な印刷技術！",
      description: "経済産業大臣賞受賞の確かな品質をお届けします。最新の設備と熟練のスタッフによる、妥協のない品質管理体制を構築しています。"
    }
  ];
  
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
            印刷会社でありながら物流もできる文唱堂ならではの強みをご紹介します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <GlassPanelEffect
                className="p-8 h-full flex flex-col"
                intensity="light"
              >
                <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-2xl bg-white shadow-md">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-bunshodo-medium-gray">{advantage.description}</p>
              </GlassPanelEffect>
            </div>
          ))}
        </div>
        
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
                  文唱堂印刷町屋総合工場は、第15回印刷産業環境優良工場表彰において「経済産業大臣賞」を受賞いたしました。印刷のプロフェッショナルとして培ってきた技術に加え、ハイテクノロジーを駆使し、時代に先駆けた環境配慮型の印刷環境づくりにも心血を注いでいます。
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
                </div>
              </div>
            </div>
          </GlassPanelEffect>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
