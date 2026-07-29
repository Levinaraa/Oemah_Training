import React from 'react';
import { useApp } from '../context/AppContext';
import logoTraining from '../assets/gallery/logoTraining.png';

export default function Navbar() {
  const { activePage, navigateTo, openRegistrationModal } = useApp();

  const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
    { id: 'training', label: 'Training' },
    { id: 'trainer', label: 'Trainer' },
    { id: 'foto', label: 'Foto' },
    { id: 'kontak-kami', label: 'Kontak Kami' },
  ];

  const handleNavClick = (id) => {
    if (id === 'training') {
      navigateTo('training-list');
    } else {
      navigateTo(id);
    }
  };

  const isNavActive = (id) => {
    if (id === 'training') {
      return activePage === 'training-list' || activePage === 'detail-pelatihan';
    }
    return activePage === id;
  };

  return (
    <header className="navbar-container">
      <div className="navbar-pill">
        <div className="navbar-logo" onClick={() => navigateTo('home')}>
          <img
          src={logoTraining}
          alt="Oemah Training Logo"
        />
        </div>

        <nav className="navbar-links" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-link ${isNavActive(item.id) ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button className="btn-mulai" onClick={() => openRegistrationModal()}>
          Mulai Sekarang
        </button>
      </div>
    </header>
  );
}
