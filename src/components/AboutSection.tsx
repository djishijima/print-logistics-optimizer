
import React from 'react';
import { Award, Calendar, Users, Building, Phone, MapPin, Globe, Mail, Printer, ExternalLink, History, TrendingUp, Truck, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const AboutSection: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bunshodo-blue">文唱堂印刷とは？</h2>
          <div className="w-20 h-1 bg-bunshodo-green mx-auto mb-6"></div>
          <p className="text-lg text-bunshodo-medium-gray max-w-3xl mx-auto">
            創業97年、経済産業大臣賞を受賞した確かな技術力。物流ができる印刷会社として
            企画・デザイン・物流までワンストップフルサービスで
            皆様のご要望、そして短納期・コスト削減でお応えします。
          </p>
        </div>

        {/* 創業97年の実績セクション - 新しく追加 */}
        <div className="mb-16 reveal">
          <Card className="shadow-lg border-bunshodo-light-blue/20 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-bunshodo-blue/10 to-bunshodo-green/10 border-b border-bunshodo-blue/10">
              <CardTitle className="flex items-center text-2xl text-bunshodo-blue">
                <History className="h-6 w-6 mr-3 text-bunshodo-green" />
                創業97年目の確かな実績
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-bunshodo-dark-blue">長い歴史が培った信頼と技術</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  1927年の創業以来、文唱堂印刷は97年の長きにわたり、印刷技術の革新と顧客満足を追求してきました。
                  時代の変化に柔軟に対応しながら、常に高品質な印刷サービスを提供し続けています。
                </p>
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-bunshodo-green mr-2" />
                  <span className="font-medium">1927年：東京都千代田区神田佐久間町にて創業</span>
                </div>
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-bunshodo-green mr-2" />
                  <span className="font-medium">経済産業大臣賞受賞：印刷産業環境優良工場として表彰</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-bunshodo-green mr-2" />
                  <span className="font-medium">97年間で培った信頼と実績：8,000社以上の取引実績</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-bunshodo-dark-blue">印刷×物流の統合アプローチ</h3>
                <p className="text-bunshodo-medium-gray mb-4">
                  文唱堂印刷は、印刷会社でありながら物流機能も自社で持つ独自のビジネスモデルを構築。
                  印刷から配送まで一貫した管理体制により、コスト削減、納期短縮、品質向上を実現しています。
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-bunshodo-green mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">自社配送ネットワーク</span>
                      <span className="text-sm text-bunshodo-medium-gray">全国への配送体制を構築、柔軟な対応が可能</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-bunshodo-green mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">町屋総合工場の一体型施設</span>
                      <span className="text-sm text-bunshodo-medium-gray">印刷と物流を一つの施設で完結、工程間の無駄を削減</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="h-5 w-5 text-bunshodo-green mr-2 mt-0.5" />
                    <div>
                      <span className="font-medium block">自社倉庫での在庫管理</span>
                      <span className="text-sm text-bunshodo-medium-gray">印刷物の保管から出荷まで一元管理</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="reveal">
            <Card className="h-full shadow-lg border-bunshodo-light-blue/20 overflow-hidden">
              <CardHeader className="bg-bunshodo-blue/5 border-b border-bunshodo-blue/10">
                <CardTitle className="flex items-center text-2xl text-bunshodo-blue">
                  <Award className="h-6 w-6 mr-2 text-bunshodo-green" />
                  経済産業大臣賞受賞
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-bunshodo-medium-gray mb-4">
                  おかげさまで 第15回 印刷産業環境優良工場表彰の「経済産業大臣賞」を授賞させていただきました。
                </p>
                <p className="text-bunshodo-medium-gray mb-4">
                  印刷産業環境優良工場とは、印刷業界における各企業の環境問題に対する取組みを促進するとともに、
                  印刷工場の環境改善及び、印刷企業に対する社会の一層の支持・理解を獲得することを目的にしたもので、
                  平成14年から実施されている、日本印刷産業連合会（日印産連）の表彰制度です。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="reveal">
            <Card className="h-full shadow-lg border-bunshodo-light-blue/20">
              <CardHeader className="bg-bunshodo-blue/5 border-b border-bunshodo-blue/10">
                <CardTitle className="flex items-center text-2xl text-bunshodo-blue">
                  <Building className="h-6 w-6 mr-2 text-bunshodo-green" />
                  会社情報
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">社名</div>
                  <div className="col-span-2">文唱堂印刷株式会社</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">本社</div>
                  <div className="col-span-2">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-bunshodo-green mr-2 shrink-0 mt-0.5" />
                      <div>
                        〒101-0025 東京都千代田区神田佐久間町3-37
                        <div className="flex flex-wrap gap-4 mt-1">
                          <span className="flex items-center">
                            <Phone className="h-4 w-4 text-bunshodo-blue mr-1" />
                            03-3851-0111
                          </span>
                          <span className="flex items-center">
                            <Printer className="h-4 w-4 text-bunshodo-blue mr-1" />
                            03-3861-1979
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">町屋工場</div>
                  <div className="col-span-2">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-bunshodo-green mr-2 shrink-0 mt-0.5" />
                      <div>
                        〒116-0001 東京都荒川区町屋8-22-10
                        <div className="flex flex-wrap gap-4 mt-1">
                          <span className="flex items-center">
                            <Phone className="h-4 w-4 text-bunshodo-blue mr-1" />
                            03-3819-2500
                          </span>
                          <span className="flex items-center">
                            <Printer className="h-4 w-4 text-bunshodo-blue mr-1" />
                            03-3819-2530
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">創業</div>
                  <div className="col-span-2 flex items-center">
                    <Calendar className="h-4 w-4 text-bunshodo-green mr-2" />
                    1927年6月25日
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">資本金</div>
                  <div className="col-span-2">8,000万円（※2023年6月現在）</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">売上高</div>
                  <div className="col-span-2">23億円（※2023年6月現在）</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">社員数</div>
                  <div className="col-span-2 flex items-center">
                    <Users className="h-4 w-4 text-bunshodo-green mr-2" />
                    135名（※2023年6月現在）
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">代表者</div>
                  <div className="col-span-2">代表取締役　橋本唱市</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1 font-semibold text-bunshodo-blue">ホームページ</div>
                  <div className="col-span-2">
                    <a 
                      href="https://www.b-p.co.jp/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-bunshodo-blue hover:text-bunshodo-green transition-colors"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      https://www.b-p.co.jp/
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
