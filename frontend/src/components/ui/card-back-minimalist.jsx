import React from 'react';

export const CardBackMinimalist = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-card via-secondary to-card border border-border/50 rounded-lg overflow-hidden ${className}`}>
      {/* Simple center design */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 border-2 border-accent/30 rounded-full" />
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-accent/40" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-accent/40" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-accent/40" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-accent/40" />
    </div>
  );
};
