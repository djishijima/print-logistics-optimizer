
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Mail, Building, User, Phone, FileText, Upload } from 'lucide-react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';

// Define the printing and logistics issues
const printingIssues = [
  { id: 'high-cost', label: '印刷コストが高い' },
  { id: 'quality', label: '印刷品質に満足していない' },
  { id: 'delivery-time', label: '納期が遅い' },
  { id: 'inventory', label: '在庫管理が難しい' },
  { id: 'eco-friendly', label: '環境に配慮した印刷方法を探している' },
];

const logisticsIssues = [
  { id: 'shipping-cost', label: '配送コストが高い' },
  { id: 'delivery-damage', label: '配送中の商品破損' },
  { id: 'tracking', label: '配送状況の把握が難しい' },
  { id: 'storage', label: '保管スペースの確保が難しい' },
  { id: 'international', label: '国際配送の課題' },
];

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
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
      setUploadSuccess(true);
      setShowUploadSuccess(true);
      
      // Auto-close success message after 3 seconds
      setTimeout(() => {
        setShowUploadSuccess(false);
      }, 3000);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
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

          <div className="bg-bunshodo-blue/5 p-4 rounded-xl">
            <h4 className="font-medium mb-3 text-bunshodo-blue">印刷に関する課題</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="printingIssues"
                render={() => (
                  <FormItem>
                    {printingIssues.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="printingIssues"
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
                                            (value) => value !== item.id
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
            </div>

            <h4 className="font-medium mb-3 mt-4 text-bunshodo-blue">物流に関する課題</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="logisticsIssues"
                render={() => (
                  <FormItem>
                    {logisticsIssues.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="logisticsIssues"
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
                                            (value) => value !== item.id
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
            </div>
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  追加コメント（任意）
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="その他、ご質問やご要望がございましたらご記入ください"
                    rows={3}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="border border-dashed border-bunshodo-blue/40 rounded-xl p-5 bg-bunshodo-blue/5">
            <div className="flex items-center gap-2 mb-3">
              <Upload className="h-5 w-5 text-bunshodo-blue" />
              <h4 className="font-medium text-bunshodo-blue">資料をアップロード（任意）</h4>
            </div>
            
            <div className="flex flex-col items-center justify-center py-4">
              <label
                htmlFor="file-upload"
                className="cursor-pointer px-4 py-2 bg-white border border-bunshodo-blue/30 text-bunshodo-blue rounded-md hover:bg-bunshodo-blue/10 transition-colors"
              >
                ファイルを選択
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                />
              </label>
              <p className="text-xs text-gray-500 mt-2">
                PDF, Word, Excel, JPEG, PNG (最大10MB)
              </p>
            </div>

            {files.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium mb-2">選択したファイル:</p>
                <ul className="text-sm">
                  {files.map((file, index) => (
                    <li key={index} className="flex justify-between items-center py-1 px-2 bg-white rounded mb-1">
                      <span className="truncate max-w-[200px]">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 text-xs ml-2"
                      >
                        削除
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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

      {/* Upload Success Alert */}
      <AlertDialog open={showUploadSuccess} onOpenChange={setShowUploadSuccess}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-green-600">ファイルがアップロードされました</AlertDialogTitle>
            <AlertDialogDescription>
              ファイルが正常にアップロードされました。フォーム送信時に処理されます。
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConsultationForm;
