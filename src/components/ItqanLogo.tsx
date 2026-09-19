import React from 'react';

interface ItqanLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'white' | 'dark' | 'color';
  showSubtitle?: boolean;
  className?: string;
}

export const ItqanLogo: React.FC<ItqanLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="Itqan English"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
};