
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel, FormDescription, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';

interface PrivacyAgreementSectionProps {
  control: Control<any>;
}

const PrivacyAgreementSection: React.FC<PrivacyAgreementSectionProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="agreedToTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-bunshodo-blue/5">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              プライバシーポリシーに同意する <span className="text-red-500">*</span>
            </FormLabel>
            <FormDescription>
              個人情報の取り扱いについての<a href="#" className="text-bunshodo-blue hover:underline">プライバシーポリシー</a>に同意します。
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default PrivacyAgreementSection;
