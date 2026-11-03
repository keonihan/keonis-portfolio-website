import React from 'react';
import { ArrowUp } from 'lucide-react';
import profileData from '../data/profile.json';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-blue-500/15 py-8 text-xs text-slate-400">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
        <div>
          {currentYear} <span className="text-slate-300 font-semibold">{profileData.name}</span>
        </div>
        <button 
          onClick={scrollToTop} 
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer" 
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};
