
import React from 'react';
import { Button } from '@/components/ui/button';

const ProblemCTA: React.FC = () => {
  return (
    <div className="mt-16 text-center reveal">
      <div className="inline-block relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-bunshodo-blue to-bunshodo-green opacity-70 blur-md rounded-lg"></div>
        <Button 
          size="lg"
          className="relative bg-white hover:bg-white/90 text-bunshodo-blue font-medium px-8 py-6 text-lg rounded-lg shadow-xl"
        >
          今すぐ無料相談
        </Button>
      </div>
    </div>
  );
};

export default ProblemCTA;
