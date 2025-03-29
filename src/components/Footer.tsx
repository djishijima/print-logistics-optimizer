import React from 'react';
import { MapPin, Phone, Mail, Globe, Leaf, Award, Printer, Building, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-bunshodo-blue/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-bunshodo-blue mb-6">文唱堂印刷</h3>
            <p className="text-bunshodo-medium-gray mb-6">
              企画制作から印刷・発送・在庫管理まで フルサービスで対応！物流ができる印刷会社だからこそのアウトソーシングサービス
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.b-p.co.jp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
                aria-label="公式ウェブサイト"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@b-p.co.jp" 
                className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
                aria-label="メールでのお問い合わせ"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:0338510111" 
                className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
                aria-label="電話でのお問い合わせ"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">会社概要</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://b-p.co.jp/" target="_blank" rel="noopener noreferrer" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  会社概要
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://form.typeform.com/to/xAJyZjnr" target="_blank" rel="noopener noreferrer" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  無料相談
                </a>
              </li>
              <li>
                <a href="https://form.typeform.com/to/SmxiiFs5" target="_blank" rel="noopener noreferrer" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  印刷物流コスト診断
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">環境への取り組み</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  環境配慮型印刷
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  環境負荷低減
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bunshodo-light-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <span className="text-bunshodo-medium-gray text-sm">
                2023 文唱堂印刷株式会社. All rights reserved.
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a 
                href="https://www.b-p.co.jp/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@b-p.co.jp" 
                className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:0338510111" 
                className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
