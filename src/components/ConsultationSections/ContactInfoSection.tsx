
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control } from 'react-hook-form';
import { Mail, Building, User, Phone } from 'lucide-react';

interface ContactInfoSectionProps {
  control: Control<any>;
}

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({ control }) => {
  return (
    <>
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
                <Input placeholder="株式会社○○" {...field} />
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
                <Input placeholder="山田 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <Input placeholder="example@company.com" {...field} />
              </FormControl>
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
                <Input placeholder="03-1234-5678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};

export default ContactInfoSection;
