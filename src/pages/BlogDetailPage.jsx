import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import '../styles/global.css';

export default function BlogDetailPage() {
  const { selectedBlogId, navigateTo } = useApp();
  const post = BLOG_POSTS.find((item) => item.id === selectedBlogId);

  if (!post) {
    return (
      <div className="page-detail-pelatihan">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Artikel tidak ditemukan</h1>
            <p>Maaf, artikel yang diminta tidak tersedia.</p>
            <button className="btn-read-more" onClick={() => navigateTo('home')}>
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-detail-pelatihan">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">{post.title}</h1>
          <div className="detail-date-row">
            <CalendarIcon size={16} /> {post.date}
          </div>
          <p className="detail-description">{post.snippet}</p>
        </div>

        <div className="detail-section-block">
          <h3 className="block-title">Ringkasan</h3>
          <p className="detail-description">{post.content}</p>
        </div>

        {post.keyPoints && (
          <div className="detail-section-block">
            <h3 className="block-title">Poin Utama</h3>
            <ul className="custom-numbered-list">
              {post.keyPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="detail-section-block">
          <button className="btn-read-more" onClick={() => navigateTo('home')}>
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
