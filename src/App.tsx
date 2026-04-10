import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Contact from './components/Contact';
import PageLoader from './components/PageLoader';
import SkeletonLoader from './components/SkeletonLoader';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);
  const { personalInfo, navigation, hero } = portfolioData;
  const skillsList: Array<{ name: string; icon: string; invertInDark?: boolean }> = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invertInDark: true },
    { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', invertInDark: true },
    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', invertInDark: true },
    { name: 'Particles.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'React.js (Basics)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  ];

  const firstRowSkills = skillsList.slice(0, Math.ceil(skillsList.length / 2));
  const secondRowSkills = skillsList.slice(Math.ceil(skillsList.length / 2));

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDarkMode(shouldUseDark);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Splash screen: visible for 2.2s, then skeleton shows for 0.8s, then real content fades in
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setIsSplashVisible(false);
      // Show skeleton briefly before real content
      const skeletonTimer = setTimeout(() => {
        setIsContentReady(true);
      }, 900);
      return () => clearTimeout(skeletonTimer);
    }, 2200);
    return () => clearTimeout(splashTimer);
  }, []);

  return (
    <div className="App" style={{ minHeight: '100vh', width: '100%', position: 'relative' }}>
      {/* Splash loader */}
      <PageLoader isVisible={isSplashVisible} />

      {/* Skeleton: shown between splash exit and content ready */}
      {!isSplashVisible && !isContentReady && <SkeletonLoader />}

      {/* Real content fades in when ready */}
      <div className={`app-content ${isContentReady ? 'app-content--visible' : 'app-content--hidden'}`}>
      <Navigation
        links={navigation.links}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />
      
      <Hero
        name={personalInfo.name}
        title={personalInfo.title}
        tagline={personalInfo.tagline}
        buttons={hero.buttons}
        resumeLink={hero.resumeLink}
        showScrollIndicator={hero.showScrollIndicator}
      />

      <section id="about" className="section-placeholder about-section">
        <div className="about-section__bg" aria-hidden="true" />
        <div className="container about-section__container">
          <header className="about-section__header">
            <span className="about-section__eyebrow">About me</span>
            <h2 className="about-section__title">Building real projects while studying software &amp; multimedia</h2>
            <p className="about-section__subtitle">
              Student developer focused on web, data, and creative tech — turning coursework into
              shipped work.
            </p>
          </header>

          <div className="about-section__grid">
            <aside className="about-profile">
              <div className="about-profile__frame">
                <img
                  src="/profile.png"
                  alt={personalInfo.name}
                  className="about-profile__photo"
                  width={280}
                  height={280}
                />
                <span className="about-profile__badge">Open to opportunities</span>
              </div>
              <p className="about-profile__name">{personalInfo.name}</p>
              <p className="about-profile__role">{personalInfo.title}</p>

              <ul className="about-stats">
                <li className="about-stats__item">
                  <span className="about-stats__value">B.Sc.</span>
                  <span className="about-stats__label">Programming &amp; Multimedia · in progress</span>
                </li>
                <li className="about-stats__item">
                  <span className="about-stats__value">3+</span>
                  <span className="about-stats__label">Self-built projects &amp; demos</span>
                </li>
                <li className="about-stats__item">
                  <span className="about-stats__value">EU</span>
                  <span className="about-stats__label">Based in Vilnius, Lithuania</span>
                </li>
              </ul>
            </aside>

            <div className="about-content">
              <div className="about-content__card">
                <h3 className="about-content__heading">My story</h3>
                <p className="about-content__lead">
                  I&apos;m pursuing a Bachelor&apos;s in Programming and Multimedia at{' '}
                  <strong>SMK Aukstoji Mokykla</strong> in Vilnius — combining code, databases, and
                  multimedia so ideas don&apos;t stop at the classroom.
                </p>
                <p className="about-content__text">
                  I like shipping small but complete things: responsive frontends, Python-backed
                  pieces with MySQL, and notebooks when I&apos;m exploring data. I&apos;m comfortable
                  owning a feature end-to-end and iterating until it feels right.
                </p>
              </div>

              <div className="about-content__card about-content__card--muted">
                <h3 className="about-content__heading">Education</h3>
                <ol className="about-timeline">
                  <li className="about-timeline__item">
                    <div className="about-timeline__dot" aria-hidden="true" />
                    <div className="about-timeline__body">
                      <span className="about-timeline__date">Feb 2025 — Present</span>
                      <p className="about-timeline__title">Bachelor, Programming &amp; Multimedia</p>
                      <p className="about-timeline__meta">SMK Aukstoji Mokykla · Vilnius</p>
                    </div>
                  </li>
                  <li className="about-timeline__item">
                    <div className="about-timeline__dot" aria-hidden="true" />
                    <div className="about-timeline__body">
                      <span className="about-timeline__date">Pre-Engineering</span>
                      <p className="about-timeline__title">Intermediate · 80% (886/1100)</p>
                      <p className="about-timeline__meta">Iman Public Boys HSS &amp; College · Faisalabad, PK</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="about-actions">
                <a className="about-actions__primary" href="mailto:muhammadasfer992@gmail.com">
                  Email me
                </a>
                <a className="about-actions__secondary" href="tel:+37063589573">
                  Call +370 63589573
                </a>
                <a className="about-actions__ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
                  Download resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-placeholder">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-marquee-container">
            <div className="marquee-row">
              <div className="marquee-row-content">
                {firstRowSkills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    <img src={skill.icon} alt={skill.name} className={`skill-icon ${skill.invertInDark ? 'invert-dark' : ''}`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="marquee-row-content" aria-hidden="true">
                {firstRowSkills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    <img src={skill.icon} alt={skill.name} className={`skill-icon ${skill.invertInDark ? 'invert-dark' : ''}`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="marquee-row reverse">
              <div className="marquee-row-content">
                {secondRowSkills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    <img src={skill.icon} alt={skill.name} className={`skill-icon ${skill.invertInDark ? 'invert-dark' : ''}`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="marquee-row-content" aria-hidden="true">
                {secondRowSkills.map((skill) => (
                  <span key={skill.name} className="skill-badge">
                    <img src={skill.icon} alt={skill.name} className={`skill-icon ${skill.invertInDark ? 'invert-dark' : ''}`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-placeholder">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-list">
            <article className="project-card">
              <div className="project-image-placeholder bg-gradient-1"></div>
              <div className="project-card-content">
                <h3>Web_plate</h3>
                <p>
                  Responsive website built with HTML, CSS, and Python, with MySQL integration
                  for data handling.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Python</span>
                  <span>MySQL</span>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image-placeholder bg-gradient-2"></div>
              <div className="project-card-content">
                <h3>Netflix Clone Frontend</h3>
                <p>
                  Frontend layout clone to practice CSS, JavaScript, and responsive design.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-card-actions">
                  <a
                    href="https://asfer00786.github.io/ott-frontend-project/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image-placeholder bg-gradient-3"></div>
              <div className="project-card-content">
                <h3>Numpy Basics</h3>
                <p>
                  Python data processing and analytics exercises published as Jupyter
                  notebooks.
                </p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>Jupyter</span>
                </div>
              </div>
            </article>
          </div>

          <div className="external-links">
            <a href="https://github.com/asfer00786" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.youtube.com/@TechQuest-00786" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <p>&copy; {new Date().getFullYear()} Muhammad Asfer. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      </div>{/* end app-content */}
    </div>
  );
}

export default App;