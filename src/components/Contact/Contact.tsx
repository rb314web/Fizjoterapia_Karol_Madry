import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Kontakt</h2>
        <p className="section-subtitle">
          Skontaktuj się z nami, aby umówić wizytę lub uzyskać więcej informacji
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h3>Telefon</h3>
                  <p><a href="tel:+48509846088">509 846 088</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:madrykarol@o2.pl">madrykarol@o2.pl</a></p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3>Adres</h3>
                  <p>ul. Mrągowska 34a<br />Warszawa</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h3>Godziny otwarcia</h3>
                  <p>Pon-Pt: 8:00 - 18:00<br />Sob: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko</label>
              <input type="text" id="name" name="name" placeholder="Jan Kowalski" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="jan@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input type="tel" id="phone" name="phone" placeholder="+48 123 456 789" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" name="message" rows={5} placeholder="W czym możemy Ci pomóc?" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <span>Wyślij wiadomość</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
        
        <div className="booking-section">
          <h3 className="booking-title">Umów wizytę online</h3>
          <p className="booking-subtitle">
            Zarezerwuj wizytę przez Znany Lekarz - szybko i wygodnie
          </p>
          <div className="booking-widget">
            {/* Widget Znany Lekarz */}
            <a 
              id="zl-url" 
              className="zl-url" 
              href="https://www.znanylekarz.pl/karol-madry/fizjoterapeuta/warszawa" 
              rel="nofollow" 
              data-zlw-doctor="karol-madry" 
              data-zlw-type="big" 
              data-zlw-opinion="false" 
              data-zlw-hide-branding="true"
            >
              Karol Mądry - ZnanyLekarz.pl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

