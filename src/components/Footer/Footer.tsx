import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-map">
        <h3>Znajdź nas na mapie</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Warszawa+ul.+Mrągowska+34a&t=m&z=17&output=embed&iwloc=near"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja placówki - Warszawa, ul. Mrągowska 34a"
          ></iframe>
        </div>
      </div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Fizjoterapia Karol Mądry</h3>
            <p>Uwierz w moc swojego ciała</p>
          </div>
          <div className="footer-section">
            <h4>Nawigacja</h4>
            <ul>
              <li><a href="#services">Usługi</a></li>
              <li><a href="#methods">Metody</a></li>
              <li><a href="#about">O mnie</a></li>
              <li><a href="#team">Zespół</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul>
              <li>📞 <a href="tel:+48509846088">509 846 088</a></li>
              <li>✉️ <a href="mailto:madrykarol@o2.pl">madrykarol@o2.pl</a></li>
              <li>📍 ul. Mrągowska 34a, Warszawa</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fizjoterapia Karol Mądry. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

