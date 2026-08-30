import { 
  SchoolInfo, 
  SliderItem, 
  Activity, 
  Announcement, 
  ClassRoom, 
  Student, 
  TeacherStaff,
  EskulItem,
  OsisMember,
  CustomAdmin,
  UrgentAnnouncement,
  AlumniItem,
  SchoolAchievement,
  AcademicCalendarEvent,
  ClassScheduleItem,
  SchoolBellSchedule,
  LibraryBook,
  UksMedicStaff,
  UksMedicine,
  UksImmunization,
  UksHealthTip,
  ContactMessage,
  InternalMessage,
  SchoolHistoryEvent,
  OldArchivePhoto,
  PhotoPrintOrder,
  SchoolTopRankStudent,
  FarewellBatchData,
  ArchivedItemRecord,
  PhotoPrivacyMode,
  VisitorStatsRecord,
  CanteenItem,
  CanteenOrder,
  LostFoundItem,
  StudyClub,
  StudyQuestion,
  TeacherEvaluationNote,
  CleaningDutyGroup,
  ParentingArticle,
  RegisteredLoginAccount
} from '../types';

export const DEFAULT_SCHOOL_INFO: SchoolInfo = {
  name: 'SMA Negeri 1 Nusantara',
  npsn: '20104892',
  akreditasi: 'A (Unggul)',
  tagline: 'Mencetak Generasi Cerdas, Berkarakter, dan Berdaya Saing Global',
  address: 'Jl. Pemuda No. 45, Kompleks Pendidikan Terpadu, Merdeka',
  postalCode: '65145',
  city: 'Kota Malang',
  province: 'Jawa Timur',
  phone: '(0341) 554321',
  email: 'info@sman1nusantara.sch.id',
  website: 'https://sman1nusantara.sch.id',
  academicYear: '2026/2027',
  creatorName: 'Waa-O51W',
  creatorWhatsapp: '+62-831-4883-4663',
  tiktokUrl: 'https://www.tiktok.com/@sman1nusantara_official',
  visi: 'Terwujudnya insan pembelajar yang berakhlak mulia, unggul dalam prestasi IPTEK, berwawasan lingkungan, dan berdaya saing global.',
  misi: [
    'Menyelenggarakan proses pembelajaran dan bimbingan secara efektif dengan mengintegrasikan nilai religius serta kearifan lokal.',
    'Menumbuhkembangkan semangat keunggulan dan kompetitif secara intensif kepada seluruh warga sekolah.',
    'Mendorong dan memfasilitasi siswa dalam mengenali dan mengembangkan potensi bakat, minat akademik serta non-akademik.',
    'Menerapkan tata kelola sekolah yang transparan, akuntabel, partisipatif, serta berbasis teknologi informasi digital.',
    'Menciptakan lingkungan sekolah yang bersih, asri, aman, ramah anak, dan berwawasan pelestarian lingkungan hidup.'
  ],
  sejarah: 'SMA Negeri 1 Nusantara didirikan pada tahun 1978 sebagai pelopor sekolah menengah atas percontohan di kawasan timur. Berawal dari 6 ruang kelas sederhana dengan 12 tenaga pendidik berdedikasi tinggi, sekolah ini terus bertransformasi menjadi salah satu institusi pendidikan rujukan berstandar nasional dan internasional. Selama lebih dari 4 dekade, ribuan alumni telah berhasil melanjutkan studi ke perguruan tinggi ternama di dalam dan luar negeri serta berkontribusi nyata bagi bangsa dan negara.',
  fasilitas: [
    {
      id: 'fas-1',
      nama: 'Laboratorium Sains Terpadu',
      deskripsi: 'Laboratorium Fisika, Kimia, dan Biologi modern dengan instrumen digital canggih berstandar riset.',
      icon: 'FlaskConical',
      foto: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fas-2',
      nama: 'Perpustakaan & Ruang Baca Digital',
      deskripsi: 'Koleksi 15.000+ buku fisik dan e-library dengan akses jurnal internasional, zona diskusi, dan AC.',
      icon: 'BookOpen',
      foto: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fas-3',
      nama: 'Auditorium Graha Cendekia',
      deskripsi: 'Gedung serbaguna berkapasitas 1.000 tempat duduk berfasilitas sound system line-array dan panggung teater.',
      icon: 'Landmark',
      foto: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fas-4',
      nama: 'Gelanggang Olahraga & Lapangan Futsal',
      deskripsi: 'Kompleks olahraga multifungsi untuk basket berstandar FIBA, voli, futsal rumput sintetis, dan badminton.',
      icon: 'Trophy',
      foto: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fas-5',
      nama: 'Lab Multimedia & Komputer AI',
      deskripsi: '3 ruang lab komputer ber-AC masing-masing berisi 40 PC generasi terbaru dengan jaringan fiber optic 1 Gbps.',
      icon: 'Laptop',
      foto: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fas-6',
      nama: 'Masjid Ulul Albab & Taman Doa',
      deskripsi: 'Sarana ibadah yang luas, bersih, dan sejuk untuk membina spiritualitas serta toleransi antarwarga sekolah.',
      icon: 'HeartHandshake',
      foto: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

// Auto-playing video & curated school photo slider items
export const DEFAULT_SLIDER_ITEMS: SliderItem[] = [
  {
    id: 'slide-1',
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    title: 'Upacara Peringatan Hari Pendidikan & Parade Prestasi Siswa',
    date: '17 Agustus 2024',
    description: 'Semarak upacara bendera dan persembahan mahakarya ekstrakurikuler seni tari serta marching band sekolah.',
    order: 1
  },
  {
    id: 'slide-2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    title: 'Olimpiade Sains & Pekan Riset Remaja Tingkat Provinsi',
    date: '12 September 2024',
    description: 'Delegasi SMA Negeri 1 Nusantara menyabet 5 medali emas pada ajang kompetisi sains tahunan.',
    order: 2
  },
  {
    id: 'slide-3',
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    title: 'Pentas Seni & Kreasi Budaya "Gita Bahana Nusantara"',
    date: '28 Oktober 2024',
    description: 'Pentas seni tahunan menampilkan kolaborasi musik orkestra, teater modern, dan pameran instalasi seni rupa.',
    order: 3
  },
  {
    id: 'slide-4',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    title: 'Wisuda & Pelepasan Angkatan Ke-44 "Adhirajasa"',
    date: '15 Mei 2024',
    description: 'Momen penuh haru dan kebanggaan mengantarkan 360 wisudawan menuju gerbang kesuksesan masa depan.',
    order: 4
  },
  {
    id: 'slide-5',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80',
    title: 'Kemah Bakti Pramuka & Penjelajahan Alam Gunung Bromo',
    date: '20 Desember 2024',
    description: 'Pendidikan karakter, kepemimpinan lapangan, dan bakti sosial masyarakat di desa lereng pegunungan.',
    order: 5
  }
];

export const DEFAULT_ACTIVITY_CATEGORIES: string[] = [
  'Kelas 10',
  'Kelas 11',
  'Kelas 12',
  'OSIS',
  'PRAMUKA',
  'LKS',
  'DAN LAIN-LAIN'
];

export const DEFAULT_ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    title: 'Pentas Seni Spektakuler "Gita Bahana Nusantara 2024"',
    date: '28 Oktober 2024',
    category: 'OSIS',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    description: 'Kegiatan tahunan persembahan OSIS yang memadukan pertunjukan musik akustik, tari kolosal tradisional, pameran fotografi, dan bazar kewirausahaan siswa. Dihadiri lebih dari 2.500 pengunjung dan alumni.',
    location: 'Auditorium Graha Cendekia',
    peserta: 'Seluruh Siswa Kelas X, XI, XII & Tamu Undangan',
    createdAt: '2024-10-29T08:00:00Z'
  },
  {
    id: 'act-2',
    title: 'Juara Umum Lomba Keterampilan Siswa (LKS) & Olimpiade Sains',
    date: '14 September 2024',
    category: 'LKS',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    description: 'Tim kontingen sekolah sukses meraih 8 medali emas di ajang LKS dan olimpiade kejuruan/akademik tingkat kota dan provinsi.',
    location: 'Balai Kota & Dinas Pendidikan',
    peserta: 'Tim Pembina & Siswa Kontingen LKS',
    createdAt: '2024-09-15T10:00:00Z'
  },
  {
    id: 'act-3',
    title: 'Kemah Blok Pramuka Penegak & Latihan Kepemimpinan (LDK)',
    date: '20 - 22 Desember 2024',
    category: 'PRAMUKA',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80',
    description: 'Kemah penguatan profil pelajar Pancasila yang diisi dengan materi survival, navigasi darat, api unggun kenangan, dan bakti sosial pembagian 500 paket sembako kepada warga sekitar bumi perkemahan.',
    location: 'Bumi Perkemahan Coban Rondo, Batu',
    peserta: '320 Siswa Gerakan Pramuka Gudep',
    createdAt: '2024-12-23T11:00:00Z'
  },
  {
    id: 'act-4',
    title: 'Masa Pengenalan Lingkungan Sekolah (MPLS) & Orientasi Siswa Baru',
    date: '17 Juli 2024',
    category: 'Kelas 10',
    mediaType: 'video',
    mediaUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    description: 'Kegiatan pengenalan budaya sekolah, kurikulum, dan penguatan karakter bagi seluruh siswa baru angkatan Kelas 10.',
    location: 'Lapangan Utama SMA 1',
    peserta: 'Seluruh Siswa Baru Kelas 10',
    createdAt: '2024-08-17T13:00:00Z'
  },
  {
    id: 'act-5',
    title: 'Kunjungan Industri & Proyek Penguatan Karakter Profil Pelajar',
    date: '18 Desember 2024',
    category: 'Kelas 11',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    description: 'Kegiatan pembelajaran luar kelas dan riset lapangan siswa kelas 11 untuk penguatan kompetensi terapan dan inovasi kreatif.',
    location: 'Sentra Riset & Industri Rekayasa',
    peserta: 'Siswa Kelas 11 & Guru Pendamping',
    createdAt: '2024-12-19T14:30:00Z'
  },
  {
    id: 'act-6',
    title: 'Pelepasan & Wisuda Purnawiyata Angkatan Ke-46',
    date: '15 Mei 2025',
    category: 'Kelas 12',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    description: 'Momen penuh haru dan kebanggaan pelepasan siswa-siswi kelas 12 yang telah berhasil menyelesaikan masa studi di jenjang SMA.',
    location: 'Auditorium Graha Cendekia',
    peserta: 'Seluruh Siswa Kelas 12 & Orang Tua Wali',
    createdAt: '2025-05-16T09:00:00Z'
  },
  {
    id: 'act-7',
    title: 'Bakti Sosial & Donor Darah Peduli Kemanusiaan',
    date: '10 Januari 2025',
    category: 'DAN LAIN-LAIN',
    mediaType: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
    description: 'Kegiatan aksi sosial kepedulian lingkungan dan kemanusiaan bekerja sama dengan PMI kota dan relawan pemuda.',
    location: 'Aula Serbaguna',
    peserta: 'Warga Sekolah & Masyarakat Umum',
    createdAt: '2025-01-11T09:00:00Z'
  }
];

export const DEFAULT_ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann-1',
    title: 'Jadwal Pelaksanaan Penilaian Akhir Tahun (PAT) & Asesmen Sumatif Genap 2024/2025',
    date: '25 Mei 2025',
    category: 'Libur & Ujian',
    content: 'Diberitahukan kepada seluruh siswa kelas X, XI, dan XII bahwa Asesmen Sumatif Akhir Tahun akan diselenggarakan secara serentak berbasis CBT (Computer Based Test) mulai tanggal 2 Juni s.d. 12 Juni 2025. Seluruh siswa diwajibkan membawa kartu peserta ujian yang telah dicap resmi dan memastikan perangkat ujian dalam kondisi prima.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    author: 'Wakasek Bidang Kurikulum',
    isPinned: true,
    createdAt: '2025-05-25T07:30:00Z'
  },
  {
    id: 'ann-2',
    title: 'Sosialisasi Seleksi Nasional Berdasarkan Prestasi (SNBP) & Jalur Masuk PTN 2025',
    date: '10 Februari 2025',
    category: 'Akademik',
    content: 'Bimbingan Konseling (BK) akan mengadakan sesi pendampingan intensif pemetaan jurusan kuliah bagi siswa kelas XII eligible SNBP. Kegiatan akan dilaksanakan pada hari Sabtu di Auditorium Graha Cendekia bersama narasumber perwakilan dari UI, ITB, UGM, dan ITS.',
    author: 'Tim Bimbingan Konseling (BK)',
    isPinned: true,
    createdAt: '2025-02-10T08:00:00Z'
  },
  {
    id: 'ann-3',
    title: 'Pengumuman Libur Hari Raya Idul Fitri 1446 H & Jadwal Masuk Kembali',
    date: '28 Maret 2025',
    category: 'Libur & Ujian',
    content: 'Berdasarkan kalender akademik Dinas Pendidikan, libur cuti bersama menyambut Hari Raya Idul Fitri 1446 H ditetapkan mulai tanggal 31 Maret s.d. 11 April 2025. Kegiatan belajar mengajar akan aktif kembali pada hari Senin, 14 April 2025 dengan agenda halalbihalal keluarga besar sekolah.',
    author: 'Bagian Tata Usaha & Kesiswaan',
    isPinned: false,
    createdAt: '2025-03-28T09:15:00Z'
  },
  {
    id: 'ann-4',
    title: 'Pembukaan Pendaftaran Calon Pengurus OSIS & MPK Periode 2025/2026',
    date: '15 Januari 2025',
    category: 'Kegiatan',
    content: 'Bagi peserta didik kelas X dan XI yang memiliki jiwa kepemimpinan, integritas tinggi, dan dedikasi untuk memajukan sekolah, pendaftaran seleksi calon ketua OSIS dan pengurus MPK resmi dibuka. Formulir pendaftaran dapat diambil di ruang sekretariat OSIS.',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    author: 'Wakasek Kesiswaan & Pembina OSIS',
    isPinned: false,
    createdAt: '2025-01-15T10:00:00Z'
  },
  {
    id: 'ann-5',
    title: 'Pemberitahuan Pembagian Rapor Hasil Belajar Siswa Semester Ganjil',
    date: '20 Desember 2024',
    category: 'Pemberitahuan',
    content: 'Pengambilan buku Laporan Hasil Belajar (Rapor) Semester Ganjil akan dilaksanakan secara tatap muka oleh orang tua/wali murid bersama Wali Kelas masing-masing pada hari Jumat, 20 Desember 2024 mulai pukul 08.00 s.d. 11.30 WIB di ruang kelas masing-masing.',
    author: 'Kepala Sekolah',
    isPinned: false,
    createdAt: '2024-12-20T07:00:00Z'
  }
];

export const DEFAULT_TEACHERS: TeacherStaff[] = [
  // Level 1: Kepala Sekolah
  {
    id: 't-1',
    name: 'Dr. H. Bambang Setyawan, M.Pd.',
    titleWithDegree: 'Dr. H. Bambang Setyawan, M.Pd.',
    nip: '19680315 199203 1 005',
    role: 'kepala_sekolah',
    roleTitle: 'Kepala Sekolah',
    department: 'Pimpinan Sekolah',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    bio: 'Pendidik berprestasi nasional dengan pengalaman lebih dari 28 tahun memimpin transformasi digital dan pendidikan karakter.',
    phone: '081234567890',
    email: 'kepsek@sman1nusantara.sch.id',
    order: 1
  },
  // Level 2: Wakil Kepala Sekolah
  {
    id: 't-2',
    name: 'Dra. Hj. Sri Wahyuni, M.Si.',
    titleWithDegree: 'Dra. Hj. Sri Wahyuni, M.Si.',
    nip: '19710520 199702 2 003',
    role: 'wakil_kepala_sekolah',
    roleTitle: 'Wakil Kepala Sekolah Bidang Manajemen Mutu',
    department: 'Pimpinan Sekolah',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Mengkoordinasikan standarisasi mutu akademik, akreditasi sekolah, serta evaluasi program kerja tahunan.',
    phone: '081234567891',
    email: 'sri.wahyuni@sman1nusantara.sch.id',
    order: 2
  },
  // Level 3: 4 Bidang Wakasek
  {
    id: 't-3',
    name: 'Ahmad Fauzi, S.Pd., M.T.',
    titleWithDegree: 'Ahmad Fauzi, S.Pd., M.T.',
    nip: '19750812 200112 1 004',
    role: 'wakasek_kurikulum',
    roleTitle: 'Wakil Kepala Sekolah Bidang Kurikulum',
    department: 'Kurikulum & Pembelajaran',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Bertanggung jawab atas penyusunan kurikulum merdeka, jadwal KBM, asesmen, dan peningkatan kompetensi guru.',
    subjects: ['Fisika Terapan', 'Informatika'],
    order: 3
  },
  {
    id: 't-4',
    name: 'Retno Wulandari, S.Pd., M.Pd.',
    titleWithDegree: 'Retno Wulandari, S.Pd., M.Pd.',
    nip: '19790403 200501 2 008',
    role: 'wakasek_kesiswaan',
    roleTitle: 'Wakil Kepala Sekolah Bidang Kesiswaan',
    department: 'Kesiswaan & Ekstrakurikuler',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Membina 24 cabang ekstrakurikuler, OSIS, MPK, kedisiplinan siswa, dan program beasiswa prestasi.',
    subjects: ['Bahasa Indonesia', 'Sastra'],
    order: 4
  },
  {
    id: 't-5',
    name: 'Ir. Hendra Gunawan, S.T., M.M.',
    titleWithDegree: 'Ir. Hendra Gunawan, S.T., M.M.',
    nip: '19760218 200312 1 002',
    role: 'wakasek_sarpras',
    roleTitle: 'Wakil Kepala Sekolah Bidang Sarana & Prasarana',
    department: 'Sarana & Prasarana',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Mengelola pemeliharaan gedung, laboratorium, ruang multimedia, jaringan internet fiber, dan infrastruktur olahraga.',
    subjects: ['Prakarya & Kewirausahaan'],
    order: 5
  },
  {
    id: 't-6',
    name: 'Nurul Hidayati, S.Sos., M.I.Kom.',
    titleWithDegree: 'Nurul Hidayati, S.Sos., M.I.Kom.',
    nip: '19821109 200801 2 015',
    role: 'wakasek_humas',
    roleTitle: 'Wakil Kepala Sekolah Bidang Hubungan Masyarakat',
    department: 'Humas & Kemitraan',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    bio: 'Menjalin kerja sama dengan universitas, alumni, komite sekolah, industri, dan instansi kedutaan luar negeri.',
    subjects: ['Sosiologi', 'Antropologi'],
    order: 6
  },
  // Level 4: Dewan Guru & Mata Pelajaran
  {
    id: 't-7',
    name: 'Dr. Rudi Hartono, M.Si.',
    titleWithDegree: 'Dr. Rudi Hartono, M.Si.',
    nip: '19780125 200212 1 006',
    role: 'guru_mapel',
    roleTitle: 'Guru Matematika & Koordinator Olimpiade',
    department: 'MIPA',
    subjects: ['Matematika Wajib', 'Matematika Peminatan'],
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Pembina utama tim Olimpiade Matematika dan pelatih pemusatan latihan nasional.',
    order: 7
  },
  {
    id: 't-8',
    name: 'Siti Aminah, S.Pd., M.Biotech.',
    titleWithDegree: 'Siti Aminah, S.Pd., M.Biotech.',
    nip: '19830614 200902 2 011',
    role: 'guru_mapel',
    roleTitle: 'Guru Biologi & Kepala Lab Sains',
    department: 'MIPA',
    subjects: ['Biologi', 'Bioteknologi Lingkungan'],
    photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
    bio: 'Peneliti muda bioteknologi mikroalga dan pembina karya tulis ilmiah remaja (KIR).',
    order: 8
  },
  {
    id: 't-9',
    name: 'Drs. Agus Prasetyo, M.Hum.',
    titleWithDegree: 'Drs. Agus Prasetyo, M.Hum.',
    nip: '19700910 199603 1 004',
    role: 'guru_mapel',
    roleTitle: 'Guru Sejarah & Pembina Teater',
    department: 'IPS & Humaniora',
    subjects: ['Sejarah Indonesia', 'Sejarah Peminatan'],
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    bio: 'Budayawan lokal dan sutradara berbagai pagelaran drama sejarah kemerdekaan sekolah.',
    order: 9
  },
  {
    id: 't-10',
    name: 'Jessica Melina, S.Pd., M.Ed.',
    titleWithDegree: 'Jessica Melina, S.Pd., M.Ed.',
    nip: '19870321 201201 2 019',
    role: 'guru_mapel',
    roleTitle: 'Guru Bahasa Inggris & Debate Coach',
    department: 'Bahasa & Literasi',
    subjects: ['English Core', 'Advanced Communication & Debate'],
    photoUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    bio: 'Alumni Monash University dan juri debat Bahasa Inggris tingkat nasional.',
    order: 10
  },
  {
    id: 't-11',
    name: 'Wahyu Nugroho, S.Kom., M.Cs.',
    titleWithDegree: 'Wahyu Nugroho, S.Kom., M.Cs.',
    nip: '19890915 201402 1 023',
    role: 'guru_mapel',
    roleTitle: 'Guru Informatika & Robotika',
    department: 'Teknologi & Vokasi',
    subjects: ['Informatika', 'Coding & Artificial Intelligence', 'Robotika'],
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    bio: 'Pengembang platform digital sekolah dan pelatih tim robotika pemenang kompetisi internasional di Tokyo.',
    order: 11
  },
  {
    id: 't-12',
    name: 'Dewi Lestari, S.Pd., M.Pd.',
    titleWithDegree: 'Dewi Lestari, S.Pd., M.Pd.',
    nip: '19850422 201001 2 014',
    role: 'guru_mapel',
    roleTitle: 'Guru Kimia & Pembimbing KIR',
    department: 'MIPA',
    subjects: ['Kimia Analisis', 'Kimia Terapan'],
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80',
    bio: 'Juara 1 Guru Berprestasi Tingkat Provinsi bidang inovasi media pembelajaran kimia interaktif.',
    order: 12
  },
  // Level 5: Staf Tata Usaha & Kependidikan
  {
    id: 't-13',
    name: 'H. Suryadi, S.E., M.M.',
    titleWithDegree: 'H. Suryadi, S.E., M.M.',
    nip: '19740618 199903 1 003',
    role: 'staf_tu',
    roleTitle: 'Kepala Bagian Tata Usaha',
    department: 'Tata Usaha & Administrasi',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    bio: 'Memimpin koordinasi administrasi kepegawaian, keuangan, persuratan, dan kearsipan digital sekolah.',
    order: 13
  },
  {
    id: 't-14',
    name: 'Dewi Anggraini, A.Md.',
    titleWithDegree: 'Dewi Anggraini, A.Md.',
    nip: '19860211 201101 2 009',
    role: 'staf_tu',
    roleTitle: 'Staf Administrasi Kesiswaan & Dapodik',
    department: 'Tata Usaha & Administrasi',
    photoUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    bio: 'Operator utama Data Pokok Pendidikan (Dapodik), NISN, dan legalisir ijazah siswa.',
    order: 14
  },
  {
    id: 't-15',
    name: 'Bayu Saputra, S.I.Pust.',
    titleWithDegree: 'Bayu Saputra, S.I.Pust.',
    nip: '19900824 201503 1 018',
    role: 'staf_tu',
    roleTitle: 'Kepala Pelayanan Perpustakaan & Literasi',
    department: 'Perpustakaan',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bio: 'Mengelola digitalisasi katalog buku perpustakaan dan program literasi membaca 15 menit.',
    order: 15
  },
  {
    id: 't-16',
    name: 'Rian Kurniawan, S.Kom.',
    titleWithDegree: 'Rian Kurniawan, S.Kom.',
    nip: '19930419 201801 1 012',
    role: 'staf_tu',
    roleTitle: 'Pranata Komputer & Teknisi Laboratorium',
    department: 'IT & Lab Komputer',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    bio: 'Menangani infrastruktur server, jaringan Wi-Fi sekolah, serta keamanan data sistem.',
    order: 16
  }
];

export const DEFAULT_CLASSES: ClassRoom[] = [
  {
    id: 'class-1',
    name: 'XII MIPA 1',
    grade: 'Kelas 12',
    academicYear: '2026/2027',
    jurusan: 'Matematika & Ilmu Pengetahuan Alam',
    isActive: true,
    adminUsername: 'admin_12mipa1',
    adminPasswordHash: 'mipa1juara',
    tiktokUrl: 'https://www.tiktok.com/@xiimipa1_nusantara',
    perangkat: {
      waliKelas: 'Dr. Rudi Hartono, M.Si.',
      nipWaliKelas: '19780125 200212 1 006',
      ketuaKelas: 'Muhammad Farhan Pratama',
      wakilKetua: 'Amanda Putri Zahra',
      sekretaris1: 'Nadhira Aulia Rahma',
      sekretaris2: 'Bima Satria Wicaksono',
      bendahara1: 'Clara Salsabila',
      bendahara2: 'Dimas Arya Nugraha',
      seksi: [
        { id: 's-1', bidang: 'Kebersihan & 7K', nama: 'Fajar Eka Saputra' },
        { id: 's-2', bidang: 'Keamanan & Ketertiban', nama: 'Rendra Putra Perkasa' },
        { id: 's-3', bidang: 'Kerohanian', nama: 'Zaidan Al-Farisi' },
        { id: 's-4', bidang: 'Olahraga & Bakat', nama: 'Kevin Geraldo' },
        { id: 's-5', bidang: 'Mading & Dokumentasi', nama: 'Talitha Aurelia' }
      ]
    },
    gallery: [
      {
        id: 'gal-1',
        title: 'Foto Buku Tahunan & Kenangan Angkatan di Hutan Pinus',
        date: '10 November 2024',
        imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
        description: 'Sesi pemotretan buku kenangan akhir tahun dengan konsep busana vintage casual dan penuh keceriaan.',
        uploadedBy: 'Admin Kelas XII MIPA 1'
      },
      {
        id: 'gal-2',
        title: 'Juara 1 Lomba Kebersihan & Dekorasi Kelas HUT Sekolah',
        date: '18 Agustus 2024',
        imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
        description: 'Gotong royong mempercantik kelas dengan konsep Smart Eco-Classroom berhias pot tanaman gantung.',
        uploadedBy: 'Admin Kelas XII MIPA 1'
      },
      {
        id: 'gal-3',
        title: 'Kunjungan Edukasi Industri & Laboratorium PT Petrokimia',
        date: '24 September 2024',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
        description: 'Melihat langsung proses sintesis senyawa kimia dan teknologi pengolahan limbah ramah lingkungan.',
        uploadedBy: 'Admin Kelas XII MIPA 1'
      },
      {
        id: 'gal-4',
        title: 'Buka Bersama & Santunan Anak Yatim Bulan Ramadhan',
        date: '04 April 2024',
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
        description: 'Momen kebersamaan mempererat tali silaturahmi seluruh siswa dan wali kelas tercinta.',
        uploadedBy: 'Admin Kelas XII MIPA 1'
      }
    ]
  },
  {
    id: 'class-2',
    name: 'XII MIPA 2',
    grade: 'Kelas 12',
    academicYear: '2026/2027',
    jurusan: 'Matematika & Ilmu Pengetahuan Alam',
    isActive: true,
    adminUsername: 'admin_12mipa2',
    adminPasswordHash: 'mipa2hebat',
    tiktokUrl: 'https://www.tiktok.com/@xiimipa2_nusantara',
    perangkat: {
      waliKelas: 'Siti Aminah, S.Pd., M.Biotech.',
      nipWaliKelas: '19830614 200902 2 011',
      ketuaKelas: 'Rizky Aditya Wardhana',
      wakilKetua: 'Dinda Permata Sari',
      sekretaris1: 'Gita Maharani',
      sekretaris2: 'Haikal Zulkarnain',
      bendahara1: 'Intan Nuraini',
      bendahara2: 'Jovan Nathaniel',
      seksi: [
        { id: 's-6', bidang: 'Kebersihan', nama: 'Kiki Ramadhani' },
        { id: 's-7', bidang: 'Keamanan', nama: 'Lukman Hakim' },
        { id: 's-8', bidang: 'Rohani', nama: 'Maulana Malik' }
      ]
    },
    gallery: [
      {
        id: 'gal-5',
        title: 'Praktikum Lapangan Ekologi Hutan Mangrove',
        date: '14 Oktober 2024',
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
        description: 'Penelitian biodiversitas kepiting bakau dan penanaman 100 bibit mangrove pelindung abrasi pantai.',
        uploadedBy: 'Admin Kelas XII MIPA 2'
      },
      {
        id: 'gal-6',
        title: 'Perayaan Ulang Tahun Wali Kelas Ibu Siti Aminah',
        date: '14 Juni 2024',
        imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
        description: 'Kejutan manis kue tart dan karikatur ucapan terima kasih dari seluruh siswa kelas XII MIPA 2.',
        uploadedBy: 'Admin Kelas XII MIPA 2'
      }
    ]
  },
  {
    id: 'class-3',
    name: 'XII IPS 1',
    grade: 'Kelas 12',
    academicYear: '2026/2027',
    jurusan: 'Ilmu Pengetahuan Sosial',
    isActive: true,
    adminUsername: 'admin_12ips1',
    adminPasswordHash: 'ips1kompak',
    tiktokUrl: 'https://www.tiktok.com/@xiiips1_nusantara',
    perangkat: {
      waliKelas: 'Drs. Agus Prasetyo, M.Hum.',
      nipWaliKelas: '19700910 199603 1 004',
      ketuaKelas: 'Satria Dewa Bagaskara',
      wakilKetua: 'Tiara Andini Putri',
      sekretaris1: 'Vanesa Yolanda',
      sekretaris2: 'Wahyu Hidayat',
      bendahara1: 'Yasmine Nabilla',
      bendahara2: 'Zaki Firmansyah',
      seksi: [
        { id: 's-9', bidang: 'Kreativitas & Seni', nama: 'Aldi Taher' },
        { id: 's-10', bidang: 'Olahraga', nama: 'Bagus Pradipta' }
      ]
    },
    gallery: [
      {
        id: 'gal-7',
        title: 'Pameran Mini Museum Sejarah Kebangsaan',
        date: '08 November 2024',
        imageUrl: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=1000&q=80',
        description: 'Karya instalasi replika candi, naskah kuno, dan diorama perang gerilya karya siswa IPS 1.',
        uploadedBy: 'Admin Kelas XII IPS 1'
      }
    ]
  },
  {
    id: 'class-4',
    name: 'XI MIPA 1',
    grade: 'Kelas 11',
    academicYear: '2026/2027',
    jurusan: 'Matematika & Ilmu Pengetahuan Alam',
    isActive: true,
    adminUsername: 'admin_11mipa1',
    adminPasswordHash: 'mipa1jaya',
    tiktokUrl: 'https://www.tiktok.com/@ximipa1_nusantara',
    perangkat: {
      waliKelas: 'Jessica Melina, S.Pd., M.Ed.',
      nipWaliKelas: '19870321 201201 2 019',
      ketuaKelas: 'Aditya Pratama',
      wakilKetua: 'Bella Safira',
      sekretaris1: 'Chelsea Olivia',
      sekretaris2: 'Daffa Raihan',
      bendahara1: 'Evelyn Wijaya',
      bendahara2: 'Farid Rizky',
      seksi: [
        { id: 's-11', bidang: 'Kebersihan', nama: 'Galih Rakasiwi' },
        { id: 's-12', bidang: 'Keamanan', nama: 'Haris Munandar' }
      ]
    },
    gallery: [
      {
        id: 'gal-8',
        title: 'Studi Riset Biologi Konservasi Taman Safari',
        date: '20 September 2024',
        imageUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1000&q=80',
        description: 'Pengamatan perilaku satwa langka dan teknik inseminasi buatan konservasi mamalia besar.',
        uploadedBy: 'Admin Kelas XI MIPA 1'
      }
    ]
  },
  {
    id: 'class-5',
    name: 'XI IPS 2',
    grade: 'Kelas 11',
    academicYear: '2026/2027',
    jurusan: 'Ilmu Pengetahuan Sosial',
    isActive: true,
    adminUsername: 'admin_11ips2',
    adminPasswordHash: 'ips2solid',
    perangkat: {
      waliKelas: 'Nurul Hidayati, S.Sos., M.I.Kom.',
      nipWaliKelas: '19821109 200801 2 015',
      ketuaKelas: 'Ilham Ramadhan',
      wakilKetua: 'Jasmin Kartika',
      sekretaris1: 'Kenzo Alfarizi',
      sekretaris2: 'Luna Maya',
      bendahara1: 'Mona Ratuliu',
      bendahara2: 'Naufal Abimanyu',
      seksi: [
        { id: 's-13', bidang: 'Dokumentasi', nama: 'Oki Setiana' }
      ]
    },
    gallery: []
  },
  {
    id: 'class-6',
    name: 'X-A',
    grade: 'Kelas 10',
    academicYear: '2026/2027',
    jurusan: 'Fase E (Umum)',
    isActive: true,
    adminUsername: 'admin_10a',
    adminPasswordHash: 'sepuluh_a',
    perangkat: {
      waliKelas: 'Wahyu Nugroho, S.Kom., M.Cs.',
      nipWaliKelas: '19890915 201402 1 023',
      ketuaKelas: 'Panji Gumilang',
      wakilKetua: 'Queen Latifah',
      sekretaris1: 'Raffi Ahmad',
      sekretaris2: 'Siti Badriah',
      bendahara1: 'Tulus Rusydi',
      bendahara2: 'Uya Kuya',
      seksi: []
    },
    gallery: []
  }
];

export const DEFAULT_ESKUL_CATEGORIES: string[] = [
  'Semua',
  'Kepemimpinan',
  'Olahraga',
  'Seni & Budaya',
  'Keagamaan',
  'Sains & Teknologi',
  'Kebahasaan'
];

export const DEFAULT_ESKUL: EskulItem[] = [
  {
    id: 'eskul-1',
    name: 'Pramuka Gudep Nusantara (01.045 - 01.046)',
    category: 'Kepemimpinan',
    pembina: 'Drs. Agus Prasetyo, M.Hum.',
    ketua: 'Muhammad Farhan Pratama',
    schedule: 'Jumat, 15:30 - 17:30 WIB',
    location: 'Lapangan Utama & Sanggar Pramuka',
    description: 'Ekstrakurikuler pembentuk karakter patriotik, kepemimpinan, kemandirian, survival, pionering, dan bakti sosial kemasyarakatan.',
    coverUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80',
    tiktokUrl: 'https://www.tiktok.com/@pramuka_nusantara',
    members: [
      { id: 'm-1', name: 'Drs. Agus Prasetyo, M.Hum.', role: 'Pembina', className: 'Guru Pembina' },
      { id: 'm-2', name: 'Muhammad Farhan Pratama', role: 'Ketua', className: 'XII MIPA 1' },
      { id: 'm-3', name: 'Amanda Putri Zahra', role: 'Wakil Ketua', className: 'XII MIPA 1' },
      { id: 'm-4', name: 'Bima Satria Wicaksono', role: 'Sekretaris', className: 'XII MIPA 1' },
      { id: 'm-5', name: 'Satria Dewa Bagaskara', role: 'Anggota', className: 'XII IPS 1' }
    ],
    messages: [
      {
        id: 'msg-1',
        senderName: 'Drs. Agus Prasetyo, M.Hum.',
        senderRole: 'Pembina',
        content: 'Salam Pramuka! Jangan lupa besok Jumat latihan gabungan materi tali-temali dan semapur di lapangan utama. Harap mengenakan seragam pramuka lengkap.',
        createdAt: '2025-05-10T14:30:00Z',
        likes: 12
      },
      {
        id: 'msg-2',
        senderName: 'Muhammad Farhan Pratama',
        senderRole: 'Ketua',
        content: 'Siap Kak! Perlengkapan tongkat dan tali sudah disiapkan di sanggar oleh tim perlengkapan.',
        createdAt: '2025-05-10T15:10:00Z',
        likes: 8
      },
      {
        id: 'msg-3',
        senderName: 'Amanda Putri Zahra',
        senderRole: 'Wakil Ketua',
        content: 'Untuk absensi akan dimulai tepat pukul 15.30 WIB ya teman-teman. Jangan sampai terlambat.',
        createdAt: '2025-05-10T16:00:00Z',
        likes: 5
      }
    ],
    gallery: [
      {
        id: 'eg-1',
        title: 'Kemah Pelantikan Penegak Bantara di Gunung Banyak',
        date: '14 November 2024',
        imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80',
        description: 'Penjelajahan medan dan pengukuhan anggota bantara baru dengan api unggun gembira.',
        uploadedBy: 'Pembina Pramuka',
        likes: 24,
        comments: [
          {
            id: 'c-1',
            authorName: 'Rizky Aditya',
            authorRole: 'Siswa',
            content: 'Momen api unggun paling seru dan berkesan!',
            createdAt: '2024-11-15T08:00:00Z'
          }
        ]
      }
    ]
  },
  {
    id: 'eskul-2',
    name: 'PMR Wira (Palang Merah Remaja)',
    category: 'Kepemimpinan',
    pembina: 'Siti Aminah, S.Pd., M.Biotech.',
    ketua: 'Nadhira Aulia Rahma',
    schedule: 'Rabu, 15:30 - 17:00 WIB',
    location: 'Ruang UKS & Aula Lt. 2',
    description: 'Wadah pembinaan kepalangmerahan remaja dalam pertolongan pertama (PP), perawatan keluarga, donor darah, dan kesiapsiagaan bencana.',
    coverUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
    tiktokUrl: 'https://www.tiktok.com/@pmrwira_nusantara',
    members: [
      { id: 'm-21', name: 'Siti Aminah, S.Pd.', role: 'Pembina', className: 'Guru Pembina' },
      { id: 'm-22', name: 'Nadhira Aulia Rahma', role: 'Ketua', className: 'XII MIPA 1' },
      { id: 'm-23', name: 'Dinda Permata Sari', role: 'Sekretaris', className: 'XII MIPA 2' }
    ],
    messages: [
      {
        id: 'msg-21',
        senderName: 'Siti Aminah, S.Pd.',
        senderRole: 'Pembina',
        content: 'Agenda pelatihan simulasi penanganan luka bakar dan patah tulang bersama PMI Kota diadakan hari Rabu pukul 15.30.',
        createdAt: '2025-05-12T10:00:00Z',
        likes: 9
      },
      {
        id: 'msg-22',
        senderName: 'Nadhira Aulia Rahma',
        senderRole: 'Ketua',
        content: 'Peralatan mitela dan perban sudah siap. Teman-teman dimohon hadir tepat waktu ya!',
        createdAt: '2025-05-12T11:20:00Z',
        likes: 6
      }
    ],
    gallery: [
      {
        id: 'eg-2',
        title: 'Aksi Donor Darah Peduli Kemanusiaan Bersama PMI',
        date: '20 Januari 2025',
        imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
        description: 'Mengumpulkan 120 kantong darah dari warga sekolah dan alumni.',
        uploadedBy: 'Admin PMR',
        likes: 31
      }
    ]
  },
  {
    id: 'eskul-3',
    name: 'Klub Robotik, AI & Rekayasa IT',
    category: 'Sains & Teknologi',
    pembina: 'Wahyu Nugroho, S.Kom., M.Cs.',
    ketua: 'Rizky Aditya Wardhana',
    schedule: 'Kamis & Sabtu, 15:30 - 18:00 WIB',
    location: 'Lab Komputer AI & Workshop Robotik',
    description: 'Pengembangan talenta siswa di bidang mikrokontroler Arduino/ESP32, coding Python, Artificial Intelligence, IoT, dan robot line follower.',
    coverUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    tiktokUrl: 'https://www.tiktok.com/@robotik_nusantara',
    members: [
      { id: 'm-31', name: 'Wahyu Nugroho, S.Kom.', role: 'Pembina', className: 'Guru Pembina' },
      { id: 'm-32', name: 'Rizky Aditya Wardhana', role: 'Ketua', className: 'XII MIPA 2' },
      { id: 'm-33', name: 'Kevin Geraldo', role: 'Anggota', className: 'XII MIPA 1' }
    ],
    messages: [
      {
        id: 'msg-31',
        senderName: 'Wahyu Nugroho, S.Kom.',
        senderRole: 'Pembina',
        content: 'Selamat kepada tim Line Follower yang berhasil masuk 8 besar kompetisi robotik nasional! Siapkan modul sensor cadangan untuk sesi final.',
        createdAt: '2025-05-14T09:00:00Z',
        likes: 18
      },
      {
        id: 'msg-32',
        senderName: 'Rizky Aditya Wardhana',
        senderRole: 'Ketua',
        content: 'Terima kasih banyak Pak Wahyu! Nanti sore kami kumpul di lab untuk uji coba sirkuit.',
        createdAt: '2025-05-14T10:15:00Z',
        likes: 11
      }
    ],
    gallery: [
      {
        id: 'eg-3',
        title: 'Pameran Prototipe IoT Smart Home & Robot Soccer',
        date: '15 Maret 2025',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
        description: 'Demonstrasi proyek teknologi cerdas buatan siswa di ajang Science Fair.',
        uploadedBy: 'Tim Robotik',
        likes: 42
      }
    ]
  },
  {
    id: 'eskul-4',
    name: 'Klub Basket & Futsal Satria',
    category: 'Olahraga',
    pembina: 'Fajar Eka Saputra',
    ketua: 'Satria Dewa Bagaskara',
    schedule: 'Selasa & Kamis, 16:00 - 18:00 WIB',
    location: 'Gelanggang Olahraga & Lapangan Futsal',
    description: 'Pembinaan fisik, taktik beregu, ketangkasan, dan sportivitas dalam kejuaraan basket DBL serta liga futsal pelajar.',
    coverUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    tiktokUrl: 'https://www.tiktok.com/@sports_nusantara',
    members: [
      { id: 'm-41', name: 'Satria Dewa Bagaskara', role: 'Ketua', className: 'XII IPS 1' },
      { id: 'm-42', name: 'Kevin Geraldo', role: 'Wakil Ketua', className: 'XII MIPA 1' }
    ],
    messages: [
      {
        id: 'msg-41',
        senderName: 'Satria Dewa Bagaskara',
        senderRole: 'Ketua',
        content: 'Jadwal tanding persahabatan lawan SMA Taruna hari Kamis jam 16.00 di GOR. Jangan lupa jersey putih ya!',
        createdAt: '2025-05-15T08:30:00Z',
        likes: 14
      }
    ],
    gallery: [
      {
        id: 'eg-4',
        title: 'Juara 1 Turnamen Futsal Pelajar Kota Malang Cup',
        date: '22 Februari 2025',
        imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
        description: 'Kemenangan dramatis adu penalti di babak final.',
        uploadedBy: 'Official Basket & Futsal',
        likes: 55
      }
    ]
  },
  {
    id: 'eskul-5',
    name: 'Sanggar Seni Tari & Teater "Kencana"',
    category: 'Seni & Budaya',
    pembina: 'Drs. Agus Prasetyo, M.Hum.',
    ketua: 'Tiara Andini Putri',
    schedule: 'Senin & Rabu, 15:30 - 17:30 WIB',
    location: 'Auditorium & Ruang Kaca Seni',
    description: 'Eksplorasi tari tradisional nusantara, tari kontemporer, seni peran (teater drama musikal), dan tata busana panggung.',
    coverUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    tiktokUrl: 'https://www.tiktok.com/@senikencana_nusantara',
    members: [
      { id: 'm-51', name: 'Drs. Agus Prasetyo, M.Hum.', role: 'Pembina', className: 'Guru Pembina' },
      { id: 'm-52', name: 'Tiara Andini Putri', role: 'Ketua', className: 'XII IPS 1' },
      { id: 'm-53', name: 'Talitha Aurelia', role: 'Sekretaris', className: 'XII MIPA 1' }
    ],
    messages: [
      {
        id: 'msg-51',
        senderName: 'Tiara Andini Putri',
        senderRole: 'Ketua',
        content: 'Gladi kotor pementasan tari Saman untuk pembukaan dies natalis dimulai besok jam 15.30 di auditorium ya teman-teman.',
        createdAt: '2025-05-13T13:00:00Z',
        likes: 15
      }
    ],
    gallery: [
      {
        id: 'eg-5',
        title: 'Pentas Tari Kolosal Nusantara di Panggung Budaya',
        date: '28 Oktober 2024',
        imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
        description: 'Tampil memukau di hadapan ribuan penonton dalam peringatan Hari Sumpah Pemuda.',
        uploadedBy: 'Sanggar Kencana',
        likes: 38
      }
    ]
  },
  {
    id: 'eskul-6',
    name: 'Rohani Islam (Rohis) & Bina Karakter',
    category: 'Keagamaan',
    pembina: 'Dr. H. Bambang Setyawan, M.Pd.',
    ketua: 'Zaidan Al-Farisi',
    schedule: 'Jumat, 12:30 - 14:30 WIB',
    location: 'Masjid Ulul Albab',
    description: 'Pembinaan akhlak, kajian remaja Islam, tahsin & tahfidz Al-Qur\'an, mentoring, serta kepedulian sosial bakti Ramadhan.',
    coverUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
    members: [
      { id: 'm-61', name: 'Zaidan Al-Farisi', role: 'Ketua', className: 'XII MIPA 1' },
      { id: 'm-62', name: 'Wahyu Hidayat', role: 'Wakil Ketua', className: 'XII IPS 1' }
    ],
    messages: [
      {
        id: 'msg-61',
        senderName: 'Zaidan Al-Farisi',
        senderRole: 'Ketua',
        content: 'Kajian Jumat berkah minggu ini bertema "Menjaga Integritas dan Akhlak di Era Digital" bersama ustadz tamu.',
        createdAt: '2025-05-11T12:00:00Z',
        likes: 21
      }
    ],
    gallery: [
      {
        id: 'eg-6',
        title: 'Peringatan Isra Miraj & Lomba Dai Muda Pelajar',
        date: '08 Februari 2025',
        imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
        description: 'Semarak syiar Islam penuh kehangatan dan inspirasi kebaikan.',
        uploadedBy: 'Admin Rohis',
        likes: 29
      }
    ]
  }
];

export const DEFAULT_STUDENTS: Student[] = [
  // Class 1 (XII MIPA 1)
  {
    id: 'std-1',
    nisn: '0061234501',
    name: 'Muhammad Farhan Pratama',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    quote: '"Bermimpilah setinggi langit, jika engkau jatuh engkau akan jatuh di antara bintang-bintang."',
    citaCita: 'Dokter Spesialis Bedah Jantung',
    pesanKesan: 'Tiga tahun di MIPA 1 mengajarkan arti persaudaraan yang tak tergantikan. Sampai jumpa di puncak kesuksesan kawan!',
    instagram: '@farhan_pratama',
    phone: '08123456701',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-2',
    nisn: '0061234502',
    name: 'Amanda Putri Zahra',
    gender: 'P',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    quote: '"Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan Anda dapat mengubah dunia."',
    citaCita: 'Diplomat / Dubes RI',
    pesanKesan: 'Terima kasih Bapak Ibu Guru yang telah membimbing kami dengan penuh kesabaran dan cinta kasih.',
    instagram: '@amandazhr',
    phone: '08123456702',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-3',
    nisn: '0061234503',
    name: 'Bima Satria Wicaksono',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: '"Tidak ada rahasia untuk sukses. Sukses adalah hasil dari persiapan, kerja keras, dan belajar dari kegagalan."',
    citaCita: 'Software Architect AI',
    pesanKesan: 'Kenangan begadang ngerjain tugas fisika bakal jadi cerita indah saat kita reuni nanti.',
    instagram: '@bima_satria',
    phone: '08123456703',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-4',
    nisn: '0061234504',
    name: 'Nadhira Aulia Rahma',
    gender: 'P',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: '"Jadilah seperti bunga yang memberikan keharuman bahkan pada tangan yang telah menghancurkannya."',
    citaCita: 'Apoteker & Peneliti Farmasi',
    pesanKesan: 'Kelas XII MIPA 1 adalah rumah kedua yang selalu hangat dengan tawa dan saling menguatkan.',
    instagram: '@nadhira.aulia',
    phone: '08123456704',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-5',
    nisn: '0061234505',
    name: 'Clara Salsabila',
    gender: 'P',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote: '"Setiap akhir adalah awal dari babak baru yang lebih menantang dan membahagiakan."',
    citaCita: 'Konsultan Keuangan & Aktuaris',
    pesanKesan: 'Menagih uang kas kelas adalah tugas terberat tapi paling bikin kangen sekarang!',
    instagram: '@clarasalsa',
    phone: '08123456705',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-6',
    nisn: '0061234506',
    name: 'Dimas Arya Nugraha',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    quote: '"Kemenangan sejati adalah saat kita mampu menaklukkan rasa malas dalam diri sendiri."',
    citaCita: 'Pilot Komersial Maskapai Nasional',
    pesanKesan: 'Solidaritas MIPA 1 tiada tanding. Sukses selalu untuk kita semua angkatan 44!',
    instagram: '@dimas_arya',
    phone: '08123456706',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-7',
    nisn: '0061234507',
    name: 'Fajar Eka Saputra',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    quote: '"Kerjakan yang orang lain tidak mau lakukan hari ini, agar esok engkau bisa meraih yang orang lain tidak bisa."',
    citaCita: 'Teknik Sipil & Arsitek',
    pesanKesan: 'Semoga persahabatan kita tetap terjaga walau terpisah jarak dan waktu.',
    instagram: '@fajar_eka',
    phone: '08123456707',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-8',
    nisn: '0061234508',
    name: 'Talitha Aurelia',
    gender: 'P',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    quote: '"Kreativitas adalah kecerdasan yang sedang bersenang-senang."',
    citaCita: 'Desainer Grafis & Animator 3D',
    pesanKesan: 'Senang bisa mendokumentasikan setiap momen berharga kelas kita tercinta.',
    instagram: '@talitha_aurel',
    phone: '08123456708',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-9',
    nisn: '0061234509',
    name: 'Kevin Geraldo',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote: '"Champions keep playing until they get it right."',
    citaCita: 'Atlet Profesional & Sport Scientist',
    pesanKesan: 'Juara classmeeting bareng kalian adalah momen terbaik masa SMA!',
    instagram: '@kevin_geraldo',
    phone: '08123456709',
    classId: 'class-1',
    passwordHash: '123456'
  },
  {
    id: 'std-10',
    nisn: '0061234510',
    name: 'Zaidan Al-Farisi',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    quote: '"Sebaik-baik manusia adalah yang paling bermanfaat bagi sesamanya."',
    citaCita: 'Dosen Teknik Nuklir & Peneliti',
    pesanKesan: 'Jaga sholat, jaga integritas, dan selalu banggakan almamater tercinta.',
    instagram: '@zaidan_alfarisi',
    phone: '08123456710',
    classId: 'class-1',
    passwordHash: '123456'
  },

  // Class 2 (XII MIPA 2)
  {
    id: 'std-11',
    nisn: '0061234511',
    name: 'Rizky Aditya Wardhana',
    gender: 'L',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    quote: '"Never give up on what you really want to do."',
    citaCita: 'Teknik Perminyakan',
    pesanKesan: 'Terima kasih MIPA 2 atas segala canda tawa dan kerja samanya.',
    classId: 'class-2',
    passwordHash: '123456'
  },
  {
    id: 'std-12',
    nisn: '0061234512',
    name: 'Dinda Permata Sari',
    gender: 'P',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    quote: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    citaCita: 'Psikolog Klinis',
    pesanKesan: 'Masa SMA adalah masa paling berharga. Jangan pernah lupakan kenangan kita!',
    classId: 'class-2',
    passwordHash: '123456'
  },
  {
    id: 'std-13',
    nisn: '0061234513',
    name: 'Gita Maharani',
    gender: 'P',
    quote: '"Keberanian bukanlah ketiadaan rasa takut, melainkan kemampuan untuk terus melangkah."',
    citaCita: 'Akuntan Publik',
    classId: 'class-2',
    passwordHash: '123456'
  },
  {
    id: 'std-14',
    nisn: '0061234514',
    name: 'Haikal Zulkarnain',
    gender: 'L',
    quote: '"Think big, trust yourself and make it happen."',
    citaCita: 'Wirausahawan Teknologi',
    classId: 'class-2',
    passwordHash: '123456'
  },
  {
    id: 'std-15',
    nisn: '0061234515',
    name: 'Intan Nuraini',
    gender: 'P',
    quote: '"Spread love everywhere you go."',
    citaCita: 'Guru Bahasa Inggris',
    classId: 'class-2',
    passwordHash: '123456'
  },

  // Class 3 (XII IPS 1)
  {
    id: 'std-16',
    nisn: '0061234516',
    name: 'Satria Dewa Bagaskara',
    gender: 'L',
    quote: '"Kejujuran adalah modal utama dalam kepemimpinan."',
    citaCita: 'Jaksa Penuntut Umum',
    pesanKesan: 'IPS 1 adalah keluarga kedua tempat kami belajar nilai kemanusiaan.',
    classId: 'class-3',
    passwordHash: '123456'
  },
  {
    id: 'std-17',
    nisn: '0061234517',
    name: 'Tiara Andini Putri',
    gender: 'P',
    quote: '"Setiap mimpi besar dimulai dari langkah kecil yang konsisten."',
    citaCita: 'Manajer Pemasaran Global',
    classId: 'class-3',
    passwordHash: '123456'
  },
  {
    id: 'std-18',
    nisn: '0061234518',
    name: 'Vanesa Yolanda',
    gender: 'P',
    quote: '"Make everyday count."',
    citaCita: 'Jurnalis & Presenter TV',
    classId: 'class-3',
    passwordHash: '123456'
  },
  {
    id: 'std-19',
    nisn: '0061234519',
    name: 'Wahyu Hidayat',
    gender: 'L',
    quote: '"Kerja cerdas, kerja ikhlas, kerja tuntas."',
    citaCita: 'Perwira TNI Angkatan Udara',
    classId: 'class-3',
    passwordHash: '123456'
  },
  {
    id: 'std-20',
    nisn: '0061234520',
    name: 'Yasmine Nabilla',
    gender: 'P',
    quote: '"Be your own kind of beautiful."',
    citaCita: 'Notaris & Pejabat Pembuat Akta Tanah',
    classId: 'class-3',
    passwordHash: '123456'
  }
];

// 🔹 OSIS Members Default Data
export const DEFAULT_OSIS_MEMBERS: OsisMember[] = [
  {
    id: 'osis-1',
    name: 'Muhammad Farhan Pratama',
    nisn: '0061234501',
    gender: 'L',
    jabatan: 'Ketua Umum OSIS',
    bidang: 'Badan Pengurus Harian (BPH)',
    gradeAndClass: 'XI MIPA 1',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    quote: '"Memimpin dengan keteladanan, mengabdi dengan ketulusan."',
    order: 1,
    periode: '2026/2027'
  },
  {
    id: 'osis-2',
    name: 'Amanda Putri Zahra',
    nisn: '0061234502',
    gender: 'P',
    jabatan: 'Wakil Ketua OSIS',
    bidang: 'Badan Pengurus Harian (BPH)',
    gradeAndClass: 'XI MIPA 1',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    quote: '"Bersama melangkah, berkarya tanpa batas."',
    order: 2,
    periode: '2026/2027'
  },
  {
    id: 'osis-3',
    name: 'Nadhira Aulia Rahma',
    nisn: '0061234504',
    gender: 'P',
    jabatan: 'Sekretaris Umum',
    bidang: 'Administrasi & Kesekretariatan',
    gradeAndClass: 'XI MIPA 1',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote: '"Rapi dalam berkas, tepat dalam aksi."',
    order: 3,
    periode: '2026/2027'
  },
  {
    id: 'osis-4',
    name: 'Clara Salsabila',
    nisn: '0061234506',
    gender: 'P',
    jabatan: 'Bendahara Umum',
    bidang: 'Keuangan & Kewirausahaan',
    gradeAndClass: 'XI MIPA 1',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    quote: '"Transparan, akuntabel, dan amanah."',
    order: 4,
    periode: '2026/2027'
  },
  {
    id: 'osis-5',
    name: 'Satria Dewa Bagaskara',
    nisn: '0061234516',
    gender: 'L',
    jabatan: 'Ketua Sekbid 1 - Ketaqwaan & Budi Pekerti',
    bidang: 'Seksi Bidang 1',
    gradeAndClass: 'XI IPS 1',
    quote: '"Membangun karakter mulia berlandaskan iman."',
    order: 5,
    periode: '2026/2027'
  },
  {
    id: 'osis-6',
    name: 'Rizky Aditya Wardhana',
    nisn: '0061234511',
    gender: 'L',
    jabatan: 'Ketua Sekbid 2 - Kepribadian Unggul & Bela Negara',
    bidang: 'Seksi Bidang 2',
    gradeAndClass: 'XI MIPA 2',
    quote: '"Disiplin dan loyalitas untuk almamater."',
    order: 6,
    periode: '2026/2027'
  },
  {
    id: 'osis-7',
    name: 'Tiara Andini Putri',
    nisn: '0061234517',
    gender: 'P',
    jabatan: 'Ketua Sekbid 3 - Seni, Budaya & Olahraga',
    bidang: 'Seksi Bidang 3',
    gradeAndClass: 'XI IPS 1',
    quote: '"Ekspresikan karya, junjung sportivitas."',
    order: 7,
    periode: '2026/2027'
  }
];

// 🔹 Custom Admins Default Data
export const SUPER_ADMIN_CONFIG = {
  email: 'mumumimi353@gmail.com',
  username: 'admin_utama_kendali_penuh',
  name: 'Administrator Utama (Owner)',
  passwordHash: 'Kampoeng51'
};

export const DEFAULT_CUSTOM_ADMINS: CustomAdmin[] = [
  {
    id: 'adm-owner',
    username: 'admin_utama_kendali_penuh',
    email: 'mumumimi353@gmail.com',
    name: 'Administrator Utama (Owner)',
    passwordHash: 'Kampoeng51',
    role: 'super_admin',
    allowedScopes: ['all'],
    isSuperAdminOwner: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'adm-humas',
    username: 'admin_humas',
    email: 'humas@sman1nusantara.sch.id',
    name: 'Admin Hubungan Masyarakat & Publikasi',
    passwordHash: 'humas123',
    role: 'custom_admin',
    allowedScopes: ['announcements', 'gallery', 'slider', 'alumni', 'achievements'],
    isSuperAdminOwner: false,
    createdAt: '2024-02-01T00:00:00Z'
  },
  {
    id: 'adm-kesiswaan',
    username: 'admin_kesiswaan',
    email: 'kesiswaan@sman1nusantara.sch.id',
    name: 'Admin Kesiswaan & Eskul',
    passwordHash: 'kesiswaan123',
    role: 'custom_admin',
    allowedScopes: ['classes', 'eskul', 'osis', 'calendar_events', 'school_hours'],
    isSuperAdminOwner: false,
    createdAt: '2024-02-15T00:00:00Z'
  }
];

// 📢 9. Papan Pengumuman Penting / Urgent Banner
export const DEFAULT_URGENT_ANNOUNCEMENT: UrgentAnnouncement = {
  id: 'urg-01',
  isActive: true,
  title: '🚨 PEMBERITAHUAN MENDESAK: Penyesuaian Jam Belajar & Simulasi Ujian',
  content: 'Sehubungan dengan agenda gladi bersih asesmen nasional dan pemeliharaan server pusat, jam kepulangan siswa hari Jumat dimajukan ke pukul 11.30 WIB.',
  type: 'urgent',
  badgeText: 'PENGUMUMAN MENDESAK',
  actionText: 'Lihat Jadwal Lengkap',
  actionUrl: 'kalender',
  updatedAt: new Date().toISOString()
};

// 🎓 1. Alumni / Lulusan
export const DEFAULT_ALUMNI: AlumniItem[] = [
  {
    id: 'alm-1',
    name: 'Dr. Dimas Arya Pratama, M.Sc.',
    graduationYear: 2016,
    className: 'XII MIPA 1',
    nisn: '0019283741',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    currentOccupation: 'Peneliti Bioteknologi Medis di National University of Singapore (NUS)',
    quotePesanKesan: '"Fondasi riset dan kedisiplinan belajar saya terbangun kokoh dari laboratorium dan bimbingan guru-guru SMAN 1 Nusantara."',
    pesanAlumni: 'Jangan pernah ragu untuk bermimpi besar. Fasilitas dan kultur berprestasi di sekolah kita adalah bekal luar biasa untuk bersaing di panggung dunia.',
    successStory: 'Meraih beasiswa penuh S2 dan S3 di Singapura, mempublikasikan 12 jurnal internasional bereputasi Q1 tentang terapi genetik presisi.',
    instagram: '@dimas.aryap',
    linkedin: 'linkedin.com/in/dimas-arya-pratama',
    achievementHighlight: 'Alumni Berprestasi Global 2024 & Peraih Medali Perak IBO 2015',
    createdAt: '2024-01-10T08:00:00Z'
  },
  {
    id: 'alm-2',
    name: 'Sarah Felicia, S.Kom.',
    graduationYear: 2019,
    className: 'XII MIPA 2',
    nisn: '0029384752',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    currentOccupation: 'Senior AI Engineer di GoTo Financial',
    quotePesanKesan: '"Di sini saya pertama kali belajar coding di Lab Komputer sekolah hingga akhirnya bisa menciptakan produk berdampak luas."',
    pesanAlumni: 'Kuasai teknologi, asah kreativitas, dan tetap jaga etika serta rasa hormat kepada bapak ibu guru yang tak lelah mendidik.',
    successStory: 'Lulusan tercepat Teknik Informatika ITB dengan predikat Cum Laude dan memimpin pengembangan model AI fraud detection di Asia Tenggara.',
    instagram: '@sarahfelicia.dev',
    linkedin: 'linkedin.com/in/sarah-felicia-ai',
    achievementHighlight: 'Forbes 30 Under 30 Indonesia Nominee 2025',
    createdAt: '2024-02-15T09:30:00Z'
  },
  {
    id: 'alm-3',
    name: 'Kapten Inf. Bagas Danendra, S.T.Han.',
    graduationYear: 2015,
    className: 'XII IPS 1',
    nisn: '0018273645',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    currentOccupation: 'Perwira Pertama TNI Angkatan Darat & Peraih Adhi Makayasa',
    quotePesanKesan: '"Paskibra dan kepemimpinan OSIS SMAN 1 Nusantara membentuk mental kesatria, loyalitas, dan cinta tanah air dalam dada saya."',
    pesanAlumni: 'Pendidikan karakter di almamater tercinta ini adalah kompas hidup terbaik. Tetaplah menjadi pribadi berintegritas.',
    successStory: 'Lulusan terbaik Akademi Militer (Akmil) tahun 2019 peraih penghargaan Bintang Adhi Makayasa dan memimpin misi perdamaian PBB.',
    instagram: '@bagas_danendra',
    achievementHighlight: 'Adhi Makayasa Akmil 2019 & Alumni Inspiratif Kategori Bela Negara',
    createdAt: '2024-03-01T10:00:00Z'
  },
  {
    id: 'alm-4',
    name: 'Clarissa Maharani, S.Ked.',
    graduationYear: 2022,
    className: 'XII MIPA 1',
    nisn: '0048291029',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    currentOccupation: 'Dokter Muda (Co-Ass) FK Universitas Indonesia',
    quotePesanKesan: '"Kenangan masa putih abu-abu di kelas XII MIPA 1 selalu menjadi penyemangat saat menghadapi rutinitas stase rumah sakit."',
    pesanAlumni: 'Adik-adik kelas semangat pejuang SNBT dan UTBK! Percayalah usaha yang sungguh-sungguh diiringi doa restu guru tidak akan sia-sia.',
    successStory: 'Diterima di FK UI jalur SNBP nilai rapor tertinggi paralel se-angkatan dan aktif di relawan medis pelosok nusantara.',
    instagram: '@clarissamaharani',
    achievementHighlight: 'Juara 1 Karya Tulis Ilmiah Kedokteran Nasional 2024',
    createdAt: '2024-04-12T11:00:00Z'
  }
];

// 🏆 2 & 15. Prestasi & Kejuaraan
export const DEFAULT_ACHIEVEMENTS: SchoolAchievement[] = [
  {
    id: 'ach-1',
    title: 'Olimpiade Sains Nasional (OSN) Bidang Fisika',
    juara: 'Medali Emas (Juara 1 Nasional)',
    tingkat: 'Nasional',
    kategori: 'Akademik',
    tahunAjaran: '2024/2025',
    tanggal: '18 September 2024',
    namaPemenang: 'Rafi Ahmad Fauzi',
    className: 'XII MIPA 1',
    pembina: 'Drs. Bambang Hidayat, M.Si.',
    fotoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Menyabet medali emas dengan skor eksperimen tertinggi mengalahkan 120 peserta finalis dari 38 provinsi se-Indonesia.'
  },
  {
    id: 'ach-2',
    title: 'National High School Basketball Championship (DBL)',
    juara: 'Juara 1 Regional & MVP Trophy',
    tingkat: 'Provinsi',
    kategori: 'Olahraga',
    tahunAjaran: '2024/2025',
    tanggal: '12 Oktober 2024',
    namaPemenang: 'Tim Basket Putra Garuda Nusantara',
    className: 'Tim Kolaborasi Kelas X, XI & XII',
    pembina: 'Coach Hendra Gunawan & Rahmad Hidayat, S.Pd.',
    fotoUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Meraih trofi kampiun utama seri provinsi setelah menumbangkan juara bertahan di laga final dramatis dengan skor 68-64.'
  },
  {
    id: 'ach-3',
    title: 'International Youth Robotic Olympiad (IYRO)',
    juara: '1st Place Golden Trophy (Robo-Maze & AI Vision)',
    tingkat: 'Internasional',
    kategori: 'Teknologi & Robotik',
    tahunAjaran: '2024/2025',
    tanggal: '24 November 2024',
    namaPemenang: 'Aditiya Pratama & Satria Nugraha',
    className: 'XI MIPA 1 & XI MIPA 2',
    pembina: 'Arif Wibowo, S.Kom.',
    fotoUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Inovasi robot autonomous obstacle avoidance berbasis penglihatan komputer mengantarkan tim meraih predikat Best Engineering Design di Tokyo, Jepang.'
  },
  {
    id: 'ach-4',
    title: 'Festival & Lomba Seni Siswa Nasional (FLS2N) Tari Kreasi Tradisional',
    juara: 'Juara 1 Tingkat Provinsi',
    tingkat: 'Provinsi',
    kategori: 'Seni & Budaya',
    tahunAjaran: '2024/2025',
    tanggal: '05 Agustus 2024',
    namaPemenang: 'Sanggar Tari Sasana Budaya SMAN 1',
    className: 'Eskul Seni Tari',
    pembina: 'Endang Purwaningsih, S.Pd.',
    fotoUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Menampilkan komposisi tari kreasi "Gatra Pertiwi" yang mengangkat kelestarian alam nusantara dan lolos ke tahap grand final nasional.'
  },
  {
    id: 'ach-5',
    title: 'Lomba Cerdas Cermat 4 Pilar Kebangsaan MPR RI',
    juara: 'Juara 1 Tingkat Kabupaten / Kota',
    tingkat: 'Kabupaten',
    kategori: 'Akademik',
    tahunAjaran: '2023/2024',
    tanggal: '15 Maret 2024',
    namaPemenang: 'Tim Konstitusi Muda SMAN 1',
    className: 'XII IPS 1',
    pembina: 'Dra. Sri Wahyuni, M.Pd.',
    fotoUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    deskripsi: 'Tampil unggul dan mendominasi sesi debat konstitusional serta uji materi pemahaman UUD 1945.'
  }
];

// 📅 3. Kalender Akademik
export const DEFAULT_ACADEMIC_CALENDAR: AcademicCalendarEvent[] = [
  {
    id: 'cal-1',
    title: 'Hari Pertama Masuk Sekolah & Masa Pengenalan Lingkungan Sekolah (MPLS)',
    category: 'Kegiatan Sekolah',
    startDate: '2026-07-13',
    endDate: '2026-07-17',
    month: 7,
    academicYear: '2026/2027',
    description: 'Penyambutan peserta didik baru kelas X dan penataan kelas XI serta XII.',
    colorTag: 'purple'
  },
  {
    id: 'cal-2',
    title: 'Upacara HUT Proklamasi Kemerdekaan RI Ke-81 & Parade Budaya',
    category: 'Libur Nasional',
    startDate: '2026-08-17',
    month: 8,
    academicYear: '2026/2027',
    description: 'Upacara bendera gabungan dan penganugerahan lencana prestasi siswa.',
    colorTag: 'red'
  },
  {
    id: 'cal-3',
    title: 'Penilaian Tengah Semester (PTS) Ganjil',
    category: 'Ujian',
    startDate: '2026-09-21',
    endDate: '2026-09-28',
    month: 9,
    academicYear: '2026/2027',
    description: 'Ujian berbasis komputer (CBT) serentak seluruh jenjang kelas.',
    colorTag: 'blue'
  },
  {
    id: 'cal-4',
    title: 'Pentas Seni & Bulan Bahasa "Mahakarya Nusantara"',
    category: 'Kegiatan Sekolah',
    startDate: '2026-10-27',
    endDate: '2026-10-28',
    month: 10,
    academicYear: '2026/2027',
    description: 'Pentas teater, bazar kewirausahaan OSIS, dan konser kolaborasi ekskul musik.',
    colorTag: 'purple'
  },
  {
    id: 'cal-5',
    title: 'Penilaian Akhir Semester (PAS) Ganjil',
    category: 'Ujian',
    startDate: '2026-12-01',
    endDate: '2026-12-10',
    month: 12,
    academicYear: '2026/2027',
    description: 'Evaluasi akhir semester gasal seluruh mata pelajaran.',
    colorTag: 'blue'
  },
  {
    id: 'cal-6',
    title: 'Pembagian Laporan Hasil Belajar (Rapor) Semester Ganjil',
    category: 'Rapor',
    startDate: '2026-12-19',
    month: 12,
    academicYear: '2026/2027',
    description: 'Pertemuan wali murid dan penyerahan buku rapor digital.',
    colorTag: 'emerald'
  },
  {
    id: 'cal-7',
    title: 'Libur Akhir Semester Ganjil & Tahun Baru',
    category: 'Libur Semester',
    startDate: '2026-12-21',
    endDate: '2027-01-02',
    month: 12,
    academicYear: '2026/2027',
    description: 'Masa libur semester gasal bagi seluruh siswa.',
    colorTag: 'teal'
  },
  {
    id: 'cal-8',
    title: 'Hari Pertama Masuk Semester Genap',
    category: 'Kegiatan Sekolah',
    startDate: '2027-01-04',
    month: 1,
    academicYear: '2026/2027',
    description: 'Awal kegiatan belajar mengajar semester genap TA 2026/2027.',
    colorTag: 'purple'
  }
];

// 📚 4 & 19. Jadwal Pelajaran Default (Per Hari & Kelas)
export const DEFAULT_CLASS_SCHEDULES: ClassScheduleItem[] = [
  // XII MIPA 1 (cls-1)
  { id: 'sch-1', classId: 'cls-1', day: 'Senin', timeSlot: '07:00 - 07:45', subject: 'Upacara Bendera', teacherName: 'Tim Kesiswaan', room: 'Lapangan Utama' },
  { id: 'sch-2', classId: 'cls-1', day: 'Senin', timeSlot: '07:45 - 09:45', subject: 'Fisika Peminatan', teacherName: 'Drs. Bambang Hidayat, M.Si.', room: 'Lab Fisika' },
  { id: 'sch-3', classId: 'cls-1', day: 'Senin', timeSlot: '10:15 - 12:00', subject: 'Matematika Peminatan', teacherName: 'Ratna Sari, M.Pd.', room: 'R. 12 MIPA 1' },
  { id: 'sch-4', classId: 'cls-1', day: 'Senin', timeSlot: '12:45 - 15:30', subject: 'Bahasa Indonesia', teacherName: 'Dra. Sri Wahyuni, M.Pd.', room: 'R. 12 MIPA 1' },

  { id: 'sch-5', classId: 'cls-1', day: 'Selasa', timeSlot: '07:00 - 09:45', subject: 'Kimia', teacherName: 'Ir. Hendro Susilo, M.T.', room: 'Lab Kimia' },
  { id: 'sch-6', classId: 'cls-1', day: 'Selasa', timeSlot: '10:15 - 12:00', subject: 'Biologi', teacherName: 'Siti Rahmawati, S.Pd., M.Si.', room: 'Lab Biologi' },
  { id: 'sch-7', classId: 'cls-1', day: 'Selasa', timeSlot: '12:45 - 15:30', subject: 'Bahasa Inggris Wajib', teacherName: 'David Lee, M.Ed.', room: 'R. 12 MIPA 1' },

  { id: 'sch-8', classId: 'cls-1', day: 'Rabu', timeSlot: '07:00 - 09:45', subject: 'Matematika Wajib', teacherName: 'Ratna Sari, M.Pd.', room: 'R. 12 MIPA 1' },
  { id: 'sch-9', classId: 'cls-1', day: 'Rabu', timeSlot: '10:15 - 12:00', subject: 'Pendidikan Agama & Budi Pekerti', teacherName: 'Ahmad Syaifullah, M.Pd.I.', room: 'R. 12 MIPA 1' },
  { id: 'sch-10', classId: 'cls-1', day: 'Rabu', timeSlot: '12:45 - 15:30', subject: 'Informatika & AI', teacherName: 'Arif Wibowo, S.Kom.', room: 'Lab Komputer AI' },

  { id: 'sch-11', classId: 'cls-1', day: 'Kamis', timeSlot: '07:00 - 09:45', subject: 'Pendidikan Jasmani & Olahraga', teacherName: 'Rahmad Hidayat, S.Pd.', room: 'Gelanggang Olahraga' },
  { id: 'sch-12', classId: 'cls-1', day: 'Kamis', timeSlot: '10:15 - 12:00', subject: 'Sejarah Indonesia', teacherName: 'Agus Salim, S.Pd.', room: 'R. 12 MIPA 1' },
  { id: 'sch-13', classId: 'cls-1', day: 'Kamis', timeSlot: '12:45 - 15:30', subject: 'Seni Budaya & Prakarya', teacherName: 'Endang Purwaningsih, S.Pd.', room: 'Studio Seni' },

  { id: 'sch-14', classId: 'cls-1', day: 'Jumat', timeSlot: '07:00 - 08:30', subject: 'Senam Pagi & Literasi Religi', teacherName: 'Wali Kelas & Guru BK', room: 'Lapangan Utama' },
  { id: 'sch-15', classId: 'cls-1', day: 'Jumat', timeSlot: '08:30 - 09:45', subject: 'PPKn (Pendidikan Pancasila)', teacherName: 'Dra. Sri Wahyuni, M.Pd.', room: 'R. 12 MIPA 1' },
  { id: 'sch-16', classId: 'cls-1', day: 'Jumat', timeSlot: '10:15 - 11:30', subject: 'Bimbingan Konseling & Karir', teacherName: 'Dra. Hj. Nurul Hidayati, M.Psi.', room: 'R. 12 MIPA 1' },

  // XII MIPA 2 (cls-2)
  { id: 'sch-17', classId: 'cls-2', day: 'Senin', timeSlot: '07:00 - 07:45', subject: 'Upacara Bendera', teacherName: 'Tim Kesiswaan', room: 'Lapangan Utama' },
  { id: 'sch-18', classId: 'cls-2', day: 'Senin', timeSlot: '07:45 - 09:45', subject: 'Biologi Peminatan', teacherName: 'Siti Rahmawati, S.Pd., M.Si.', room: 'Lab Biologi' },
  { id: 'sch-19', classId: 'cls-2', day: 'Senin', timeSlot: '10:15 - 12:00', subject: 'Fisika Peminatan', teacherName: 'Drs. Bambang Hidayat, M.Si.', room: 'Lab Fisika' },
  { id: 'sch-20', classId: 'cls-2', day: 'Senin', timeSlot: '12:45 - 15:30', subject: 'Matematika Peminatan', teacherName: 'Ratna Sari, M.Pd.', room: 'R. 12 MIPA 2' }
];

// ⏰ 5. Jam Sekolah (Bel Masuk, Istirahat 1 & 2, Bel Pulang)
export const DEFAULT_BELL_SCHEDULES: SchoolBellSchedule[] = [
  {
    id: 'bell-mon',
    day: 'Senin',
    jamMasuk: '07:00',
    istirahat1Mulai: '09:45',
    istirahat1Selesai: '10:15',
    istirahat2Mulai: '12:00',
    istirahat2Selesai: '12:45',
    jamPulang: '15:30',
    keterangan: 'Upacara Bendera Kemerdekaan & Kedisiplinan Pukul 07:00 - 07:45 WIB'
  },
  {
    id: 'bell-tue',
    day: 'Selasa',
    jamMasuk: '07:00',
    istirahat1Mulai: '09:45',
    istirahat1Selesai: '10:15',
    istirahat2Mulai: '12:00',
    istirahat2Selesai: '12:45',
    jamPulang: '15:30',
    keterangan: 'Literasi Pagi 15 Menit & KBM Reguler 8 Jam Pelajaran'
  },
  {
    id: 'bell-wed',
    day: 'Rabu',
    jamMasuk: '07:00',
    istirahat1Mulai: '09:45',
    istirahat1Selesai: '10:15',
    istirahat2Mulai: '12:00',
    istirahat2Selesai: '12:45',
    jamPulang: '15:30',
    keterangan: 'Pemberdayaan Bahasa Asing (English & Japanese Day)'
  },
  {
    id: 'bell-thu',
    day: 'Kamis',
    jamMasuk: '07:00',
    istirahat1Mulai: '09:45',
    istirahat1Selesai: '10:15',
    istirahat2Mulai: '12:00',
    istirahat2Selesai: '12:45',
    jamPulang: '15:30',
    keterangan: 'Mengenakan Batik Seragam Sekolah & Kegiatan Praktikum Laboratorium'
  },
  {
    id: 'bell-fri',
    day: 'Jumat',
    jamMasuk: '06:45',
    istirahat1Mulai: '09:45',
    istirahat1Selesai: '10:15',
    istirahat2Mulai: '11:30',
    istirahat2Selesai: '13:00',
    jamPulang: '13:30',
    keterangan: 'Senam Kebugaran Jasmani / Sholat Dhuha Pagi & Sholat Jumat Berjamaah di Masjid Sekolah'
  },
  {
    id: 'bell-sat',
    day: 'Sabtu',
    jamMasuk: '07:30',
    istirahat1Mulai: '10:00',
    istirahat1Selesai: '10:30',
    istirahat2Mulai: '12:00',
    istirahat2Selesai: '12:30',
    jamPulang: '14:00',
    keterangan: 'Hari Khusus Kegiatan Ekstrakurikuler, Latihan Paskibra, Pramuka & Pembinaan Olimpiade'
  }
];

// 📖 6. Perpustakaan Digital
export const DEFAULT_LIBRARY_BOOKS: LibraryBook[] = [
  {
    id: 'book-1',
    title: 'Fisika Kuantum Konseptual untuk SMA & Olimpiade',
    author: 'Prof. Dr. Yohanes Surya & Tim Fisika',
    publisher: 'Pustaka Sains Mandiri',
    year: 2023,
    isbn: '978-602-8921-12-4',
    category: 'Sains & Matematika',
    coverUrl: 'https://images.unsplash.com/photo-1532012164546-f432f2e37b73?auto=format&fit=crop&w=600&q=80',
    stockAvailable: 8,
    totalStock: 10,
    isEbook: true,
    ebookUrl: 'https://example.com/ebooks/fisika-kuantum.pdf',
    synopsis: 'Panduan komprehensif memahami mekanika gelombang, dualitas partikel, dan mekanika kuantum modern dengan ilustrasi intuitif dan soal pembahasan olimpiade.',
    locationRack: 'Rak Sains A-03',
    borrowCount: 64
  },
  {
    id: 'book-2',
    title: 'Algoritma Pemrograman & Logika Komputasi Berbasis Python & C++',
    author: 'Rian Hidayat, S.Kom., M.T.',
    publisher: 'Informatika Digital Press',
    year: 2024,
    isbn: '978-623-7721-08-9',
    category: 'Komputer & Teknologi',
    coverUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
    stockAvailable: 5,
    totalStock: 6,
    isEbook: true,
    ebookUrl: 'https://example.com/ebooks/algoritma-python.pdf',
    synopsis: 'Buku ajar resmi persiapan Olimpiade Sains Nasional Bidang Informatika/Komputer. Berisi struktur data, graf, pemrograman dinamis, dan teknik optimasi algoritma.',
    locationRack: 'Rak Teknologi IT-01',
    borrowCount: 92
  },
  {
    id: 'book-3',
    title: 'Sejarah Peradaban Nusantara: Dari Sriwijaya Hingga Indonesia Modern',
    author: 'Dr. Sartono Kartodirdjo & Tim Sejarah',
    publisher: 'Gramedia Widiasarana',
    year: 2022,
    isbn: '978-979-4039-44-1',
    category: 'Sejarah & Sosial',
    coverUrl: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80',
    stockAvailable: 12,
    totalStock: 15,
    isEbook: false,
    synopsis: 'Kajian mendalam tentang pasang surut maritim kepulauan nusantara, diplomasi kerajaan kuno, masa pergerakan nasional, hingga lahirnya proklamasi 1945.',
    locationRack: 'Rak Sejarah B-02',
    borrowCount: 45
  },
  {
    id: 'book-4',
    title: 'Laskar Pelangi (Edisi Spesial Koleksi Sekolah)',
    author: 'Andrea Hirata',
    publisher: 'Bentang Pustaka',
    year: 2021,
    isbn: '978-602-291-013-8',
    category: 'Fiksi & Novel',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80',
    stockAvailable: 4,
    totalStock: 8,
    isEbook: true,
    synopsis: 'Kisah abadi penuh inspirasi tentang tekad sepuluh anak Belitong dalam memperjuangkan hak belajar dan keajaiban persahabatan di tengah keterbatasan.',
    locationRack: 'Rak Sastra & Novel N-05',
    borrowCount: 148
  },
  {
    id: 'book-5',
    title: 'Mastering English Grammar & TOEFL iBT Preparation for High School',
    author: 'Sarah Jenkins, M.A. & Drs. Supriyanto',
    publisher: 'Cambridge Learning Indo',
    year: 2024,
    isbn: '978-110-8432-90-1',
    category: 'Bahasa & Sastra',
    coverUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    stockAvailable: 7,
    totalStock: 10,
    isEbook: true,
    synopsis: 'Modul latihan intensif TOEFL, grammar praktis, tips reading comprehension, dan listening test bank lengkap dengan audio CD.',
    locationRack: 'Rak Bahasa C-01',
    borrowCount: 110
  }
];

// 🩺 7. UKS & Kesehatan
export const DEFAULT_UKS_MEDICS: UksMedicStaff[] = [
  {
    id: 'med-1',
    name: 'dr. Farhan Syahputra, Sp.A.',
    role: 'Dokter Sekolah',
    scheduleDay: 'Senin & Kamis',
    scheduleHours: '09:00 - 13:00 WIB',
    phone: '+62-812-3344-5566',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'med-2',
    name: 'Ns. Ratri Kumalasari, S.Kep.',
    role: 'Perawat UKS',
    scheduleDay: 'Senin s/d Jumat (Standby Penuh)',
    scheduleHours: '07:00 - 15:30 WIB',
    phone: '+62-813-8899-1122',
    photoUrl: 'https://images.unsplash.com/photo-1594824813501-44754714f31c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'med-3',
    name: 'Dra. Hj. Nurul Hidayati, M.Psi.',
    role: 'Konselor Kesehatan',
    scheduleDay: 'Selasa & Jumat',
    scheduleHours: '08:30 - 14:00 WIB',
    phone: '+62-821-4455-7788',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

export const DEFAULT_UKS_MEDICINES: UksMedicine[] = [
  { id: 'med-p3k-1', nama: 'Povidone Iodine (Betadine Antiseptik)', kategori: 'P3K & Luar', fungsi: 'Antiseptik pembersih luka gores / luka terbuka', stok: 12, satuan: 'Botol', tersedia: true },
  { id: 'med-p3k-2', nama: 'Plester Cepat & Kasa Steril Roll', kategori: 'P3K & Luar', fungsi: 'Penutup luka dan pembalut cedera ringan', stok: 45, satuan: 'Kotak', tersedia: true },
  { id: 'med-p3k-3', nama: 'Paracetamol 500mg', kategori: 'Demam & Flu', fungsi: 'Pereda sakit kepala, nyeri tubuh, dan penurun demam', stok: 20, satuan: 'Strip', tersedia: true },
  { id: 'med-p3k-4', nama: 'Antasida Doen (Mylanta / Polysilane)', kategori: 'Maag & Lambung', fungsi: 'Meredakan perih lambung, maag kambuh, dan mual', stok: 18, satuan: 'Strip', tersedia: true },
  { id: 'med-p3k-5', nama: 'Minyak Kayu Putih & Aromaterapi', kategori: 'Minyak & Balsem', fungsi: 'Mengatasi pusing, perut kembung, dan masuk angin', stok: 10, satuan: 'Botol', tersedia: true },
  { id: 'med-p3k-6', nama: 'Oralit Sachet & Vitamin C 500mg', kategori: 'Vitamin & Suplemen', fungsi: 'Mencegah dehidrasi saat pingsan dan menjaga imunitas', stok: 35, satuan: 'Sachet', tersedia: true }
];

export const DEFAULT_UKS_IMMUNIZATIONS: UksImmunization[] = [
  {
    id: 'imun-1',
    title: 'Skrining Kesehatan Berkala & Pemeriksaan Tajam Penglihatan Mata',
    targetClass: 'Seluruh Siswa Kelas X, XI & XII',
    date: '15 Oktober 2024',
    petugas: 'Tim Puskesmas Merdeka & Dokter Sekolah',
    deskripsi: 'Pemeriksaan tensi darah, hemoglobin, visus mata, postur tulang belakang, dan kebugaran jasmani.',
    status: 'Selesai'
  },
  {
    id: 'imun-2',
    title: 'Program Imunisasi Lanjutan Difteri Tetanus (Td) & Cek Golongan Darah',
    targetClass: 'Siswa Kelas X',
    date: '10 November 2024',
    petugas: 'Dinas Kesehatan Kota & Tim Medis UKS',
    deskripsi: 'Pemberian vaksin penguat imunitas dan penerbitan kartu identitas golongan darah siswa.',
    status: 'Akan Datang'
  }
];

export const DEFAULT_UKS_HEALTH_TIPS: UksHealthTip[] = [
  {
    id: 'tip-1',
    title: 'Pertolongan Pertama Saat Teman Mengalami Pingsan di Lapangan',
    category: 'Pertolongan Pertama',
    content: '1. Segera pindahkan ke tempat teduh dan sirkulasi udara baik. 2. Baringkan terlentang dengan posisi kaki lebih tinggi 30cm dari jantung. 3. Longgarkan pakaian ketat/dasi. 4. Jangan beri minum sebelum sadar penuh. 5. Dekatkan minyak kayu putih ke hidung.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tip-2',
    title: 'Pola Istirahat & Menjaga Kesehatan Mata di Depan Layar Komputer',
    category: 'Gaya Hidup Sehat',
    content: 'Terapkan aturan 20-20-20: Setiap 20 menit menatap layar laptop/HP, alihkan pandangan melihat objek berjarak 20 kaki (6 meter) selama minimal 20 detik. Jangan membaca dalam ruangan gelap dan cukupi minum air putih 2 liter per hari.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80'
  }
];

// 💬 10. Pesan Internal Sekolah
export const DEFAULT_INTERNAL_MESSAGES: InternalMessage[] = [
  {
    id: 'msg-1',
    senderName: 'Dra. Hj. Sri Wahyuni, M.Pd.',
    senderRole: 'Wakil Kepala Sekolah Bidang Kurikulum',
    targetType: 'all_students',
    title: '📢 Jadwal Pelaksanaan Ujian Penilaian Akhir Semester (PAS) Gasal',
    content: 'Diberitahukan kepada seluruh siswa bahwa kartu ujian PAS dapat diunduh mulai tanggal 25 November 2024 melalui portal. Pastikan tidak ada tanggungan peminjaman buku di perpustakaan.',
    priority: 'high',
    createdAt: '2024-11-20T08:00:00Z',
    readBy: []
  },
  {
    id: 'msg-2',
    senderName: 'Drs. Bambang Hidayat, M.Si.',
    senderRole: 'Wali Kelas XII MIPA 1',
    targetType: 'specific_class',
    targetClassId: 'cls-1',
    targetClassName: 'XII MIPA 1',
    title: '🧪 Persiapan Ujian Praktik Laboratorium Fisika Hari Selasa',
    content: 'Anak-anakku kelas XII MIPA 1, harap membawa jas lab bersih dan modul laporan sementara praktikum induksi elektromagnetik pada pertemuan besok pukul 07.45 WIB.',
    priority: 'normal',
    createdAt: '2024-11-22T14:30:00Z',
    readBy: []
  }
];

// 📜 14. Timeline Sejarah Sekolah & 📸 16. Foto Lama / Arsip Sejarah
export const DEFAULT_HISTORY_EVENTS: SchoolHistoryEvent[] = [
  {
    id: 'hist-1',
    year: 1978,
    title: 'Pembangunan Gedung Pertama & Peresmian Sekolah',
    description: 'Diresmikan oleh Menteri Pendidikan dan Kebudayaan RI dengan 6 ruang kelas, 1 ruang guru, dan 120 siswa angkatan perintis pertama.',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    tag: 'Tonggak Awal'
  },
  {
    id: 'hist-2',
    year: 1989,
    title: 'Pembangunan Laboratorium IPA & Gelanggang Olahraga',
    description: 'Ekspansi sarana prasarana sekolah untuk menunjang prestasi sains dan atletik siswa di tingkat regional Jawa Timur.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    tag: 'Ekspansi Fasilitas'
  },
  {
    id: 'hist-3',
    year: 2004,
    title: 'Perintisan Rintisan Sekolah Bertaraf Internasional (RSBI)',
    description: 'Menjadi sekolah rujukan berbasis kurikulum bilingual dan mengantarkan delegasi perdana ke Olimpiade Sains Internasional di Jerman.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    tag: 'Prestasi Global'
  },
  {
    id: 'hist-4',
    year: 2018,
    title: 'Pembangunan Graha Cendekia & Transformasi Smart School',
    description: 'Peresmian auditorium berkapasitas 1.000 kursi dan digitalisasi sistem pembelajaran terpadu berbasis cloud.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tag: 'Era Digital'
  },
  {
    id: 'hist-5',
    year: 2024,
    title: 'Peringatan Lustrum Ke-9 & Akreditasi A Unggul Berkelanjutan',
    description: 'Merayakan 46 tahun dedikasi melahirkan generasi pemimpin bangsa berkarakter mulia dengan lebih dari 18.000 alumni tersebar di seluruh dunia.',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    tag: 'Mahakarya 46 Tahun'
  }
];

export const DEFAULT_OLD_ARCHIVE_PHOTOS: OldArchivePhoto[] = [
  {
    id: 'old-1',
    title: 'Gedung Utama Tampak Depan Tahun 1982',
    decade: '1980-an',
    yearEstimated: 1982,
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    caption: 'Suasana asri halaman depan sekolah berpagar kayu dengan pohon beringin yang rindang di era angkatan ke-4.',
    uploadedBy: 'Arsip Sekolah Tempo Dulu',
    likes: 84
  },
  {
    id: 'old-2',
    title: 'Dewan Guru & Kepala Sekolah Pertama Tahun 1979',
    decade: '1970-an',
    yearEstimated: 1979,
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    caption: 'Foto bersama para bapak ibu guru perintis berbalut seragam safari dinas penuh wibawa dan dedikasi.',
    uploadedBy: 'Dokumentasi Alumni 1979',
    likes: 120
  },
  {
    id: 'old-3',
    title: 'Upacara Bendera HUT RI Tahun 1995',
    decade: '1990-an',
    yearEstimated: 1995,
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    caption: 'Kerapian barisan paskibra dan antusiasme siswa masa 90-an dengan seragam putih abu-abu ikonik.',
    uploadedBy: 'Arsip Humas 1995',
    likes: 67
  },
  {
    id: 'old-4',
    title: 'Perayaan Juara Lomba Marching Band Nasional 2005',
    decade: '2000-an',
    yearEstimated: 2005,
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    caption: 'Momen euforia saat tim drumband sekolah membawa pulang piala presiden ke Malang.',
    uploadedBy: 'Alumni Marching Band',
    likes: 95
  }
];

// 🖨️ 17. Cetak Foto Kenangan
export const DEFAULT_PHOTO_PRINT_ORDERS: PhotoPrintOrder[] = [
  {
    id: 'ord-1',
    orderNumber: 'ORD-2024-001',
    studentName: 'Ahmad Fauzan',
    studentClass: 'XII MIPA 1',
    contactPhone: '081234567890',
    photoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
    photoTitle: 'Foto Bersama Kelas XII MIPA 1 Studio Graduation',
    printSize: '10R (20x25cm)',
    paperType: 'Glossy',
    quantity: 2,
    pricePerUnit: 15000,
    totalPrice: 30000,
    notes: 'Mohon dibingkai laminasi anti gores jika memungkinkan.',
    status: 'ready_for_pickup',
    createdAt: '2024-11-21T09:00:00Z'
  },
  {
    id: 'ord-2',
    orderNumber: 'ORD-2024-002',
    studentName: 'Nabila Putri Azzahra',
    studentClass: 'XI MIPA 1',
    contactPhone: '081398765432',
    photoUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    photoTitle: 'Pentas Seni Musik Akustik OSIS',
    printSize: '4R (10x15cm)',
    paperType: 'Matte / Doff',
    quantity: 5,
    pricePerUnit: 3000,
    totalPrice: 15000,
    notes: 'Kertas doff agar tidak meninggalkan bekas sidik jari.',
    status: 'completed',
    createdAt: '2024-11-22T10:15:00Z',
    completedAt: '2024-11-23T14:00:00Z'
  }
];

// 🏅 18. Peringkat Siswa Tertinggi — Semua Siswa (Seluruh Sekolah)
export const DEFAULT_SCHOOL_TOP_RANKS: SchoolTopRankStudent[] = [
  {
    id: 'top-1',
    rank: 1,
    studentName: 'Ahmad Fauzan Pratama',
    nisn: '0061234501',
    className: 'XII MIPA 1',
    grade: 'Kelas 12',
    averageScore: 98.65,
    semester: 'Semester Ganjil',
    academicYear: '2026/2027',
    achievementsSummary: 'Peraih Medali Emas OSN Fisika Nasional & Juara 1 KSN Sains Terpadu',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-2',
    rank: 2,
    studentName: 'Nabila Putri Azzahra',
    nisn: '0061234502',
    className: 'XII MIPA 1',
    grade: 'Kelas 12',
    averageScore: 97.90,
    semester: 'Semester Ganjil',
    academicYear: '2026/2027',
    achievementsSummary: 'Juara 1 Debat Bahasa Inggris Nasional & Penerima Beasiswa Indonesia Maju',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-3',
    rank: 3,
    studentName: 'Rizky Aditya Wardhana',
    nisn: '0061234511',
    className: 'XI MIPA 2',
    grade: 'Kelas 11',
    averageScore: 97.45,
    semester: 'Semester Ganjil',
    academicYear: '2026/2027',
    achievementsSummary: 'Peraih Medali Perak International Youth Robotic Olympiad (IYRO) Tokyo',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-4',
    rank: 4,
    studentName: 'Satria Dewa Bagaskara',
    nisn: '0061234516',
    className: 'XI IPS 1',
    grade: 'Kelas 11',
    averageScore: 96.80,
    semester: 'Semester Ganjil',
    academicYear: '2026/2027',
    achievementsSummary: 'Juara 1 Cerdas Cermat 4 Pilar MPR RI & Pengurus BPH OSIS Terinspiratif',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'top-5',
    rank: 5,
    studentName: 'Clara Salsabila',
    nisn: '0061234506',
    className: 'XII MIPA 1',
    grade: 'Kelas 12',
    averageScore: 96.50,
    semester: 'Semester Ganjil',
    academicYear: '2026/2027',
    achievementsSummary: 'Penulis Buku Kumpulan Esai Sosial & Juara 2 Karya Ilmiah Remaja Provinsi',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  }
];

// 🎓 13. Halaman Khusus Perpisahan Angkatan
export const DEFAULT_FAREWELL_BATCH: FarewellBatchData = {
  id: 'fw-2025',
  academicYear: '2024/2025',
  batchNumber: 'Angkatan Ke-45 "Adhirajasa"',
  themeTitle: 'Menyulam Kenangan Putih Abu-Abu, Menggapai Cakrawala Masa Depan',
  farewellVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  batchCoverPhoto: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
  teacherGroupPhoto: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
  closingMessage: 'Tiga tahun yang penuh tawa, perjuangan lembar tugas, deru sorak di lapangan, dan pelukan hangat sahabat. Gerbang almamater mungkin tertutup di belakang kita, namun jejak langkah kita akan terus abadi mengukir kejayaan bangsa. Terima kasih bapak dan ibu guru tercinta!',
  virtualYearbookPdfUrl: 'https://example.com/yearbook-adhirajasa.pdf'
};

// 📦 TAHAP 6: Data Terarsip Default
export const DEFAULT_ARCHIVED_RECORDS: ArchivedItemRecord[] = [
  {
    id: 'arc-001',
    originalId: 'ann-old-1',
    category: 'announcements',
    title: 'Pengumuman Libur Awal Ramadhan 1445 H',
    data: { title: 'Pengumuman Libur Awal Ramadhan 1445 H', date: '10 Maret 2024', category: 'Libur & Ujian' },
    archivedAt: '2024-04-01T00:00:00Z',
    archivedBy: 'Administrator Utama',
    academicYear: '2023/2024',
    approxSizeMb: 1.2
  },
  {
    id: 'arc-002',
    originalId: 'ach-old-1',
    category: 'achievements',
    title: 'Juara 3 Olimpiade Matematika Wilayah Timur 2023',
    data: { title: 'Juara 3 Olimpiade Matematika Wilayah Timur 2023', tahunAjaran: '2022/2023' },
    archivedAt: '2024-01-15T00:00:00Z',
    archivedBy: 'Administrator Utama',
    academicYear: '2022/2023',
    approxSizeMb: 3.5
  }
];

export const DEFAULT_CALENDAR_EVENTS = DEFAULT_ACADEMIC_CALENDAR;
export const DEFAULT_CONTACT_MESSAGES: ContactMessage[] = [
  {
    id: 'cnt-1',
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    phone: '08123456789',
    subject: 'Informasi Pendaftaran Siswa Baru (PPDB)',
    message: 'Selamat pagi, mohon informasi terkait kuota dan jalur prestasi PPDB tahun ajaran baru.',
    status: 'replied',
    createdAt: '2024-11-20T10:00:00Z',
    replyMessage: 'Halo Bapak Budi, informasi PPDB telah kami kirimkan via email dan dapat diunduh di menu Pengumuman.',
    repliedAt: '2024-11-20T14:30:00Z'
  },
  {
    id: 'cnt-2',
    name: 'Siti Rahmawati',
    email: 'siti.rahma@example.com',
    phone: '08567891234',
    subject: 'Kunjungan Studi Banding OSIS',
    message: 'Kami dari pengurus OSIS SMA Teladan bermaksud mengajukan permohonan studi banding ke SMA Nusantara.',
    status: 'read',
    createdAt: '2024-11-22T08:15:00Z'
  }
];

export const DEFAULT_PHOTO_PRIVACY: PhotoPrivacyMode = 'public';

export const DEFAULT_VISITOR_STATS: VisitorStatsRecord = {
  totalViews: 14250,
  dailyViews: 380,
  monthlyViews: 8640,
  uniqueVisitors: 3200,
  storageUsedMb: 45.8,
  totalStorageQuotaMb: 500,
  topPages: [
    { pageName: 'Galeri Foto & Video', viewCount: 6840 },
    { pageName: 'Profil Guru & Staf', viewCount: 2310 },
    { pageName: 'Jadwal Pelajaran', viewCount: 1980 }
  ]
};

// 🍱 11. Data Stand & Menu Kantin Sekolah
export const DEFAULT_CANTEEN_ITEMS: CanteenItem[] = [
  {
    id: 'cnt-item-1',
    name: 'Nasi Goreng Nusantara Spesial Telur',
    category: 'Makanan Berat',
    price: 15000,
    stallName: 'Stand Bu Siti Barokah',
    standName: 'Stand Bu Siti Barokah',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
    photoUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
    description: 'Nasi goreng harum rempah nusantara dengan suwiran ayam, acar segar, kerupuk udang, dan telur ceplok.',
    isAvailable: true,
    preparationTimeMinutes: 10
  },
  {
    id: 'cnt-item-2',
    name: 'Mie Ayam Bakso Jamur Pangsit',
    category: 'Makanan Berat',
    price: 14000,
    stallName: 'Stand Mas Joko Berkah',
    standName: 'Stand Mas Joko Berkah',
    imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    photoUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: 'Mie kenyal gurih dengan topping ayam manis gurih, 2 bakso sapi asli, dan pangsit goreng renyah.',
    isAvailable: true,
    preparationTimeMinutes: 8
  },
  {
    id: 'cnt-item-3',
    name: 'Salad Buah Segar Keju Yoghurt',
    category: 'Menu Sehat',
    price: 12000,
    stallName: 'Stand Sehat Ceria',
    standName: 'Stand Sehat Ceria',
    imageUrl: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=600&q=80',
    photoUrl: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=600&q=80',
    description: 'Campuran melon, semangka, apel, anggur dengan saus yoghurt madu rendah gula dan taburan keju cheddar.',
    isAvailable: true,
    preparationTimeMinutes: 5
  },
  {
    id: 'cnt-item-4',
    name: 'Es Teh Lemon Mint Organik',
    category: 'Minuman Segar',
    price: 5000,
    stallName: 'Stand Minuman Segar',
    standName: 'Stand Minuman Segar',
    imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    photoUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80',
    description: 'Teh melati seduh alami dengan perasan lemon asli dan daun mint segar yang menyegarkan dahaga.',
    isAvailable: true,
    preparationTimeMinutes: 3
  }
];

export const DEFAULT_CANTEEN_ORDERS: CanteenOrder[] = [
  {
    id: 'ord-cnt-1',
    orderNumber: 'ORD-KNT-001',
    studentName: 'Ahmad Fauzan Pratama',
    className: 'XII MIPA 1',
    items: [
      { itemId: 'cnt-item-1', name: 'Nasi Goreng Nusantara Spesial Telur', price: 15000, quantity: 1 },
      { itemId: 'cnt-item-4', name: 'Es Teh Lemon Mint Organik', price: 5000, quantity: 1 }
    ],
    totalPrice: 20000,
    pickupTime: 'Istirahat 1 (09:45)',
    status: 'ready',
    createdAt: '2024-11-25T08:30:00Z',
    notes: 'Telur setengah matang'
  }
];

// 🔍 12. Barang Hilang & Ditemukan (Lost and Found)
export const DEFAULT_LOST_FOUND_ITEMS: LostFoundItem[] = [
  {
    id: 'lf-1',
    title: 'Kacamata Frame Hitam Titanium di Lab Komputer',
    type: 'found',
    category: 'Elektronik & Gadget',
    location: 'Lab Komputer 2 Meja Baris Depan',
    date: '2024-11-22',
    contactPerson: 'Pak Hendra (Laboran Komputer / 081298765432)',
    description: 'Ditemukan kacamata minus bingkai hitam tipis merek Owndays saat pembersihan lab setelah jam sekolah.',
    imageUrl: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80',
    status: 'open'
  },
  {
    id: 'lf-2',
    title: 'Tempat Pensil Faber-Castell Biru Tua',
    type: 'lost',
    category: 'Alat Tulis & Buku',
    location: 'Sekitar Lapangan Basket / Kantin',
    date: '2024-11-24',
    contactPerson: 'Siti Nurhaliza (XI MIPA 2 / 085712349988)',
    description: 'Hilang kotak pensil resleting biru berisi pulpen pilot, penggaris besi, dan flashdisk sandisk 32GB.',
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80',
    status: 'open'
  }
];

// 👥 16. Kelompok Belajar & Forum Tanya Jawab
export const DEFAULT_STUDY_CLUBS: StudyClub[] = [
  {
    id: 'sc-1',
    name: 'Klub Bedah Soal UTBK-SNBT Matematika & TPS',
    subject: 'Matematika & Penalaran Umum',
    mentorName: 'Drs. H. Bambang Sudarmono, M.Pd & Ahmad Fauzan (Tutor Sebaya)',
    schedule: 'Setiap Rabu & Jumat, 15:30 - 17:00 WIB',
    location: 'Ruang Multimedia Perpustakaan',
    maxMembers: 30,
    members: ['Ahmad Fauzan Pratama', 'Nabila Putri Azzahra', 'Kevin Sanjaya', 'Dewi Lestari'],
    description: 'Komunitas belajar intensif membahas trik cepat penalaran matematika, kuantitatif, dan literasi SNBT PTN Top Nasional.',
    isActive: true
  },
  {
    id: 'sc-2',
    name: 'English Debate & IELTS Speaking Circle',
    subject: 'Bahasa Inggris',
    mentorName: 'Siti Rahmawati, S.Pd., M.Ed',
    schedule: 'Setiap Selasa & Kamis, 15:30 - 16:45 WIB',
    location: 'Gazebo Literasi Pojok Bahasa',
    maxMembers: 20,
    members: ['Rian Hidayat', 'Putri Ayu Wandira', 'Farhan Maulana'],
    description: 'Latihan debat format Asian Parliamentary, public speaking, dan persiapan beasiswa kuliah luar negeri.',
    isActive: true
  }
];

export const DEFAULT_STUDY_QUESTIONS: StudyQuestion[] = [
  {
    id: 'sq-1',
    authorName: 'Rian Hidayat',
    className: 'X-1',
    subject: 'Fisika Kinematika',
    questionText: 'Bagaimana cara cepat menentukan waktu saat benda mencapai titik tertinggi pada gerak parabola dengan sudut elevasi 30 derajat?',
    createdAt: '2024-11-23T14:20:00Z',
    answers: [
      {
        id: 'ans-1',
        authorName: 'Ahmad Fauzan Pratama (XII MIPA 1)',
        role: 'Tutor Sebaya Fisika',
        text: 'Gunakan rumus t_puncak = (v0 * sin θ) / g. Karena sin 30° = 1/2, maka t = v0 / (2g). Sangat ringkas!',
        createdAt: '2024-11-23T14:35:00Z'
      }
    ]
  }
];

// 📝 17. Catatan & Evaluasi Guru
export const DEFAULT_TEACHER_NOTES: TeacherEvaluationNote[] = [
  {
    id: 'tn-1',
    studentName: 'Ahmad Fauzan Pratama',
    className: 'XII MIPA 1',
    teacherName: 'Drs. H. Bambang Sudarmono, M.Pd',
    subject: 'Fisika & Pembina Olimpiade',
    category: 'Prestasi',
    note: 'Menunjukkan pemahaman konsep mekanika kuantum yang luar biasa dan aktif membimbing teman-teman sekelasnya dalam pemecahan soal rumit.',
    date: '2024-11-20',
    isPrivate: false
  },
  {
    id: 'tn-2',
    studentName: 'Nabila Putri Azzahra',
    className: 'XI MIPA 1',
    teacherName: 'Dewi Sartika, S.Pd',
    subject: 'Biologi Sel',
    category: 'Sikap Positif',
    note: 'Sangat teliti dan bertanggung jawab dalam penyusunan laporan praktikum mikrobiologi serta selalu menjaga kebersihan meja lab.',
    date: '2024-11-22',
    isPrivate: false
  }
];

// 🧹 18. Jadwal Piket Kebersihan
export const DEFAULT_CLEANING_GROUPS: CleaningDutyGroup[] = [
  {
    id: 'cd-1',
    className: 'XII MIPA 1',
    day: 'Senin',
    coordinator: 'Ahmad Fauzan',
    members: ['Ahmad Fauzan', 'Budi Santoso', 'Citra Dewi', 'Doni Pratama'],
    tasks: ['Menyapu & Mengepel Lantai', 'Membersihkan Papan Tulis', 'Mengosongkan Tempat Sampah Kelas', 'Merapikan Meja Guru']
  },
  {
    id: 'cd-2',
    className: 'XII MIPA 1',
    day: 'Selasa',
    coordinator: 'Eka Rahmawati',
    members: ['Eka Rahmawati', 'Fadli Rahman', 'Gita Permata', 'Hadi Wijaya'],
    tasks: ['Menyapu Lantai & Teras', 'Membersihkan Kaca Jendela', 'Menata Buku Pojok Baca', 'Menyiram Tanaman Kelas']
  },
  {
    id: 'cd-3',
    className: 'XII MIPA 1',
    day: 'Rabu',
    coordinator: 'Indah Kusuma',
    members: ['Indah Kusuma', 'Joko Susilo', 'Kartika Sari', 'Lukman Hakim'],
    tasks: ['Menyapu & Mengepel Lantai', 'Membersihkan AC Filter Debu', 'Membuang Sampah ke TPS', 'Menutup & Mengunci Jendela']
  },
  {
    id: 'cd-4',
    className: 'XII MIPA 1',
    day: 'Kamis',
    coordinator: 'Maya Lestari',
    members: ['Maya Lestari', 'Nanda Putra', 'Olivia Chandra', 'Panji Gumilang'],
    tasks: ['Menyapu Lantai & Koridor', 'Membersihkan Penghapus Papan', 'Menata Kursi dan Meja', 'Mengecek Stop Kontak']
  },
  {
    id: 'cd-5',
    className: 'XII MIPA 1',
    day: 'Jumat',
    coordinator: 'Rian Hidayat',
    members: ['Rian Hidayat', 'Siti Rahma', 'Taufik Hidayat', 'Vina Panduwinata'],
    tasks: ['Jumat Bersih Total', 'Mengepel dengan Disinfektan', 'Membersihkan Sarang Laba-laba', 'Merawat Tanaman Indoor']
  }
];

// 👨‍👩‍👧 19. Pojok Parenting
export const DEFAULT_PARENTING_ARTICLES: ParentingArticle[] = [
  {
    id: 'prt-1',
    title: 'Mendampingi Anak Menghadapi Ujian Akhir dan Seleksi Masuk PTN Tanpa Tekanan Berlebih',
    author: 'Dra. Hj. Nurul Hidayati, M.Psi (Konselor Psikologi Sekolah)',
    category: 'Psikologi Anak',
    summary: 'Panduan bijak bagi orang tua dalam memberikan dukungan emosional, menjaga kualitas tidur, dan menciptakan atmosfer rumah yang tenang menjelang ujian.',
    content: 'Masa menjelang ujian akhir dan seleksi perguruan tinggi seringkali menjadi fase yang menegangkan bagi para remaja. Sebagai orang tua, peran kita bukanlah menjadi pengawas yang menambah kecemasan, melainkan sebagai tempat berlabuh yang aman. Berikan apresiasi atas usaha proses belajarnya, bukan hanya berfokus pada angka atau peringkat semata. Pastikan asupan nutrisi seimbang, waktu istirahat yang cukup, dan jadwalkan sesi dialog santai tanpa membahas topik akademis untuk menjaga kesehatan mental ananda.',
    publishedDate: '2024-11-20',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80',
    likes: 42
  },
  {
    id: 'prt-2',
    title: 'Membangun Komunikasi Efektif dengan Remaja Generasi Digital di Era Media Sosial',
    author: 'Hendra Gunawan, S.Pd., M.Ed (Waka Kesiswaan & Pemerhati Pendidikan)',
    category: 'Edukasi Karakter',
    summary: 'Strategi praktis menjalin percakapan yang terbuka, mendengar tanpa menghakimi, dan mendampingi penggunaan gawai yang sehat.',
    content: 'Generasi muda saat ini tumbuh berdampingan dengan kecanggihan teknologi dan arus informasi media sosial yang luar biasa cepat. Untuk menjalin koneksi yang erat, orang tua perlu meluangkan waktu berkualitas untuk mendengarkan perspektif mereka tanpa langsung memotong atau menghakimi. Buatlah kesepakatan bersama mengenai screen time keluarga dan jadilah teladan dalam membagi waktu antara gadget dan kebersamaan hangat di meja makan.',
    publishedDate: '2024-11-23',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    likes: 38
  }
];

// 🔐 20. Data Login Terdaftar (Whitelist Akses Terkendali Admin)
export const DEFAULT_REGISTERED_LOGIN_ACCOUNTS: RegisteredLoginAccount[] = [
  {
    id: 'log-super-1',
    email: 'mumumimi353@gmail.com',
    name: 'Administrator Utama (Pemilik Sistem)',
    classId: 'all',
    className: 'Semua Kelas',
    statusRole: 'super_admin',
    statusRoleLabel: 'Admin Utama',
    isSuperAdmin: true,
    allowedScopes: ['all'],
    createdAt: '2024-01-01T00:00:00Z',
    notes: 'Pemilik Sistem Utama (Akses Permanen Penuh)'
  },
  {
    id: 'log-sub-1',
    email: 'wakasek@sman1nusantara.sch.id',
    name: 'Drs. H. Mulyadi, M.Pd (Wakil Kepala Sekolah)',
    classId: 'all',
    className: 'Semua Kelas',
    statusRole: 'sub_admin',
    statusRoleLabel: 'Sub-Admin',
    isSubAdmin: true,
    createdAt: '2024-08-01T07:00:00Z',
    notes: 'Sub-Admin (Kontrol Penuh Seluruh Fitur)'
  },
  {
    id: 'log-1',
    email: 'ananda@gmail.com',
    name: 'Ananda Putri',
    classId: 'class-1',
    className: 'XII MIPA 1',
    statusRole: 'student',
    statusRoleLabel: 'Siswa Kelas',
    createdAt: '2024-08-01T08:00:00Z',
    notes: 'Siswa Aktif Kelas XII MIPA 1'
  },
  {
    id: 'log-2',
    email: 'budi@gmail.com',
    name: 'Budi Santoso',
    classId: 'class-1',
    className: 'XII MIPA 1',
    statusRole: 'class_admin',
    statusRoleLabel: 'Admin Kelas',
    createdAt: '2024-08-01T08:30:00Z',
    notes: 'Ketua / Pengelola Administrasi Kelas XII MIPA 1'
  },
  {
    id: 'log-3',
    email: 'pramuka@gmail.com',
    name: 'Kak Danu Setiawan',
    classId: 'none',
    className: 'Tanpa Kelas',
    statusRole: 'eskul_admin',
    statusRoleLabel: 'Admin Ekskul',
    eskulId: 'eskul-1',
    eskulName: 'Pramuka Gudep 01-02',
    createdAt: '2024-08-02T09:00:00Z',
    notes: 'Pembina & Administrator Ekskul Pramuka'
  },
  {
    id: 'log-4',
    email: 'humas@sman1nusantara.sch.id',
    name: 'Dra. Endang Sulistyowati',
    classId: 'all',
    className: 'Semua Kelas',
    statusRole: 'custom_admin',
    statusRoleLabel: 'Admin Pengelola',
    allowedScopes: ['school_info', 'announcements', 'gallery', 'achievements', 'calendar_events'],
    createdAt: '2024-08-03T10:00:00Z',
    notes: 'Tim Pengelola Konten & Publikasi Sekolah'
  }
];

// 🔗 SISTEM PENGIRIMAN & PEMBAGI DATA KE SITUS TUJUAN (DEFAULT KOSONG MURNI)
export const DEFAULT_SENDER_CONNECTIONS: any[] = [];
export const DEFAULT_DISPATCHED_FILES: any[] = [];



