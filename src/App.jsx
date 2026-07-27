import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/common/Navbar';
import FooterCTA from './components/common/FooterCTA';
import Modal from './components/common/Modal';

import HomePage from './pages/HomePage';
import TrainingPage from './pages/TrainingPage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';

import './index.css';
import './App.css';

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
      case 'detail-pelatihan':
        return <DetailPage />;
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
