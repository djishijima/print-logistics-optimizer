
import React from 'react';
import { Award, Clock, DollarSign, Leaf, Shield, BarChart4, Building2, Truck } from 'lucide-react';

export const advantages = [
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

export const integrationExplanation = {
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
