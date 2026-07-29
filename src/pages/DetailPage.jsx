import React, { useState } from 'react';
import { ChevronLeft, Calendar as CalendarIcon, Edit3, CheckCircle2, XCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRAINING_COURSES } from '../data/mockData';
import '../styles/global.css';

export default function DetailPage() {
  const { openRegistrationModal, selectedCourseId, navigateTo } = useApp();
  const [activeDay, setActiveDay] = useState('hari1');

  const defaultCourse = TRAINING_COURSES[0];
  const foundCourse = TRAINING_COURSES.find((c) => c.id === selectedCourseId);
  const course = {
    ...defaultCourse,
    ...foundCourse,
    tujuan: foundCourse?.tujuan || defaultCourse.tujuan,
    scheduleDays: foundCourse?.scheduleDays || defaultCourse.scheduleDays,
    metodePelatihan: foundCourse?.metodePelatihan || defaultCourse.metodePelatihan,
    targetPeserta: foundCourse?.targetPeserta || defaultCourse.targetPeserta,
    targetHasil: foundCourse?.targetHasil || defaultCourse.targetHasil,
    pricing: foundCourse?.pricing || defaultCourse.pricing,
  };

  const currentSchedule = course.scheduleDays[activeDay] || course.scheduleDays['hari1'];

  return (
    <div className="page-detail-pelatihan">
      <div className="container">
        {/* PAGE TITLE */}
        <div className="detail-top-row">
          <button
            type="button"
            className="detail-back-button"
            onClick={() => navigateTo('training-list')}
          >
            <ChevronLeft size={18} />
            Kembali ke Training
          </button>
          <span className="detail-topic-badge">{course.category}</span>
        </div>

        {/* COURSE MAIN HEADER */}
        <div className="detail-hero-content">
          <h2 className="detail-course-title">{course.title}</h2>
          <div className="detail-date-row">
            <CalendarIcon size={16} /> {course.date}
          </div>
          <p className="detail-description">{course.fullDescription}</p>

          {/* TUJUAN PELATIHAN */}
          <div className="detail-section-block">
            <h3 className="block-title">Tujuan Pelatihan :</h3>
            <ol className="custom-numbered-list">
              {course.tujuan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>

          {/* RINCIAN MATERI PELATIHAN (TABBED) */}
          <div className="detail-section-block">
            <h3 className="block-title">Rincian Materi Pelatihan :</h3>

            <div className="day-tabs-row">
              <button
                className={`day-tab-btn ${activeDay === 'hari1' ? 'active' : ''}`}
                onClick={() => setActiveDay('hari1')}
              >
                Hari ke 1
              </button>
              <button
                className={`day-tab-btn ${activeDay === 'hari2' ? 'active' : ''}`}
                onClick={() => setActiveDay('hari2')}
              >
                Hari ke 2
              </button>
            </div>

            <div className="sessions-cards-grid">
              {currentSchedule.map((ses, idx) => (
                <div key={idx} className="session-card">
                  <div className="session-card-header">
                    <span className="session-name">{ses.session}</span>
                    <span className="session-time">{ses.time}</span>
                  </div>
                  <h4 className="session-title">{ses.title}</h4>
                  <ul className="session-points-list">
                    {ses.points.map((p, pIdx) => (
                      <li key={pIdx}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* DETAIL PELATIHAN (3 COLUMNS) */}
          <div className="detail-section-block">
            <h3 className="block-title">Detail Pelatihan :</h3>

            <div className="three-columns-grid">
              <div className="info-column-card">
                <div className="column-badge-header">
                  <Edit3 size={18} className="pencil-icon" />
                  <h4>Metode Pelatihan</h4>
                </div>
                <ol className="custom-numbered-list">
                  {course.metodePelatihan.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ol>
              </div>

              <div className="info-column-card">
                <div className="column-badge-header">
                  <Edit3 size={18} className="pencil-icon" />
                  <h4>Target Pelatihan</h4>
                </div>
                <ol className="custom-numbered-list">
                  {course.targetPeserta.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ol>
              </div>

              <div className="info-column-card">
                <div className="column-badge-header">
                  <Edit3 size={18} className="pencil-icon" />
                  <h4>Target Pelatihan</h4>
                </div>
                <ol className="custom-numbered-list">
                  {course.targetHasil.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* HARGA DAN FASILITAS */}
          <div className="detail-section-block">
            <h3 className="block-title">Harga dan Fasilitas :</h3>

            <div className="pricing-grid">
              {/* ONLINE PACKAGE */}
              <div className="pricing-card online-card">
                <div className="pricing-card-header">
                  <h4>Pelatihan Online</h4>
                  <p className="pricing-subtitle">{course.pricing.online.subtitle}</p>
                </div>
                <div className="pricing-price-box">
                  <span className="price-val highlight-green">{course.pricing.online.price}</span>
                  <span className="price-unit">{course.pricing.online.unit}</span>
                </div>
                <div className="pricing-facilities">
                  <h5>Fasilitas yang akan kamu dapatkan :</h5>
                  <ul className="facility-list">
                    {course.pricing.online.facilitiesIncluded.map((f, idx) => (
                      <li key={idx} className="facility-item check">
                        <CheckCircle2 size={18} className="check-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                    {course.pricing.online.facilitiesExcluded.map((fx, idx) => (
                      <li key={idx} className="facility-item cross">
                        <XCircle size={18} className="cross-icon" />
                        <span>{fx}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn-select-package" onClick={() => openRegistrationModal(course.id, 'online')}>
                  Pilih Paket Online
                </button>
              </div>

              {/* OFFLINE PACKAGE */}
              <div className="pricing-card offline-card">
                <div className="pricing-card-header">
                  <h4>Pelatihan Offline</h4>
                  <p className="pricing-subtitle">{course.pricing.offline.subtitle}</p>
                </div>
                <div className="pricing-price-box">
                  <span className="price-val dark-price">{course.pricing.offline.price}</span>
                  <span className="price-unit">{course.pricing.offline.unit}</span>
                </div>
                <div className="pricing-facilities">
                  <h5>Fasilitas yang akan kamu dapatkan :</h5>
                  <ul className="facility-list">
                    {course.pricing.offline.facilitiesIncluded.map((f, idx) => (
                      <li key={idx} className="facility-item check">
                        <CheckCircle2 size={18} className="check-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                    {course.pricing.offline.facilitiesExcluded.map((fx, idx) => (
                      <li key={idx} className="facility-item cross">
                        <XCircle size={18} className="cross-icon" />
                        <span>{fx}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn-select-package dark-btn" onClick={() => openRegistrationModal(course.id, 'offline')}>
                  Pilih Paket Offline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
