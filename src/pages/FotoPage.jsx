import React from "react";

import arduino1 from "../assets/gallery/arduino1.jpg";
import arduino2 from "../assets/gallery/arduino2.jpg";

import digital1 from "../assets/gallery/digital1.jpg";
import digital2 from "../assets/gallery/digital2.jpg";

import web1 from "../assets/gallery/web1.jpg";
import web2 from "../assets/gallery/web2.jpg";

const GALLERIES = [
  {
    title: "Workshop Arduino dan Mikrokontroler",
    desc: "Pelatihan dasar hingga lanjutan mengenai Arduino, sensor, dan pengembangan sistem embedded.",
    photos: [arduino1, arduino2],
  },
  {
    title: "Training Digital Marketing",
    desc: "Program pelatihan digital marketing untuk mahasiswa, UMKM, dan perusahaan.",
    photos: [digital1, digital2],
  },
  {
    title: "Training Internet of Things (IoT)",
    desc: "Implementasi sensor, monitoring, dan otomasi berbasis Internet of Things.",
    photos: [web1, web2],
  },
];

export default function FotoPage() {
  return (
    <div className="page-foto" style={{ padding: "60px 0 80px", backgroundColor: "#fafcfa" }}>
      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 24px" }}>

        {/* ===== HEADER ===== */}
        <div style={{ maxWidth: "760px", marginBottom: "32px" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              color: "#1e2415",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Galeri <span style={{ color: "#6a852b" }}>Kegiatan</span>
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "#4a5a3a",
              lineHeight: 1.8,
              marginBottom: "12px",
            }}
          >
            Dokumentasi berbagai kegiatan pelatihan, workshop, seminar, dan
            corporate training yang telah diselenggarakan oleh Oemah Training.
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#5a6b47",
              lineHeight: 1.8,
            }}
          >
            Setiap kegiatan dirancang untuk memberikan pengalaman belajar yang
            aplikatif dan mendalam bagi peserta.
          </p>
        </div>

        {/* ===== PEMBATAS TIPIS ===== */}
        <hr
          style={{
            border: "none",
            borderTop: "1.5px solid #dce6d0",
            margin: "0 0 48px 0",
            opacity: 0.6,
          }}
        />

        {/* ===== GALLERY LIST ===== */}
        {GALLERIES.map((item, index) => (
          <div key={index} style={{ marginBottom: "72px" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#1e2415",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  color: "#5a6b47",
                  maxWidth: "700px",
                  margin: "0 auto",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
              }}
            >
              {item.photos.map((photo, idx) => (
                <div
                  key={idx}
                  style={{
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                    border: "1px solid #e2ece0",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(106,133,43,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  <img
                    src={photo}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              ))}
            </div>

            {/* Garis pembatas antar galeri (kecuali yang terakhir) */}
            {index < GALLERIES.length - 1 && (
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #e2ece0",
                  margin: "56px 0 0 0",
                  opacity: 0.5,
                }}
              />
            )}
          </div>
        ))}

        {/* ===== CTA SEDERHANA (mirip halaman Trainer) ===== */}
        <hr
          style={{
            border: "none",
            borderTop: "1.5px solid #dce6d0",
            margin: "56px 0 40px 0",
            opacity: 0.6,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#1e2415",
                marginBottom: "4px",
              }}
            >
              Ikuti kegiatan kami selanjutnya?
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#5a6b47" }}>
              Daftar sekarang dan jadilah bagian dari komunitas pembelajar.
            </p>
          </div>
          <button
            onClick={() => window.location.href = "/kontak-kami"} // opsional, ganti dengan navigateTo jika pakai routing
            style={{
              background: "#6a852b",
              color: "#ffffff",
              fontWeight: 600,
              padding: "12px 36px",
              borderRadius: "40px",
              border: "none",
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "background 0.25s ease, transform 0.2s ease",
              boxShadow: "0 4px 12px rgba(106,133,43,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4d631f";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#6a852b";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}