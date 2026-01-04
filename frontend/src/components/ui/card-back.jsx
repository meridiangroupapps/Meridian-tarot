import React from 'react';
import { Moon, Star, Sparkles } from 'lucide-react';

export const CardBack = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-card via-secondary to-card border-2 border-primary/30 rounded-lg overflow-hidden ${className}`}>
      {/* Sacred geometry background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 300">
          {/* Outer circle */}
          <circle cx="100" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          {/* Inner circles */}
          <circle cx="100" cy="150" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="100" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          <circle cx="100" cy="150" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          {/* Star points */}
          <path d="M100,70 L110,140 L180,150 L110,160 L100,230 L90,160 L20,150 L90,140 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
        </svg>
      </div>
      
      {/* Celestial elements */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
        <Moon className="w-8 h-8 text-accent/70 animate-float" />
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Sparkles className="w-12 h-12 text-primary/50" />
      </div>
      
      {/* Stars */}
      <Star className="absolute top-12 right-8 w-3 h-3 text-accent/60 animate-twinkle" style={{ animationDelay: '0.5s' }} />
      <Star className="absolute top-20 left-6 w-2 h-2 text-primary/40 animate-twinkle" style={{ animationDelay: '1s' }} />
      <Star className="absolute bottom-16 right-6 w-3 h-3 text-accent/50 animate-twinkle" style={{ animationDelay: '1.5s' }} />
      <Star className="absolute bottom-12 left-8 w-2 h-2 text-primary/30 animate-twinkle" style={{ animationDelay: '2s' }} />
      
      {/* Border glow */}
      <div className="absolute inset-0 rounded-lg" style={{ boxShadow: 'inset 0 0 20px hsl(var(--primary) / 0.1)' }} />
    </div>
  );
};
