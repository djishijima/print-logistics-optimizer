
import React from 'react';
import { MapPin, Phone, Mail, Globe, Leaf, Award, Fax, Building, ExternalLink } from 'lucide-react';

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
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  印刷サービス
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  物流サービス
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  在庫管理
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  デザイン制作
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  Webサービス
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  SDGsへの取り組み
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors flex items-center">
                  <span className="mr-2 w-1 h-1 rounded-full bg-bunshodo-blue inline-block"></span>
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Building className="h-5 w-5 text-bunshodo-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-bunshodo-medium-gray">
                  <strong className="block text-bunshodo-blue mb-1">本社</strong>
                  〒101-0025 東京都千代田区神田佐久間町3-37
                  <div className="mt-1">
                    <div className="flex items-center mr-3 mb-1 text-sm">
                      <Phone className="h-4 w-4 text-bunshodo-blue mr-1 flex-shrink-0" />
                      <span>03-3851-0111</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Fax className="h-4 w-4 text-bunshodo-blue mr-1 flex-shrink-0" />
                      <span>03-3861-1979</span>
                    </div>
                  </div>
                </span>
              </li>
              <li className="flex items-start">
                <Building className="h-5 w-5 text-bunshodo-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-bunshodo-medium-gray">
                  <strong className="block text-bunshodo-blue mb-1">町屋工場</strong>
                  〒116-0001 東京都荒川区町屋8-22-10
                  <div className="mt-1">
                    <div className="flex items-center mr-3 mb-1 text-sm">
                      <Phone className="h-4 w-4 text-bunshodo-blue mr-1 flex-shrink-0" />
                      <span>03-3819-2500</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Fax className="h-4 w-4 text-bunshodo-blue mr-1 flex-shrink-0" />
                      <span>03-3819-2530</span>
                    </div>
                  </div>
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bunshodo-blue mr-2 flex-shrink-0" />
                <a 
                  href="mailto:info@b-p.co.jp" 
                  className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors"
                >
                  info@b-p.co.jp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-bunshodo-blue/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <span className="text-bunshodo-medium-gray text-sm">
                © 2023 文唱堂印刷株式会社. All rights reserved.
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center px-3 py-1 bg-bunshodo-green/10 text-bunshodo-green text-sm rounded-full">
                <Leaf className="h-4 w-4 mr-1" /> 環境配慮型印刷
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-bunshodo-blue/10 text-bunshodo-blue text-sm rounded-full">
                <Award className="h-4 w-4 mr-1" /> 経済産業大臣賞
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
