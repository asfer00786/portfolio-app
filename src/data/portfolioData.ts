import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Muhammad Asfer Saeed',
    title: 'Software & Multimedia Developer',
    tagline: 'Programming student building web, data, and multimedia projects'
  },
  navigation: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  hero: {
    buttons: [
      {
        text: 'View Projects',
        href: '#projects',
        variant: 'primary'
      },
      {
        text: 'Download Resume',
        href: '/portfolio-app/resume.pdf',
        variant: 'outline-primary'
      }
    ],
    resumeLink: '/portfolio-app/resume.pdf',
    showScrollIndicator: true
  }
};