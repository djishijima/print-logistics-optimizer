
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';

interface FileUploadSectionProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FileUploadSection: React.FC<FileUploadSectionProps> = ({ files, setFiles }) => {
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
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

  return (
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

export default FileUploadSection;
