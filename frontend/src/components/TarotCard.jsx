import React from 'react';
import { Card } from '@/components/ui/card';
import { CardBack } from '@/components/ui/card-back';
import { CardBackMinimalist } from '@/components/ui/card-back-minimalist';
import { CardBackOrnate } from '@/components/ui/card-back-ornate';
import { Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const TarotCard = ({ card, isRevealed = false, isReversed = false, onClick, showMeaning = false }) => {
  const { cardBackStyle } = useTheme();
  
  if (!card) return null;
  
  const meaning = isReversed ? card.reversedMeaning : card.uprightMeaning;
  
  const renderCardBack = () => {
    const commonProps = { className: 'w-full h-full' };
    
    switch (cardBackStyle) {
      case 'minimalist':
        return <CardBackMinimalist {...commonProps} />;
      case 'ornate':
        return <CardBackOrnate {...commonProps} />;
      case 'mystical':
      default:
        return <CardBack {...commonProps} />;
    }
  };
  
  return (
    <div 
      className="group relative cursor-pointer perspective-1000"
      onClick={onClick}
    >
      <Card className="relative w-40 h-64 sm:w-48 sm:h-72 transition-all duration-500 hover:scale-105 hover:shadow-mystical">
        {!isRevealed ? (
          renderCardBack()
        ) : (
          <div className={`relative w-full h-full bg-gradient-card border-2 ${
            isReversed ? 'border-destructive/50 rotate-180' : 'border-primary/50'
          } rounded-lg p-4 flex flex-col animate-card-reveal`}>
            {/* Card header with sparkle */}
            <div className="flex items-center justify-between mb-3">
              <Sparkles className="w-4 h-4 text-accent" />
              {card.suit && (
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {card.suit}
                </span>
              )}
            </div>
            
            {/* Card name */}
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {card.name}
            </h3>
            
            {/* Arcana badge */}
            <div className="mb-3">
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                card.arcana === 'major' 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-primary/20 text-primary'
              }`}>
                {card.arcana === 'major' ? 'Major Arcana' : 'Minor Arcana'}
              </span>
            </div>
            
            {/* Keywords */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap gap-1">
                {card.keywords.slice(0, 3).map((keyword, index) => (
                  <span key={index} className="text-xs px-2 py-0.5 bg-secondary/50 text-secondary-foreground rounded">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Orientation badge */}
            <div className="mt-auto pt-3 border-t border-border/30">
              <span className={`text-xs font-medium ${
                isReversed ? 'text-destructive' : 'text-primary'
              }`}>
                {isReversed ? 'Reversed' : 'Upright'}
              </span>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent/30" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent/30" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent/30" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent/30" />
          </div>
        )}
      </Card>
      
      {/* Meaning tooltip on hover (only when revealed) */}
      {isRevealed && showMeaning && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-popover/95 backdrop-blur-sm border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
          <p className="text-sm text-popover-foreground">{meaning}</p>
        </div>
      )}
    </div>
  );
};
