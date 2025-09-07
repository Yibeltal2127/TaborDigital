import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'lg', 
  className = '', 
  showText = false 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const logoSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Spinning Logo Container */}
      <div className="relative">
        {/* Animated gradient border */}
        <div className={`${sizeClasses[size]} rounded-full relative`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35] via-[#4ECDC4] to-[#FF6B35] animate-spin"></div>
          <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
            {/* Logo Image */}
            <img 
              src="/tabor-engineering-logo.png" 
              alt="Tabor Engineering & Digital Solutions Logo" 
              className={`${logoSizeClasses[size]} object-contain animate-pulse`}
              onError={(e) => {
                e.currentTarget.src = '/tabor-engineering-logo.png';
              }}
            />
          </div>
        </div>
        
        {/* Pulsing glow effect */}
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] opacity-20 animate-ping`}></div>
      </div>
      
      {/* Optional loading text */}
      {showText && (
        <div className="mt-6 text-center">
          <div className="flex items-center space-x-1">
            <span className="text-gray-600 font-medium">Loading</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-[#FF6B35] rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-1 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;