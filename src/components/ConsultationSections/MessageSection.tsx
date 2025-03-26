
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { FileText } from 'lucide-react';
import { Control } from 'react-hook-form';

interface MessageSectionProps {
  control: Control<any>;
}

const MessageSection: React.FC<MessageSectionProps> = ({ control }) => {
  return (
    <FormField
      control={control}
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
  );
};

export default MessageSection;
