import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function Footer() {
  const { navigateTo } = useApp();

  const handleNavigation = (page) => (e) => {
    e.preventDefault();
    navigateTo(page);
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* INFO */}
        <div className="footer-info">
          <a href="/" className="footer-logo" onClick={handleNavigation('home')}>
            <span className="logo-oemah">Oemah</span>
            <span className="logo-grey">Training</span>
          </a>

          <p>
            Oemah Training berkomitmen menyediakan layanan pendidikan dan
            pengembangan keterampilan teknologi berstandar tinggi guna
            melahirkan generasi digital profesional masa depan.
          </p>

          <div className="social-links">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={handleNavigation('home')}>Home</a></li>
            <li><a href="#" onClick={handleNavigation('tentang-kami')}>Tentang Kami</a></li>
            <li><a href="#" onClick={handleNavigation('training-list')}>Training</a></li>
            <li><a href="#" onClick={handleNavigation('trainer')}>Trainer</a></li>
            <li><a href="#" onClick={handleNavigation('foto')}>Foto</a></li>
            <li><a href="#" onClick={handleNavigation('kontak-kami')}>Kontak Kami</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="footer-title">Hubungi Kami</h3>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt />
              <span>Purwokerto, Banyumas, Jawa Tengah, Indonesia</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+62 811-2522-117</span>
            </li>
            <li>
              <FaEnvelope />
              <span>oemahwebsite@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* MAP */}
        <div>
          <h3 className="footer-title">Lokasi Kami</h3>
          <div className="footer-map">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Purwokerto&output=embed"
              loading="lazy"
            />
          </div>
        </div>

      </div>

      <div className="footer-bottom container">
        <p>© 2026 Oemah Training. All Rights Reserved.</p>
        <p>Powered by Oemah Website</p>
      </div>
    </footer>
  );
}
