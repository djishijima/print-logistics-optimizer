
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import GlassPanelEffect from './GlassPanelEffect';
import AnimatedText from './AnimatedText';
import { ArrowDown, CheckCircle } from 'lucide-react';
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
      {/* 背景要素の強化 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* グラデーション背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-bunshodo-blue/5 via-white to-bunshodo-green/5"></div>
        
        {/* 装飾的な形状 */}
        <div className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-bunshodo-blue/15 filter blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-bunshodo-green/15 filter blur-3xl animate-pulse-soft opacity-70"></div>
        
        {/* 装飾的なパターン */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-bunshodo-blue">
            <path fill="currentColor" d="M42.8,-62.2C52.3,-51.7,55.4,-35.5,58.9,-20.4C62.4,-5.3,66.2,8.6,63.3,21.3C60.4,33.9,50.8,45.3,38.9,53.1C27.1,60.9,13.5,65.1,-0.4,65.7C-14.3,66.2,-28.7,63.1,-40.3,55.2C-51.9,47.3,-60.8,34.6,-66.8,19.9C-72.7,5.1,-75.8,-11.7,-70.6,-25.4C-65.3,-39,-51.8,-49.6,-38,-58.4C-24.3,-67.1,-10.2,-74,3.8,-79.1C17.7,-84.2,33.4,-72.7,42.8,-62.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>

      <div 
        ref={heroRef}
        className="relative z-10 container mx-auto px-4 md:px-6 py-12 flex flex-col items-center text-center"
      >
        <div className="mb-2">
          <span className="inline-block px-4 py-1.5 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 animate-fade-in backdrop-blur-sm border border-bunshodo-blue/20">
            印刷＋物流＝文唱堂
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-10 tracking-tight">
          <AnimatedText
            text="印刷、そして物流の現場を変える"
            as="span"
            className="block bg-gradient-to-r from-bunshodo-dark-blue via-bunshodo-blue to-bunshodo-green bg-clip-text text-transparent"
            animation="fade-in-up"
            delay={100}
          />
        </h1>
        
        {/* Glass panel removed, text size increased */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatedText
            text="印刷・物流をまとめてアウトソーシング。コスト削減、スピードアップ、環境貢献を実現します。"
            className="text-2xl md:text-3xl lg:text-4xl mb-8 text-bunshodo-dark-gray font-medium"
            animation="fade-in"
            delay={300}
          />
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center text-bunshodo-green text-lg md:text-xl">
              <CheckCircle className="h-6 w-6 mr-2 inline-block" />
              <span>納期短縮</span>
            </div>
            <div className="flex items-center text-bunshodo-green text-lg md:text-xl">
              <CheckCircle className="h-6 w-6 mr-2 inline-block" />
              <span>コスト削減</span>
            </div>
            <div className="flex items-center text-bunshodo-green text-lg md:text-xl">
              <CheckCircle className="h-6 w-6 mr-2 inline-block" />
              <span>品質向上</span>
            </div>
            <div className="flex items-center text-bunshodo-green text-lg md:text-xl">
              <CheckCircle className="h-6 w-6 mr-2 inline-block" />
              <span>環境負荷低減</span>
            </div>
          </div>
          
          <AnimatedText
            text="Bunshodo Printing Company"
            className="text-xl text-bunshodo-medium-gray"
            animation="fade-in"
            delay={500}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-2 animate-fade-in" style={{ animationDelay: '700ms' }}>
          <Button 
            size="lg" 
            className="shadow-lg text-lg py-6 px-8"
            glassMorphism
            onClick={() => setShowConsultationForm(true)}
          >
            30分以内にお見積もり
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="shadow-sm text-lg py-6 px-8"
            onClick={() => setShowCostAnalysisForm(true)}
          >
            印刷物流コスト診断
          </Button>
        </div>
      </div>
      
      {/* スクロールダウン表示 - 位置を修正 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#problems" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex flex-col items-center">
          <span className="mb-2 text-sm font-medium">詳しく見る</span>
          <ArrowDown size={24} className="text-bunshodo-blue" />
        </a>
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
            <DialogTitle className="text-2xl text-bunshodo-blue">印刷物流コスト診断</DialogTitle>
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
