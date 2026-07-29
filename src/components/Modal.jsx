import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { TRAINING_COURSES } from '../data/mockData';

export default function Modal() {
  const { isModalOpen, closeRegistrationModal, selectedCourseId, selectedPackage } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourseId || 'ai-diagnosis-penyakit',
    packageType: selectedPackage || 'online',
  });

  useEffect(() => {
    if (isModalOpen) {
      setFormData((prev) => ({
        ...prev,
        course: selectedCourseId || 'ai-diagnosis-penyakit',
        packageType: selectedPackage || 'online',
      }));
    }
  }, [isModalOpen, selectedCourseId, selectedPackage]);

  if (!isModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeRegistrationModal();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <CheckCircle size={56} className="success-icon" />
            <h2>Pendaftaran Berhasil!</h2>
            <p>
              Terima kasih telah mendaftar di <strong>Oemah Training</strong>. Tim kami akan segera menghubungi Anda melalui WhatsApp & Email.
            </p>
            <button className="btn-modal-submit" onClick={handleClose}>
              Selesai & Kembali
            </button>
          </div>
        ) : (
          <div>
            <h2 className="modal-title">Formulir Pendaftaran Pelatihan</h2>
            <p className="modal-subtitle">
              Isi data diri Anda untuk mengonfirmasi keikutsertaan program Oemah Training.
            </p>

            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label htmlFor="reg-name">Nama Lengkap</label>
                <input
                  id="reg-name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso, S.Kom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-email">Email Aktif</label>
                <input
                  id="reg-email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-phone">Nomor WhatsApp</label>
                <input
                  id="reg-phone"
                  type="tel"
                  required
                  placeholder="081234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-course">Pilih Program Pelatihan</label>
                <select
                  id="reg-course"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  {TRAINING_COURSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Pilihan Paket Pelatihan</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="packageType"
                      value="online"
                      checked={formData.packageType === 'online'}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    />
                    Online (Rp 5.500.000 / Orang)
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="packageType"
                      value="offline"
                      checked={formData.packageType === 'offline'}
                      onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    />
                    Offline (Rp 7.900.000 / Orang)
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-modal-submit">
                Kirim Pendaftaran
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
