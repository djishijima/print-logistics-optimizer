
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';

// Import the new component sections
import ContactInfoSection from './ConsultationSections/ContactInfoSection';
import IssueSelectionSection from './ConsultationSections/IssueSelectionSection';
import FileUploadSection from './ConsultationSections/FileUploadSection';
import PrivacyAgreementSection from './ConsultationSections/PrivacyAgreementSection';
import MessageSection from './ConsultationSections/MessageSection';

// Define the schema for the form
const consultationFormSchema = z.object({
  name: z.string().min(1, { message: 'お名前は必須です' }),
  company: z.string().min(1, { message: '会社名は必須です' }),
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  phone: z.string().optional(),
  message: z.string().optional(),
  printingIssues: z.array(z.string()).optional(),
  logisticsIssues: z.array(z.string()).optional(),
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
  const [files, setFiles] = useState<File[]>([]);
  
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
      printingIssues: [],
      logisticsIssues: [],
      agreedToTerms: false,
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    try {
      // Here you would integrate with your backend service
      console.log('Form submitted', data);
      console.log('Uploaded files:', files);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('送信が完了しました。担当者からご連絡いたします。');
      form.reset();
      setFiles([]);
      
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
          {/* Issue Selection Section - Now First */}
          <IssueSelectionSection control={form.control} />
          
          {/* Message Section */}
          <MessageSection control={form.control} />
          
          {/* File Upload Section */}
          <FileUploadSection files={files} setFiles={setFiles} />
          
          {/* Contact Information Section - Now Last */}
          <ContactInfoSection control={form.control} />
          
          {/* Privacy Agreement Section */}
          <PrivacyAgreementSection control={form.control} />

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
