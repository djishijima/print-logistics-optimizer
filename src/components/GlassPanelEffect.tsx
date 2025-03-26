
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  color?: 'white' | 'blue' | 'green';
  animation?: string;
  border?: boolean;
}

const GlassPanelEffect: React.FC<GlassPanelEffectProps> = ({
  children,
  className,
  intensity = 'medium',
  color = 'white',
  animation,
  border = true
}) => {
  const intensityMap = {
    light: 'backdrop-blur-sm bg-white/30',
    medium: 'backdrop-blur-md bg-white/50',
    heavy: 'backdrop-blur-lg bg-white/70'
  };

  const colorMap = {
    white: 'bg-white/50',
    blue: 'bg-bunshodo-blue/20',
    green: 'bg-bunshodo-green/20'
  };

  const borderClass = border ? 'border border-white/20' : '';
  const animationClass = animation ? `animate-${animation}` : '';
  
  return (
    <div
      className={cn(
        intensityMap[intensity],
        colorMap[color],
        borderClass,
        'shadow-lg rounded-xl',
        animationClass,
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPanelEffect;
