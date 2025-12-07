import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Wsparcie ludzi aktywnych',
      description: 'Fizjoterapia w sporcie tylko przy kontuzjach? Po kontuzjach koniecznie! Ale po co iść do fizjoterapeuty jak nic nie boli? Niejednokrotnie zdarza się, że nie jesteśmy w stanie wykonać niektórych ćwiczeń poprawnie z powodu ograniczeń ruchomości.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Leczenie bólów kręgosłupa',
      description: 'Ból kręgosłupa to często objaw niekorzystnych zmian w strukturach budujących oś ciała. Długotrwały ból może prowadzić do poważniejszych schorzeń. Oferujemy skuteczną terapię manualną i ćwiczenia.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12h6"></path>
          <path d="M9 16h6"></path>
          <path d="M9 8h6"></path>
          <path d="M12 3v18"></path>
          <path d="M8 21h8"></path>
          <path d="M8 3h8"></path>
        </svg>
      )
    },
    {
      title: 'Leczenie wad postawy',
      description: 'Wady postawy to częsty problem zarówno wśród dzieci, jak i dorosłych. Siedzący tryb życia i brak ruchu sprzyjają ich powstawaniu. Korekcja postawy pozwala uniknąć bólu i problemów w przyszłości.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      )
    },
    {
      title: 'Rehabilitacja pooperacyjna',
      description: 'Rehabilitacja jest kluczowa dla powrotu do sprawności po zabiegach chirurgicznych. Prowadzimy terapię po artroskopiach, endoprotezoplastykach i innych zabiegach ortopedycznych.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-6l-2 3h-4l-2-3H2"></path>
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        </svg>
      )
    },
    {
      title: 'Rehabilitacja neurologiczna',
      description: 'Specjalistyczna terapia dla pacjentów po udarach, urazach mózgu i z chorobami neurologicznymi (SM, Parkinson). Celem jest poprawa funkcji ruchowych i samodzielności.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
        </svg>
      )
    },
    {
      title: 'Rehabilitacja pourazowa',
      description: 'Kompleksowe leczenie po złamaniach, skręceniach i zwichnięciach. Stosujemy terapię manualną, fizykoterapię i ćwiczenia, aby przyspieszyć gojenie i powrót do pełnej aktywności.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          <path d="M12 5 9.04 11H6a5.5 5.5 0 0 0-2.82.78"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Nasze Usługi</h2>
        <p className="section-subtitle">
          Oferujemy kompleksową opiekę fizjoterapeutyczną dostosowaną do Twoich potrzeb
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

