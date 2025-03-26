
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';
import { Mail, Building, User, Phone, Info } from 'lucide-react';

interface ContactInfoSectionProps {
  control: Control<any>;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ control }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-bunshodo-blue/10 shadow-sm">
        <div className="flex items-center mb-4">
          <Info className="h-5 w-5 text-bunshodo-blue mr-2" />
          <h4 className="font-medium text-bunshodo-blue text-lg">お客様情報</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  会社名 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="株式会社○○" 
                    {...field} 
                    className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  お名前 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="山田 太郎" 
                    {...field} 
                    className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  メールアドレス <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="example@company.com" 
                    type="email"
                    {...field} 
                    className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                  />
                </FormControl>
                <FormDescription>
                  分析結果はこちらのメールアドレスにお送りします
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  電話番号（任意）
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="03-1234-5678" 
                    {...field} 
                    className="transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                    type="tel"
                  />
                </FormControl>
                <FormDescription>
                  より詳細なご提案をご希望の場合はご記入ください
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
