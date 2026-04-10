// TypeScript interfaces for the portfolio app

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links: NavLink[];
  onScroll?: (sectionId: string) => void;
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export interface ButtonConfig {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
}

export interface HeroProps {
  name: string;
  title: string;
  tagline?: string;
  buttons: ButtonConfig[];
  resumeLink?: string;
  showScrollIndicator?: boolean;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    tagline?: string;
  };
  navigation: {
    links: NavLink[];
  };
  hero: {
    buttons: ButtonConfig[];
    resumeLink?: string;
    showScrollIndicator?: boolean;
  };
}

