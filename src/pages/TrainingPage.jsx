import React, { useState } from 'react';
import { Calendar as CalendarIcon, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRAINING_COURSES, CATEGORIES } from '../data/mockData';
import '../styles/training.css';

const ITEMS_PER_PAGE = 6;
const DEFAULT_COURSE_IMAGE = "/images/trainer_tonny_1785124706053.png";

export default function TrainingPage() {
  const { navigateTo, selectedCategory, setSelectedCategory } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = TRAINING_COURSES.filter((course) => {
    const matchesCategory =
      selectedCategory === 'Semua' ||
      course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const visibleCourses = filteredCourses.slice(0, ITEMS_PER_PAGE);
  const displayedTo = Math.min(
    filteredCourses.length,
    ITEMS_PER_PAGE
  );

  return (
    <div className="page-training-list">
      <div className="training-container">

        {/* =========================
            PAGE HEADER
        ========================= */}
        <div className="training-page-header">
          <h1 className="training-page-title">
            Temukan{' '}
            <span className="highlight-text">
              Pelatihan
            </span>{' '}
            yang Tepat
            <br />
            untukmu
          </h1>
        </div>


        {/* =========================
            MAIN LAYOUT
        ========================= */}
        <div className="training-main-layout">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <main className="training-content-area">

            {/* CATEGORY */}
            <div className="category-tabs-row">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-tab ${
                    selectedCategory === cat ? 'active' : ''
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="training-controls-row">
              <div className="training-result-count">
                Menampilkan{' '}
                {filteredCourses.length > 0 ? 1 : 0}
                -
                {displayedTo} dari{' '}
                {filteredCourses.length} Pelatihan
              </div>

              <div className="sidebar-search-box">
                <Search
                  size={13}
                  className="search-icon"
                />

                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                />
              </div>
            </div>


            <div className="training-cards-grid">

              {filteredCourses.length === 0 ? (
                <div className="no-results-card">
                  <p>
                    Tidak ada pelatihan yang cocok dengan
                    pencarian atau kategori ini.
                  </p>
                </div>
              ) : (
                visibleCourses.map((course) => {
                  const coursePrice =
                    course.price ||
                    course.pricing?.online?.price ||
                    'Rp 5.500.000';

                  const imageUrl =
                    course.image ||
                    DEFAULT_COURSE_IMAGE;

                  return (
                    <div
                      key={course.id}
                      className="course-item-card"
                    >

                      {/* IMAGE */}
                      <div className="course-card-image">
                        <div className="course-category-badge">{course.category}</div>
                        <img
                          src={imageUrl}
                          alt={course.title}
                        />
                      </div>


                      {/* CONTENT */}
                      <div className="course-card-details">

                        <h3 className="course-title">
                          {course.title}
                        </h3>

                        <div className="course-price">
                          {coursePrice}
                        </div>
                        <span className="course-price-note">
                          *Harga untuk kelas online
                          </span>

                        <p className="course-excerpt">
                          {course.excerpt}
                        </p>


                        {/* FOOTER */}
                        <div className="course-card-footer">
                          <button
                            className="btn-card-cta btn-card-full"
                            onClick={() =>
                              navigateTo(
                                'detail-pelatihan',
                                course.id
                              )
                            }
                          >
                            Daftar
                          </button>
                        </div>

                      </div>

                    </div>
                  );
                })
              )}

            </div>


            {/* =========================
                PAGINATION
            ========================= */}
            <div className="pagination-row">

              <button className="page-nav-text disabled">
                &lt; Back
              </button>

              <button className="page-num active">
                1
              </button>

              <button className="page-num">
                2
              </button>

              <button className="page-num">
                3
              </button>

              <span className="page-dots">
                ...
              </span>

              <button className="page-num">
                9
              </button>

              <button className="page-num">
                10
              </button>

              <button className="page-nav-text">
                Next &gt;
              </button>

            </div>

          </main>

        </div>

      </div>
    </div>
  );
}