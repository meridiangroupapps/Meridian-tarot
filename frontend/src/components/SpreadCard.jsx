import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, ChevronRight } from 'lucide-react';

export const SpreadCard = ({ spread, onSelect }) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-mystical bg-gradient-card border-border/50 hover:border-primary/50">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-serif mb-2 text-foreground flex items-center gap-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <Sparkles className="w-5 h-5 text-accent" />
              {spread.name}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {spread.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
            {spread.positions.length} {spread.positions.length === 1 ? 'card' : 'cards'}
          </span>
        </div>
        
        <Button 
          onClick={() => onSelect(spread)}
          className="w-full bg-primary/90 hover:bg-primary text-primary-foreground transition-all duration-300 group/btn"
        >
          Begin Reading
          <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
    </Card>
  );
};
