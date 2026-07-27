import React, { useState } from 'react';
import { ArrowUpRight, Calendar as CalendarIcon, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRAINING_COURSES, CATEGORIES } from '../data/mockData';
import Calendar from '../components/Calendar';

export default function TrainingPage() {
  const { navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = TRAINING_COURSES.filter((course) => {
    const matchesCategory = selectedCategory === 'Semua' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-training-list">
      <div className="container">
        {/* PAGE HEADER */}
        <div className="page-header">
          <h1 className="page-title">
            Temukan <span className="highlight-text">Pelatihan</span> yang Tepat untukmu <ArrowUpRight size={28} className="inline-arrow" />
          </h1>
        </div>

        {/* CATEGORY TABS */}
        <div className="category-tabs-row" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="results-count">
          Menampilkan 1-6 dari 18 Pelatihan
        </div>

        {/* MAIN 2-COLUMN LAYOUT */}
        <div className="training-layout-grid">
          {/* LEFT CONTENT COLUMN */}
          <div className="training-cards-column">
            {filteredCourses.length === 0 ? (
              <div className="no-results-card">
                <p>Tidak ada pelatihan yang cocok dengan pencarian atau kategori ini.</p>
              </div>
            ) : (
              filteredCourses.slice(0, 4).map((course) => (
                <div key={course.id} className="course-item-card">
                  <div className="course-card-content">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="course-date-badge">
                      <CalendarIcon size={14} /> {course.date}
                    </div>
                    <p className="course-excerpt">{course.excerpt}</p>
                  </div>
                  <div className="course-card-action">
                    <button
                      className="btn-read-more-outline"
                      onClick={() => navigateTo('detail-pelatihan', course.id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* PAGINATION */}
            <div className="pagination-row">
              <button className="page-nav-text disabled">&lt; Back</button>
              <button className="page-num active">1</button>
              <button className="page-num">2</button>
              <button className="page-num">3</button>
              <span className="page-dots">...</span>
              <button className="page-num">9</button>
              <button className="page-num">10</button>
              <button className="page-nav-text">Next &gt;</button>
            </div>
          </div>

          {/* RIGHT SIDEBAR COLUMN */}
          <aside className="training-sidebar-column">
            {/* SEARCH BOX */}
            <div className="sidebar-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* CALENDAR WIDGET */}
            <Calendar />

            {/* RECENT POST WIDGET */}
            <div className="sidebar-widget">
              <h4 className="widget-title">Recent Post</h4>
              <ul className="widget-list">
                <li onClick={() => navigateTo('detail-pelatihan')}>Pengembangan AI untuk Diagnosis Penyakit</li>
                <li>Keamanan Sistem dan Pengendalian Resiko</li>
                <li>Mengelola Risiko SDM di Lingkungan IT</li>
                <li>Dasar Sistem Data Kesehatan Digital</li>
                <li>Menerapkan AI dengan Aman dan Tepat</li>
              </ul>
            </div>

            {/* ARCHIVES WIDGET */}
            <div className="sidebar-widget">
              <h4 className="widget-title">Archives</h4>
              <ul className="widget-list archive-list">
                <li>Juli 2026</li>
                <li>Juni 2026</li>
                <li>Mei 2026</li>
                <li>April 2026</li>
                <li>Maret 2026</li>
                <li>Februari 2026</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
