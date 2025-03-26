
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import Button from './Button';
import { Clock, FileText, PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bunshodo-blue/20 to-bunshodo-green/20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <GlassPanelEffect
          className="p-8 md:p-12 lg:p-16 max-w-5xl mx-auto text-center rounded-3xl"
          intensity="medium"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 reveal">
            印刷・物流のお悩み、今すぐ解決します
          </h2>
          <p className="text-xl text-bunshodo-medium-gray mb-10 max-w-3xl mx-auto reveal">
            文唱堂の印刷物流サービスで、コスト削減、業務効率化、環境貢献を実現しませんか？
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white/50 rounded-xl p-6 h-full flex flex-col items-center shadow-sm">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <PhoneCall className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">無料相談</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  お気軽にご相談ください。課題解決のプランをご提案します。
                </p>
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/50 rounded-xl p-6 h-full flex flex-col items-center shadow-sm">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <Clock className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">30分以内にお見積もり</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  スピーディーな対応で、すぐにコスト感をご確認いただけます。
                </p>
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '300ms' }}>
              <div className="bg-white/50 rounded-xl p-6 h-full flex flex-col items-center shadow-sm">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <FileText className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">資料請求</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  詳しいサービス内容や事例集をお送りします。
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: '400ms' }}>
            <Button 
              size="lg" 
              className="shadow-lg"
            >
              <PhoneCall className="h-5 w-5 mr-2" />
              今すぐ無料相談
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="shadow-sm"
            >
              <FileText className="h-5 w-5 mr-2" />
              資料請求
            </Button>
          </div>
        </GlassPanelEffect>
      </div>
    </section>
  );
};

export default CTASection;
