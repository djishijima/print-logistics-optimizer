
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';

interface ClientsSectionProps {
  clients: string[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({ clients }) => {
  return (
    <div className="mb-16 reveal">
      <GlassPanelEffect
        className="p-8 md:p-12 rounded-2xl"
        intensity="medium"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">お取引先の例</h3>
          <p className="text-bunshodo-medium-gray max-w-3xl mx-auto">
            大手企業から政府機関まで、100社以上の組織が文唱堂の印刷×物流×倉庫の統合ソリューションで成果を上げています。
          </p>
        </div>

        <div className="mb-10">
          <img 
            src="/lovable-uploads/ee9ea8f1-ec22-432a-9a1a-ccdde0199b8e.png" 
            alt="主要取引先ロゴ" 
            className="mx-auto max-w-full"
          />
        </div>

        <div className="text-center mb-8">
          <h4 className="text-xl font-semibold mb-4">取引先一覧</h4>
          <p className="text-bunshodo-medium-gray mb-6">
            多くのお客様に信頼いただいております
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 text-sm">
          {clients.map((client, index) => (
            <div key={index} className="py-2">
              <span className="text-bunshodo-dark-gray">{client}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-bunshodo-medium-gray">
          ※順不同、敬称略
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default ClientsSection;
