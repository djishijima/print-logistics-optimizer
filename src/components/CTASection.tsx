
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { Button } from '@/components/ui/button';
import { Clock, FileText, PhoneCall, Calculator, Upload, Leaf, Recycle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bunshodo-blue/10 to-bunshodo-green/10 z-0"></div>
      
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-bunshodo-blue/10 mix-blend-multiply"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <GlassPanelEffect
          className="p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-center rounded-3xl"
          intensity="medium"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal">
            <span className="text-bunshodo-green">環境に配慮した</span>印刷・物流の課題を解決します
          </h2>
          <p className="text-xl text-bunshodo-medium-gray mb-10 max-w-3xl mx-auto reveal">
            文唱堂の環境特化型印刷物流サービスで、コスト削減、業務効率化、<span className="text-bunshodo-green font-semibold">SDGs目標達成</span>を実現しませんか？
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white/60 rounded-xl p-6 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-bunshodo-green/10 rounded-full">
                  <Leaf className="h-6 w-6 text-bunshodo-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">環境対応印刷相談</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  環境配慮型印刷・物流についてお気軽にご相談ください。SDGs目標達成に貢献するプランをご提案します。
                </p>
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-auto border border-gray-100">
                  <p className="text-sm text-bunshodo-medium-gray">
                    FSC認証紙、植物油インキ、低VOC印刷など環境配慮型印刷と最適物流で環境負荷を低減します。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/60 rounded-xl p-6 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-bunshodo-green/10 rounded-full">
                  <Recycle className="h-6 w-6 text-bunshodo-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">環境負荷＆コスト診断</h3>
                <div className="flex items-center text-bunshodo-green text-sm font-medium mb-4">
                  <span>現在の環境負荷・コスト情報をご入力ください</span>
                </div>
                <p className="text-bunshodo-medium-gray mb-4">
                  現在の印刷・物流におけるCO2排出量とコストを分析し、削減可能な金額と環境貢献度をご提案します。
                </p>
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-auto border border-gray-100">
                  <p className="text-sm text-bunshodo-medium-gray">
                    CO2排出量を最大50％削減、コストを約30%削減する具体的プランをご提案。ESG報告書用データも提供します。
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: '300ms' }}>
            <Button 
              size="lg" 
              className="bg-bunshodo-green hover:bg-bunshodo-green/80 text-white shadow-lg"
              onClick={() => window.open('https://form.typeform.com/to/xAJyZjnr', '_blank')}
            >
              <Leaf className="h-5 w-5 mr-2" />
              環境対応印刷の無料相談
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-bunshodo-green text-bunshodo-green hover:bg-bunshodo-green/10 shadow-sm"
              onClick={() => window.open('https://form.typeform.com/to/SmxiiFs5', '_blank')}
            >
              <Recycle className="h-5 w-5 mr-2" />
              環境負荷＆コスト診断
            </Button>
          </div>
        </GlassPanelEffect>
      </div>
    </section>
  );
};

export default CTASection;
