export const TRAINING_COURSES = [
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
    excerpt: 'Pengembangan AI untuk Diagnosis Penyakit Pelatihan Keamanan Sistem dirancang untuk membekali peserta dengan ...'
  },
  {
    id: 'mengelola-risiko-sdm-1',
    title: 'Mengelola Risiko SDM di Lingkungan IT',
    category: 'Software Development',
    date: '17 Agustus 2026',
    excerpt: 'Pengembangan AI untuk Diagnosis Penyakit Pelatihan Mengelola Risiko SDM dirancang untuk membekali peserta dengan ...'
  },
  {
    id: 'mengelola-risiko-sdm-2',
    title: 'Mengelola Risiko SDM di Lingkungan IT (Lanjutan)',
    category: 'Software Development',
    date: '17 Agustus 2026',
    excerpt: 'Pengembangan AI untuk Diagnosis Penyakit Pelatihan Mengelola Risiko SDM dirancang untuk membekali peserta dengan ...'
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
  },
  {
    id: 'digital-marketing-seo',
    title: 'Strategi Digital Marketing & SEO Optimization',
    category: 'Digital Marketing & SEO',
    date: '14 Agustus 2026',
    excerpt: 'Optimasi mesin pencari google, iklan berbayar Google Ads, dan strategi media sosial terukur...'
  },
  {
    id: 'arduino-robotika-pro',
    title: 'Pemrograman Microcontroller & Robotika Arduino',
    category: 'Arduino & Robotika',
    date: '12 Agustus 2026',
    excerpt: 'Perancangan hardware IoT, sensor pintar, dan otomatisasi menggunakan mikrokokontroler Arduino...'
  }
];

export const CATEGORIES = [
  'Semua',
  'Software Development',
  'Data Science & Big Data',
  'Digital Marketing & SEO',
  'Arduino & Robotika'
];

export const TRAINERS = [
  {
    name: 'Agus Darmawan, S.Kom, M.Cs',
    role: 'CEO',
    bio: 'Praktisi Senior Software Engineering dengan 10+ tahun pengalaman memimpin tim IT.',
    photo: '/images/trainer1.png'
  },

  {
    name: 'Nur Ichsan, S.Kom, M.Cs',
    role: 'IT Expert',
    bio: 'Pakar Machine Learning dan Analisis Data Medis berlisensi internasional.',
    photo: '/images/trainer2.png'
  },
  {
    name: 'Dr (Cand) Condro Kartiko, S.Kom, M.T.I',
    role: 'Android Developer',
    bio: 'Lead UI/UX Designer yang berfokus pada design system dan riset antarmuka pengguna.',
    photo: '/images/trainer3.png'
  },
  {
    name: 'Aulia Desy Nur Utomo, S.Kom, M.Cs',
    role: 'IoT Expert',
    bio: 'Spesialis Growth Marketing dan Strategi Periklanan Digital untuk Industri IT.',
    photo: '/images/trainer4.png'
  },
  {
    name: 'M Irham Akbar, S.Kom, M.Cs',
    role: 'Digital Marketer',
    bio: 'Spesialis Growth Marketing dan Strategi Periklanan Digital untuk Industri IT.',
    photo: '/images/trainer5.png'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Irfan Hilmi',
    role: 'Software Engineer',
    rating: 5,
    text: 'Oemah Training memberikan pelayanan terbaik. Materi disampaikan dengan cara yang sangat praktis dan mudah dipahami, instruktur sangat membantu selama training!',
    photo: '/images/trainer_tonny_1785124706053.png'
  },
  {
    name: 'Annisa Rahma',
    role: 'Data Analyst',
    rating: 5,
    text: 'Proses training berjalan sangat menyenangkan dan bermanfaat! Pengajar sangat master di bidangnya dan fasilitas lengkap.',
    photo: '/images/trainer_rachel_1785124718492.png'
  },
  {
    name: 'Dito Pratama',
    role: 'UI/UX Designer',
    rating: 5,
    text: 'Website ini sangat membantu saya dalam memilih pelatihan yang tepat untuk jenjang karir saya. Materi-materi yang disajikan sangat update!',
    photo: '/images/trainer_ghianina_1785124732608.png'
  },
  {
    name: 'Eko Prasetyo',
    role: 'DevOps Specialist',
    rating: 5,
    text: 'Sangat meledak! Pembahasannya benar-benar daging! Sangat direkomendasikan untuk siapa saja yang ingin upgrade skill di bidang IT.',
    photo: '/images/hero_student_1785124744018.png'
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Mengenal Sistem Cloud Computing',
    date: '18 Agustus 2026',
    snippet: 'Artikel ini membahas manfaat dan arsitektur cloud computing untuk mendukung efisiensi operasional perusahaan modern...',
    image: '/images/hero_student_1785124744018.png'
  },
  {
    id: 2,
    title: 'Digital Marketing Trends 2026: AI Integration',
    date: '17 Agustus 2026',
    snippet: 'Integrasi kecerdasan buatan dalam strategi pemasaran digital untuk meningkatkan konversi dan engagement pelanggan...',
    image: '/images/trainer_rachel_1785124718492.png'
  },
  {
    id: 3,
    title: 'Cara Mengamankan Data Sistem Kesehatan Digital',
    date: '15 Agustus 2026',
    snippet: 'Langkah-langkah praktis dalam menjaga enkripsi dan keamanan data rekam medis elektronik sesuai regulasi...',
    image: '/images/trainer_tonny_1785124706053.png'
  }
];

export const GALLERY_IMAGES = [
  { id: 1, title: 'Ruang Pelatihan Workshop', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
  { id: 2, title: 'Seminar & Conference Tech', src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 3, title: 'Collaborative Lab', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
  { id: 4, title: 'Tanya Jawab & QnA Session', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 5, title: 'Mentoring 1-on-1', src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' }
];
