import React from 'react';
import { useApp } from '../context/AppContext';
import { TRAINERS } from '../data/mockData';

export default function TrainerPage() {
  const { navigateTo } = useApp(); // Hapus openRegistrationModal karena tidak dipakai

  return (
    <div className="page-trainer">
      {/* ===== HERO ===== */}
      <section style={{
        background: 'linear-gradient(135deg, #6a852b 0%, #a0c44b 100%)',
        padding: '160px 0 100px',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <span style={{
            backgroundColor: 'rgba(255,255,255,0.12)',
            color: '#c8dd8a',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '20px',
            border: '1px solid rgba(255,255,255,0.2)',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>Layanan & Konsultasi IT Profesional</span>
          <h1 style={{ fontSize: '52px', lineHeight: '1.15', color: '#ffffff', marginBottom: '24px' }}>
            Layanan &amp; Konsultasi<br />IT Profesional
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '40px', maxWidth: '650px', margin: '0 auto 40px' }}>
            Menggunakan teknologi yang berkualitas dan berkualitas tinggi, kami memberikan layanan yang profesional.
          </p>
          <button 
            className="btn btn-primary" 
            onClick={() => navigateTo('kontak-kami')} // ← INI PERUBAHANNYA
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 28px',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer',
              transition: '0.3s ease',
              border: 'none',
              gap: '8px',
              backgroundColor: '#a0c44b',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(106,133,43,0.4)'
            }}
          >
            Konsultasi Sekarang <i className="fas fa-comment-dots"></i>
          </button>
        </div>
      </section>

      {/* ===== TRAINER KAMI ===== */}
      <section className="section-container">
        <div className="section-tag-badge">
          # Trainer Profesional
        </div>
        <div className="section-header-split">
          <div>
            <h2 className="section-title">
              Belajar Langsung dari Para{" "}
              <span className="highlight-text">Trainer</span>{" "}
              Profesional
            </h2>
            <p className="section-subtitle">
              Para instruktur ahli berpengalaman siap membimbingmu,
              mendampingi proses belajar hingga 100% paham materi.
            </p>
          </div>
        </div>

        <div className="trainers-grid">
          {TRAINERS.map((trainer, idx) => (
            <div key={idx} className="trainer-card">
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
      </section>

      {/* ===== 4 LANGKAH MENUJU SUKSES ===== */}
      <section style={{
        backgroundColor: '#6a852b',
        padding: '100px 0',
        color: '#ffffff'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto 60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '16px', color: '#ffffff' }}>
              4 Langkah Menuju Sukses
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
              Metodologi kerja profesional kami untuk menjamin hasil terbaik.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px'
          }}>
            {[
              { num: 1, title: 'Consult', desc: 'Analisis mendalam kebutuhan dan target transformasi digital.' },
              { num: 2, title: 'Design', desc: 'Perancangan arsitektur teknologi yang kokoh dan adaptif.' },
              { num: 3, title: 'Execute', desc: 'Implementasi sistem dengan standar kode tinggi dan terstruktur.' },
              { num: 4, title: 'Support', desc: 'Pendampingan purna-jual dan maintenance sistem berkala.' }
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#a0c44b',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Outfit, Inter, sans-serif',
                  fontSize: '22px',
                  fontWeight: '800',
                  margin: '0 auto 24px',
                  boxShadow: '0 8px 20px -4px rgba(0,0,0,0.25)'
                }}>{step.num}</div>
                <h3 style={{ color: '#ffffff', fontSize: '18px', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>  
    </div>
  );
}