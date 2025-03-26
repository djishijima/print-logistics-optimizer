
import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { toast } from 'sonner';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, Check } from 'lucide-react';

// Import the component sections
import ContactInfoSection from './ConsultationSections/ContactInfoSection';
import IssueSelectionSection from './ConsultationSections/IssueSelectionSection';
import FileUploadSection from './ConsultationSections/FileUploadSection';
import PrivacyAgreementSection from './ConsultationSections/PrivacyAgreementSection';
import MessageSection from './ConsultationSections/MessageSection';
import CostAnalysisSection from './ConsultationSections/CostAnalysisSection';

// Define the schema for the form
const consultationFormSchema = z.object({
  name: z.string().min(1, { message: 'お名前は必須です' }),
  company: z.string().min(1, { message: '会社名は必須です' }),
  email: z.string().email({ message: 'メールアドレスの形式が正しくありません' }),
  phone: z.string().optional(),
  message: z.string().optional(),
  printingIssues: z.array(z.string()).optional(),
  printingIssueDetails: z.record(z.string(), z.string()).optional(),
  logisticsIssues: z.array(z.string()).optional(),
  logisticsIssueDetails: z.record(z.string(), z.string()).optional(),
  warehouseCost: z.string().optional(),
  shippingCost: z.string().optional(),
  printingCost: z.string().optional(),
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
  const [currentStep, setCurrentStep] = useState(1);
  const [potentialSavings, setPotentialSavings] = useState(0);
  
  const totalSteps = 4;
  
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
      printingIssueDetails: {},
      logisticsIssues: [],
      logisticsIssueDetails: {},
      warehouseCost: '',
      shippingCost: '',
      printingCost: '',
      agreedToTerms: false,
    },
    mode: 'onChange'
  });

  const warehouseCost = form.watch('warehouseCost');
  const shippingCost = form.watch('shippingCost');
  const printingCost = form.watch('printingCost');
  const printingIssues = form.watch('printingIssues');
  const logisticsIssues = form.watch('logisticsIssues');

  // Calculate potential savings
  useEffect(() => {
    const warehouseValue = parseInt(warehouseCost || '0') || 0;
    const shippingValue = parseInt(shippingCost || '0') || 0;
    const printingValue = parseInt(printingCost || '0') || 0;
    
    const totalCost = warehouseValue + shippingValue + printingValue;
    const savings = Math.round(totalCost * 0.3); // 30% potential savings
    
    setPotentialSavings(savings);
  }, [warehouseCost, shippingCost, printingCost]);

  // Next step handler
  const goToNextStep = async () => {
    let canProceed = false;
    
    // Validate current step fields
    if (currentStep === 1) {
      // Issues selection step doesn't require validation, can always proceed
      canProceed = true;
    } else if (currentStep === 2 && formType === 'cost-analysis') {
      // Cost analysis step - validation not required, all fields are optional
      canProceed = true;
    } else if (currentStep === 2 || currentStep === 3) {
      // Message step or contact info step
      canProceed = true;
    } else if (currentStep === 4) {
      // Final step with terms acceptance - validate the whole form
      const isValid = await form.trigger();
      canProceed = isValid;
    }
    
    if (canProceed && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Previous step handler
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll to top of form
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: ConsultationFormValues) => {
    try {
      // Here you would integrate with your backend service
      console.log('Form submitted', data);
      console.log('Uploaded files:', files);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let successMessage = '送信が完了しました。担当者からご連絡いたします。';
      
      if (formType === 'cost-analysis') {
        const totalCost = (
          (parseInt(data.warehouseCost || '0') || 0) + 
          (parseInt(data.shippingCost || '0') || 0) + 
          (parseInt(data.printingCost || '0') || 0)
        );
        
        const potentialSavings = Math.round(totalCost * 0.3); // 30% potential savings
        
        if (totalCost > 0) {
          successMessage = `送信完了！ 現在のコスト情報から、年間約${(potentialSavings * 12).toLocaleString()}円の削減可能性があります。詳細な分析結果を担当者からご連絡いたします。`;
        }
      }
      
      toast.success(successMessage);
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

  // Render step content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <IssueSelectionSection control={form.control} />;
      case 2:
        if (formType === 'cost-analysis') {
          return (
            <CostAnalysisSection 
              control={form.control} 
              formType={formType} 
              potentialSavings={potentialSavings}
            />
          );
        } else {
          // For consultation form, show message section in step 2
          return <MessageSection control={form.control} />;
        }
      case 3:
        if (formType === 'cost-analysis') {
          // For cost analysis form, show message section in step 3
          return (
            <>
              <MessageSection control={form.control} />
              <FileUploadSection files={files} setFiles={setFiles} />
            </>
          );
        } else {
          // For consultation form, show file upload section in step 3
          return <FileUploadSection files={files} setFiles={setFiles} />;
        }
      case 4:
        return (
          <>
            <ContactInfoSection control={form.control} />
            <PrivacyAgreementSection control={form.control} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
      <h3 className="text-2xl font-bold mb-2 text-bunshodo-blue">
        {formTitle}
      </h3>
      
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-bunshodo-medium-gray mb-2">
          <span>ステップ {currentStep}/{totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% 完了</span>
        </div>
        <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        
        <div className="flex justify-between mt-2 text-xs text-bunshodo-medium-gray">
          <span>課題選択</span>
          <span>コスト情報</span>
          <span>補足情報</span>
          <span>お客様情報</span>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Step content */}
          {renderStepContent()}

          {/* Navigation buttons */}
          <div className="flex justify-between space-x-4 pt-4 border-t border-gray-200">
            {currentStep > 1 ? (
              <Button 
                type="button" 
                variant="outline" 
                onClick={goToPreviousStep}
              >
                前のステップ
              </Button>
            ) : (
              <div>
                {onCancel && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={onCancel}
                  >
                    キャンセル
                  </Button>
                )}
              </div>
            )}
            
            {currentStep < totalSteps ? (
              <Button 
                type="button" 
                className="bg-bunshodo-blue hover:bg-bunshodo-dark-blue"
                onClick={goToNextStep}
              >
                次のステップ
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="bg-bunshodo-blue hover:bg-bunshodo-dark-blue"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  "送信中..."
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    送信する
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ConsultationForm;
