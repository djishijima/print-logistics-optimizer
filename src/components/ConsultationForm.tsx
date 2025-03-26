
import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Mail, Building, User, Phone, FileText } from 'lucide-react';

// Define the schema for the form
const consultationFormSchema = z.object({
  name: z.string().min(1, { message: 'お名前は必須です' }),
  company: z.string().optional(),
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  phone: z.string().optional(),
  message: z.string().min(5, { message: 'ご相談内容を5文字以上入力してください' }),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: 'ご利用規約に同意する必要があります',
  }),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

interface ConsultationFormProps {
  formType: 'consultation' | 'cost-analysis';
  onSubmitSuccess?: () => void;
  onCancel?: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ 
  formType, 
  onSubmitSuccess,
  onCancel
}) => {
  const formTitle = formType === 'consultation' 
    ? '無料相談フォーム' 
    : '印刷物流コスト診断';

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      agreedToTerms: false,
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    try {
      // Here you would integrate with your backend service
      console.log('Form submitted', data);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('送信が完了しました。担当者からご連絡いたします。');
      form.reset();
      
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('送信に失敗しました。後ほど再度お試しください。');
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-6 text-bunshodo-blue">
        {formTitle}
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
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

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    会社名
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="株式会社○○" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
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
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    電話番号
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="03-1234-5678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  ご相談内容 <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder={formType === 'consultation' 
                      ? "ご相談内容を詳しくお書きください" 
                      : "現在の印刷・物流に関する課題やコスト削減したい点などをお書きください"}
                    rows={5}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
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

          <div className="flex justify-end space-x-4 pt-4">
            {onCancel && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={onCancel}
              >
                キャンセル
              </Button>
            )}
            <Button 
              type="submit" 
              className="bg-bunshodo-blue hover:bg-bunshodo-dark-blue"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "送信中..." : "送信する"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ConsultationForm;
