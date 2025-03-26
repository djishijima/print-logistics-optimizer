
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Control, useWatch } from 'react-hook-form';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define the printing and logistics issues with categories
export const printingIssues = [
  { id: 'high-cost', label: '印刷コストが高い', category: 'コスト' },
  { id: 'quality', label: '印刷品質に満足していない', category: '品質' },
  { id: 'delivery-time', label: '納期が遅い', category: '納期' },
  { id: 'inventory', label: '在庫管理が難しい', category: '管理' },
  { id: 'eco-friendly', label: '環境に配慮した印刷方法を探している', category: '環境' },
  { id: 'design-issues', label: 'デザインの修正が多く手間がかかる', category: '業務効率' },
  { id: 'color-consistency', label: '色の一貫性を保つのが難しい', category: '品質' },
  { id: 'quantity-flexibility', label: '小ロットから大ロットまで柔軟な対応が必要', category: '生産' },
  { id: 'variable-data', label: 'パーソナライズ印刷の需要がある', category: '機能' },
  { id: 'outdated-tech', label: '古い印刷設備で対応に限界がある', category: '設備' },
  { id: 'rush-orders', label: '急な発注に対応できない', category: '納期' },
];

export const logisticsIssues = [
  { id: 'shipping-cost', label: '配送コストが高い', category: 'コスト' },
  { id: 'delivery-damage', label: '配送中の商品破損', category: '品質' },
  { id: 'tracking', label: '配送状況の把握が難しい', category: '管理' },
  { id: 'storage', label: '保管スペースの確保が難しい', category: 'スペース' },
  { id: 'international', label: '国際配送の課題', category: '配送範囲' },
  { id: 'complex-distribution', label: '複雑な配送先への対応が難しい', category: '配送範囲' },
  { id: 'seasonal-peaks', label: '繁忙期の配送キャパシティ不足', category: 'キャパシティ' },
  { id: 'last-mile', label: '最終配送区間の効率が悪い', category: '効率' },
  { id: 'returns-handling', label: '返品処理の手間とコスト', category: '返品・交換' },
  { id: 'packaging-waste', label: '過剰梱包による環境負荷と費用', category: '環境' },
  { id: 'labor-shortage', label: '物流人材の不足', category: '人材' },
  { id: 'inventory-accuracy', label: '在庫精度の維持が難しい', category: '管理' },
];

// Group issues by category
const groupIssuesByCategory = (issues: typeof printingIssues) => {
  const groups: Record<string, typeof printingIssues> = {};
  
  issues.forEach(issue => {
    if (!groups[issue.category]) {
      groups[issue.category] = [];
    }
    groups[issue.category].push(issue);
  });
  
  return groups;
};

interface IssueCheckboxGroupProps {
  control: Control<any>;
  name: string;
  items: { id: string; label: string; category: string }[];
  detailsName: string;
}

const IssueCheckboxGroup: React.FC<IssueCheckboxGroupProps> = ({ 
  control, 
  name, 
  items,
  detailsName
}) => {
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>({});
  const selectedIssues = useWatch({ control, name }) || [];
  
  const groupedItems = groupIssuesByCategory(items);
  
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          {Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category} className="mb-4">
              <div 
                className="flex items-center justify-between bg-bunshodo-blue/10 p-2 rounded-md cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <h5 className="font-medium text-bunshodo-blue">{category}</h5>
                {expandedCategories[category] ? (
                  <ChevronUp className="h-4 w-4 text-bunshodo-blue" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-bunshodo-blue" />
                )}
              </div>
              
              {(expandedCategories[category] || !expandedCategories[category]) && (
                <div className="mt-2 ml-2 space-y-2">
                  {categoryItems.map((item) => (
                    <div key={item.id}>
                      <FormField
                        control={control}
                        name={name}
                        render={({ field }) => {
                          const isChecked = field.value?.includes(item.id);
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0 mb-1"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={isChecked}
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
                      
                      {/* Conditional detail field when issue is selected */}
                      {selectedIssues.includes(item.id) && (
                        <FormField
                          control={control}
                          name={`${detailsName}.${item.id}`}
                          render={({ field }) => (
                            <FormItem className="ml-7 mt-2 mb-3">
                              <FormControl>
                                <Textarea
                                  placeholder={`${item.label}について、詳細をご記入ください（任意）`}
                                  className="resize-none text-sm h-20"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-bunshodo-blue/10 shadow-sm">
        <h4 className="font-medium mb-4 text-bunshodo-blue text-lg">印刷に関する課題</h4>
        <div className="pl-1">
          <IssueCheckboxGroup 
            control={control} 
            name="printingIssues" 
            items={printingIssues}
            detailsName="printingIssueDetails"
          />
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border border-bunshodo-blue/10 shadow-sm">
        <h4 className="font-medium mb-4 text-bunshodo-blue text-lg">物流に関する課題</h4>
        <div className="pl-1">
          <IssueCheckboxGroup 
            control={control} 
            name="logisticsIssues" 
            items={logisticsIssues}
            detailsName="logisticsIssueDetails"
          />
        </div>
      </div>
      
      <div className="p-4 bg-bunshodo-blue/5 rounded-lg border border-bunshodo-blue/10">
        <p className="text-bunshodo-medium-gray text-sm">
          チェックした課題について、詳細を入力いただくことで、より具体的なソリューションをご提案できます。
          該当する課題がない場合は、次のステップで自由にご記入いただけます。
        </p>
      </div>
    </div>
  );
};

export default IssueSelectionSection;
