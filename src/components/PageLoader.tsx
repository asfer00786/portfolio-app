import './PageLoader.css';

interface PageLoaderProps {
  isVisible: boolean;
}

const PageLoader = ({ isVisible }: PageLoaderProps) => {
  return (
    <div className={`page-loader ${isVisible ? 'page-loader--visible' : 'page-loader--hidden'}`}>
      <div className="loader-content">
        {/* Animated initials logo */}
        <div className="loader-logo">
          <span className="loader-logo__letter">M</span>
          <span className="loader-logo__letter">A</span>
        </div>

        <p className="loader-name">Muhammad Asfer</p>
        <p className="loader-subtitle">Portfolio</p>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill"></div>
        </div>
      </div>

      {/* Background orbs */}
      <div className="loader-orb loader-orb--1" aria-hidden="true"></div>
      <div className="loader-orb loader-orb--2" aria-hidden="true"></div>
      <div className="loader-orb loader-orb--3" aria-hidden="true"></div>
    </div>
  );
};

export default PageLoader;
