import './Methods.css';

const Methods = () => {
  const methods = [
    {
      title: 'FOI',
      description: 'Koncepcja FOI jest terapią, która zakłada istnienie wzajemnych powiązań między wszystkimi stawami w obrębie całego ciała. Nieprawidłowe działanie jednego ze stawów, ma wpływ na funkcjonowanie wszystkich pozostałych.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    {
      title: 'PNF',
      description: 'PNF jest skrótem i oznacza proprioceptywne nerwowo–mięśniowe torowanie. Koncepcja została stworzona z zamierzeniem jej wykorzystania u pacjentów z mózgowym porażeniem dziecięcym i innymi schorzeniami neurologicznymi.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="19" cy="5" r="1"></circle>
          <circle cx="5" cy="5" r="1"></circle>
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
          <circle cx="19" cy="19" r="1"></circle>
          <circle cx="5" cy="19" r="1"></circle>
        </svg>
      )
    },
    {
      title: 'Kinesiotaping',
      description: 'Kinesiotaping wykorzystuje stymulację poprzez mechaniczne drażnienie receptorów skóry. Zastosowanie szeregu technik pozwala na osiągnięcie właściwego funkcjonowania układu mięśniowego oraz kostno-stawowego.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <path d="M10 6c0-2.2 1.8-4 4-4a4 4 0 0 1 0 8 4 4 0 0 1-4-4z"></path>
          <path d="M10 6v4"></path>
          <path d="M14 6v4"></path>
          <path d="M6 14a2 2 0 0 0-2 2"></path>
          <path d="M18 14a2 2 0 0 1 2 2"></path>
          <path d="M6 14h12"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="methods" className="methods">
      <div className="methods-container">
        <h2 className="section-title">Metody Pracy</h2>
        <p className="section-subtitle">
          Stosuję sprawdzone i nowoczesne metody fizjoterapii, dostosowane do indywidualnych potrzeb każdego pacjenta
        </p>
        <div className="methods-grid">
          {methods.map((method, index) => (
            <div key={index} className="method-card">
              <div className="method-icon">{method.icon}</div>
              <h3 className="method-title">{method.title}</h3>
              <p className="method-description">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methods;

