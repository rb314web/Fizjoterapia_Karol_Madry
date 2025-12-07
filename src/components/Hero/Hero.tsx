import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h2 className="hero-title">TWÓJ POWRÓT DO AKTYWNOŚCI</h2>
          <p className="hero-subtitle">
            Skuteczna fizjoterapia dostosowana do Twoich potrzeb<br />
            Pokonaj ból i ograniczenia – zacznij żyć pełnią życia
          </p>
          <p className="hero-quote">
            Wierzę, że każdy zasługuje na życie bez bólu.<br />
            Stosuję nowoczesne metody terapeutyczne,<br />
            aby pomóc Ci odzyskać komfort i swobodę ruchu.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Umów wizytę</a>
            <a href="#services" className="btn btn-secondary">Nasze usługi</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

