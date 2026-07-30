import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import TrainingPage from './pages/TrainingPage';
import TrainerPage from './pages/TrainerPage';
import DetailPage from './pages/DetailPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutPage from './pages/AboutPage';
import BlogListPage from './pages/BlogListPage';
import FotoPage from './pages/FotoPage';
import KontakPage from './pages/KontakPage';

function MainLayout() {
  const { activePage } = useApp();
  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'tentang-kami':
        return <AboutPage />;
      case 'training-list':
      case 'training':
        return <TrainingPage />;
      case 'trainer':
        return <TrainerPage />;
      case 'detail-pelatihan':
        return <DetailPage />;
      case 'blog-list':
        return <BlogListPage />;
      case 'blog-detail':
        return <BlogDetailPage />;
      case 'foto':
        return <FotoPage />;
      case 'kontak-kami':
        return <KontakPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main-content">
        {renderCurrentPage()}
      </main>
      <FooterCTA />
      <Footer />
      <WhatsAppButton />
      <Modal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
