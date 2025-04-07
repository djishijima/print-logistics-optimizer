
import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ProblemCTA: React.FC = () => {
  const handleCTAClick = () => {
    // イベント追跡のためのコンソールログ
    console.log('Problem CTA Button clicked');
    
    // ここに実際のアナリティクス追跡コードを追加できます
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-952809033/conversion',
        'event_category': 'ProblemCTA',
        'event_label': 'consultation_button',
      });
    }
    
    window.open('https://form.typeform.com/to/xAJyZjnr', '_blank');
    toast.success('環境対応印刷相談フォームを開きました');
  };
  
  return (
    <div className="mt-16 text-center reveal">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <p className="text-xl text-bunshodo-medium-gray mb-2">
            これらの課題を<span className="font-semibold">すべて解決</span>する方法があります
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            まずは無料相談でその方法を知りましょう
          </h3>
        </div>
        
        <div className="inline-block relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-bunshodo-blue to-bunshodo-green opacity-70 blur-md rounded-lg animate-pulse"></div>
          <Button 
            size="lg"
            className="relative bg-white hover:bg-white/90 text-bunshodo-blue font-medium px-8 py-6 text-lg rounded-lg shadow-xl transform transition-transform hover:scale-105"
            onClick={handleCTAClick}
          >
            今すぐ無料相談
          </Button>
        </div>
        
        <p className="text-bunshodo-green mt-4 text-sm font-medium">
          初回相談は完全無料 • 最短翌日に解決策をご提案
        </p>
      </div>
    </div>
  );
};

export default ProblemCTA;
