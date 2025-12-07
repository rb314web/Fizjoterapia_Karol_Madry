import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Karol Mądry',
      role: 'Fizjoterapeuta, Właściciel',
      experience: '10+ lat doświadczenia',
      description: 'Specjalizuje się w terapii manualnej, rehabilitacji ortopedycznej i sportowej. Wierzy w indywidualne podejście do każdego pacjenta i ciągłe poszerzanie wiedzy.',
      specializations: ['Terapia manualna', 'Rehabilitacja ortopedyczna', 'Fizjoterapia sportowa', 'Kinezyterapia'],
      education: [],
      achievements: []
    },
    {
      name: 'Anna Nowak',
      role: 'Fizjoterapeuta',
      experience: '5+ lat doświadczenia',
      description: 'Ekspertka od rehabilitacji neurologicznej i wad postawy. Z zaangażowaniem pomaga pacjentom w każdym wieku wrócić do pełnej sprawności.',
      specializations: ['Rehabilitacja neurologiczna', 'Wady postawy', 'Kinesiotaping', 'Masaż leczniczy'],
      education: [],
      achievements: []
    },
    {
      name: 'Piotr Kowalski',
      role: 'Masażysta, Fizjoterapeuta',
      experience: '3+ lata doświadczenia',
      description: 'Specjalista masażu leczniczego i sportowego. Jego holistyczne podejście pomaga w redukcji napięć i stresu, przywracając równowagę organizmu.',
      specializations: ['Masaż leczniczy', 'Masaż tkanek głębokich', 'Odnowa biologiczna', 'Trening funkcjonalny'],
      education: [],
      achievements: []
    }
  ];

  const teamValues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: 'Indywidualne podejście',
      description: 'Każdy pacjent otrzymuje spersonalizowany plan terapii'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="M2 12h20"></path>
          <path d="m4.93 4.93 14.14 14.14"></path>
          <path d="m19.07 4.93-14.14 14.14"></path>
        </svg>
      ),
      title: 'Doświadczenie',
      description: 'Wieloletnia praktyka i ciągłe doskonalenie umiejętności'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      title: 'Pasja i zaangażowanie',
      description: 'Pomagamy z pełnym zaangażowaniem i troską o każdego pacjenta'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 19v-3"></path>
          <path d="M10 19v-3"></path>
          <path d="M14 19v-3"></path>
          <path d="M18 19v-3"></path>
          <path d="M8 11V9"></path>
          <path d="M16 11V9"></path>
          <path d="M12 11V9"></path>
          <path d="M2 15h20"></path>
          <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.8v1.1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.1a2 2 0 0 0 0-3.8V7Z"></path>
        </svg>
      ),
      title: 'Nowoczesne metody',
      description: 'Stosujemy najnowsze techniki i sprzęt terapeutyczny'
    }
  ];

  return (
    <section id="team" className="team">
      <div className="team-container">
        <div className="team-intro">
          <h2 className="section-title">Nasz Zespół</h2>
          <p className="section-subtitle">
            Poznaj naszych specjalistów, którzy z pasją i zaangażowaniem pomagają w odzyskaniu pełnej sprawności. 
            Nasz zespół łączy wieloletnie doświadczenie z nowoczesnymi metodami leczenia.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-header">
                <div className="member-photo">
                  <div className="photo-placeholder">{member.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className="photo-badge">
                    <span className="badge-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </span>
                    <span className="badge-text">{member.experience}</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
              
              <div className="member-content">
                <p className="member-description">{member.description}</p>
                
                <div className="member-section">
                  <h4 className="section-heading">
                    <span className="section-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </span>
                    Specjalizacje
                  </h4>
                  <div className="member-specializations">
                    {member.specializations.map((spec, idx) => (
                      <span key={idx} className="specialization-tag">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="team-values">
          <h3 className="values-title">Nasze wartości</h3>
          <div className="values-grid">
            {teamValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

