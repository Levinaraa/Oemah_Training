import React from 'react';
import { useApp } from '../context/AppContext';
import { TRAINERS } from '../data/mockData';

export default function TrainerPage() {
  const { navigateTo } = useApp();

  return (
    <div className="page-trainer" style={{ padding: '60px 0 80px', backgroundColor: '#fafcfa' }}>
      <div className="container" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px' }}>

        {/* ===== HEADER ===== */}
        <div style={{ maxWidth: '760px', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            color: '#1e2415',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Trainer <span style={{ color: '#6a852b' }}>Profesional</span>
          </h1>
          <p style={{
            fontSize: '1.05rem',
            color: '#4a5a3a',
            lineHeight: '1.8',
            marginBottom: '12px'
          }}>
            Oemah Training didukung oleh praktisi muda IT dan lulusan universitas terbaik 
            dengan pengalaman sebagai dosen, staf ahli, hingga CEO perusahaan IT.
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#5a6b47',
            lineHeight: '1.8'
          }}>
            Setiap trainer telah berpengalaman di bidangnya dan siap membimbing peserta 
            dengan pendekatan yang aplikatif dan relevan dengan industri.
          </p>
        </div>

        {/* ===== PEMBATAS TIPIS ===== */}
        <hr style={{
          border: 'none',
          borderTop: '1.5px solid #dce6d0',
          margin: '0 0 40px 0',
          opacity: 0.6
        }} />

        {/* ===== TRAINER GRID ===== */}
        <div className="trainers-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '28px',
          marginTop: '8px'
        }}>
          {TRAINERS.map((trainer, idx) => (
            <div
              key={idx}
              className="trainer-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e2ece0',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(106,133,43,0.10)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
              }}
            >
              <div className="trainer-img-wrapper" style={{
                height: '220px',
                overflow: 'hidden',
                backgroundColor: '#eef3ea'
              }}>
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div className="trainer-info" style={{ padding: '20px 20px 24px' }}>
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#1e2415',
                  marginBottom: '4px',
                  lineHeight: 1.3
                }}>
                  {trainer.name}
                </h3>
                <span className="trainer-role" style={{
                  fontSize: '0.85rem',
                  color: '#5a6b47',
                  display: 'block',
                  fontWeight: 500
                }}>
                  {trainer.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== PEMBATAS & CTA ===== */}
        <hr style={{
          border: 'none',
          borderTop: '1.5px solid #dce6d0',
          margin: '56px 0 40px 0',
          opacity: 0.6
        }} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: '#1e2415',
              marginBottom: '4px'
            }}>
              Ingin menjadi bagian dari tim?
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#5a6b47'
            }}>
              Hubungi kami untuk informasi lebih lanjut.
            </p>
          </div>
          <button
            onClick={() => navigateTo('kontak-kami')}
            style={{
              background: '#6a852b',
              color: '#ffffff',
              fontWeight: 600,
              padding: '12px 36px',
              borderRadius: '40px',
              border: 'none',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'background 0.25s ease, transform 0.2s ease',
              boxShadow: '0 4px 12px rgba(106,133,43,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#4d631f';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#6a852b';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Hubungi Kami
          </button>
        </div>

      </div>
    </div>
  );
}