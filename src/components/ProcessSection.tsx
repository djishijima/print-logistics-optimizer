
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { MessageSquare, Palette, Printer, Package, Archive, Truck, CheckCircle, Leaf } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "ヒアリング・企画提案",
      description: "お客様のご要望と環境目標をしっかりとヒアリングし、印刷物の必要性からSDGs達成貢献までを考慮した最適なプランをご提案します。",
      eco: "お客様のSDGs・ESG目標に合わせた環境対応をご提案します"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "エコデザイン制作",
      description: "環境に配慮したデザインを制作。紙の使用量削減、リサイクルしやすい素材選定、長期保存を考慮したデザインなど、環境負荷を低減する工夫をします。",
      eco: "必要最小限の資源で最大効果を発揮するデザインを実現"
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: "環境配慮型印刷",
      description: "FSC認証用紙、再生紙、植物油インキなど環境に配慮した資材を使用。VOC削減技術や節水型印刷機の活用で環境負荷を最小限に抑えます。",
      eco: "CO2排出量30%削減、水使用量50%削減を実現"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "エコ梱包・仕分け",
      description: "環境に配慮した梱包材を使用し、最小限のパッケージングで丁寧に仕分け・梱包作業を行います。不要な包装を削減し廃棄物を最小化します。",
      eco: "再生可能・生分解性梱包材の使用でプラスチック使用量80%削減"
    },
    {
      icon: <Archive className="h-8 w-8" />,
      title: "環境配慮型在庫管理",
      description: "省エネ設備や再生可能エネルギーを導入した環境配慮型倉庫で適切に在庫を管理。必要に応じた出荷で資源の無駄遣いを防ぎます。",
      eco: "太陽光発電と高効率空調で倉庫のCO2排出量40%削減"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "グリーン配送",
      description: "電気自動車やハイブリッド車を活用し、最適な配送ルートで環境負荷を低減。共同配送による配送効率化も実現しています。",
      eco: "EV車両と配送最適化でCO2排出量を従来配送から最大60%削減"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "環境貢献レポート",
      description: "配送完了後に環境負荷データをレポート。プロジェクトごとのCO2削減量など、ESG報告書に活用できるデータをご提供します。",
      eco: "環境貢献度の可視化でお客様のSDGs・ESG活動をサポート"
    }
  ];
  
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-gradient-to-b from-bunshodo-light-gray to-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-bunshodo-blue/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-bunshodo-green/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full mb-4 reveal">
            <Leaf className="h-4 w-4 inline-block mr-1" />環境配慮型サービスの流れ
          </span>
          <h2 className="section-title reveal">
            環境に優しい印刷から配送までのワンストップサービス
          </h2>
          <p className="section-subtitle reveal">
            文唱堂では、印刷物の有無に関わらず、環境に配慮した以下の流れでサービスを提供しています
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-bunshodo-blue via-bunshodo-green to-bunshodo-blue opacity-20 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-last'}`}>
                    <GlassPanelEffect
                      className="p-8 max-w-md w-full"
                      intensity="light"
                    >
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold mb-2">
                          STEP {index + 1}: {step.title}
                        </h3>
                        <p className="text-bunshodo-medium-gray mb-3">
                          {step.description}
                        </p>
                        <div className="bg-bunshodo-green/10 p-2 rounded-lg border-l-4 border-bunshodo-green">
                          <p className="text-sm text-bunshodo-green flex items-center">
                            <Leaf className="h-4 w-4 mr-1 inline-block" />
                            <span>{step.eco}</span>
                          </p>
                        </div>
                      </div>
                    </GlassPanelEffect>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white shadow-md flex items-center justify-center z-10 border-4 border-white">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-bunshodo-blue to-bunshodo-green flex items-center justify-center text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'} hidden md:flex`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
