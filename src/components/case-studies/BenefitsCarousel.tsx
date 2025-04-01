
import React from 'react';
import GlassPanelEffect from '../GlassPanelEffect';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface BenefitsCarouselProps {
  benefits: string[];
}

const BenefitsCarousel: React.FC<BenefitsCarouselProps> = ({ benefits }) => {
  return (
    <div className="mt-16 text-center reveal">
      <GlassPanelEffect
        className="p-8 md:p-12 max-w-4xl mx-auto"
        intensity="medium"
      >
        <h3 className="text-2xl font-semibold mb-6">なぜ多くの企業に選ばれるのか</h3>
        <p className="text-bunshodo-medium-gray mb-8">
          印刷・物流・倉庫を一社で完結できる文唱堂は、分業型の従来方式に比べて大幅なコスト削減と納期短縮を実現します。
          業界の垣根を越えた統合サービスだからこそ、無駄なく効率的な運用が可能となり、
          経済産業大臣賞を受賞した品質と長年の信頼が多くの企業様に評価されています。
        </p>
        
        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 h-[150px]">
                        <p className="text-center text-bunshodo-dark-gray">
                          {benefit}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </GlassPanelEffect>
    </div>
  );
};

export default BenefitsCarousel;
