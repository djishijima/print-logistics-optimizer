
import React from 'react';
import GlassPanelEffect from './GlassPanelEffect';
import AnimatedText from './AnimatedText';
import { Award, Clock, DollarSign, Leaf, Shield, BarChart4, Building2, Truck, PenTool, CheckCircle2, Zap, Target } from 'lucide-react';

const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Clock className="h-12 w-12 text-bunshodo-blue" />,
      title: "一社完結だから早い！",
      description: "印刷から発送まで、全て文唱堂にお任せください。複数の業者間での調整が不要なため、大幅な時間短縮が可能です。従来のプロセスでは印刷完了後に物流会社への引き渡し・指示出しに2〜3日を要していましたが、文唱堂の一貫体制では即日出荷が可能になり、平均で納期が5日間短縮されます。",
      benefits: ["印刷完了から物流への引き渡し時間ゼロ", "複数業者間の連絡調整時間削減", "緊急対応も一元管理で迅速化"]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-bunshodo-blue" />,
      title: "コスト削減が可能！",
      description: "複数の業者に依頼するより、断然お得です。印刷と物流を一括で行うことで、30%以上のコスト削減に成功した事例もあります。中間マージンのカット、輸送効率の最適化、梱包材の共通化、配送ルート効率化など、一貫体制だからこそ可能なコスト削減策を実現しています。",
      benefits: ["印刷～物流間の中間マージンカット", "共通梱包材による資材費削減", "最適な配送ルート設計で輸送コスト削減"]
    },
    {
      icon: <Shield className="h-12 w-12 text-bunshodo-blue" />,
      title: "安全性が向上！",
      description: "情報セキュリティの一元管理により、個人情報や機密情報の漏洩リスクが大幅に低減。複数業者間でのデータ共有が不要なため、情報漏えいのリスクポイントを削減できます。ISO27001認証取得のセキュリティ体制で、データの加工から配送まで一貫した情報管理を実現しています。",
      benefits: ["個人情報の管理ポイントを集約", "業者間データ受け渡しのリスク排除", "全工程ISO27001準拠の厳格管理"]
    },
    {
      icon: <Award className="h-12 w-12 text-bunshodo-blue" />,
      title: "高品質な印刷技術！",
      description: "経済産業大臣賞受賞の確かな品質をお届けします。最新の設備と熟練のスタッフによる、一貫した品質管理体制が、ミスのない高品質な成果物を実現します。印刷工程と物流工程の品質基準を統一することで、お客様の期待を上回るサービスをご提供します。",
      benefits: ["印刷～梱包の一貫した品質基準", "大臣賞受賞技術の応用", "熟練オペレーターによる一貫管理"]
    }
  ];
  
  const additionalBenefits = [
    {
      icon: <Leaf className="h-8 w-8 text-bunshodo-green" />,
      title: "環境負荷を大幅削減",
      description: "輸送距離の短縮や梱包材の最適化により、CO2排出量を従来比15%削減。物流センターと印刷工場の一体化でエネルギー効率も向上しています。",
      data: "CO2排出量15%削減"
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-bunshodo-green" />,
      title: "データ分析で継続改善",
      description: "印刷から配送までのデータを一元管理し、リアルタイムな進捗確認と分析が可能。これにより継続的な効率化とコスト削減を実現します。",
      data: "業務効率20%向上"
    },
    {
      icon: <Building2 className="h-8 w-8 text-bunshodo-green" />,
      title: "スペース有効活用",
      description: "文唱堂の倉庫を活用することで、オフィスや自社倉庫のスペースを本来の業務に集中できるよう有効活用できます。",
      data: "オフィススペース25%削減"
    },
    {
      icon: <Truck className="h-8 w-8 text-bunshodo-green" />,
      title: "配送の最適化",
      description: "一括配送から個別配送まで、あらゆる配送ニーズに柔軟に対応。在庫状況に合わせた最適なタイミングで配送計画を立案します。",
      data: "配送効率30%向上"
    }
  ];
  
  // 統合システムの仕組み図の説明
  const integrationExplanation = {
    title: "何が違うサービスなのか？",
    description: "通常の分業型サービスと文唱堂のワンストップサービスを比較すると、その効率性の違いは明らかです。",
    traditionalSystem: [
      "印刷会社、運送会社、倉庫会社がそれぞれ別々の会社",
      "複数の会社との連絡調整に時間がかかる",
      "各社へのマージンが発生しコストが高くなる",
      "情報共有不足によるミスや納期遅延のリスク",
      "印刷物がある場合のみのサービス提供"
    ],
    integratedSystem: [
      "印刷・配送・保管を一社で完結",
      "ワンストップサービスで手続きが簡単",
      "中間マージンカットで30%のコスト削減",
      "一貫した品質管理で高品質なサービス提供",
      "印刷物がなくても配送・保管サービスの利用可能"
    ]
  };
  
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-bunshodo-light-gray">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-bunshodo-blue/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-bunshodo-green/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-blue/10 text-bunshodo-blue rounded-full mb-4 reveal">
            文唱堂の強み
          </span>
          <h2 className="section-title reveal">
            なぜ文唱堂が選ばれるのか
          </h2>
          <p className="section-subtitle reveal">
            印刷会社でありながら物流もできる文唱堂ならではの統合アプローチの強みをご紹介します
          </p>
        </div>
        
        {/* 比較図を追加 - 従来方式と統合方式 */}
        <div className="mb-16 reveal">
          <GlassPanelEffect
            className="p-8 rounded-2xl"
            intensity="medium"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">{integrationExplanation.title}</h3>
            <p className="text-bunshodo-medium-gray text-center mb-8">{integrationExplanation.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 従来の分業システム */}
              <div className="bg-white/70 p-6 rounded-xl border border-red-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-100 rounded-full mr-3">
                    <Zap className="h-6 w-6 text-red-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-red-500">従来の分業システム</h4>
                </div>
                <div className="space-y-3">
                  {integrationExplanation.traditionalSystem.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">×</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700 font-medium">結果：コスト増大・納期遅延・手続き煩雑</p>
                </div>
              </div>
              
              {/* 文唱堂の統合システム */}
              <div className="bg-white/70 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-green-100 rounded-full mr-3">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-500">文唱堂のワンストップサービス</h4>
                </div>
                <div className="space-y-3">
                  {integrationExplanation.integratedSystem.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 font-medium">結果：30%コスト削減・納期5日短縮・手続き簡素化</p>
                </div>
              </div>
            </div>
          </GlassPanelEffect>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <GlassPanelEffect
                className="p-8 h-full flex flex-col"
                intensity="light"
              >
                <div className="mb-6 flex items-center justify-center h-20 w-20 rounded-2xl bg-white shadow-md">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                <p className="text-bunshodo-medium-gray mb-6">{advantage.description}</p>
                {/* 具体的なメリットをリスト表示 */}
                <div className="mt-auto">
                  <div className="space-y-2">
                    {advantage.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-bunshodo-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-bunshodo-dark-gray">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassPanelEffect>
            </div>
          ))}
        </div>
        
        <div className="mt-16 mb-20 reveal">
          <GlassPanelEffect
            className="p-8 rounded-2xl"
            intensity="light"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">印刷×物流×倉庫の一元化による追加メリット</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="mb-4 p-3 bg-bunshodo-blue/5 rounded-full">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-bunshodo-medium-gray text-sm mb-3">{benefit.description}</p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-bunshodo-green/10 text-bunshodo-green rounded-full text-sm font-medium">
                      {benefit.data}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanelEffect>
        </div>
        
        <div className="mt-20 reveal">
          <GlassPanelEffect
            className="p-8 md:p-12 rounded-2xl"
            intensity="medium"
          >
            <div className="flex flex-col lg:flex-row items-center">
              <div className="mb-8 lg:mb-0 lg:mr-12 lg:w-1/3">
                <div className="flex items-center justify-center h-28 w-28 mx-auto rounded-full bg-bunshodo-blue/10 mb-6">
                  <Award className="h-16 w-16 text-bunshodo-blue" />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  経済産業大臣賞受賞の実績
                </h3>
                <p className="text-bunshodo-medium-gray mb-6">
                  文唱堂印刷町屋総合工場は、第15回印刷産業環境優良工場表彰において「経済産業大臣賞」を受賞いたしました。この受賞は単なる印刷技術だけでなく、環境に配慮した持続可能な生産体制と、印刷から物流までの一貫したプロセス最適化が高く評価されたものです。経済産業省からは「印刷業界における次世代のビジネスモデル」として注目されています。
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                    環境配慮型印刷
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                    SDGs貢献
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                    持続可能な社会
                  </span>
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-bunshodo-green/10 text-bunshodo-green rounded-full">
                    品質保証
                  </span>
                </div>
              </div>
            </div>
          </GlassPanelEffect>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
