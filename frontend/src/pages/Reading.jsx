import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { tarotCards } from '@/data/tarotCards';
import { TarotCard } from '@/components/TarotCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, RefreshCw, Save } from 'lucide-react';
import { toast } from 'sonner';

export const Reading = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const spread = location.state?.spread;
  
  const [drawnCards, setDrawnCards] = useState([]);
  const [revealedIndices, setRevealedIndices] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  
  useEffect(() => {
    if (!spread) {
      navigate('/spreads');
    }
  }, [spread, navigate]);
  
  const shuffleAndDraw = () => {
    setIsDrawing(true);
    setRevealedIndices([]);
    
    // Shuffle and draw cards
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const drawn = shuffled.slice(0, spread.positions.length).map(card => ({
      ...card,
      isReversed: Math.random() > 0.7 // 30% chance of reversed
    }));
    
    setTimeout(() => {
      setDrawnCards(drawn);
      setIsDrawing(false);
    }, 800);
  };
  
  useEffect(() => {
    if (spread && drawnCards.length === 0) {
      shuffleAndDraw();
    }
  }, [spread]);
  
  const handleCardClick = (index) => {
    if (!revealedIndices.includes(index)) {
      setRevealedIndices([...revealedIndices, index]);
    }
  };
  
  const revealAll = () => {
    setRevealedIndices(drawnCards.map((_, index) => index));
  };
  
  const saveReading = () => {
    const reading = {
      spread: spread.name,
      date: new Date().toISOString(),
      cards: drawnCards.map((card, index) => ({
        position: spread.positions[index],
        card: card.name,
        isReversed: card.isReversed,
        meaning: card.isReversed ? card.reversedMeaning : card.uprightMeaning
      }))
    };
    
    // Save to localStorage
    const savedReadings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
    savedReadings.unshift(reading);
    localStorage.setItem('tarotReadings', JSON.stringify(savedReadings.slice(0, 50))); // Keep last 50
    
    toast.success('Reading saved successfully!');
  };
  
  if (!spread) return null;
  
  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/spreads')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Spreads
          </Button>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {spread.name}
              </h1>
              <p className="text-muted-foreground">{spread.description}</p>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={revealAll}
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
                disabled={isDrawing || revealedIndices.length === drawnCards.length}
              >
                Reveal All
              </Button>
              <Button
                onClick={shuffleAndDraw}
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
                disabled={isDrawing}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isDrawing ? 'animate-spin' : ''}`} />
                New Reading
              </Button>
              <Button
                onClick={saveReading}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                disabled={revealedIndices.length === 0}
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
        
        {/* Cards Display */}
        <div className={`grid gap-8 mb-12 ${
          spread.positions.length <= 3 ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto' :
          spread.positions.length <= 6 ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6' :
          'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'
        }`}>
          {drawnCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="text-center">
                <span className="text-sm font-medium text-accent">
                  {spread.positions[index]}
                </span>
              </div>
              <TarotCard
                card={card}
                isRevealed={revealedIndices.includes(index)}
                isReversed={card.isReversed}
                onClick={() => handleCardClick(index)}
                showMeaning={true}
              />
            </div>
          ))}
        </div>
        
        {/* Card Meanings */}
        {revealedIndices.length > 0 && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Reading
            </h2>
            
            {revealedIndices.sort((a, b) => a - b).map((index) => {
              const card = drawnCards[index];
              return (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-foreground">
                      <span className="font-serif" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {spread.positions[index]}
                      </span>
                      <span className={`text-sm font-normal ${
                        card.isReversed ? 'text-destructive' : 'text-primary'
                      }`}>
                        {card.isReversed ? 'Reversed' : 'Upright'}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-accent mb-2">{card.name}</h3>
                      <p className="text-muted-foreground">
                        {card.isReversed ? card.reversedMeaning : card.uprightMeaning}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {card.keywords.map((keyword, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
        
        {revealedIndices.length === 0 && !isDrawing && (
          <div className="text-center py-12 max-w-md mx-auto">
            <p className="text-lg text-muted-foreground">
              Click on each card to reveal your reading, or use "Reveal All" to see everything at once
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
