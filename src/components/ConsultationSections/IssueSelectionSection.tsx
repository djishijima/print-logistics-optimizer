
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';

// Define the printing and logistics issues
export const printingIssues = [
  { id: 'high-cost', label: '印刷コストが高い' },
  { id: 'quality', label: '印刷品質に満足していない' },
  { id: 'delivery-time', label: '納期が遅い' },
  { id: 'inventory', label: '在庫管理が難しい' },
  { id: 'eco-friendly', label: '環境に配慮した印刷方法を探している' },
  { id: 'design-issues', label: 'デザインの修正が多く手間がかかる' },
  { id: 'color-consistency', label: '色の一貫性を保つのが難しい' },
  { id: 'quantity-flexibility', label: '小ロットから大ロットまで柔軟な対応が必要' },
  { id: 'variable-data', label: 'パーソナライズ印刷の需要がある' },
  { id: 'outdated-tech', label: '古い印刷設備で対応に限界がある' },
  { id: 'rush-orders', label: '急な発注に対応できない' },
];

export const logisticsIssues = [
  { id: 'shipping-cost', label: '配送コストが高い' },
  { id: 'delivery-damage', label: '配送中の商品破損' },
  { id: 'tracking', label: '配送状況の把握が難しい' },
  { id: 'storage', label: '保管スペースの確保が難しい' },
  { id: 'international', label: '国際配送の課題' },
  { id: 'complex-distribution', label: '複雑な配送先への対応が難しい' },
  { id: 'seasonal-peaks', label: '繁忙期の配送キャパシティ不足' },
  { id: 'last-mile', label: '最終配送区間の効率が悪い' },
  { id: 'returns-handling', label: '返品処理の手間とコスト' },
  { id: 'packaging-waste', label: '過剰梱包による環境負荷と費用' },
  { id: 'labor-shortage', label: '物流人材の不足' },
  { id: 'inventory-accuracy', label: '在庫精度の維持が難しい' },
];

interface IssueCheckboxProps {
  control: Control<any>;
  name: string;
  items: { id: string; label: string }[];
}

const IssueCheckboxGroup: React.FC<IssueCheckboxProps> = ({ control, name, items }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          {items.map((item) => (
            <FormField
              key={item.id}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0 mb-1"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value || [], item.id])
                            : field.onChange(
                              field.value?.filter(
                                (value: string) => value !== item.id
                              )
                            )
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                )
              }}
            />
          ))}
        </FormItem>
      )}
    />
  );
};

interface IssueSectionProps {
  control: Control<any>;
}

const IssueSelectionSection: React.FC<IssueSectionProps> = ({ control }) => {
  return (
    <div className="bg-bunshodo-blue/5 p-4 rounded-xl">
      <h4 className="font-medium mb-3 text-bunshodo-blue">印刷に関する課題</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <IssueCheckboxGroup 
          control={control} 
          name="printingIssues" 
          items={printingIssues} 
        />
      </div>

      <h4 className="font-medium mb-3 mt-4 text-bunshodo-blue">物流に関する課題</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <IssueCheckboxGroup 
          control={control} 
          name="logisticsIssues" 
          items={logisticsIssues} 
        />
      </div>
    </div>
  );
};

export default IssueSelectionSection;
