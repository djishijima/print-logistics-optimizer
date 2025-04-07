
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { Button } from '@/components/ui/button';
import { Clock, FileText, PhoneCall, Calculator, Upload, Leaf, Recycle } from 'lucide-react';
import { toast } from 'sonner';

const CTASection: React.FC = () => {
  const handleButtonClick = (actionType: string) => {
    // イベント追跡のためのコンソールログ
    console.log(`CTA Button clicked: ${actionType}`);
    
    // ここに実際のアナリティクス追跡コードを追加できます
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-952809033/conversion',
        'event_category': 'CTA',
        'event_label': actionType,
      });
    }
    
    // 環境対応印刷相談
    if (actionType === 'consultation') {
      window.open('https://form.typeform.com/to/xAJyZjnr', '_blank');
      toast.success('環境対応印刷相談フォームを開きました');
    }
    // 環境負荷＆コスト診断
    else if (actionType === 'cost-analysis') {
      window.open('https://form.typeform.com/to/SmxiiFs5', '_blank'); 
      toast.success('環境負荷＆コスト診断フォームを開きました');
    }
  };

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
              <div className="bg-white/90 rounded-xl p-6 h-full flex flex-col items-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="mb-4 p-4 bg-bunshodo-green/20 rounded-full">
                  <Leaf className="h-8 w-8 text-bunshodo-green" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">環境対応印刷相談</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  環境配慮型印刷・物流についてお気軽にご相談ください。SDGs目標達成に貢献するプランをご提案します。
                </p>
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-auto border border-gray-100 mb-4">
                  <p className="text-sm font-medium text-bunshodo-medium-gray">
                    FSC認証紙、植物油インキ、低VOC印刷など環境配慮型印刷と最適物流で環境負荷を大幅に低減します。
                  </p>
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-bunshodo-green hover:bg-bunshodo-green/90 text-white shadow-lg py-6"
                  onClick={() => handleButtonClick('consultation')}
                >
                  <PhoneCall className="h-5 w-5 mr-2" />
                  無料相談を申し込む
                </Button>
                <p className="text-sm text-bunshodo-green mt-2">初回相談は完全無料です</p>
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/90 rounded-xl p-6 h-full flex flex-col items-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="mb-4 p-4 bg-bunshodo-green/20 rounded-full">
                  <Recycle className="h-8 w-8 text-bunshodo-green" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">環境負荷＆コスト診断</h3>
                <div className="inline-block bg-bunshodo-blue/10 px-3 py-1 rounded-full mb-4">
                  <span className="text-bunshodo-blue text-sm font-medium">最短3分で完了</span>
                </div>
                <p className="text-bunshodo-medium-gray mb-4">
                  現在の印刷・物流におけるCO2排出量とコストを分析し、削減可能な金額と環境貢献度をご提案します。
                </p>
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-auto border border-gray-100 mb-4">
                  <p className="text-sm font-medium text-bunshodo-medium-gray">
                    CO2排出量を最大50％削減、コストを約30%削減する具体的プランをご提案。ESG報告書用データも提供します。
                  </p>
                </div>
                <Button 
                  size="lg"
                  className="w-full bg-bunshodo-blue hover:bg-bunshodo-blue/90 text-white shadow-lg py-6"
                  onClick={() => handleButtonClick('cost-analysis')}
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  無料診断を受ける
                </Button>
                <p className="text-sm text-bunshodo-blue mt-2">最短当日に診断結果をご連絡</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 border-t border-gray-200 pt-6 text-center text-bunshodo-medium-gray text-sm reveal">
            <p>
              <span className="font-semibold">お客様満足度98%</span> • <span className="font-semibold">経済産業大臣賞受賞</span> • <span className="font-semibold">導入実績100社以上</span>
            </p>
          </div>
        </GlassPanelEffect>
      </div>
    </section>
  );
};

export default CTASection;
