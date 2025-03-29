import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import GlassPanelEffect from './GlassPanelEffect';
import Button from './Button';
import { Menu, X, Calculator } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'サービス', href: '#services' },
    { name: '特徴', href: '#features' },
    { name: '導入事例', href: '#case-studies' },
    { name: 'プロセス', href: '#process' },
    { name: '会社概要', href: '#about' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-2' : 'py-4',
        className
      )}
    >
      <GlassPanelEffect
        intensity={isScrolled ? 'heavy' : 'medium'}
        className="mx-4 md:mx-8 transition-all duration-300"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center"
            >
              <span className="text-bunshodo-blue font-display font-bold text-2xl">
                Bunshodo
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-bunshodo-dark-gray hover:text-bunshodo-blue transition-colors duration-200 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Call to Action */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                size="md"
                variant="outline"
                onClick={() => window.open('https://form.typeform.com/to/SmxiiFs5', '_blank')}
                icon={<Calculator size={16} />}
              >
                コスト診断
              </Button>
              <Button 
                size="md"
                onClick={() => window.open('https://form.typeform.com/to/xAJyZjnr', '_blank')}
              >
                無料相談
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-bunshodo-dark-gray" />
              ) : (
                <Menu className="h-6 w-6 text-bunshodo-dark-gray" />
              )}
            </button>
          </div>
        </div>
      </GlassPanelEffect>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <GlassPanelEffect
          intensity="heavy"
          className="h-full flex flex-col p-6 pt-20"
        >
          <nav className="flex flex-col space-y-6 items-center mt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-bunshodo-dark-gray hover:text-bunshodo-blue text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3 w-full">
              <Button 
                size="lg" 
                variant="outline"
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://form.typeform.com/to/SmxiiFs5', '_blank');
                }}
              >
                印刷物流コスト診断
              </Button>
              <Button 
                size="lg" 
                fullWidth
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open('https://form.typeform.com/to/xAJyZjnr', '_blank');
                }}
              >
                無料相談
              </Button>
            </div>
          </nav>
        </GlassPanelEffect>
      </div>
    </header>
  );
};

export default Navbar;
