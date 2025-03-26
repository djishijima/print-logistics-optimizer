
import React from 'react';
import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Truck, Warehouse, Printer, TrendingDown } from 'lucide-react';

interface CostAnalysisSectionProps {
  control: Control<any>;
  formType: 'consultation' | 'cost-analysis';
  potentialSavings?: number;
}

const CostAnalysisSection: React.FC<CostAnalysisSectionProps> = ({ 
  control, 
  formType,
  potentialSavings = 0
}) => {
  if (formType !== 'cost-analysis') {
    return null;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-bunshodo-blue">現在のコスト情報</h3>
      <p className="text-bunshodo-medium-gray text-sm mb-4">
        現在の印刷・物流コストをご入力いただくことで、より正確な削減見込みをご提案できます。
        概算でも構いませんので、各項目をご入力ください。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-bunshodo-blue/10 rounded-full mr-3">
                <Warehouse className="h-5 w-5 text-bunshodo-blue" />
              </div>
              <h4 className="font-medium">倉庫費用</h4>
            </div>
            <FormField
              control={control}
              name="warehouseCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>月額費用 (円)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="例: 300000" 
                      {...field} 
                      className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                    />
                  </FormControl>
                  <FormDescription>
                    月額の倉庫賃料や管理費の合計
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-bunshodo-blue/10 rounded-full mr-3">
                <Truck className="h-5 w-5 text-bunshodo-blue" />
              </div>
              <h4 className="font-medium">運送費</h4>
            </div>
            <FormField
              control={control}
              name="shippingCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>月額費用 (円)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="例: 250000" 
                      {...field} 
                      className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                    />
                  </FormControl>
                  <FormDescription>
                    月間の配送料金の合計
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-bunshodo-blue/10 rounded-full mr-3">
                <Printer className="h-5 w-5 text-bunshodo-blue" />
              </div>
              <h4 className="font-medium">印刷費</h4>
            </div>
            <FormField
              control={control}
              name="printingCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>月額費用 (円)</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="例: 200000" 
                      {...field} 
                      className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                    />
                  </FormControl>
                  <FormDescription>
                    月間の印刷費用の合計
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </div>
      
      <Card className={`border-bunshodo-blue/20 ${potentialSavings > 0 ? 'bg-bunshodo-blue/10' : 'bg-bunshodo-blue/5'} transition-all duration-500`}>
        <CardContent className="pt-6">
          <div className="text-center">
            {potentialSavings > 0 ? (
              <div className="animate-fadeIn">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 bg-white/50 rounded-full mr-2">
                    <TrendingDown className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-bunshodo-blue">削減見込み額</h3>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  月間 {potentialSavings.toLocaleString()} 円
                </div>
                <div className="text-2xl font-bold text-green-700 mb-4">
                  年間 {(potentialSavings * 12).toLocaleString()} 円
                </div>
                <p className="text-bunshodo-medium-gray text-sm">
                  ※ この金額はあくまで目安です。詳細な分析は専門スタッフが行います。
                </p>
              </div>
            ) : (
              <p className="text-center font-medium text-bunshodo-blue">
                上記の情報をご入力いただくことで、文唱堂のサービスによる<br />
                <span className="text-xl font-bold">最大30%のコスト削減可能性</span>を即時に診断します。
              </p>
            )}
          </div>
          
          <div className="mt-4 p-4 bg-white/50 rounded-lg border border-gray-200">
            <div className="text-sm text-bunshodo-medium-gray">
              <p className="font-medium mb-1">このコスト削減で実現できること:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>新規事業やマーケティング施策への投資</li>
                <li>社内環境の改善や従業員の福利厚生の充実</li>
                <li>価格競争力の向上による新規顧客獲得</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostAnalysisSection;
