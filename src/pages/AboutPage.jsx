import React from 'react';
import { ArrowUpRight, UserCheck, BookOpen, Users, MapPin } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/mockData';
import '../styles/AboutPage.css';

import arduino1 from "../assets/gallery/arduino1.jpg";
import arduino2 from "../assets/gallery/arduino2.jpg";

import digital1 from "../assets/gallery/digital1.jpg";
import digital2 from "../assets/gallery/digital2.jpg";

import web1 from "../assets/gallery/web1.jpg";

export default function AboutPage() {
  return (
    <div className="page-about">
      <div className="container">
        {/* ABOUT HERO HEADER */}
        <div className="about-header-grid">
          <div className="about-header-left">
            <h1 className="about-title">
              Mengantar <span className="highlight-text">Teknologi</span> Lebih Dekat dengan Kita <ArrowUpRight size={28} className="inline-arrow" />
            </h1>
          </div>
          <div className="about-header-right">
            <p>
              Oemah Training merupakan bagian dari Oemah Website yang berfokus pada pelatihan teknologi informasi, didukung oleh praktisi muda IT dan lulusan universitas terbaik dengan pengalaman sebagai dosen, staf ahli, hingga CEO perusahaan IT.
            </p>
            <p>
              Melalui program training yang relevan dan materi yang terus diperbarui, Oemah Training hadir untuk membantu peserta mengembangkan keterampilan dan memperluas wawasan di bidang teknologi informasi. Kami menyediakan pengalaman belajar yang fleksibel dan aplikatif agar peserta dapat menerapkan ilmu yang diperoleh dalam dunia akademik maupun profesional.
            </p>
          </div>
        </div>


        {/* STATS ROW (4 CARDS) */}
        <div className="about-stats-grid">
          <div className="stat-card">
            <div className="stat-icon-box"><UserCheck size={20} /></div>
            <div className="stat-content">
              <h3>5 Trainer</h3>
              <p>Praktisi berpengalaman siap membimbingmu.</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box"><BookOpen size={20} /></div>
            <div className="stat-content">
              <h3>4 Topik</h3>
              <p>Pilihan materi untuk mengembangkan skill-mu.</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box"><Users size={20} /></div>
            <div className="stat-content">
              <h3>3 Komunitas</h3>
              <p>Tempat untuk terhubung dan tumbuh bersama.</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon-box"><MapPin size={20} /></div>
            <div className="stat-content">
              <h3>Purwokerto</h3>
              <p>Berbasis di Purwokerto, Jawa Tengah</p>
            </div>
          </div>
        </div>

        {/* PHOTO GALLERY COLLAGE (GRID matching Image 4) */}
        <div className="about-gallery-grid">
          <div className="gallery-item item-left-tall">
            <img src={arduino2} alt="Arduino Training" />
          </div>
          <div className="gallery-item item-mid-top">
            <img src={arduino1} alt="Arduino Training" />
          </div>
          <div className="gallery-item item-mid-bottom">
            <img src={digital1} alt="Digital Marketing" />
          </div>
          <div className="gallery-item item-right-top">
            <img src={digital2} alt="Digital Marketing" />
          </div>
          <div className="gallery-item item-right-bottom">
            <img src={web1} alt="Web Development" />
          </div>
        </div>
      </div>
    </div>
  );
}
