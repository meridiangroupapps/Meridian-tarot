import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tarotCards } from '@/data/tarotCards';
import { TarotCard } from '@/components/TarotCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export const DailyCard = () => {
  const navigate = useNavigate();
  const [dailyCard, setDailyCard] = useState(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  
  const drawDailyCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];
    const reversed = Math.random() > 0.7;
    
    setDailyCard(card);
    setIsReversed(reversed);
    setIsRevealed(false);
    
    // Save to localStorage
    const dailyData = {
      date: new Date().toDateString(),
      card: card.name,
      isReversed: reversed
    };
    localStorage.setItem('dailyCard', JSON.stringify(dailyData));
  };
  
  useEffect(() => {
    // Check if there's already a daily card for today
    const savedDaily = localStorage.getItem('dailyCard');
    if (savedDaily) {
      const dailyData = JSON.parse(savedDaily);
      if (dailyData.date === new Date().toDateString()) {
        const card = tarotCards.find(c => c.name === dailyData.card);
        if (card) {
          setDailyCard(card);
          setIsReversed(dailyData.isReversed);
          return;
        }
      }
    }
    drawDailyCard();
  }, []);
  
  const handleReveal = () => {
    setIsRevealed(true);
  };
  
  if (!dailyCard) return null;
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Daily Card
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the energy and guidance the universe has for you today
            </p>
          </div>
        </div>
        
        {/* Card Display */}
        <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <TarotCard
              card={dailyCard}
              isRevealed={isRevealed}
              isReversed={isReversed}
              onClick={handleReveal}
              showMeaning={false}
            />
          </div>
          
          {!isRevealed && (
            <Button
              onClick={handleReveal}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-all duration-300 hover:scale-105"
            >
              Reveal Your Card
            </Button>
          )}
          
          {isRevealed && (
            <Card className="w-full bg-gradient-card border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <h2 className="text-2xl font-serif font-bold text-accent mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {dailyCard.name}
                  </h2>
                  <span className={`text-sm font-medium ${
                    isReversed ? 'text-destructive' : 'text-primary'
                  }`}>
                    {isReversed ? 'Reversed' : 'Upright'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Today's Message</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {isReversed ? dailyCard.reversedMeaning : dailyCard.uprightMeaning}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {dailyCard.keywords.map((keyword, i) => (
                        <span key={i} className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <Button
            onClick={drawDailyCard}
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Draw New Card
          </Button>
        </div>
      </div>
    </div>
  );
};
