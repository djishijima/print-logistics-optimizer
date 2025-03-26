
import React, { useEffect, useRef } from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import AnimatedText from './AnimatedText';
import Button from './Button';
import { Check, HelpCircle, Clock, DollarSign, Building, Truck } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const problems = [
    {
      icon: <HelpCircle className="h-6 w-6 text-bunshodo-blue" />,
      title: '複数の業者とのやり取りが面倒…',
      description: '印刷会社と物流会社の間で板挟みになり、調整に時間とコストがかかっています。'
    },
    {
      icon: <DollarSign className="h-6 w-6 text-bunshodo-blue" />,
      title: 'コストを削減したいけど、品質も落としたくない…',
      description: '低価格と高品質の両立は難しいと諦めていませんか？'
    },
    {
      icon: <Clock className="h-6 w-6 text-bunshodo-blue" />,
      title: '急ぎの案件にも対応してほしい…',
      description: '納期が迫る中、対応できる印刷会社を探すのに苦労していませんか？'
    },
    {
      icon: <Building className="h-6 w-6 text-bunshodo-blue" />,
      title: '保管場所がなく、オフィスが印刷物でいっぱい…',
      description: '大量の印刷物の保管スペースの確保に悩んでいませんか？'
    },
    {
      icon: <Truck className="h-6 w-6 text-bunshodo-blue" />,
      title: '仕分け・梱包・発送の手間と人件費…',
      description: '発送作業に人手を取られ、本来の業務に集中できていますか？'
    }
  ];
  
  return (
    <section 
      id="problems" 
      ref={sectionRef}
      className="section-padding py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-bunshodo-green/10 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-bunshodo-blue/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 reveal">
            お客様の課題
          </span>
          <h2 className="section-title reveal">
            印刷物の発注、こんなお悩みありませんか？
          </h2>
          <p className="section-subtitle reveal">
            文唱堂なら、これらの悩みを全て解決できます！
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <GlassPanelEffect
              key={index}
              className="p-6 h-full reveal"
              intensity="medium"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-bunshodo-medium-gray mb-4 flex-grow">{problem.description}</p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center text-bunshodo-green">
                    <Check className="h-5 w-5 mr-2" />
                    <span className="font-medium">文唱堂なら解決できます</span>
                  </div>
                </div>
              </div>
            </GlassPanelEffect>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <Button 
            size="lg" 
            className="shadow-lg"
          >
            今すぐ無料相談
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
