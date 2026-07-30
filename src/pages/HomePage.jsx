import React, { useState } from 'react';
import '../styles/HomePage.css';
import {
  ArrowUpRight,
  Users,
  MessageSquare,
  BookOpen,
  Star,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  TimerIcon
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRAINERS, TESTIMONIALS, BLOG_POSTS } from '../data/mockData';

export default function HomePage() {
  const { navigateTo, openRegistrationModal, setSelectedCategory, openTrainerDetail, openBlogDetail } = useApp();

  const [currentPage, setCurrentPage] = useState(0);
  const trainersPerPage = 4; // tampilkan 4 trainer per halaman
  const totalPages = Math.ceil(TRAINERS.length / trainersPerPage);

  const visibleTrainers = TRAINERS.slice(
    currentPage * trainersPerPage,
    (currentPage + 1) * trainersPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };  

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
        <div className="section-tag-badge">Pengalaman Belajar</div>
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
            <p>Terbuka untuk siswa, mahasiswa, karyawan, guru, profesional atau bahkan orang awam.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box"><MessageSquare size={24} /></div>
            <h3>Komunitas</h3>
            <p>Wadah yang tepat untuk terhubung, berdiskusi, dan tumbuh bersama.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box"><BookOpen size={24} /></div>
            <h3>Materi Terkini</h3>
            <p>Materi selalu mengikuti tren teknologi terkini dan diperbarui sesuai kebutuhan.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-box"><TimerIcon size={24} /></div>
            <h3>Waktu Fleksibel</h3>
            <p>Waktu pelaksanaan training yang fleksibel menyesuaikan dengan kebutuhan peserta</p>
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
          <div className="feature-card" onClick={() => { setSelectedCategory('Software Development'); navigateTo('training-list'); }}>
            <div className="topic-header">
              <span className="topic-badge">Topik 1</span>
                </div>
            <h3>Software Development</h3>
            <p>Belajar arsitektur perangkat lunak, clean code, dan metodologi pengembangan sistem modern...</p>
          </div>
     
          <div className="feature-card" onClick={() => { setSelectedCategory('Data Science & Big Data'); navigateTo('training-list'); }}>
            <div className="topic-header">
              <span className="topic-badge">Topik 2</span>
                </div>
            <h3>Data Science & Big Data</h3>
            <p>Eksplorasi data, olah big data, machine learning, dan analisis statistik terapan...</p>
          </div>

          <div className="feature-card" onClick={() => { setSelectedCategory('Digital Marketing & SEO'); navigateTo('training-list'); }}>
            <div className="topic-header">
              <span className="topic-badge">Topik 3</span>
              
            </div>
            <h3>Digital Marketing dan Teknik SEO</h3>
            <p>Semakin hari masyarakat semakin melekat dengan internet terutama sosial media...</p>
          </div>

          <div className="feature-card" onClick={() => { setSelectedCategory('Arduino & Robotika'); navigateTo('training-list'); }}>
            <div className="topic-header">
              <span className="topic-badge">Topik 4</span>
            </div>
            <h3>Arduino & Robotika</h3>
            <p>Integrasi hardware, sensor pintar, mikrokokontroler, dan sistem otomatisasi berbasis IoT...</p>
          </div>
        </div>
      </section>

    {/* SECTION 3: TRAINER PROFESIONAL */}
    <section className="section-container">
      <div className="section-tag-badge">Meet Our Trainers</div>
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
          <div className="slider-arrows">
            <button
              className="arrow-btn"
              onClick={handlePrev}
              disabled={currentPage === 0}
              aria-label="Previous Trainer"
              style={{ opacity: currentPage === 0 ? 0.4 : 1 }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="arrow-btn active"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next Trainer"
              style={{ opacity: currentPage === totalPages - 1 ? 0.4 : 1 }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="trainers-grid">
        {visibleTrainers.map((trainer, idx) => (
          <button
            key={idx}
            type="button"
            className="trainer-card"
            onClick={() => openTrainerDetail(trainer)}
          >
            <div className="trainer-img-wrapper">
              <img src={trainer.photo} alt={trainer.name} loading="lazy" />
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <span className="trainer-role">{trainer.role}</span>
            </div>
          </button>
        ))}
      </div>
    </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="section-container bg-muted">
        <div className="section-tag-badge center">
         Learning Experiences
        </div>
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
        <div className="section-tag-badge">
         Explore and Learn
        </div>
        <div className="section-header-split">
          <h2 className="section-title">
            Update Seputar Dunia <span className="highlight-text">Teknologi</span>
          </h2>
          <button className="btn-read-more-link" onClick={() => navigateTo('blog-list')}>
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
                <span className="blog-date"><CalendarIcon size={14} /> {post.date}</span>
                <p>{post.snippet}</p>
                <div className="blog-footer">
                <button className="btn-read-more" onClick={() => openBlogDetail(post.id)}>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
