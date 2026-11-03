import React from 'react';
import { Sun, Moon, Menu, Terminal, X } from 'lucide-react';
import profileData from '../data/profile.json';

export type PageId = 'home' | 'experience' | 'hobbies' | 'projects' | 'socials';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  isSideMenuOpen: boolean;
  onToggleSideMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  theme,
  onToggleTheme,
  isSideMenuOpen,
  onToggleSideMenu
}) => {
  const categories: { label: string; id: PageId }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Hobbies', id: 'hobbies' },
    { label: 'Projects', id: 'projects' },
    { label: 'Socials', id: 'socials' },
  ];

  const firstName = profileData.name.split(' ')[0];

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-navy-950/85 backdrop-blur-md border-b border-blue-500/15">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onToggleSideMenu} 
            className="md:hidden flex items-center justify-center w-9 h-9 rounded bg-navy-900 border border-blue-500/20 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isSideMenuOpen}
          >
            {isSideMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-1.5 font-bold text-lg tracking-tight text-white hover:text-blue-400 transition-colors"
          >
            <Terminal size={19} className="text-blue-500" />
            <span>{firstName}<span className="text-blue-500">.dev</span></span>
          </button>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onNavigate(cat.id)}
              className={`px-3.5 py-1.5 rounded text-sm font-semibold transition-all ${
                currentPage === cat.id
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-blue-500/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Theme Switcher */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onToggleTheme} 
            className="flex items-center justify-center w-9 h-9 rounded bg-navy-900 border border-blue-500/20 text-slate-300 hover:text-white hover:border-blue-500 transition-colors" 
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-blue-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
