import { useEffect, useState } from 'react';
import type { HeroProps } from '../types';
import './Hero.css';


const Hero: React.FC<HeroProps> = ({ 
  name, 
  title, 
  tagline, 
  buttons, 
  showScrollIndicator = true 
}) => {
  const [nameDisplay, setNameDisplay] = useState('');
  const [isNameComplete, setIsNameComplete] = useState(false);

  useEffect(() => {
    // Typewriter effect for name
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setNameDisplay(name.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsNameComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(typingInterval);
  }, [name]);

  const handleButtonClick = (button: typeof buttons[0]) => {
    if (button.onClick) {
      button.onClick();
    } else if (button.href) {
      if (button.href.startsWith('#')) {
        // Internal link - smooth scroll
        const sectionId = button.href.replace('#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      } else {
        // External link
        window.open(button.href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const offsetTop = aboutSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section" style={{ minHeight: '100vh', width: '100%' }}>
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="tech-pattern"></div>
        
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
        <div className="row align-items-center" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <div className="col-lg-8 mx-auto text-center" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
            <div className="hero-content">
              <div className="hero-image-wrap fade-in">
                <img src="/profile.png" alt="Muhammad Asfer Saeed" className="hero-profile-image" />
              </div>
              <h1 className="hero-name fade-in">
                <span className="name-display">{nameDisplay}</span>
                {!isNameComplete && <span className="cursor">|</span>}
              </h1>
              
              <h2 className="hero-title fade-in-delay-1">
                {title}
              </h2>
              
              {tagline && (
                <p className="hero-tagline fade-in-delay-2">
                  {tagline}
                </p>
              )}
              
              <div className="hero-buttons fade-in-delay-3">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`btn btn-${button.variant || 'primary'} btn-lg hero-btn`}
                    onClick={() => handleButtonClick(button)}
                    style={{ margin: '0.5rem' }}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="scroll-indicator" onClick={scrollToNextSection}>
          <div className="scroll-arrow"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
