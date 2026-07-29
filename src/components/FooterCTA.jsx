import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FooterCTA() {
  const { openRegistrationModal } = useApp();

  return (
    <section className="footer-cta-wrapper">
      <div className="footer-cta-card">
        <div className="footer-cta-content">
          <h2 className="cta-heading">
            Siap <span className="highlight-text">Upgrade</span> Skill-mu?
          </h2>
          <p className="cta-subtext">
            Pelajari teknologi terkini, kembangkan keahlianmu, dan tumbuh bersama komunitas Oemah Training.
          </p>
          <div className="cta-actions">
            <button className="btn-hero-primary" onClick={() => openRegistrationModal()}>
              Mulai Sekarang <ArrowUpRight size={18} />
            </button>
            <a
              href="https://oemahwebsite.com"
              target="_blank"
              rel="noreferrer"
              className="btn-cta-outline"
            >
              Oemah Website
            </a>
          </div>
        </div>

        <div className="footer-cta-visual">
          <div className="badge-icon percent-badge" aria-hidden="true">%</div>
          <div className="hero-img-frame">
            <img
              src="/images/hero_student_1785124744018.png"
              alt="Oemah Training Professional"
              className="cta-student-img"
              loading="lazy"
            />
          </div>
          <div className="badge-icon code-badge" aria-hidden="true">{`{ }`}</div>
        </div>
      </div>
    </section>
  );
}
