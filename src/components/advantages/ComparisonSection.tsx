
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';
import { Zap, Target } from 'lucide-react';

interface ComparisonSectionProps {
  title: string;
  description: string;
  traditionalSystem: string[];
  integratedSystem: string[];
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title,
  description,
  traditionalSystem,
  integratedSystem
}) => {
  return (
    <div className="mb-16 reveal">
      <GlassPanelEffect
        className="p-8 rounded-2xl"
        intensity="medium"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
        <p className="text-bunshodo-medium-gray text-center mb-8">{description}</p>
        
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
              {traditionalSystem.map((item, idx) => (
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
              {integratedSystem.map((item, idx) => (
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
  );
};

export default ComparisonSection;
