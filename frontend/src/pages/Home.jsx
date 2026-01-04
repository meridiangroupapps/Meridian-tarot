import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Star, Sparkles } from 'lucide-react';

export const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Star 
            key={i}
            className="absolute text-accent/30 animate-twinkle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Moon icon with glow */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Moon className="w-24 h-24 text-accent animate-float" />
              <div className="absolute inset-0 blur-2xl bg-accent/30 rounded-full" />
            </div>
          </div>
          
          {/* Hero text */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Mystic Tarot
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Unlock the wisdom of the cards and illuminate your path through ancient divination
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => navigate('/spreads')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-glow group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Choose Your Spread
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/daily-card')}
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Daily Card Draw
            </Button>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="text-accent mb-3 flex justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">78 Tarot Cards</h3>
              <p className="text-sm text-muted-foreground">Complete Major & Minor Arcana</p>
            </div>
            
            <div className="space-y-2 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="text-accent mb-3 flex justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground">20 Spreads</h3>
              <p className="text-sm text-muted-foreground">From simple to complex layouts</p>
            </div>
            
            <div className="space-y-2 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="text-accent mb-3 flex justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground">Intuitive Readings</h3>
              <p className="text-sm text-muted-foreground">Mystical design meets clarity</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero image section */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-primary/20 shadow-mystical">
          <img 
            src="https://images.unsplash.com/photo-1607171887899-69c1e61445c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxteXN0aWNhbCUyMGNlbGVzdGlhbHxlbnwwfHx8fDE3Njc1NTgxMTZ8MA&ixlib=rb-4.1.0&q=85"
            alt="Mystical celestial scene"
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
