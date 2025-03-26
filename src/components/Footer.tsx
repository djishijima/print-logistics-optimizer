
import React from 'react';
import { MapPin, Phone, Mail, Globe, Leaf, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="about" className="bg-bunshodo-blue/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-bunshodo-blue mb-6">Bunshodo</h3>
            <p className="text-bunshodo-medium-gray mb-6">
              企画制作から印刷・発送・在庫管理まで フルサービスで対応！物流ができる印刷会社だからこそのアウトソーシングサービス
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  印刷サービス
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  物流サービス
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  在庫管理
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  デザイン制作
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  Webサービス
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  会社概要
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  SDGsへの取り組み
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  採用情報
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="text-bunshodo-medium-gray hover:text-bunshodo-blue transition-colors">
                  プライバシーポリシー
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-bunshodo-blue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-bunshodo-medium-gray">
                  〒123-4567 東京都○○区○○1-2-3
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-bunshodo-blue mr-2 flex-shrink-0" />
                <span className="text-bunshodo-medium-gray">
                  03-1234-5678
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-bunshodo-blue mr-2 flex-shrink-0" />
                <span className="text-bunshodo-medium-gray">
                  info@bunshodo.example.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-bunshodo-blue/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <span className="text-bunshodo-medium-gray text-sm">
                © 2023 Bunshodo Printing Company. All rights reserved.
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
