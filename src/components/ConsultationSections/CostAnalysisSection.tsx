
import React from 'react';
import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Truck, Warehouse, Printer } from 'lucide-react';

interface CostAnalysisSectionProps {
  control: Control<any>;
  formType: 'consultation' | 'cost-analysis';
}

const CostAnalysisSection: React.FC<CostAnalysisSectionProps> = ({ control, formType }) => {
  if (formType !== 'cost-analysis') {
    return null;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-bunshodo-blue">現在のコスト情報</h3>
      <p className="text-bunshodo-medium-gray text-sm mb-4">
        現在の印刷・物流コストをご入力いただくことで、より正確な削減見込みをご提案できます。
        概算でも構いませんので、ご入力ください。
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
                    <Input type="number" placeholder="例: 300000" {...field} />
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
                    <Input type="number" placeholder="例: 250000" {...field} />
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
                    <Input type="number" placeholder="例: 200000" {...field} />
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
      
      <Card className="bg-bunshodo-blue/5 border-bunshodo-blue/20">
        <CardContent className="pt-6">
          <p className="text-center font-medium text-bunshodo-blue">
            上記の情報をご入力いただくことで、文唱堂のサービスによる<br />
            <span className="text-xl font-bold">最大30%のコスト削減可能性</span>を診断します。
          </p>
          <p className="text-center text-bunshodo-medium-gray mt-2 text-sm">
            フォームをご送信いただくと、専門スタッフが詳細な分析結果と<br />
            お客様に最適なプランをご提案いたします。
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostAnalysisSection;
