
// 共通タイプ定義

// Google Analytics拡張タイプ
interface Window {
  gtag?: (command: string, action: string, params: any) => void;
  dataLayer?: any[];
}
