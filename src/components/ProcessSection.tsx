
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { MessageSquare, Palette, Printer, Package, Archive, Truck, CheckCircle } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "ヒアリング・企画提案",
      description: "お客様のご要望をしっかりとヒアリングし、目的に合わせた最適な企画を提案します。"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "デザイン制作",
      description: "熟練のデザイナーが、効果的な販促物・印刷物のデザインを制作します。"
    },
    {
      icon: <Printer className="h-8 w-8" />,
      title: "印刷・加工",
      description: "最新の印刷設備で高品質な印刷を行い、必要に応じて製本・加工も対応します。"
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "仕分け・梱包",
      description: "配送先に合わせて丁寧に仕分け・梱包作業を行います。"
    },
    {
      icon: <Archive className="h-8 w-8" />,
      title: "在庫管理",
      description: "当社の倉庫で適切に在庫を管理し、必要に応じて出荷します。"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "配送",
      description: "全国各地への個別配送や一括配送など、ご要望に応じた配送を行います。"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "結果報告・分析",
      description: "配送完了後の結果報告や効果分析を行い、次回の改善につなげます。"
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
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 reveal">
            サービスの流れ
          </span>
          <h2 className="section-title reveal">
            印刷から配送までの7ステップ
          </h2>
          <p className="section-subtitle reveal">
            文唱堂では、以下の流れでワンストップサービスを提供しています
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
                        <p className="text-bunshodo-medium-gray">
                          {step.description}
                        </p>
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
