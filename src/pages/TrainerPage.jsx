import React from 'react';
import { useApp } from '../context/AppContext';
import { TRAINERS } from '../data/mockData';
import '../styles/TrainerPage.css';

export default function TrainerPage() {
  const { navigateTo } = useApp();

  return (
    <div className="page-trainer">
      <div className="container">
        <div className="page-trainer-header">
          <h1>
            Trainer <span style={{ color: '#6a852b' }}>Profesional</span>
          </h1>
          <p>
            Oemah Training didukung oleh praktisi muda IT dan lulusan universitas terbaik
            dengan pengalaman sebagai dosen, staf ahli, hingga CEO perusahaan IT.
          </p>
          <p>
            Setiap trainer telah berpengalaman di bidangnya dan siap membimbing peserta
            dengan pendekatan yang aplikatif dan relevan dengan industri.
          </p>
        </div>

        <hr className="page-trainer-divider" />

        <div className="page-trainer-grid">
          {TRAINERS.map((trainer, idx) => (
            <div key={idx} className="page-trainer-card">
              <div className="trainer-img-wrapper">
                <img src={trainer.photo} alt={trainer.name} loading="lazy" />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <span className="trainer-role">{trainer.role}</span>
              </div>
            </div>
          ))}
        </div>

        <hr className="page-trainer-divider" />

        <div className="page-trainer-cta">
          <div>
            <h3>Ingin menjadi bagian dari tim?</h3>
            <p>Hubungi kami untuk informasi lebih lanjut.</p>
          </div>
          <button className="page-trainer-cta-button" onClick={() => navigateTo('kontak-kami')}>
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}