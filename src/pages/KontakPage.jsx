import React from 'react';

export default function KontakPage() {
  return (
    <section className="contact-page">
      <div className="contact-container">
        
        {/* HEADER */}
        <div className="contact-header">
          <h1>Hubungi <span>Kami</span></h1>
          <p>
            Kami siap membantu kebutuhan pelatihan, konsultasi, atau kerja sama
            Anda. Isi formulir atau hubungi kami melalui saluran berikut.
          </p>
        </div>

        {/* WRAPPER */}
        <div className="contact-wrapper">

          {/* LEFT – Info */}
          <div className="contact-left">
            <h2>Information Center</h2>
            <p>
              Silakan hubungi kami melalui saluran berikut atau
              kunjungi kantor operasional kami.
            </p>

            <div className="info-card">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Headquarters</h4>
                <span>
                  Purwokerto, Kabupaten Banyumas,
                  Jawa Tengah, Indonesia
                </span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email & Support</h4>
                <span>oemahwebsite@gmail.com</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4>WhatsApp & Hotline</h4>
                <span>+62 815-7578-6153</span>
                <span>Senin - Sabtu (08:00 - 17:00)</span>
              </div>
            </div>
          </div>

          {/* RIGHT – Form */}
          <div className="contact-right">
            <h2>Inquiry <span>Form</span></h2>
            <p>
              Isi formulir berikut untuk mengirim pertanyaan Anda
              langsung ke tim konsultan kami.
            </p>

            <form>
              <div className="form-grid">
                <div>
                  <label>Nama Lengkap *</label>
                  <input
                    type="text"
                    placeholder="cth: Budi Santoso"
                  />
                </div>
                <div>
                  <label>Organisasi / Instansi</label>
                  <input
                    type="text"
                    placeholder="cth: Universitas / PT Maju Jaya"
                  />
                </div>
              </div>

              <div>
                <label>Topik Minat *</label>
                <select>
                  <option>Pilih Kategori Minat</option>
                  <option>Training</option>
                  <option>Workshop</option>
                  <option>Corporate Training</option>
                  <option>Konsultasi</option>
                </select>
              </div>

              <div>
                <label>Detail Pertanyaan *</label>
                <textarea
                  rows="6"
                  placeholder="Jelaskan kebutuhan pelatihan atau konsultasi Anda secara spesifik..."
                />
              </div>

              <button className="contact-btn">
                Kirim Inquiry
              </button>
            </form>
          </div>

        </div>
        {/* END contact-wrapper */}

      </div>
      {/* END contact-container */}
    </section>
  );
}