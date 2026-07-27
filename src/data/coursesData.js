/**
 * @typedef {Object} Session
 * @property {string} session
 * @property {string} time
 * @property {string} title
 * @property {string[]} points
 */

/**
 * @typedef {Object} Course
 * @property {string} id
 * @property {string} title
 * @property {string} category
 * @property {string} date
 * @property {string} excerpt
 * @property {string} fullDescription
 * @property {string[]} tujuan
 * @property {{ hari1: Session[], hari2: Session[] }} scheduleDays
 * @property {string[]} metodePelatihan
 * @property {string[]} targetPeserta
 * @property {string[]} targetHasil
 * @property {Object} pricing
 */

export const CATEGORIES = [
  'Semua',
  'Software Development',
  'Data Science & Big Data',
  'Digital Marketing & SEO',
  'Arduino & Robotika'
];

export const COURSES = [
  {
    id: 'ai-diagnosis-penyakit',
    title: 'Pengembangan AI untuk Diagnosis Penyakit',
    category: 'Data Science & Big Data',
    date: '18 Agustus 2026',
    excerpt: 'Pelatihan Pengembangan AI untuk Diagnosis Penyakit membekali peserta dengan pengetahuan dan keterampilan dalam mengembangkan solusi AI untuk mendukung proses diagnosis penyakit...',
    fullDescription: 'Pelatihan Pengembangan AI untuk Diagnosis Penyakit membekali peserta dengan pengetahuan dan keterampilan dalam mengembangkan solusi AI untuk mendukung proses diagnosis penyakit. Materi mencakup pengolahan data medis, machine learning dan deep learning, pelatihan serta evaluasi model, hingga penerapan AI dengan memperhatikan etika, keamanan informasi, dan regulasi. Pelatihan dilengkapi teori, praktik, demonstrasi, dan studi kasus untuk memahami proses pengembangan AI di bidang kesehatan.',
    tujuan: [
      'Memahami tahapan pengembangan AI untuk diagnosis penyakit.',
      'Mampu menyiapkan dan mengolah data medis sebagai bahan pelatihan model AI.',
      'Memahami proses pembangunan dan pelatihan model machine learning dan deep learning.',
      'Mampu mengevaluasi performa model AI untuk kebutuhan diagnosis penyakit.',
      'Memahami prinsip implementasi AI yang aman, etis, dan sesuai kebutuhan layanan kesehatan.'
    ],
    scheduleDays: {
      hari1: [
        {
          session: 'Sesi ke -1',
          time: '08.30 - 10.00',
          title: 'Perencanaan Pengembangan AI',
          points: [
            '1. Konsep dan siklus pengembangan AI.',
            '2. Identifikasi kebutuhan dan permasalahan diagnosis penyakit.',
            '3. Penyusunan alur kerja pengembangan model AI.'
          ]
        },
        {
          session: 'Sesi ke -2',
          time: '10.15 - 12.00',
          title: 'Pengelolaan Data Medis',
          points: [
            '1. Jenis dan karakteristik data medis.',
            '2. Teknik pengumpulan, pembersihan, dan pelabelan data.',
            '3. Pembagian data untuk pelatihan, validasi, dan pengujian model.'
          ]
        },
        {
          session: 'Sesi ke -3',
          time: '13.00 - 15.00',
          title: 'Pengembangan Model AI',
          points: [
            '1. Pemilihan algoritma machine learning dan deep learning.',
            '2. Proses pelatihan model AI.',
            '3. Praktik sederhana membangun model diagnosis penyakit.'
          ]
        }
      ],
      hari2: [
        {
          session: 'Sesi ke -1',
          time: '08.30 - 10.00',
          title: 'Pelatihan & Evaluasi Model AI',
          points: [
            '1. Validasi akurasi, sensitivitas, dan spesifisitas model.',
            '2. Penanganan overfitting dan underfitting.',
            '3. Optimasi hyperparameter model diagnosis.'
          ]
        },
        {
          session: 'Sesi ke -2',
          time: '10.15 - 12.00',
          title: 'Deep Learning & Citra Medis',
          points: [
            '1. Konvolusi jaringan saraf (CNN) untuk analisis X-ray/MRI.',
            '2. Segmentasi data medis digital.',
            '3. Interpretasi hasil diagnosis berbasis AI.'
          ]
        },
        {
          session: 'Sesi ke -3',
          time: '13.00 - 15.00',
          title: 'Deployment & Keamanan Data Medis',
          points: [
            '1. Integrasi model AI ke dalam aplikasi sistem kesehatan.',
            '2. Keamanan data pasien dan regulasi HIPAA/Kemenkes.',
            '3. Presentasi project akhir & feedback trainer.'
          ]
        }
      ]
    },
    metodePelatihan: [
      '1. Ceramah interaktif.',
      '2. Demonstrasi pengembangan model AI.',
      '3. Praktik langsung (hands-on).',
      '4. Studi kasus.',
      '5. Diskusi dan presentasi.'
    ],
    targetPeserta: [
      '1. Data scientist dan AI engineer.',
      '2. Pengembang aplikasi kesehatan.',
      '3. Analis data kesehatan.',
      '4. Peneliti di bidang kesehatan dan kecerdasan buatan.',
      '5. Praktisi teknologi informasi di sektor kesehatan.'
    ],
    targetHasil: [
      '1. Memahami tahapan pengembangan AI untuk diagnosis penyakit secara menyeluruh.',
      '2. Mampu menyiapkan dan mengelola data medis untuk pengembangan model AI.',
      '3. Mampu membangun dan melatih model AI sederhana untuk diagnosis penyakit.',
      '4. Mampu mengevaluasi serta meningkatkan performa model AI.',
      '5. Mampu merancang implementasi AI yang aman, efektif, dan sesuai kebutuhan layanan kesehatan.'
    ],
    pricing: {
      online: {
        price: 'Rp 5.500.000',
        unit: '/ Orang',
        subtitle: 'Belajar fleksibel dari mana saja',
        facilitiesIncluded: [
          'Mulai dari 2 peserta dan bebas menentukan tanggal.',
          'Durasi 2 hari, half day (08.00 - 12.00 WIB atau 13.15 - 16.00 WIB).',
          'Pelaksanaan melalui Zoom atau Google Meet.',
          'Termasuk: Sertifikat training (softfile & hardfile), pengiriman sertifikat, dan softfile materi.'
        ],
        facilitiesExcluded: [
          'Belum termasuk: PPN 11%.'
        ]
      },
      offline: {
        price: 'Rp 7.900.000',
        unit: '/ Orang',
        subtitle: 'Belajar langsung di lokasi pilihanmu.',
        facilitiesIncluded: [
          'Mulai dari 3 peserta dan bebas menentukan tanggal.',
          'Durasi 2 hari, full day (09.00 - 16.00 WIB).',
          'Lokasi : Hotel @ Royale Yogyakarta atau Hotel Meotel/Santika, Purwokerto.',
          'Termasuk : Meeting room, modul training, sertifikat, training kit, lunch, coffee break, dan souvenir.'
        ],
        facilitiesExcluded: [
          'Belum termasuk : Penginapan, transportasi peserta, dan PPN 11%.'
        ]
      }
    }
  },
  {
    id: 'keamanan-sistem',
    title: 'Keamanan Sistem dan Pengendalian Resiko',
    category: 'Software Development',
    date: '17 Agustus 2026',
    excerpt: 'Pelatihan Keamanan Sistem dirancang untuk membekali peserta dengan keterampilan melakukan vulnerability assessment dan manajemen risiko IT enterprise...'
  },
  {
    id: 'mengelola-risiko-sdm-1',
    title: 'Mengelola Risiko SDM di Lingkungan IT',
    category: 'Software Development',
    date: '17 Agustus 2026',
    excerpt: 'Strategi mengantisipasi turnover, peningkatan kapabilitas teknis tim, dan penanganan isu human error dalam keamanan infrastruktur IT...'
  },
  {
    id: 'mengelola-risiko-sdm-2',
    title: 'Mengelola Risiko SDM di Lingkungan IT (Lanjutan)',
    category: 'Software Development',
    date: '17 Agustus 2026',
    excerpt: 'Pendalaman tata kelola SDM berbasis COBIT & ISO 27001 untuk memastikan produktivitas serta kepatuhan keamanan informasi...'
  },
  {
    id: 'dasar-data-kesehatan',
    title: 'Dasar Sistem Data Kesehatan Digital',
    category: 'Data Science & Big Data',
    date: '16 Agustus 2026',
    excerpt: 'Memahami arsitektur dan manajemen data kesehatan digital berstandar internasional FHIR dan HL7...'
  },
  {
    id: 'menerapkan-ai-aman',
    title: 'Menerapkan AI dengan Aman dan Tepat',
    category: 'Data Science & Big Data',
    date: '15 Agustus 2026',
    excerpt: 'Panduan tata kelola AI, etika model kecerdasan buatan, pencegahan bias, dan kepatuhan privasi data...'
  }
];
