
import { Clock, DollarSign, HelpCircle, Palette, FileText, Package, TrendingUp, Network, Building, BarChart, Truck, Search, Archive, Settings, Recycle, Users } from 'lucide-react';
import React from 'react';

export interface ProblemItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProblemCategory {
  name: string;
  problems: ProblemItem[];
}

export const problemCategories: ProblemCategory[] = [
  {
    name: "印刷",
    problems: [
      {
        icon: <DollarSign className="h-7 w-7" />,
        title: 'まとめて1社に頼むことでコストダウンしたい',
        description: '複数の業者への発注では中間マージンが発生し、コストがかさみます。'
      },
      {
        icon: <HelpCircle className="h-7 w-7" />,
        title: '早く納品してもらいたいが、品質が不安',
        description: '納期を優先すると品質が犠牲になることが多く、両立が難しいと感じていませんか？'
      },
      {
        icon: <Palette className="h-7 w-7" />,
        title: 'デザイン修正の繰り返しで時間とコストがかかる',
        description: '何度も修正を重ねるうちに予算オーバーや納期遅延が発生していませんか？'
      },
      {
        icon: <FileText className="h-7 w-7" />,
        title: 'パーソナライズド印刷への対応が難しい',
        description: '顧客ごとにカスタマイズされた印刷物の需要に対応できていますか？'
      }
    ]
  },
  {
    name: "物流",
    problems: [
      {
        icon: <Clock className="h-7 w-7" />,
        title: '各工程ごとの発注業務やスケジュール管理が煩雑',
        description: '印刷会社と物流会社との間の調整に時間と労力が取られていませんか？'
      },
      {
        icon: <Package className="h-7 w-7" />,
        title: '仕分け、梱包、発送に人手が取られる',
        description: '専任者を雇うほどでもなく、本来の業務に集中できていない状況ではありませんか？'
      },
      {
        icon: <TrendingUp className="h-7 w-7" />,
        title: '繁忙期の配送キャパが足りず機会損失がある',
        description: '需要ピーク時に配送能力が追いつかず、販売機会を逃していませんか？'
      },
      {
        icon: <Network className="h-7 w-7" />,
        title: '複雑な配送先管理に手間がかかりすぎる',
        description: '多数の配送先や特殊な配送条件の管理に多くのリソースを割いていませんか？'
      }
    ]
  },
  {
    name: "倉庫・在庫管理",
    problems: [
      {
        icon: <Building className="h-7 w-7" />,
        title: '場所を取っている在庫をどこかに預けたい',
        description: 'オフィスや倉庫のスペースと管理費を節約したいとお考えではありませんか？'
      },
      {
        icon: <BarChart className="h-7 w-7" />,
        title: '在庫精度が低く、余剰在庫や欠品が発生する',
        description: '在庫管理の不正確さによる機会損失やコスト増加に悩んでいませんか？'
      },
      {
        icon: <Truck className="h-7 w-7" />,
        title: '入出庫業務の効率化が図れていない',
        description: '手作業による入出庫処理で時間がかかり、ミスも発生していませんか？'
      },
      {
        icon: <Search className="h-7 w-7" />,
        title: '在庫の所在が不明で探す手間がかかる',
        description: '必要な在庫がどこにあるのか分からず、探すのに時間を浪費していませんか？'
      },
      {
        icon: <Archive className="h-7 w-7" />,
        title: '季節商品や販促物の保管場所が不足している',
        description: '使用頻度の低い商品や資材が貴重なスペースを占有していませんか？'
      },
      {
        icon: <Settings className="h-7 w-7" />,
        title: '在庫管理システムの導入・運用コストが高い',
        description: '高額なシステム投資が必要で、専門知識を持つ人材も確保できていませんか？'
      }
    ]
  },
  {
    name: "その他",
    problems: [
      {
        icon: <Recycle className="h-7 w-7" />,
        title: '環境に配慮したサプライチェーンを構築したい',
        description: 'SDGsへの取り組みを推進し、企業イメージの向上を図りたいと考えていませんか？'
      },
      {
        icon: <Users className="h-7 w-7" />,
        title: '物流人材の確保と教育が追いつかない',
        description: '人手不足や高齢化により、物流業務の品質維持が難しくなっていませんか？'
      }
    ]
  }
];
