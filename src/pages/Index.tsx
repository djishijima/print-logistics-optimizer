
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { Toaster } from 'sonner';

const Index: React.FC = () => {
  useEffect(() => {
    // Set page title and metadata to emphasize integrated approach benefits
    document.title = "文唱堂 - 印刷・物流・倉庫を一括管理で30%コスト削減";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '印刷・物流・倉庫を一社で管理することでコスト削減、納期短縮、品質向上、安全性確保を実現。経済産業大臣賞受賞の技術で高品質な印刷と効率的な物流を提供します。');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = '印刷・物流・倉庫を一社で管理することでコスト削減、納期短縮、品質向上、安全性確保を実現。経済産業大臣賞受賞の技術で高品質な印刷と効率的な物流を提供します。';
      document.head.appendChild(meta);
    }
    
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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
