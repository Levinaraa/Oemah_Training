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
    <div className="page-gallery">
      {/* ================= HERO ================= */}
      <section
        style={{
          background: "linear-gradient(135deg,#6a852b,#a0c44b)",
          padding: "160px 0 100px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "50px",
              background: "rgba(255,255,255,.15)",
              border: "1px solid rgba(255,255,255,.2)",
              color: "#dff0a5",
              marginBottom: "20px",
              fontWeight: 600,
            }}
          >
            # Dokumentasi Kegiatan
          </span>

          <h1
            style={{
              fontSize: "52px",
              marginBottom: "20px",
              color: "#fff",
            }}
          >
            Galeri Foto
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "auto",
              color: "rgba(255,255,255,.85)",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Dokumentasi berbagai kegiatan pelatihan, workshop, seminar, dan
            corporate training yang telah diselenggarakan oleh Oemah Training.
          </p>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section
        style={{
          padding: "90px 0",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
            padding: "0 24px",
          }}
        >
          {GALLERIES.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "80px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#223354",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    maxWidth: "700px",
                    margin: "auto",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: "25px",
                }}
              >
                {item.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    style={{
                      overflow: "hidden",
                      borderRadius: "18px",
                      boxShadow: "0 12px 35px rgba(0,0,0,.08)",
                    }}
                  >
                    <img
                      src={photo}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        display: "block",
                        transition: ".4s",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}