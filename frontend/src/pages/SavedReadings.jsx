import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trash2, Calendar, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const SavedReadings = () => {
  const navigate = useNavigate();
  const [savedReadings, setSavedReadings] = useState([]);
  const [selectedReading, setSelectedReading] = useState(null);

  useEffect(() => {
    loadReadings();
  }, []);

  const loadReadings = () => {
    const readings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
    setSavedReadings(readings);
  };

  const deleteReading = (index) => {
    const readings = JSON.parse(localStorage.getItem('tarotReadings') || '[]');
    readings.splice(index, 1);
    localStorage.setItem('tarotReadings', JSON.stringify(readings));
    loadReadings();
    setSelectedReading(null);
    toast.success('Reading deleted successfully');
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen pb-20">
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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Saved Readings
              </h1>
              <p className="text-muted-foreground">
                {savedReadings.length} {savedReadings.length === 1 ? 'reading' : 'readings'} saved
              </p>
            </div>
          </div>
        </div>

        {savedReadings.length === 0 ? (
          <Card className="bg-gradient-card border-border/50 text-center py-12">
            <CardContent>
              <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-4">No saved readings yet</p>
              <Button
                onClick={() => navigate('/spreads')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Start a Reading
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Readings List */}
            <div className="lg:col-span-1 space-y-4">
              {savedReadings.map((reading, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedReading === index
                      ? 'bg-primary/10 border-primary shadow-glow'
                      : 'bg-gradient-card border-border/50 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedReading(index)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-serif flex items-center justify-between" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      <span className="text-foreground">{reading.spread}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteReading(index);
                        }}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {formatDate(reading.date)}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {reading.cards.length} {reading.cards.length === 1 ? 'card' : 'cards'}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Reading Details */}
            <div className="lg:col-span-2">
              {selectedReading !== null ? (
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {savedReadings[selectedReading].spread}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {formatDate(savedReadings[selectedReading].date)}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {savedReadings[selectedReading].cards.map((cardData, index) => (
                      <div key={index} className="border-b border-border/30 pb-6 last:border-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold text-accent mb-1">
                              {cardData.position}
                            </h3>
                            <p className="text-foreground font-medium">{cardData.card}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            cardData.isReversed
                              ? 'bg-destructive/20 text-destructive'
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {cardData.isReversed ? 'Reversed' : 'Upright'}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {cardData.meaning}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="py-20 text-center">
                    <Sparkles className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Select a reading to view details</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
