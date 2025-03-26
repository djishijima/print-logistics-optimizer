
import React from 'react';
import { Control } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Shield } from 'lucide-react';

interface MessageSectionProps {
  control: Control<any>;
}

const MessageSection: React.FC<MessageSectionProps> = ({ control }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-bunshodo-blue/10 shadow-sm">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-5 w-5 text-bunshodo-blue mr-2" />
          <h4 className="font-medium text-bunshodo-blue text-lg">追加コメント（任意）</h4>
        </div>
        
        <FormField
          control={control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-bunshodo-medium-gray">その他、ご質問やご要望がございましたらご記入ください</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="例: 特急の大量印刷が必要な時期があります。対応可能でしょうか？" 
                  className="min-h-[150px] text-base transition-all focus:ring-2 focus:ring-bunshodo-blue/30"
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                課題の詳細や具体的な数値などを記入いただくと、より具体的なご提案が可能です。
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="flex p-4 bg-green-50 border border-green-100 rounded-lg items-start">
        <Shield className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
        <div className="text-sm text-green-800">
          <p className="font-medium mb-1">安心・安全のお約束</p>
          <p>・ご入力いただいた情報は SSL 暗号化通信で保護されています</p>
          <p>・ご提供いただいた情報は、お見積りとご提案以外の目的では使用いたしません</p>
          <p>・お客様の同意なく第三者に情報を提供することはありません</p>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
