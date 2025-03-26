
import React from 'react';
import { FormField, FormItem, FormControl, FormLabel, FormDescription, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';
import { Shield } from 'lucide-react';

interface PrivacyAgreementSectionProps {
  control: Control<any>;
}

const PrivacyAgreementSection: React.FC<PrivacyAgreementSectionProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="agreedToTerms"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border border-bunshodo-blue/20 bg-bunshodo-blue/5">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="mt-1"
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel className="text-base">
              プライバシーポリシーに同意する <span className="text-red-500">*</span>
            </FormLabel>
            <FormDescription className="flex items-start">
              <Shield className="h-4 w-4 text-bunshodo-blue mr-1 mt-0.5 flex-shrink-0" />
              <span>
                当社の<a href="#" className="text-bunshodo-blue hover:underline font-medium">プライバシーポリシー</a>に同意します。
                お客様の情報は厳重に管理し、お見積りとご提案以外の目的では使用いたしません。
              </span>
            </FormDescription>
            <FormMessage className="mt-2" />
          </div>
        </FormItem>
      )}
    />
  );
};

export default PrivacyAgreementSection;
