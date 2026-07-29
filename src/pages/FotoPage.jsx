import React from 'react';
import { useApp } from '../context/AppContext';
import '../styles/FotoPage.css';

import arduino1 from '../assets/gallery/arduino1.jpg';
import arduino2 from '../assets/gallery/arduino2.jpg';
import digital1 from '../assets/gallery/digital1.jpg';
import digital2 from '../assets/gallery/digital2.jpg';
import web1 from '../assets/gallery/web1.jpg';
import web2 from '../assets/gallery/web2.jpg';

const GALLERIES = [
  {
    title: 'Workshop Arduino dan Mikrokontroler',
    desc: 'Pelatihan dasar hingga lanjutan mengenai Arduino, sensor, dan pengembangan sistem embedded.',
    photos: [arduino1, arduino2],
  },
  {
    title: 'Training Digital Marketing',
    desc: 'Program pelatihan digital marketing untuk mahasiswa, UMKM, dan perusahaan.',
    photos: [digital1, digital2],
  },
  {
    title: 'Training Internet of Things (IoT)',
    desc: 'Implementasi sensor, monitoring, dan otomasi berbasis Internet of Things.',
    photos: [web1, web2],
  },
];

export default function FotoPage() {
  const { navigateTo } = useApp();

  return (
    <div className="page-foto">
      <div className="container">
        <div className="page-foto-header">
          <h1>
            Galeri <span style={{ color: '#6a852b' }}>Kegiatan</span>
          </h1>
          <p>
            Dokumentasi berbagai kegiatan pelatihan, workshop, seminar, dan
            corporate training yang telah diselenggarakan oleh Oemah Training.
          </p>
          <p>
            Setiap kegiatan dirancang untuk memberikan pengalaman belajar yang
            aplikatif dan mendalam bagi peserta.
          </p>
        </div>

        <hr className="page-foto-divider" />

        {GALLERIES.map((item, index) => (
          <div key={index} className="page-foto-gallery-section">
            <div className="page-foto-gallery-title">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>

            <div className="page-foto-grid">
              {item.photos.map((photo, idx) => (
                <div key={idx} className="page-foto-card">
                  <img src={photo} alt={item.title} loading="lazy" />
                </div>
              ))}
            </div>

            {index < GALLERIES.length - 1 && <hr className="page-foto-divider" />}
          </div>
        ))}

        <hr className="page-foto-divider" />

        <div className="page-foto-cta">
          <div>
            <h3>Ikuti kegiatan kami selanjutnya?</h3>
            <p>Daftar sekarang dan jadilah bagian dari komunitas pembelajar.</p>
          </div>
          <button className="page-foto-cta-button" onClick={() => navigateTo('kontak-kami')}>
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}