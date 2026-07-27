import React from 'react';
import {
  ArrowUpRight,
  Users,
  MessageSquare,
  BookOpen,
  Monitor,
  Star,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRAINERS, TESTIMONIALS, BLOG_POSTS } from '../data/mockData';

export default function HomePage() {
  const { navigateTo, openRegistrationModal } = useApp();

  return (
    <div className="page-home">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">
              Mengantar <span className="highlight-text">Teknologi</span> Lebih Dekat dengan Kita
            </h1>
            <p className="hero-description">
              Perjalanan dimulai dari bersama-sama mengembangkan dan membagikan keahlian untuk masa depan.
            </p>
            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={() => openRegistrationModal()}>
                Mulai Sekarang <ArrowUpRight size={18} />
              </button>
              <a href="https://oemahwebsite.com" target="_blank" rel="noreferrer" className="btn-hero-secondary">
                Oemah Website
              </a>
            </div>

            <div className="hero-stats-pill">
              <div className="avatar-group">
                <img src="/images/trainer_tonny_1785124706053.png" alt="User 1" />
                <img src="/images/trainer_rachel_1785124718492.png" alt="User 2" />
                <img src="/images/trainer_ghianina_1785124732608.png" alt="User 3" />
              </div>
              <span className="stats-text"><strong>100+</strong> Peserta telah bergabung</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card-stack">
              <div className="badge-icon top-left-badge">%</div>
              <div className="hero-image-wrapper">
                <img src="/images/hero_student_1785124744018.png" alt="Oemah Student" className="hero-main-img" />
              </div>
              <div className="badge-icon bottom-right-badge">{`{ }`}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: PENGALAMAN BELAJAR */}
      <section className="section-container">
        <div className="section-tag-badge"># Pengalaman Belajar</div>
        <div className="section-header-split">
          <h2 className="section-title">
            Pengalaman <span className="highlight-text">Belajar</span> Secara Langsung
          </h2>
          <p className="section-subtitle-right">
            Wadah pengembangan fleksibel dan materi berkualitas yang dirancang untuk mendukung peserta dari berbagai latar belakang bidang teknologi informasi.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box"><Users size={24} /></div>
            <h3>Peserta</h3>
            <p>Mempunyai antusiasme tinggi untuk memperdalam dan meningkatkan keahlian di bidang IT.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box"><MessageSquare size={24} /></div>
            <h3>Komunitas</h3>
            <p>Wadah yang tepat untuk terhubung, berdiskusi, dan tumbuh bersama sesama praktisi IT.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box"><BookOpen size={24} /></div>
            <h3>Materi Terkini</h3>
            <p>Materi selalu diperbarui sesuai dengan kebutuhan industri dan tren perkembangan teknologi terbaru.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box"><Monitor size={24} /></div>
            <h3>Media Interaktif</h3>
            <p>Metode pembelajaran yang praktis, interaktif, dan mudah diaplikasikan pada dunia kerja nyata.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: JELAJAHI MATERI PEMBELAJARAN */}
      <section className="section-container bg-muted">
        <div className="text-center-wrapper">
          <h2 className="section-title text-center">
            Jelajahi Berbagai <span className="highlight-text">Materi</span> Pembelajaran
          </h2>
          <p className="section-subtitle text-center">
            Pilihan bidang pelatihan dirancang agar fokus, mendalam, dan relevan dengan industri, sehingga kamu dapat memilih sesuai target karirmu.
          </p>
        </div>

        <div className="topics-grid">
          <div className="topic-card" onClick={() => navigateTo('training-list')}>
            <div className="topic-header">
              <span className="topic-badge">Top 1</span>
              <span className="topic-tag">Live Class</span>
            </div>
            <h3>Software Development</h3>
            <p>Belajar arsitektur perangkat lunak, clean code, dan metodologi pengembangan sistem modern.</p>
          </div>

          <div className="topic-card" onClick={() => navigateTo('training-list')}>
            <div className="topic-header">
              <span className="topic-badge">Top 2</span>
              <span className="topic-tag">Live Class</span>
            </div>
            <h3>Data Science & Big Data</h3>
            <p>Eksplorasi data, olah big data, machine learning, dan analisis statistik terapan.</p>
          </div>

          {/* Active Highlighted Green Card */}
          <div className="topic-card topic-card-active" onClick={() => navigateTo('training-list')}>
            <div className="topic-header">
              <span className="topic-badge active-badge">Top 3</span>
              <span className="topic-tag active-tag">Live Class</span>
            </div>
            <h3>Digital Marketing & SEO</h3>
            <p>Strategi pertumbuhan digital, optimasi mesin pencari, serta iklan digital berkinerja tinggi.</p>
          </div>

          <div className="topic-card" onClick={() => navigateTo('training-list')}>
            <div className="topic-header">
              <span className="topic-badge">Top 4</span>
              <span className="topic-tag">Live Class</span>
            </div>
            <h3>Arduino & Robotika</h3>
            <p>Integrasi hardware, sensor pintar, mikrokokontroler, dan sistem otomatisasi berbasis IoT.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRAINER PROFESIONAL */}
      <section className="section-container">
        <div className="section-tag-badge"># Trainer Profesional</div>
        <div className="section-header-split">
          <div>
            <h2 className="section-title">
              Belajar Langsung dari Para <span className="highlight-text">Trainer</span> Profesional
            </h2>
            <p className="section-subtitle">
              Para instruktur ahli berpengalaman siap membimbingmu, mendampingi proses belajar hingga 100% paham materi.
            </p>
          </div>

          <div className="trainer-nav-controls">
            <button className="btn-filter-tag active">Semua (5)</button>
            <div className="slider-arrows">
              <button className="arrow-btn" aria-label="Previous Trainer"><ChevronLeft size={18} /></button>
              <button className="arrow-btn active" aria-label="Next Trainer"><ChevronRight size={18} /></button>
            </div>
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

      {/* SECTION 4: TESTIMONIALS */}
      <section className="section-container bg-muted">
        <div className="section-tag-badge center"># Training Testimonials</div>
        <h2 className="section-title text-center">
          Mereka yang Telah <span className="highlight-text">Berlatih</span> Bersama Kami
        </h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((testi, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars-row">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#eab308" color="#eab308" />
                ))}
              </div>
              <p className="testimonial-text">"{testi.text}"</p>
              <div className="testimonial-user">
                <img src={testi.photo} alt={testi.name} className="user-avatar" loading="lazy" />
                <div>
                  <h4>{testi.name}</h4>
                  <span>{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: BLOG UPDATE */}
      <section className="section-container">
        <div className="section-tag-badge"># Artikel Terbaru</div>
        <div className="section-header-split">
          <h2 className="section-title">
            Update Seputar <span className="highlight-text">Dunia Teknologi</span>
          </h2>
          <button className="btn-read-more-link" onClick={() => navigateTo('training-list')}>
            Lihat Semua Artikel <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="blog-grid">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-img-box">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.snippet}</p>
                <div className="blog-footer">
                  <span className="blog-date"><CalendarIcon size={14} /> {post.date}</span>
                  <button className="btn-read-more" onClick={() => navigateTo('training-list')}>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
