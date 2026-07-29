import React, { useEffect } from 'react';
import { FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { useApp } from '../context/AppContext';
import { TRAINERS } from '../data/mockData';
import '../styles/TrainerPage.css';

export default function TrainerPage() {
  const { navigateTo, activeTrainer, openTrainerDetail, closeTrainerDetail } = useApp();

  useEffect(() => {
    if (activeTrainer) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [activeTrainer]);

  const closeTrainerDetailHandler = () => {
    closeTrainerDetail();
    document.body.style.overflow = '';
  };

  return (
    <div className="page-trainer">
      <div className="container">
        <div className="page-trainer-header">
          <h1>
            Trainer <span className="highlight-text">Profesional</span>
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
            <button
              key={idx}
              type="button"
              className="page-trainer-card"
              onClick={() => openTrainerDetail(trainer)}
            >
              <div className="trainer-img-wrapper">
                <img src={trainer.photo} alt={trainer.name} loading="lazy" />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <span className="trainer-role">{trainer.role}</span>
                <p className="trainer-card-desc">{trainer.bio}</p>
              </div>
            </button>
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

      {activeTrainer && (
        <div className="trainer-detail-overlay" onClick={closeTrainerDetailHandler}>
          <div className="trainer-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="trainer-detail-close-icon"
              type="button"
              onClick={closeTrainerDetailHandler}
              aria-label="Tutup detail trainer"
            >
              <FaTimes size={18} />
            </button>

            <div className="trainer-detail-content">
              <div className="trainer-detail-image-wrapper">
                <img src={activeTrainer.photo} alt={activeTrainer.name} loading="lazy" />
              </div>

              <div className="trainer-detail-body">
                <div className="trainer-detail-header">
                  <div>
                    <h2>{activeTrainer.name}</h2>
                    <p className="trainer-detail-role">{activeTrainer.role}</p>
                  </div>
                  <a
                    href={activeTrainer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="trainer-linkedin"
                  >
                    <FaLinkedinIn size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <p className="trainer-detail-bio">{activeTrainer.description || activeTrainer.bio}</p>

                <div className="trainer-detail-section">
                  <h4>Informasi Pendidikan</h4>
                  <ul>
                    {activeTrainer.education?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="trainer-detail-section">
                  <h4>Portofolio Terkait</h4>
                  <ul>
                    {activeTrainer.portfolio?.map((item, index) => (
                      <li key={index}>
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}