
import React, { useEffect, useRef } from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import AnimatedText from './AnimatedText';
import Button from './Button';
import { Check, HelpCircle, Clock, DollarSign, Building, Truck, Package, Recycle } from 'lucide-react';

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
      icon: <DollarSign className="h-6 w-6 text-bunshodo-blue" />,
      title: 'まとめて1社に頼むことでコストダウンしたい',
      description: '複数の業者への発注では中間マージンが発生し、コストがかさみます。'
    },
    {
      icon: <Clock className="h-6 w-6 text-bunshodo-blue" />,
      title: '各工程ごとの発注業務やスケジュール管理が煩雑',
      description: '印刷会社と物流会社との間の調整に時間と労力が取られていませんか？'
    },
    {
      icon: <HelpCircle className="h-6 w-6 text-bunshodo-blue" />,
      title: '早く納品してもらいたいが、品質が不安',
      description: '納期を優先すると品質が犠牲になることが多く、両立が難しいと感じていませんか？'
    },
    {
      icon: <Package className="h-6 w-6 text-bunshodo-blue" />,
      title: '仕分け、梱包、発送に人手が取られる',
      description: '専任者を雇うほどでもなく、本来の業務に集中できていない状況ではありませんか？'
    },
    {
      icon: <Building className="h-6 w-6 text-bunshodo-blue" />,
      title: '場所を取っている在庫をどこかに預けたい',
      description: 'オフィスや倉庫のスペースと管理費を節約したいとお考えではありませんか？'
    },
    {
      icon: <Recycle className="h-6 w-6 text-bunshodo-blue" />,
      title: '環境に配慮したサプライチェーンを構築したい',
      description: 'SDGsへの取り組みを推進し、企業イメージの向上を図りたいと考えていませんか？'
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
            こんなお悩み、ありませんか？
          </h2>
          <p className="section-subtitle reveal">
            1つでも当てはまるなら、文唱堂印刷にお任せください！
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className={`reveal`} style={{ transitionDelay: `${index * 100}ms` }}>
              <GlassPanelEffect
                className="p-6 h-full"
                intensity="medium"
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
                      <span className="font-medium">文唱堂印刷なら解決できます</span>
                    </div>
                  </div>
                </div>
              </GlassPanelEffect>
            </div>
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
