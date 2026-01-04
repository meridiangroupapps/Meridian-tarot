import React from 'react';

export const CardBackOrnate = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-card via-secondary to-card border-2 border-accent/40 rounded-lg overflow-hidden ${className}`}>
      {/* Ornate pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 200 300" preserveAspectRatio="xMidYMid meet">
          {/* Central ornate design */}
          <circle cx="100" cy="150" r="70" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
          <circle cx="100" cy="150" r="55" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="100" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
          <circle cx="100" cy="150" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          
          {/* Decorative stars */}
          <path d="M100,80 L105,95 L120,95 L108,105 L113,120 L100,110 L87,120 L92,105 L80,95 L95,95 Z" fill="currentColor" className="text-accent" opacity="0.6" />
          <path d="M100,180 L105,195 L120,195 L108,205 L113,220 L100,210 L87,220 L92,205 L80,195 L95,195 Z" fill="currentColor" className="text-accent" opacity="0.6" />
          
          {/* Corner flourishes */}
          <path d="M20,30 Q30,20 40,30" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
          <path d="M160,30 Q170,20 180,30" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
          <path d="M20,270 Q30,280 40,270" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
          <path d="M160,270 Q170,280 180,270" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent" />
        </svg>
      </div>
      
      {/* Decorative border pattern */}
      <div className="absolute inset-2 border border-accent/20 rounded-lg" />
      <div className="absolute inset-4 border border-primary/10 rounded-lg" />
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent/60">
          <path d="M2,2 L8,2 L2,8 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-2 right-2">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent/60">
          <path d="M22,2 L16,2 L22,8 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-2 left-2">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent/60">
          <path d="M2,22 L8,22 L2,16 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-2 right-2">
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-accent/60">
          <path d="M22,22 L16,22 L22,16 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};
