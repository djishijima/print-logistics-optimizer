
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
  glassMorphism?: boolean;
  animation?: 'pulse' | 'float' | 'none';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  fullWidth = false,
  glassMorphism = false,
  animation = 'none',
  children,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-bunshodo-blue text-white hover:bg-bunshodo-dark-blue',
    secondary: 'bg-bunshodo-green text-white hover:bg-bunshodo-green/90',
    outline: 'bg-transparent border border-bunshodo-blue text-bunshodo-blue hover:bg-bunshodo-blue/10',
    ghost: 'bg-transparent hover:bg-bunshodo-blue/10 text-bunshodo-blue',
    link: 'bg-transparent text-bunshodo-blue underline-offset-4 hover:underline p-0'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
    xl: 'px-8 py-4 text-xl rounded-xl'
  };

  const animationStyles = {
    pulse: 'hover:animate-pulse-soft',
    float: 'hover:animate-float',
    none: ''
  };

  const baseDuration = 150; // base duration in ms
  const durationMultiplier = {
    sm: 0.8,
    md: 1,
    lg: 1.2,
    xl: 1.5
  };

  const glassMorphismClass = glassMorphism 
    ? 'backdrop-blur-md bg-opacity-70 backdrop-saturate-150' 
    : '';
  
  const buttonWidth = fullWidth ? 'w-full' : '';
  const transitionDuration = `${baseDuration * durationMultiplier[size]}ms`;

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center font-medium',
        'transition-all ease-in-out',
        variantStyles[variant],
        sizeStyles[size],
        animationStyles[animation],
        buttonWidth,
        glassMorphismClass,
        'disabled:opacity-70 disabled:cursor-not-allowed',
        'transform hover:-translate-y-0.5 active:translate-y-0',
        'overflow-hidden',
        className
      )}
      style={{ transitionDuration }}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center bg-inherit">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      )}
      
      <span
        className={cn(
          'flex items-center gap-2',
          isLoading ? 'invisible' : 'visible'
        )}
      >
        {icon && iconPosition === 'left' && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="inline-flex shrink-0">{icon}</span>
        )}
      </span>
      
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 -translate-x-full hover:translate-x-0 bg-white/10 transition-transform ease-out duration-500"></span>
      </span>
    </button>
  );
};

export default Button;
