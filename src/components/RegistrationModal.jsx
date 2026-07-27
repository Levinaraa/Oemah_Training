import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { TRAINING_COURSES } from '../data/mockData';

export default function RegistrationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'ai-diagnosis-penyakit',
    packageType: 'online',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <CheckCircle size={56} className="success-icon" />
            <h2>Pendaftaran Berhasil!</h2>
            <p>
              Terima kasih telah mendaftar di <strong>Oemah Training</strong>. Tim kami akan menghubungi Anda via WhatsApp & Email untuk mengonfirmasi detail jadwal pelatihan.
            </p>
            <button className="btn-modal-submit" onClick={handleReset}>
              Tutup & Kembali
            </button>
          </div>
        ) : (
          <div>
            <h2 className="modal-title">Formulir Pendaftaran Pelatihan</h2>
            <p className="modal-subtitle">
              Isi data diri Anda untuk bergabung dengan program pelatihan Oemah Training.
            </p>

            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso, S.Kom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Email Active</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Nomor WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="081234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Pilih Program Pelatihan</label>
                <select
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
