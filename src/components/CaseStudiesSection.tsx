
import React from 'react';
import { Building, ShoppingBag, FileText, DollarSign, Clock, Target, TrendingUp } from 'lucide-react';
import CaseStudyCard from './case-studies/CaseStudyCard';
import MetricsPanel from './case-studies/MetricsPanel';
import ClientsSection from './case-studies/ClientsSection';
import BenefitsCarousel from './case-studies/BenefitsCarousel';
import { CaseStudy, Metric } from './case-studies/types';

const CaseStudiesSection: React.FC = () => {
  const caseStudies: CaseStudy[] = [
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
  
  const keyMetrics: Metric[] = [
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

  const majorClients = [
    "経済産業省", "法務省", "財務省", "文部科学省", "総務省", "国税庁", 
    "大蔵財務協会", "東京都", "公安調査庁", "デザインファクトリー", 
    "経済調査会", "KADOKAWA", "TOPPANエッジ", "SBクリエイティブ", 
    "ティファニー・アンド・カンパニー・ジャパン・インク", "日本理容美容教育センター", 
    "自民党本部", "日本放送出版協会", "法研", "金融財政事情研究会", 
    "NHK出版", "日本生産性本部", "ダイヤモンドグラフィック社", 
    "小学館集英社プロダクション", "森永乳業", "日本機械輸出組合", 
    "製粉振興会", "プレジデント社", "ユーコー", "ニッセン", 
    "川口学園", "日本科学機器協会", "東京科学機器協会", "きんざい", 
    "日本オートキャンプ協会", "国際美容協会", "全日本美容業生活衛生同業組合連合会", 
    "東京海上日動火災保険", "ヤマノ美容専門学校", "ヤマノビュティメイトグループ", 
    "損保ジャパン", "全国防犯協会連合会", "警察育英会", "MYJ", 
    "レコード新聞社", "ジャズジャパン", "あさ出版", "法曹会", 
    "ジューシィ出版", "ベルーナ", "宝島社", "鎌ヶ谷カントリークラブ", 
    "警察育英会", "京葉学院", "大蔵財務協会", "アドコムメディア", 
    "JICC", "武蔵野", "レクシスネクシスジャパン", "日本銀行", 
    "オージーフーズ", "トヨタ財団", "日本卓球", "ハート出版", 
    "日本空気清浄協会", "森永乳業", "昭和産業", "小学館", 
    "中央経済社", "大修館書店", "税務研究会", "日本法令", 
    "富士産業", "ネグロス電工", "空気調和・衛生工学会", "オーエフシー", 
    "日本キリスト教団出版局", "教育開発出版", "海事プレス社", "トーマツ", 
    "民事法研究会", "建帛社", "立花書房", "思潮社", 
    "並木書房", "共立女子学園", "ジーンズメイト", "自由民主党", 
    "CCCメディアハウス", "学陽書房", "日経BP", "ぶんか社", 
    "日本教育クリエイト", "アールアイシー", "オークローンマーケティング", 
    "エムオンエンターテイメント", "クレヨンハウス", "損保ジャパン日本興亜", 
    "洋泉社", "ダイヤモンド社"
  ];
  
  const benefits = [
    "印刷から発送まで一貫して対応するため、工程間の待機時間が発生せず納期が大幅に短縮されます",
    "複数の業者間での調整や連絡が不要になり、担当者の業務負担が軽減されます",
    "一括管理によるスケールメリットで、全体のコストを30%程度削減できます",
    "品質管理を一元化することで、高い品質基準を維持できます",
    "在庫の適正管理により、無駄な印刷物を減らし環境負荷を低減します"
  ];
  
  return (
    <section id="case-studies" className="section-padding relative overflow-hidden">
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
          <p className="section-subtitle max-w-3xl mx-auto reveal">
            印刷・物流・倉庫管理を一貫して担当することで、多くのお客様の課題を解決してきました。その一部をご紹介します。
          </p>
        </div>
        
        <MetricsPanel metrics={keyMetrics} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        <ClientsSection clients={majorClients} />

        <BenefitsCarousel benefits={benefits} />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
