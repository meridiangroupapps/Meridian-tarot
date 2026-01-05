import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { 
    id: 'high-contrast-dark', 
    name: 'High Contrast Dark',
    description: 'Pure black & white for OLED',
    icon: '🌙'
  },
  { 
    id: 'high-contrast-light', 
    name: 'High Contrast Light',
    description: 'Bright and crisp',
    icon: '☀️'
  },
  { 
    id: 'grayscale-dark', 
    name: 'Grayscale Dark',
    description: 'Soft dark neutrals',
    icon: '🌑'
  },
  { 
    id: 'grayscale-light', 
    name: 'Grayscale Light',
    description: 'Gentle gray tones',
    icon: '☁️'
  },
  { 
    id: 'meridian', 
    name: 'Meridian',
    description: 'Teal & pastel pink',
    icon: '🌊'
  },
  { 
    id: 'spring', 
    name: 'Spring',
    description: 'Fresh pastels',
    icon: '🌸'
  },
  { 
    id: 'summer', 
    name: 'Summer',
    description: 'Warm and vibrant',
    icon: '☀️'
  },
  { 
    id: 'fall', 
    name: 'Fall',
    description: 'Cool earthy tones',
    icon: '🍂'
  },
  { 
    id: 'autumn', 
    name: 'Autumn',
    description: 'Warm and cozy',
    icon: '🍁'
  },
  { 
    id: 'winter', 
    name: 'Winter',
    description: 'Cool and crisp',
    icon: '❄️'
  }
];

export const cardBackStyles = [
  { id: 'mystical', name: 'Mystical', description: 'Celestial & sacred' },
  { id: 'minimalist', name: 'Minimalist', description: 'Clean & simple' },
  { id: 'ornate', name: 'Ornate', description: 'Decorative & elaborate' }
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('meridian');
  const [cardBackStyle, setCardBackStyle] = useState('mystical');

  useEffect(() => {
    const savedTheme = localStorage.getItem('tarotTheme') || 'meridian';
    const savedCardBack = localStorage.getItem('tarotCardBack') || 'mystical';
    setTheme(savedTheme);
    setCardBackStyle(savedCardBack);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('tarotTheme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeCardBackStyle = (newStyle) => {
    setCardBackStyle(newStyle);
    localStorage.setItem('tarotCardBack', newStyle);
  };

  return (
    <ThemeContext.Provider value={{ theme, cardBackStyle, changeTheme, changeCardBackStyle, themes, cardBackStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
