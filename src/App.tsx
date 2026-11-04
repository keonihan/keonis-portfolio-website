import React, { useState, useEffect } from 'react';
import { SideMenu } from './components/SideMenu';
import { Navbar, PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { Experience } from './components/Experience';
import { Hobbies } from './components/Hobbies';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'experience', 'hobbies', 'projects', 'socials'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync state with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860 && isSideMenuOpen) {
        setIsSideMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSideMenuOpen]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'experience':
        return <Experience />;
      case 'hobbies':
        return <Hobbies />;
      case 'projects':
        return <Projects />;
      case 'socials':
        return <Socials />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`app-shell relative min-h-screen ${isSideMenuOpen ? 'menu-active' : ''}`}>
      {/* Fixed background behind ALL content (z-index: 0 and 1) */}
      <div className="site-bg-backdrop" aria-hidden="true" />
      <div className="site-bg-overlay" aria-hidden="true" />

      {/* Off-canvas Side Menu */}
      <SideMenu
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Window (relative z-10, always in FRONT of background) */}
      <div className={`main-window relative z-10 min-h-screen ${isSideMenuOpen ? 'pushed' : ''}`}>
        {/* Transparent click catcher overlay when pushed */}
        {isSideMenuOpen && (
          <div
            className="push-overlay"
            onClick={() => setIsSideMenuOpen(false)}
            aria-label="Tap to close side menu"
          />
        )}

        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          theme={theme}
          onToggleTheme={toggleTheme}
          isSideMenuOpen={isSideMenuOpen}
          onToggleSideMenu={() => setIsSideMenuOpen(!isSideMenuOpen)}
        />

        <main className="main-content relative z-10">
          {renderCurrentPage()}
        </main>

      </div>
    </div>
  );
};

export default App;
