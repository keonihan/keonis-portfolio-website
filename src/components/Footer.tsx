import React from 'react';
import { ArrowUp } from 'lucide-react';
import profileData from '../data/profile.json';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-row">
          <div>
            &copy; {currentYear} {profileData.name}.
          </div>
          <button 
            onClick={scrollToTop} 
            className="scroll-top-btn" 
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
