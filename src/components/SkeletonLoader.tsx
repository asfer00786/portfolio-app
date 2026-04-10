import './PageLoader.css';

const SkeletonLoader = () => {
  const badgeWidths = [110, 140, 100, 120, 95, 130, 115, 105, 125, 90];
  const badgeWidths2 = [125, 95, 140, 100, 115, 130, 105, 120, 90, 110];

  return (
    <div className="skeleton-wrapper">
      {/* Hero Skeleton */}
      <section className="skeleton-section skeleton-hero">
        <div className="skeleton skeleton-hero__tag"></div>
        <div className="skeleton skeleton-hero__title-1"></div>
        <div className="skeleton skeleton-hero__title-2"></div>
        <div className="skeleton skeleton-hero__subtitle"></div>
        <div className="skeleton-hero__buttons">
          <div className="skeleton skeleton-hero__btn"></div>
          <div className="skeleton skeleton-hero__btn"></div>
        </div>
      </section>

      {/* About Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-container">
          <div className="skeleton skeleton-heading"></div>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="skeleton" style={{ height: '260px', borderRadius: '16px' }}></div>
              <div className="skeleton" style={{ height: '18px', width: '70%', margin: '0 auto', borderRadius: '8px' }}></div>
              <div className="skeleton" style={{ height: '14px', width: '50%', margin: '0 auto', borderRadius: '6px' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="skeleton" style={{ height: '18px', width: `${70 + (i * 5) % 25}%`, borderRadius: '6px' }}></div>
              ))}
              <div className="skeleton" style={{ height: '120px', borderRadius: '12px', marginTop: '1rem' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-container">
          <div className="skeleton skeleton-heading"></div>
          <div className="skeleton-marquee-row">
            {badgeWidths.map((w, i) => (
              <div key={i} className="skeleton skeleton-badge" style={{ width: `${w}px` }}></div>
            ))}
          </div>
          <div className="skeleton-marquee-row">
            {badgeWidths2.map((w, i) => (
              <div key={i} className="skeleton skeleton-badge" style={{ width: `${w}px` }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Skeleton */}
      <section className="skeleton-section">
        <div className="skeleton-container">
          <div className="skeleton skeleton-heading"></div>
          <div className="skeleton-project-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton skeleton-card__image"></div>
                <div className="skeleton-card__body">
                  <div className="skeleton skeleton-card__title"></div>
                  <div className="skeleton skeleton-card__line"></div>
                  <div className="skeleton skeleton-card__line skeleton-card__line--short"></div>
                  <div className="skeleton-card__tags">
                    <div className="skeleton skeleton-card__tag"></div>
                    <div className="skeleton skeleton-card__tag"></div>
                    <div className="skeleton skeleton-card__tag"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkeletonLoader;
