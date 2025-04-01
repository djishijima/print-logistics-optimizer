
import React from 'react';
import { Award, Clock, DollarSign, Leaf, Shield, BarChart4, Building2, Truck, Recycle, Sprout } from 'lucide-react';

export const advantages = [
  {
    icon: <Leaf className="h-12 w-12 text-bunshodo-green" />,
    title: "環境に配慮した印刷技術",
    description: "FSC認証用紙、植物油インキ、VOC削減技術など環境に配慮した印刷技術を採用。CO2排出量を従来の印刷と比較して最大30%削減し、SDGs目標達成に貢献します。印刷工程における水使用量も50%削減を実現しています。",
    benefits: ["FSC認証紙・再生紙の使用", "植物油インキによる環境負荷低減", "印刷工程の水使用量50%削減"]
  },
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

export const additionalBenefits = [
  {
    icon: <Leaf className="h-8 w-8 text-bunshodo-green" />,
    title: "CO2排出量を大幅削減",
    description: "輸送距離の短縮や梱包材の最適化により、CO2排出量を従来比最大50%削減。物流センターと印刷工場の一体化でエネルギー効率も向上しています。",
    data: "CO2排出量50%削減"
  },
  {
    icon: <Recycle className="h-8 w-8 text-bunshodo-green" />,
    title: "再生可能資源の活用",
    description: "FSC認証紙や再生紙、生分解性梱包材の使用など、資源循環型の印刷・物流体制を構築。廃棄物の削減とリサイクル率向上に貢献します。",
    data: "リサイクル率95%"
  },
  {
    icon: <Sprout className="h-8 w-8 text-bunshodo-green" />,
    title: "SDGs目標達成に貢献",
    description: "目標12「つくる責任 つかう責任」、目標13「気候変動に具体的な対策を」など、複数のSDGs目標達成に貢献するサービス設計。",
    data: "SDGs 5目標に貢献"
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-bunshodo-green" />,
    title: "環境負荷データ分析",
    description: "印刷から配送までのCO2排出量をデータ化し、環境負荷の可視化と継続的な改善を実現。お客様のESG報告書作成にも活用できます。",
    data: "データ分析で継続改善"
  },
  {
    icon: <Building2 className="h-8 w-8 text-bunshodo-green" />,
    title: "環境配慮型倉庫",
    description: "省エネ設備や再生可能エネルギーを導入した環境配慮型倉庫でのストック管理。オフィスや自社倉庫のスペース有効活用にも貢献します。",
    data: "オフィススペース25%削減"
  },
  {
    icon: <Truck className="h-8 w-8 text-bunshodo-green" />,
    title: "グリーン配送",
    description: "電気自動車やハイブリッド車を活用し、最適配送ルートで環境負荷を低減。共同配送による配送効率化も実現しています。",
    data: "配送効率30%向上"
  }
];

export const integrationExplanation = {
  title: "環境特化型印刷フルフィルメントとは？",
  description: "従来の分業型サービスと文唱堂の環境特化型ワンストップサービスを比較すると、効率性と環境負荷低減効果の違いは明らかです。",
  traditionalSystem: [
    "印刷会社、運送会社、倉庫会社がそれぞれ別々の会社",
    "複数の会社との連絡調整に時間がかかる",
    "各社へのマージンが発生しコストが高くなる",
    "情報共有不足によるミスや納期遅延のリスク",
    "環境対策は各社バラバラで総合的な効果が低い"
  ],
  integratedSystem: [
    "環境配慮型印刷・配送・保管を一社で完結",
    "ワンストップサービスで手続きが簡単",
    "中間マージンカットで30%のコスト削減",
    "一貫した環境管理でSDGs目標達成に貢献",
    "環境負荷データの一元管理でESG報告書作成も容易"
  ]
};
