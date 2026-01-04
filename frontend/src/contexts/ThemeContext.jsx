import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  { id: 'meridian', name: 'Meridian' },
  { id: 'high-contrast-light', name: 'High Contrast Light' },
  { id: 'high-contrast-dark', name: 'High Contrast Dark' },
  { id: 'grayscale-light', name: 'Grayscale Light' },
  { id: 'grayscale-dark', name: 'Grayscale Dark' },
  { id: 'spring', name: 'Spring' },
  { id: 'summer', name: 'Summer' },
  { id: 'fall', name: 'Fall' },
  { id: 'autumn', name: 'Autumn' },
  { id: 'winter', name: 'Winter' }
];

export const cardBackStyles = [
  { id: 'mystical', name: 'Mystical' },
  { id: 'minimalist', name: 'Minimalist' },
  { id: 'ornate', name: 'Ornate' }
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
