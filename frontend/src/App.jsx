import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from './contexts/ThemeContext';
import { Settings } from './components/Settings';
import { Home } from './pages/Home';
import { Spreads } from './pages/Spreads';
import { Reading } from './pages/Reading';
import { DailyCard } from './pages/DailyCard';
import '@/index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-background text-foreground">
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spreads" element={<Spreads />} />
                <Route path="/reading" element={<Reading />} />
                <Route path="/daily-card" element={<DailyCard />} />
              </Routes>
            </div>
            <Settings />
          </div>
        </BrowserRouter>
        <Toaster position="top-center" />
      </div>
    </ThemeProvider>
  );
}

export default App;
