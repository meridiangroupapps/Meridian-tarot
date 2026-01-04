import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { Home } from './pages/Home';
import { Spreads } from './pages/Spreads';
import { Reading } from './pages/Reading';
import { DailyCard } from './pages/DailyCard';
import '@/index.css';

function App() {
  return (
    <div className="App min-h-screen bg-background text-foreground">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spreads" element={<Spreads />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/daily-card" element={<DailyCard />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
