
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import { Building, ShoppingBag, FileText, CheckCircle, TrendingUp, Target, DollarSign, Clock } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      icon: <Building className="h-10 w-10 text-bunshodo-blue" />,
      title: "大手メーカーA社様",
      challenge: "複数の印刷会社と物流会社を使い分けていたため、コストが高く、納期管理も煩雑だった",
      solution: "印刷から保管・配送まで文唱堂に一括発注",
      results: [
        "年間コスト30%削減（約1,200万円）",
        "リードタイム5日間短縮",
        "担当者の業務時間週10時間削減"
      ],
      testimonial: "これまで4社に分散していた印刷・物流業務を文唱堂に一本化したことで、コスト面だけでなく、管理工数の削減効果が予想以上でした。特に担当者の負荷軽減は大きく、本来の業務に集中できるようになりました。",
      roi: "投資回収期間：即時（追加投資不要）"
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-bunshodo-blue" />,
      title: "通販企業B社様",
      challenge: "カタログの大量印刷と全国配送の手配に苦労。また、在庫保管スペースの確保も課題だった",
      solution: "印刷・保管・発送を文唱堂にアウトソーシング",
      results: [
        "物流コスト25%削減",
        "オフィススペース20%有効活用",
        "CO2排出量15%削減に貢献"
      ],
      testimonial: "季節商品のカタログ保管に悩んでいましたが、文唱堂の倉庫サービスを利用することで、オフィススペースの問題が解消しました。さらに配送効率化によるコスト削減も実現し、SDGsへの取り組みとしても社内で高く評価されています。",
      roi: "投資回収期間：約2ヶ月"
    },
    {
      icon: <FileText className="h-10 w-10 text-bunshodo-blue" />,
      title: "出版社C社様",
      challenge: "小ロット多品種の印刷物の管理が複雑で、需要に応じた適切な発送が困難だった",
      solution: "オンデマンド印刷と在庫管理システムの導入",
      results: [
        "在庫廃棄率85%削減",
        "納期を最大72時間短縮",
        "緊急注文にも対応可能に"
      ],
      testimonial: "従来の大量印刷・大量在庫方式から、文唱堂のオンデマンド印刷・適正在庫方式に切り替えたことで、廃棄ロスが劇的に減少しました。必要な時に必要な分だけ印刷・発送できる体制は、経営効率化に大きく貢献しています。",
      roi: "投資回収期間：約6ヶ月"
    }
  ];
  
  // 統合アプローチの効果を示す指標
  const keyMetrics = [
    {
      icon: <DollarSign className="h-6 w-6 text-bunshodo-blue" />,
      metric: "30%",
      title: "平均コスト削減率",
      description: "一括管理によるコスト効率化"
    },
    {
      icon: <Clock className="h-6 w-6 text-bunshodo-blue" />,
      metric: "5日間",
      title: "平均納期短縮",
      description: "プロセス最適化による時間短縮"
    },
    {
      icon: <Target className="h-6 w-6 text-bunshodo-green" />,
      metric: "99.8%",
      title: "品質達成率",
      description: "一貫した品質管理体制"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-bunshodo-green" />,
      metric: "85%",
      title: "在庫効率化",
      description: "最適な在庫管理と供給体制"
    }
  ];
  
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-bunshodo-blue/5 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-bunshodo-green/5 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 reveal">
            成功事例
          </span>
          <h2 className="section-title reveal">
            文唱堂が解決した事例
          </h2>
          <p className="section-subtitle reveal">
            多くのお客様の課題を解決してきました。その一部をご紹介します。
          </p>
        </div>
        
        {/* 統合アプローチの効果指標 */}
        <div className="mb-16 reveal">
          <GlassPanelEffect
            className="p-8 rounded-2xl"
            intensity="light"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto rounded-full bg-bunshodo-blue/10 mb-4">
                    {metric.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-bunshodo-blue mb-2">
                    {metric.metric}
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{metric.title}</h4>
                  <p className="text-sm text-bunshodo-medium-gray">{metric.description}</p>
                </div>
              ))}
            </div>
          </GlassPanelEffect>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <GlassPanelEffect
                className="p-8 h-full"
                intensity="light"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="mr-4 p-3 bg-bunshodo-blue/10 rounded-xl">
                      {caseStudy.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-bunshodo-medium-gray mb-2">課題</div>
                    <p className="text-bunshodo-dark-gray">{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-bunshodo-medium-gray mb-2">解決策</div>
                    <p className="text-bunshodo-dark-gray">{caseStudy.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium text-bunshodo-medium-gray mb-2">成果</div>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-bunshodo-green mr-2 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="bg-bunshodo-light-gray/30 p-4 rounded-lg border-l-4 border-bunshodo-blue">
                      <p className="text-sm italic text-bunshodo-dark-gray mb-2">
                        "{caseStudy.testimonial}"
                      </p>
                      <div className="text-xs font-medium text-bunshodo-blue">
                        {caseStudy.roi}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassPanelEffect>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <GlassPanelEffect
            className="p-8 md:p-12 max-w-4xl mx-auto"
            intensity="medium"
          >
            <h3 className="text-2xl font-semibold mb-6">導入企業</h3>
            <p className="text-bunshodo-medium-gray mb-8">
              大手メーカー、流通企業、出版社など様々な業種の上場企業様や行政機関様に導入いただいております。すでに100社以上の企業が文唱堂の印刷×物流×倉庫の統合ソリューションで成果を上げています。
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((logo) => (
                <div key={logo} className="h-16 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
                  <div className="text-bunshodo-medium-gray text-sm">企業ロゴ {logo}</div>
                </div>
              ))}
            </div>
          </GlassPanelEffect>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
