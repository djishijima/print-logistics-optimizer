
import React, { useState } from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { Button } from '@/components/ui/button';
import { Clock, FileText, PhoneCall, Calculator } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ConsultationForm from './ConsultationForm';

const CTASection: React.FC = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showCostAnalysisForm, setShowCostAnalysisForm] = useState(false);
  
  return (
    <section id="cta" className="section-padding relative overflow-hidden py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bunshodo-blue/10 to-bunshodo-green/10 z-0"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/printing-warehouse.jpg" 
          alt="印刷工場" 
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-bunshodo-blue/40 mix-blend-multiply"></div>
      </div>
      
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div className="bg-white/60 rounded-xl p-6 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <PhoneCall className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">無料相談</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  お気軽にご相談ください。課題解決のプランをご提案します。
                </p>
                <img 
                  src="/consultation.jpg" 
                  alt="無料相談のイメージ" 
                  className="w-full h-40 object-cover rounded-lg shadow-sm mt-auto"
                />
              </div>
            </div>
            
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div className="bg-white/60 rounded-xl p-6 h-full flex flex-col items-center shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 p-3 bg-bunshodo-blue/10 rounded-full">
                  <Calculator className="h-6 w-6 text-bunshodo-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">印刷物流コスト診断</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  現在のコストを分析し、最適な印刷・物流プランをご提案します。
                </p>
                <img 
                  src="/cost-analysis.jpg" 
                  alt="コスト診断のイメージ" 
                  className="w-full h-40 object-cover rounded-lg shadow-sm mt-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal" style={{ transitionDelay: '300ms' }}>
            <Button 
              size="lg" 
              className="bg-bunshodo-blue hover:bg-bunshodo-dark-blue text-white shadow-lg"
              onClick={() => setShowConsultationForm(true)}
            >
              <PhoneCall className="h-5 w-5 mr-2" />
              無料相談はこちら
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-bunshodo-blue text-bunshodo-blue hover:bg-bunshodo-blue/10 shadow-sm"
              onClick={() => setShowCostAnalysisForm(true)}
            >
              <Calculator className="h-5 w-5 mr-2" />
              印刷物流コスト診断
            </Button>
          </div>
        </GlassPanelEffect>
      </div>

      {/* Consultation Form Dialog */}
      <Dialog 
        open={showConsultationForm} 
        onOpenChange={setShowConsultationForm}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-bunshodo-blue">無料相談フォーム</DialogTitle>
          </DialogHeader>
          <ConsultationForm 
            formType="consultation"
            onSubmitSuccess={() => setShowConsultationForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Cost Analysis Form Dialog */}
      <Dialog 
        open={showCostAnalysisForm} 
        onOpenChange={setShowCostAnalysisForm}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-bunshodo-blue">印刷物流コスト診断</DialogTitle>
          </DialogHeader>
          <ConsultationForm 
            formType="cost-analysis"
            onSubmitSuccess={() => setShowCostAnalysisForm(false)}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
