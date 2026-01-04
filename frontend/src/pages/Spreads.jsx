import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tarotSpreads } from '@/data/tarotSpreads';
import { SpreadCard } from '@/components/SpreadCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search } from 'lucide-react';

export const Spreads = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredSpreads = tarotSpreads.filter(spread =>
    spread.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spread.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSelectSpread = (spread) => {
    navigate('/reading', { state: { spread } });
  };
  
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
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Choose Your Spread
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Select a tarot spread that resonates with your question or intention
            </p>
          </div>
        </div>
        
        {/* Search */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search spreads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 border-border/50 focus:border-primary"
            />
          </div>
        </div>
        
        {/* Spreads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpreads.map((spread) => (
            <SpreadCard
              key={spread.id}
              spread={spread}
              onSelect={handleSelectSpread}
            />
          ))}
        </div>
        
        {filteredSpreads.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No spreads found matching your search</p>
          </div>
        )}
      </div>
    </div>
  );
};
