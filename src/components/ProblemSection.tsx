
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check, HelpCircle, Clock, DollarSign, Building, Package, Recycle, Palette, Users, TrendingUp, FileText, BarChart, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassPanelEffect from './GlassPanelEffect';

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
      icon: <DollarSign className="h-7 w-7" />,
      title: 'まとめて1社に頼むことでコストダウンしたい',
      description: '複数の業者への発注では中間マージンが発生し、コストがかさみます。'
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: '各工程ごとの発注業務やスケジュール管理が煩雑',
      description: '印刷会社と物流会社との間の調整に時間と労力が取られていませんか？'
    },
    {
      icon: <HelpCircle className="h-7 w-7" />,
      title: '早く納品してもらいたいが、品質が不安',
      description: '納期を優先すると品質が犠牲になることが多く、両立が難しいと感じていませんか？'
    },
    {
      icon: <Package className="h-7 w-7" />,
      title: '仕分け、梱包、発送に人手が取られる',
      description: '専任者を雇うほどでもなく、本来の業務に集中できていない状況ではありませんか？'
    },
    {
      icon: <Building className="h-7 w-7" />,
      title: '場所を取っている在庫をどこかに預けたい',
      description: 'オフィスや倉庫のスペースと管理費を節約したいとお考えではありませんか？'
    },
    {
      icon: <Recycle className="h-7 w-7" />,
      title: '環境に配慮したサプライチェーンを構築したい',
      description: 'SDGsへの取り組みを推進し、企業イメージの向上を図りたいと考えていませんか？'
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: 'デザイン修正の繰り返しで時間とコストがかかる',
      description: '何度も修正を重ねるうちに予算オーバーや納期遅延が発生していませんか？'
    },
    {
      icon: <TrendingUp className="h-7 w-7" />,
      title: '繁忙期の配送キャパが足りず機会損失がある',
      description: '需要ピーク時に配送能力が追いつかず、販売機会を逃していませんか？'
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: 'パーソナライズド印刷への対応が難しい',
      description: '顧客ごとにカスタマイズされた印刷物の需要に対応できていますか？'
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: '在庫精度が低く、余剰在庫や欠品が発生する',
      description: '在庫管理の不正確さによる機会損失やコスト増加に悩んでいませんか？'
    },
    {
      icon: <Network className="h-7 w-7" />,
      title: '複雑な配送先管理に手間がかかりすぎる',
      description: '多数の配送先や特殊な配送条件の管理に多くのリソースを割いていませんか？'
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: '物流人材の確保と教育が追いつかない',
      description: '人手不足や高齢化により、物流業務の品質維持が難しくなっていませんか？'
    }
  ];
  
  return (
    <section 
      id="problems" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-bunshodo-light-gray/30"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-bunshodo-light-blue/5 filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-bunshodo-light-green/5 filter blur-3xl"></div>
        <svg className="absolute top-0 right-0 text-bunshodo-blue/5 w-64 h-64" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.8,-62.2C52.3,-51.7,55.4,-35.5,58.9,-20.4C62.4,-5.3,66.2,8.6,63.3,21.3C60.4,33.9,50.8,45.3,38.9,53.1C27.1,60.9,13.5,65.1,-0.4,65.7C-14.3,66.2,-28.7,63.1,-40.3,55.2C-51.9,47.3,-60.8,34.6,-66.8,19.9C-72.7,5.1,-75.8,-11.7,-70.6,-25.4C-65.3,-39,-51.8,-49.6,-38,-58.4C-24.3,-67.1,-10.2,-74,3.8,-79.1C17.7,-84.2,33.4,-72.7,42.8,-62.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute bottom-0 left-0 text-bunshodo-green/5 w-72 h-72" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.7,-69.2C55,-59.3,64.3,-46.6,70.8,-32.4C77.2,-18.1,80.8,-2.3,78.1,12.3C75.4,26.9,66.3,40.2,55,51.5C43.8,62.8,30.3,72.1,14.8,77.3C-0.7,82.5,-18.3,83.5,-33.4,77.6C-48.5,71.7,-61.1,58.9,-70.2,43.3C-79.3,27.7,-84.9,9.3,-81.9,-7.3C-78.9,-23.8,-67.2,-38.5,-54,-51.3C-40.9,-64.1,-26.3,-75,1.7,-77.5C13.7,-80,30.4,-79.1,42.7,-69.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-bunshodo-blue/20 to-bunshodo-green/20 backdrop-blur-sm mb-6 reveal">
            <span className="text-sm font-medium bg-gradient-to-r from-bunshodo-blue to-bunshodo-green bg-clip-text text-transparent">
              お客様の課題
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight reveal">
            こんなお悩み、ありませんか？
          </h2>
          <p className="text-bunshodo-medium-gray text-lg md:text-xl max-w-2xl mx-auto reveal">
            1つでも当てはまるなら、文唱堂印刷にお任せください！
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="reveal transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full group">
                <GlassPanelEffect
                  className="p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                  intensity="medium"
                  color="white"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-bunshodo-blue/10 to-bunshodo-green/10 flex items-center justify-center text-bunshodo-blue">
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-bunshodo-dark-blue">{problem.title}</h3>
                    <p className="text-bunshodo-medium-gray mb-6 flex-grow">{problem.description}</p>
                    <div className="mt-auto pt-2 border-t border-bunshodo-light-gray">
                      <div className="flex items-center mt-3 text-bunshodo-green font-medium">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-bunshodo-green/10 mr-3">
                          <Check className="h-4 w-4" />
                        </div>
                        <span>文唱堂印刷なら解決できます</span>
                      </div>
                    </div>
                  </div>
                </GlassPanelEffect>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-bunshodo-blue to-bunshodo-green opacity-70 blur-md rounded-lg"></div>
            <Button 
              size="lg"
              className="relative bg-white hover:bg-white/90 text-bunshodo-blue font-medium px-8 py-6 text-lg rounded-lg shadow-xl"
            >
              今すぐ無料相談
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
