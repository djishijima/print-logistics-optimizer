
import React from 'react';
import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';

// Define the printing and logistics issues
export const printingIssues = [
  { id: 'high-cost', label: '印刷コストが高い' },
  { id: 'quality', label: '印刷品質に満足していない' },
  { id: 'delivery-time', label: '納期が遅い' },
  { id: 'inventory', label: '在庫管理が難しい' },
  { id: 'eco-friendly', label: '環境に配慮した印刷方法を探している' },
];

export const logisticsIssues = [
  { id: 'shipping-cost', label: '配送コストが高い' },
  { id: 'delivery-damage', label: '配送中の商品破損' },
  { id: 'tracking', label: '配送状況の把握が難しい' },
  { id: 'storage', label: '保管スペースの確保が難しい' },
  { id: 'international', label: '国際配送の課題' },
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
