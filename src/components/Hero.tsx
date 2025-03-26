
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import GlassPanelEffect from './GlassPanelEffect';
import AnimatedText from './AnimatedText';
import { ArrowDown } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ConsultationForm from './ConsultationForm';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showCostAnalysisForm, setShowCostAnalysisForm] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 500);
      
      if (heroRef.current) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-bunshodo-blue/20 filter blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-bunshodo-green/20 filter blur-3xl animate-pulse-soft opacity-70"></div>
      </div>

      <div 
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center"
      >
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 animate-fade-in">
            印刷＋物流＝文唱堂
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight">
          <AnimatedText
            text="印刷、そして物流の現場を変える"
            as="span"
            className="block"
            animation="fade-in-up"
            delay={100}
          />
        </h1>
        
        <GlassPanelEffect 
          className="max-w-3xl mx-auto p-6 my-8" 
          intensity="light"
        >
          <AnimatedText
            text="印刷・物流をまとめてアウトソーシング。コスト削減、スピードアップ、環境貢献を実現します。"
            className="text-xl md:text-2xl mb-6 text-bunshodo-dark-gray"
            animation="fade-in"
            delay={300}
          />
          
          <AnimatedText
            text="Bunshodo Printing Company"
            className="text-bunshodo-medium-gray"
            animation="fade-in"
            delay={500}
          />
        </GlassPanelEffect>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <Button 
            size="lg" 
            className="shadow-lg"
            glassMorphism
            onClick={() => setShowConsultationForm(true)}
          >
            30分以内にお見積もり
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="shadow-sm"
            onClick={() => setShowCostAnalysisForm(true)}
          >
            資料請求
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#problems" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex flex-col items-center">
            <span className="mb-2 text-sm">詳しく見る</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Consultation Form Dialog */}
      <Dialog 
        open={showConsultationForm} 
        onOpenChange={setShowConsultationForm}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-bunshodo-blue">無料相談・お見積りフォーム</DialogTitle>
          </DialogHeader>
          <ConsultationForm 
            formType="consultation"
            onSubmitSuccess={() => setShowConsultationForm(false)}
            onCancel={() => setShowConsultationForm(false)}
          />
        </DialogContent>
      </Dialog>

      {/* Cost Analysis Form Dialog */}
      <Dialog 
        open={showCostAnalysisForm} 
        onOpenChange={setShowCostAnalysisForm}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-bunshodo-blue">資料請求フォーム</DialogTitle>
          </DialogHeader>
          <ConsultationForm 
            formType="cost-analysis"
            onSubmitSuccess={() => setShowCostAnalysisForm(false)}
            onCancel={() => setShowCostAnalysisForm(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
