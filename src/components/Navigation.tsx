import { useEffect, useState } from 'react';
import type { NavigationProps } from '../types';
import './Navigation.css';

const Navigation: React.FC<NavigationProps> = ({ links, onScroll, isDarkMode = false, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const sections = links.map((link) => link.href.replace('#', ''));
      let foundSection: string | null = null;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            foundSection = sectionId;
          }
        }
      });

      if (foundSection) {
        setActiveSection(foundSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);

    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      if (onScroll) {
        onScroll(sectionId);
      }
    }

    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e, '#contact');
  };

  return (
    <header className={`top-navbar ${isScrolled ? 'top-navbar--scrolled' : ''}`}>
      <div className="top-navbar__grain" aria-hidden="true" />
      <div className="container top-navbar__inner">
        <a className="top-navbar__brand" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="top-navbar__brand-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 4C10.5 4 6 8.5 6 14c0 4.5 3.2 8.2 7.5 9.2L16 28l2.5-4.8C22.8 22.2 26 18.5 26 14c0-5.5-4.5-10-10-10z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path d="M16 10v8M12 14h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
            </svg>
          </span>
          <span className="top-navbar__brand-text">Portfolio</span>
        </a>

        <nav
          id="mobile-nav"
          className={`top-navbar__center ${isMobileMenuOpen ? 'top-navbar__center--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="top-navbar__pill">
            {links.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    className={`top-navbar__link ${isActive ? 'top-navbar__link--active' : ''}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="top-navbar__link-inner">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="top-navbar__actions">
          {onToggleTheme && (
            <button
              className="top-navbar__theme"
              onClick={onToggleTheme}
              type="button"
              aria-label="Toggle dark mode"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span aria-hidden="true">{isDarkMode ? '☀' : '🌙'}</span>
            </button>
          )}
          <div className="top-navbar__cta-wrap">
            <a className="top-navbar__cta" href="#contact" onClick={handleContactClick}>
              Get in touch
            </a>
          </div>
        </div>

        <button
          className="top-navbar__toggle"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-controls="mobile-nav"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="top-navbar__toggle-bar" />
          <span className="top-navbar__toggle-bar" />
          <span className="top-navbar__toggle-bar" />
        </button>
      </div>
    </header>
  );
};

export default Navigation;
