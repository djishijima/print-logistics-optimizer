
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title and metadata to emphasize integrated approach benefits
    document.title = "文唱堂 - 印刷・物流・倉庫を一括管理で30%コスト削減、納期5日短縮";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '印刷・物流・倉庫を一社で管理することでコスト30%削減、納期5日短縮、品質向上、安全性確保を実現。経済産業大臣賞受賞の技術で高品質な印刷と効率的な物流を提供します。経済産業省、NHK出版、日本銀行など100社以上の導入実績。');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '印刷・物流・倉庫を一社で管理することでコスト30%削減、納期5日短縮、品質向上、安全性確保を実現。経済産業大臣賞受賞の技術で高品質な印刷と効率的な物流を提供します。経済産業省、NHK出版、日本銀行など100社以上の導入実績。';
      document.head.appendChild(meta);
    }
    
    // Add more SEO-friendly meta tags
    const addMetaTag = (name: string, content: string) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };
    
    // Add specific meta tags for better SEO
    addMetaTag('keywords', '印刷,物流,倉庫管理,コスト削減,納期短縮,一貫管理,ワンストップ,文唱堂,経済産業省,NHK出版,日本銀行,経済産業大臣賞');
    addMetaTag('robots', 'index, follow');
    addMetaTag('author', '文唱堂印刷株式会社');
    
    // Add Open Graph meta tags for better social media sharing
    addMetaTag('og:title', '文唱堂 - 印刷・物流・倉庫を一括管理でコスト30%削減');
    addMetaTag('og:description', '印刷・物流・倉庫を一社で管理することでコスト30%削減、納期5日短縮、品質向上、安全性確保を実現。経済産業大臣賞受賞の技術で高品質な印刷と効率的な物流を提供します。');
    addMetaTag('og:type', 'website');
    addMetaTag('og:url', 'https://www.b-p.co.jp/');
    
    // Add Twitter Card meta tags
    addMetaTag('twitter:card', 'summary_large_image');
    addMetaTag('twitter:title', '文唱堂 - 印刷・物流・倉庫を一括管理でコスト30%削減');
    addMetaTag('twitter:description', '印刷から物流、倉庫管理までワンストップサービスで業務効率化とコスト削減を実現。');
    
    // Initialize intersection observer for reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all elements with the 'reveal' class
    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <ProblemSection />
      <AdvantagesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
