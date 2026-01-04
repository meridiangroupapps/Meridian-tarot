import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Palette, Image, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const Settings = () => {
  const { theme, cardBackStyle, changeTheme, changeCardBackStyle, themes, cardBackStyles } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t border-border/30 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between mb-4 text-foreground hover:text-primary transition-colors"
        >
          <div className="flex items-center gap-2">
            <SettingsIcon className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Settings</h2>
          </div>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {isOpen && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-card-reveal">
            {/* Theme Selector */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Palette className="w-5 h-5 text-accent" />
                  App Theme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {themes.map((t) => (
                    <Button
                      key={t.id}
                      onClick={() => changeTheme(t.id)}
                      variant={theme === t.id ? 'default' : 'outline'}
                      className={`w-full transition-all duration-300 ${
                        theme === t.id
                          ? 'bg-primary text-primary-foreground shadow-glow'
                          : 'border-border/50 hover:border-primary/50 hover:bg-primary/10'
                      }`}
                    >
                      {t.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Card Back Style Selector */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Image className="w-5 h-5 text-accent" />
                  Card Back Style
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {cardBackStyles.map((style) => (
                    <Button
                      key={style.id}
                      onClick={() => changeCardBackStyle(style.id)}
                      variant={cardBackStyle === style.id ? 'default' : 'outline'}
                      className={`w-full transition-all duration-300 ${
                        cardBackStyle === style.id
                          ? 'bg-primary text-primary-foreground shadow-glow'
                          : 'border-border/50 hover:border-primary/50 hover:bg-primary/10'
                      }`}
                    >
                      {style.name}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Current style: <span className="text-accent font-medium">{cardBackStyles.find(s => s.id === cardBackStyle)?.name}</span>
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
