import React, { useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import Calendar from '../components/Calendar';
import '../styles/BlogDetailPage.css';

export default function BlogListPage() {
  const { navigateTo, openBlogDetail } = useApp();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const archiveItems = Array.from(
    new Set(
      BLOG_POSTS.map((item) => item.date.split(' ').slice(1).join(' '))
    )
  );

  return (
    <div className="page-detail-pelatihan">
      <div className="container">
        <div className="blog-detail-layout">
          <main className="blog-detail-main">
            <div className="page-header">
              <button className="btn-back" onClick={() => navigateTo('home')}>
                <ArrowLeft size={16} /> Kembali ke Beranda
              </button>
              <h1 className="page-title">Explore & Learn</h1>
              <p className="detail-description">
                Kumpulan artikel terbaru seputar teknologi dan pelatihan.
              </p>
            </div>

            <div className="detail-section-block">
              <div className="blog-cards-grid">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="blog-card-list-item">
                    <div className="blog-img-box">
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </div>
                    <div className="blog-content">
                      <h3>{post.title}</h3>
                      <span className="blog-date"><CalendarIcon size={14} /> {post.date}</span>
                      <p>{post.snippet}</p>
                      <div className="blog-footer">
                        <button className="btn-read-more" onClick={() => openBlogDetail(post.id)}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <aside className="blog-detail-sidebar">
            <div className="sidebar-search-box">
              <Search size={14} className="search-icon" />
              <input
                type="text"
                placeholder="Cari artikel"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Calendar />

            <div className="sidebar-widget">
              <h4 className="widget-title">Recent Post</h4>
              <ul className="widget-list">
                {BLOG_POSTS.slice(0, 3).map((item) => (
                  <li key={item.id} onClick={() => openBlogDetail(item.id)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h4 className="widget-title">Archives</h4>
              <ul className="archive-list">
                {archiveItems.map((archive) => (
                  <li key={archive}>{archive}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
