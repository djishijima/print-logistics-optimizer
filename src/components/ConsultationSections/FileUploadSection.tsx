
import React, { useState, useCallback } from 'react';
import { Upload, File, X, FileText, ImageIcon, FileSpreadsheet } from 'lucide-react';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Progress } from '@/components/ui/progress';

interface FileUploadSectionProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FileUploadSection: React.FC<FileUploadSectionProps> = ({ files, setFiles }) => {
  const [showUploadSuccess, setShowUploadSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Handle drag events
  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);
  
  // Handle drop event
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);
  
  // Process files from input or drop
  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList);
    setFiles(prev => [...prev, ...newFiles]);
    
    // Simulate upload progress
    setUploadProgress(0);
    const timer = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowUploadSuccess(true);
          
          // Auto-close success message after 3 seconds
          setTimeout(() => {
            setShowUploadSuccess(false);
          }, 3000);
          
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  
  // Get file type icon based on mime type
  const getFileIcon = (file: File) => {
    const type = file.type;
    
    if (type.includes('image')) {
      return <ImageIcon className="h-4 w-4 text-bunshodo-blue" />;
    } else if (type.includes('pdf')) {
      return <FileText className="h-4 w-4 text-red-500" />;
    } else if (type.includes('spreadsheet') || type.includes('excel') || file.name.endsWith('.xlsx') || file.name.endsWith('.xls')) {
      return <FileSpreadsheet className="h-4 w-4 text-green-600" />;
    } else {
      return <File className="h-4 w-4 text-gray-500" />;
    }
  };
  
  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="border border-dashed border-bunshodo-blue/40 rounded-xl p-5 bg-bunshodo-blue/5">
      <div className="flex items-center gap-2 mb-3">
        <Upload className="h-5 w-5 text-bunshodo-blue" />
        <h4 className="font-medium text-bunshodo-blue">参考資料をアップロード（任意）</h4>
      </div>
      
      <div className="text-sm text-bunshodo-medium-gray mb-4">
        現在のコスト資料や請求書などがあれば、より正確な分析が可能です。
        <strong>アップロードは必須ではありません。</strong>
      </div>
      
      <div 
        className={`flex flex-col items-center justify-center py-6 px-4 border-2 border-dashed rounded-lg transition-colors ${
          dragActive ? 'border-bunshodo-blue bg-bunshodo-blue/10' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className={`h-10 w-10 mb-2 ${dragActive ? 'text-bunshodo-blue' : 'text-gray-400'}`} />
        <p className="text-sm text-center mb-2">
          {dragActive 
            ? 'ファイルをドロップしてアップロード' 
            : 'ドラッグ＆ドロップでファイルをアップロード'}
        </p>
        <p className="text-xs text-gray-500 mb-3 text-center">または</p>
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
      
      {/* Upload progress indicator */}
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>アップロード中...</span>
            <span>{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium mb-2">アップロードされたファイル:</p>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center py-2 px-3 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex items-center space-x-2 overflow-hidden">
                  {getFileIcon(file)}
                  <div className="overflow-hidden">
                    <p className="truncate max-w-[180px] text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="ファイルを削除"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {files.length === 0 && (
        <div className="mt-4 p-4 bg-white/50 rounded-lg border border-gray-200">
          <p className="text-center text-bunshodo-medium-gray text-sm">
            アップロードは任意です。テキストでの詳細な情報提供でも分析可能です。
          </p>
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
