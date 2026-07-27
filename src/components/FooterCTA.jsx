import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FooterCTA({ onOpenModal }) {
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
            <button className="btn-cta-primary" onClick={onOpenModal}>
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
          <div className="badge-icon percent-badge">%</div>
          <div className="hero-img-frame">
            <img
              src="/images/hero_student_1785124744018.png"
              alt="Oemah Training Student"
              className="cta-student-img"
            />
          </div>
          <div className="badge-icon code-badge">{`{ }`}</div>
        </div>
      </div>
    </section>
  );
}
