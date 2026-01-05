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
          <div className="space-y-8 animate-card-reveal">
            {/* Theme Selector */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Appearance</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => changeTheme(t.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      theme === t.id
                        ? 'border-primary bg-primary/10 shadow-glow'
                        : 'border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card'
                    }`}
                  >
                    <div className="text-2xl mb-2">{t.icon}</div>
                    <div className="font-medium text-foreground text-sm mb-1">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Card Back Style Selector */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Card Back Style</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {cardBackStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => changeCardBackStyle(style.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      cardBackStyle === style.id
                        ? 'border-primary bg-primary/10 shadow-glow'
                        : 'border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card'
                    }`}
                  >
                    <div className="font-medium text-foreground text-sm mb-1">{style.name}</div>
                    <div className="text-xs text-muted-foreground">{style.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
