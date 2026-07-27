import React from 'react';

export default function Navbar({ activePage, setActivePage, onOpenModal }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
    { id: 'training', label: 'Training' },
    { id: 'trainer', label: 'Trainer' },
    { id: 'foto', label: 'Foto' },
    { id: 'kontak-kami', label: 'Kontak Kami' },
  ];

  return (
    <header className="navbar-container">
      <div className="navbar-pill">
        <div className="navbar-logo" onClick={() => setActivePage('home')}>
          <span className="logo-oemah">Oemah</span>
          <span className="logo-training">Training</span>
        </div>

        <nav className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'training') {
                  setActivePage('training-list');
                } else {
                  setActivePage(item.id);
                }
              }}
              className={`nav-link ${
                activePage === item.id || (item.id === 'training' && (activePage === 'training-list' || activePage === 'detail-pelatihan'))
                  ? 'active'
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="btn-mulai" onClick={onOpenModal}>
          Mulai Sekarang
        </button>
      </div>
    </header>
  );
}
