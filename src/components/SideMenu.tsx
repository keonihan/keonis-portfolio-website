import React from 'react';
import { Home, Briefcase, Sparkles, FolderGit2, Share2, X, Sun, Moon } from 'lucide-react';
import profileData from '../data/profile.json';
import { PageId } from './Navbar';

interface SideMenuProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  currentPage,
  onNavigate,
  isOpen,
  onClose,
  theme,
  onToggleTheme
}) => {
  const menuCategories: { label: string; id: PageId; icon: React.ReactNode }[] = [
    { label: 'Home', id: 'home', icon: <Home size={18} /> },
    { label: 'Experience', id: 'experience', icon: <Briefcase size={18} /> },
    { label: 'Hobbies', id: 'hobbies', icon: <Sparkles size={18} /> },
    { label: 'Projects', id: 'projects', icon: <FolderGit2 size={18} /> },
    { label: 'Socials', id: 'socials', icon: <Share2 size={18} /> },
  ];

  const initials = profileData.name
    .split(' ')
    .map(n => n[0])
    .join('');

  const handleItemClick = (id: PageId) => {
    onNavigate(id);
    onClose();
  };

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 w-[260px] bg-navy-900 border-r border-blue-500/20 z-20 flex flex-col p-6 transition-all duration-300 ease-out ${
        isOpen
          ? 'translate-x-0 opacity-100 pointer-events-auto'
          : '-translate-x-10 opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Header Profile */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-500/15">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
            {initials}
          </div>
          <div>
            <div className="font-bold text-sm text-white leading-tight">{profileData.name}</div>
            <div className="text-xs text-slate-400">{profileData.title}</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation List */}
      <nav className="flex-1">
        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
          Navigation
        </span>
        <ul className="space-y-1.5">
          {menuCategories.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded text-sm font-semibold transition-all text-left ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-navy-800 hover:translate-x-1'
                }`}
              >
                <span className={currentPage === item.id ? 'text-white' : 'text-blue-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Theme Switch */}
      <div className="pt-4 border-t border-blue-500/15">
        <button
          onClick={onToggleTheme}
          className="w-full flex items-center justify-between px-3 py-2 rounded bg-navy-800 border border-blue-500/15 text-slate-300 hover:text-white hover:border-blue-500 text-xs font-semibold transition-colors"
        >
          <span className="flex items-center gap-2">
            {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
            <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-900/60 text-blue-300">
            {theme === 'dark' ? 'ON' : 'OFF'}
          </span>
        </button>
      </div>
    </aside>
  );
};
