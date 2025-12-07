import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              {/* Tu docelowo przyjdzie zdjęcie Karola Mądrego */}
              <span className="image-icon">👨‍⚕️</span>
            </div>
            <div className="experience-badge">
              <span className="years">14+</span>
              <span className="text">Lat doświadczenia</span>
            </div>
          </div>
          
          <div className="about-text">
            <h2 className="section-title">O Mnie</h2>
            <h3 className="about-subtitle">
              Ograniczenia są w Nas.<br />
              Widzę to każdego dnia.
            </h3>
            <p className="about-description">
              Jako fizjoterapeuta pracuję od 2010 r. Ukończyłem wiele szkoleń i kursów. 
              Pracowałem w szpitalach, przychodniach i z pacjentami podczas rehabilitacji 
              domowej. Jednak samo miejsce pracy nie jest kluczowe, a <strong>podejście do pacjenta i skuteczność terapii</strong>.
            </p>
            <p className="about-description">
              Moim celem jest nie tylko uśmierzenie bólu, ale znalezienie jego przyczyny i trwała poprawa jakości życia moich pacjentów.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Wieloletnie doświadczenie</span>
              </div>
              <div className="feature">
                <span className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Indywidualne podejście</span>
              </div>
              <div className="feature">
                <span className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Nowoczesne metody leczenia</span>
              </div>
              <div className="feature">
                <span className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                <span>Przyjazna atmosfera</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

