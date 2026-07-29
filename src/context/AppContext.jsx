import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('ai-diagnosis-penyakit');
  const [selectedPackage, setSelectedPackage] = useState('online');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeTrainer, setActiveTrainer] = useState(null);
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Scroll to top automatically when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const navigateTo = (page, courseId = null) => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    setActivePage(page);
  };

  const openRegistrationModal = (courseId = null, pkg = 'online') => {
    if (courseId) {
      setSelectedCourseId(courseId);
    }
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsModalOpen(false);
  };

  const openTrainerDetail = (trainer) => {
    setActiveTrainer(trainer);
    setActivePage('trainer');
  };

  const closeTrainerDetail = () => {
    setActiveTrainer(null);
  };

  const openBlogDetail = (blogId) => {
    setSelectedBlogId(blogId);
    setActivePage('blog-detail');
  };

  const closeBlogDetail = () => {
    setSelectedBlogId(null);
  };

  const value = {
    activePage,
    navigateTo,
    isModalOpen,
    openRegistrationModal,
    closeRegistrationModal,
    selectedCourseId,
    setSelectedCourseId,
    selectedPackage,
    setSelectedPackage,
    selectedCategory,
    setSelectedCategory,
    activeTrainer,
    openTrainerDetail,
    closeTrainerDetail,
    selectedBlogId,
    openBlogDetail,
    closeBlogDetail,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
