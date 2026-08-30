export type UserRole = 
  | 'visitor' 
  | 'super_admin' 
  | 'sub_admin'
  | 'custom_admin' 
  | 'class_admin' 
  | 'student' 
  | 'eskul_admin' 
  | 'eskul_student'
  | 'school_member'
  | 'parent'
  | 'google_user';

export type AppTheme = 'light' | 'dark';

export type PhotoPrivacyMode = 'public' | 'school_only' | 'admin_only';

export interface SocialComment {
  id: string;
  authorName: string;
  authorRole?: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}

export interface SchoolFacility {
  id: string;
  nama: string;
  deskripsi: string;
  icon?: string;
  foto?: string;
  lokasi?: string;
  kondisi?: string;
}

export interface SchoolInfo {
  name: string;
  npsn: string;
  akreditasi: string;
  tagline: string;
  address: string;
  postalCode: string;
  city: string;
  province: string;
  phone: string;
  whatsapp?: string;
  email: string;
  website: string;
  visi: string;
  misi: string[];
  sejarah: string;
  academicYear?: string;
  creatorName?: string;
  creatorWhatsapp?: string;
  fasilitas: SchoolFacility[];
  logoUrl?: string;
  tiktokUrl?: string;
  photoPrivacy?: PhotoPrivacyMode;
}

export type MediaType = 'image' | 'video';

export interface SliderItem {
  id: string;
  type: MediaType;
  url: string;
  thumbnailUrl?: string;
  title: string;
  date: string;
  description?: string;
  order: number;
  likes?: number;
  likedBy?: string[];
  comments?: SocialComment[];
  shares?: number;
  isPrivate?: boolean;
  archivedAt?: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  category: string;
  mediaType?: MediaType;
  mediaUrl?: string;
  thumbnailUrl?: string;
  description: string;
  location?: string;
  peserta?: string;
  authorName?: string;
  authorRole?: string;
  createdAt: string;
  likes?: number;
  likedBy?: string[];
  comments?: SocialComment[];
  shares?: number;
  isPrivate?: boolean;
  archivedAt?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'Akademik' | 'Kegiatan' | 'Libur & Ujian' | 'Umum' | 'PPDB' | 'Pemberitahuan';
  content: string;
  imageUrl?: string;
  author: string;
  isPinned?: boolean;
  createdAt: string;
  likes?: number;
  likedBy?: string[];
  comments?: SocialComment[];
  shares?: number;
  isPrivate?: boolean;
  archivedAt?: string;
}

// 📢 9. Papan Pengumuman Penting (Urgent Banner)
export interface UrgentAnnouncement {
  id: string;
  isActive: boolean;
  title: string;
  content: string;
  type: 'urgent' | 'warning' | 'info';
  badgeText?: string;
  actionText?: string;
  actionUrl?: string;
  updatedAt: string;
}

// 🎓 1. Alumni / Lulusan
export interface AlumniItem {
  id: string;
  name: string;
  graduationYear: number; // e.g. 2024, 2023, 2022
  className?: string; // e.g. "XII MIPA 1"
  nisn?: string;
  photoUrl?: string;
  currentOccupation?: string;
  currentProfession?: string;
  companyOrCampus?: string;
  quotePesanKesan?: string;
  memoryMessage?: string;
  pesanAlumni?: string;
  adviceForJuniors?: string;
  successStory?: string;
  instagram?: string;
  linkedin?: string;
  achievementHighlight?: string;
  isArchived?: boolean;
  archivedAt?: string;
  createdAt: string;
}

// 🏆 2 & 15. Prestasi & Kejuaraan
export interface SchoolAchievement {
  id: string;
  title: string; // Nama Lomba
  competitionName?: string;
  juara: string; // e.g. "Juara 1", "Medali Emas", "Juara Umum"
  rank?: string;
  tingkat: 'Kabupaten' | 'Provinsi' | 'Nasional' | 'Internasional';
  level?: string;
  kategori?: 'Akademik' | 'Olahraga' | 'Seni & Budaya' | 'Teknologi & Robotik' | 'Keagamaan' | 'Lainnya' | string;
  category?: string;
  tahunAjaran: string; // e.g. "2024/2025"
  year?: string;
  tanggal: string;
  namaPemenang: string; // Siswa / Tim / Kelas
  winnerName?: string;
  className?: string;
  pembina?: string;
  fotoUrl?: string;
  photoUrl?: string;
  deskripsi?: string;
  description?: string;
  createdAt?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

// 📅 3. Kalender Akademik
export interface AcademicCalendarEvent {
  id: string;
  title: string;
  category: 'Libur Nasional' | 'Libur Sekolah' | 'Ujian' | 'Rapor' | 'Kegiatan Sekolah' | 'Libur Semester' | string;
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD
  month: number; // 1 - 12
  academicYear: string; // e.g. "2026/2027"
  semester?: string;
  isHoliday?: boolean;
  description?: string;
  colorTag?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

// 📚 4 & 19. Jadwal Pelajaran
export interface ClassScheduleItem {
  id: string;
  classId: string;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
  timeSlot: string; // e.g. "07:00 - 08:30"
  subject: string; // Mata Pelajaran
  teacherName: string;
  room?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

// ⏰ 5. Jam Sekolah (Bel Masuk, Istirahat 1 & 2, Bel Pulang)
export interface SchoolBellSchedule {
  id: string;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
  jamMasuk: string; // e.g. "07:00"
  istirahat1Mulai: string; // e.g. "09:45"
  istirahat1Selesai: string; // e.g. "10:15"
  istirahat2Mulai: string; // e.g. "12:00"
  istirahat2Selesai: string; // e.g. "12:45"
  jamPulang: string; // e.g. "15:30"
  keterangan?: string; // e.g. "Upacara Bendera", "Sholat Jumat Berjamaah"
  isArchived?: boolean;
  archivedAt?: string;
}

// 📖 6. Perpustakaan Digital
export interface LibraryBook {
  id: string;
  title: string;
  author: string;
  publisher?: string;
  year?: number;
  isbn?: string;
  category: 'Sains & Matematika' | 'Bahasa & Sastra' | 'Sejarah & Sosial' | 'Komputer & Teknologi' | 'Fiksi & Novel' | 'Buku Paket Pelajaran' | 'Ensiklopedia' | 'Pengembangan Diri' | string;
  coverUrl?: string;
  stockAvailable: number;
  totalStock: number;
  stock?: number;
  isEbook?: boolean;
  ebookUrl?: string;
  pdfUrl?: string;
  synopsis?: string;
  description?: string;
  locationRack?: string;
  borrowCount?: number;
  rating?: number;
  isArchived?: boolean;
  archivedAt?: string;
}

// 🩺 7. UKS & Kesehatan
export interface UksMedicStaff {
  id: string;
  name: string;
  role: 'Dokter Sekolah' | 'Perawat UKS' | 'Konselor Kesehatan';
  scheduleDay: string; // e.g. "Senin & Rabu"
  scheduleHours: string; // e.g. "08:00 - 13:00"
  phone?: string;
  photoUrl?: string;
}

export interface UksMedicine {
  id: string;
  nama: string;
  name?: string;
  kategori: 'P3K & Luar' | 'Maag & Lambung' | 'Demam & Flu' | 'Minyak & Balsem' | 'Vitamin & Suplemen' | 'Lainnya' | string;
  category?: string;
  fungsi: string;
  indication?: string;
  stok: number;
  stock?: number;
  satuan: string; // e.g. "Strip", "Botol", "Kotak", "Pcs"
  unit?: string;
  expiryDate?: string;
  lastRestocked?: string;
  tersedia: boolean;
}

export interface UksImmunization {
  id: string;
  title: string;
  vaccineName?: string;
  targetClass: string;
  targetGrades?: string;
  date: string;
  scheduledDate?: string;
  petugas: string;
  healthCenterOfficer?: string;
  deskripsi: string;
  description?: string;
  status: 'Akan Datang' | 'Selesai';
}

export interface UksHealthTip {
  id: string;
  title: string;
  category: string;
  content: string;
  imageUrl?: string;
}

// 📞 8. Hubungi Kami & Pesan Pengunjung
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
  replyMessage?: string;
  repliedAt?: string;
}

// 💬 10. Pesan Internal Sekolah
export interface InternalMessage {
  id: string;
  senderId?: string;
  senderName: string;
  senderRole: string; // e.g. "Admin Utama", "Wali Kelas", "Guru BK"
  receiverRole?: string;
  targetGroup?: string;
  targetType: 'all_students' | 'specific_class' | 'parents' | 'teachers';
  targetClassId?: string;
  targetClassName?: string;
  title: string;
  content: string;
  priority: 'normal' | 'high' | 'urgent';
  createdAt: string;
  readBy: string[]; // list of studentId or userId who read this
  isRead?: boolean;
  isArchived?: boolean;
  archivedAt?: string;
}

// 📜 14. Timeline Sejarah Sekolah & 📸 16. Foto Lama / Arsip Sejarah
export interface SchoolHistoryEvent {
  id: string;
  year: number; // e.g. 1978, 1985, 2000, 2015, 2024
  title: string;
  description: string;
  imageUrl?: string;
  photoUrl?: string;
  tag?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

export interface OldArchivePhoto {
  id: string;
  title: string;
  decade: '1970-an' | '1980-an' | '1990-an' | '2000-an' | '2010-an';
  yearEstimated?: number;
  year?: number;
  imageUrl: string;
  caption?: string;
  uploadedBy?: string;
  likes?: number;
  likedBy?: string[];
  isArchived?: boolean;
  archivedAt?: string;
}

// 🖨️ 17. Cetak Foto Kenangan
export interface PhotoPrintOrder {
  id: string;
  orderNumber: string; // e.g. "ORD-2026-001"
  studentName: string;
  customerName?: string;
  studentClass: string;
  contactPhone: string;
  photoUrl: string;
  photoTitle: string;
  printSize: '4R (10x15cm)' | '10R (20x25cm)' | '12R (30x40cm)' | 'Album Kenangan Hardcover';
  paperType: 'Glossy' | 'Matte / Doff' | 'Canvas Premium';
  quantity: number;
  pricePerUnit: number;
  totalPrice: number;
  notes?: string;
  status: 'pending' | 'processing' | 'ready_for_pickup' | 'completed' | 'cancelled';
  createdAt: string;
  completedAt?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

// 🏅 18. Peringkat Siswa Tertinggi — Semua Siswa (Seluruh Sekolah)
export interface SchoolTopRankStudent {
  id: string;
  rank: number; // 1, 2, 3, ...
  overallRank?: number;
  studentName: string;
  nisn: string;
  className: string;
  grade: string; // e.g. "Kelas 12"
  averageScore: number; // e.g. 97.4
  semester: string; // e.g. "Semester Ganjil"
  academicYear: string; // e.g. "2026/2027"
  achievementsSummary: string; // e.g. "Peraih Medali Emas OSN Fisika, Juara 1 Debat Bahasa Inggris"
  specialAchievement?: string;
  photoUrl?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

// 📈 F1. Peringkat Siswa Per Kelas
export interface ClassStudentRank {
  id: string;
  studentId: string;
  studentName: string;
  classId: string;
  rank: number;
  averageScore: number; // e.g. 94.5
  predikat: 'A (Sangat Baik)' | 'B (Baik)' | 'C (Cukup)';
  catatanWaliKelas?: string;
  semester: string;
  academicYear: string;
}

// 🎓 13. Halaman Khusus Perpisahan Angkatan
export interface FarewellBatchData {
  id: string;
  academicYear: string; // e.g. "2024/2025"
  batchNumber: string; // e.g. "Angkatan Ke-45 'Adhirajasa'"
  themeTitle: string;
  farewellVideoUrl?: string;
  batchCoverPhoto?: string;
  teacherGroupPhoto?: string;
  closingMessage: string;
  virtualYearbookPdfUrl?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

// 🍱 11. Kantin & Pre-Order
export interface CanteenItem {
  id: string;
  name: string;
  category: 'Makanan Berat' | 'Snack & Kue' | 'Minuman Segar' | 'Menu Sehat' | string;
  price: number;
  standName?: string;
  stallName?: string;
  imageUrl?: string;
  photoUrl?: string;
  description: string;
  isAvailable: boolean;
  preparationTimeMinutes?: number;
}

export interface CanteenOrder {
  id: string;
  orderNumber: string;
  studentName: string;
  className: string;
  items: {
    itemId: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
  pickupTime: string;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  createdAt: string;
  notes?: string;
}

// 🔍 12. Barang Hilang (Lost and Found)
export interface LostFoundItem {
  id: string;
  title: string;
  type: 'lost' | 'found';
  category: 'Elektronik & Gadget' | 'Alat Tulis & Buku' | 'Pakaian & Jaket' | 'Uang & Dompet' | 'Kunci & Kartu' | 'Lain-lain';
  location: string;
  date: string;
  contactPerson: string;
  description: string;
  imageUrl?: string;
  status: 'open' | 'claimed' | 'resolved';
  claimedBy?: string;
  claimedAt?: string;
}

// 👥 16. Kelompok Belajar & Forum Tanya Jawab
export interface StudyClub {
  id: string;
  name: string;
  subject: string;
  mentorName: string;
  schedule: string;
  location: string;
  maxMembers: number;
  members: string[];
  description: string;
  isActive?: boolean;
}

export interface StudyQuestion {
  id: string;
  authorName: string;
  className: string;
  subject: string;
  questionText: string;
  createdAt: string;
  answers: {
    id: string;
    authorName: string;
    role: string;
    text: string;
    createdAt: string;
  }[];
}

// 📝 17. Catatan & Evaluasi Guru
export interface TeacherEvaluationNote {
  id: string;
  studentName: string;
  className: string;
  teacherName: string;
  subject: string;
  category: 'Prestasi' | 'Sikap Positif' | 'Perlu Perhatian' | 'Pelanggaran';
  note: string;
  date: string;
  isPrivate?: boolean;
}

// 🧹 18. Jadwal Piket Kebersihan
export interface CleaningDutyGroup {
  id: string;
  className: string;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
  members: string[];
  coordinator: string;
  tasks: string[];
}

// 👨‍👩‍👧 19. Pojok Parenting
export interface ParentingArticle {
  id: string;
  title: string;
  author: string;
  category: 'Edukasi Karakter' | 'Psikologi Anak' | 'Kesehatan Remaja' | 'Tips Belajar';
  summary: string;
  content: string;
  publishedDate: string;
  imageUrl?: string;
  likes?: number;
}

export interface PerangkatKelas {
  waliKelas: string;
  nipWaliKelas?: string;
  ketuaKelas: string;
  wakilKetua: string;
  sekretaris1: string;
  sekretaris2?: string;
  bendahara1: string;
  bendahara2?: string;
  seksi: {
    id: string;
    bidang: string;
    nama: string;
  }[];
}

export interface ClassMemoryPhoto {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  mediaType?: 'image' | 'video';
  description?: string;
  uploadedBy?: string;
  likes?: number;
  likedBy?: string[];
  comments?: SocialComment[];
  shares?: number;
  isPrivate?: boolean;
  archivedAt?: string;
}

export interface Student {
  id: string;
  nisn: string;
  name: string;
  gender: 'L' | 'P';
  photoUrl?: string;
  quote?: string;
  citaCita?: string;
  pesanKesan?: string;
  instagram?: string;
  phone?: string;
  classId: string;
  passwordHash: string;
  isLoggedInOnDevice?: boolean;
  currentDeviceId?: string;
  lastLoginAt?: string;
  isArchived?: boolean;
  archivedAt?: string;
}

export interface ClassRoom {
  id: string;
  name: string;
  grade: string;
  academicYear: string;
  jurusan?: string;
  isActive: boolean;
  coverUrl?: string;
  adminUsername: string;
  adminPasswordHash: string;
  adminPhotoUrl?: string;
  tiktokUrl?: string;
  perangkat: PerangkatKelas;
  gallery: ClassMemoryPhoto[];
  ranks?: ClassStudentRank[];
  schedules?: ClassScheduleItem[];
  isArchived?: boolean;
  archivedAt?: string;
}

export type TeacherRole = 
  | 'kepala_sekolah'
  | 'wakil_kepala_sekolah'
  | 'wakasek_kurikulum'
  | 'wakasek_kesiswaan'
  | 'wakasek_sarpras'
  | 'wakasek_humas'
  | 'guru_mapel'
  | 'staf_tu';

export interface TeacherStaff {
  id: string;
  name: string;
  titleWithDegree: string;
  nip?: string;
  role: TeacherRole;
  roleTitle: string;
  department?: string;
  subjects?: string[];
  photoUrl?: string;
  bio?: string;
  phone?: string;
  email?: string;
  order: number;
}

export interface EskulMessage {
  id: string;
  senderId?: string;
  senderName: string;
  senderRole: string;
  senderAvatar?: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  createdAt: string;
  likes?: number;
  likedBy?: string[];
}

export interface EskulMember {
  id: string;
  name: string;
  nisn?: string;
  gender?: 'L' | 'P';
  role: 'Pembina' | 'Ketua' | 'Wakil Ketua' | 'Sekretaris' | 'Bendahara' | 'Koordinator' | 'Anggota';
  photoUrl?: string;
  className?: string;
  classGrade?: string;
  contact?: string;
}

export interface EskulStudent {
  id: string;
  nisn: string;
  name: string;
  gender: 'L' | 'P';
  eskulId: string;
  role?: string;
  classOrigin?: string;
  passwordHash: string;
  photoUrl?: string;
  phone?: string;
  lastLoginAt?: string;
}

export interface EskulGalleryPhoto {
  id: string;
  title: string;
  date: string;
  photoUrl?: string;
  imageUrl?: string;
  mediaType?: 'image' | 'video';
  caption?: string;
  description?: string;
  uploadedBy?: string;
  likes?: number;
  likedBy?: string[];
  comments?: SocialComment[];
  shares?: number;
  isPrivate?: boolean;
  archivedAt?: string;
}

export interface EskulJoinRequest {
  id: string;
  eskulId: string;
  name: string;
  nisn?: string;
  className?: string;
  gender?: 'L' | 'P';
  phone?: string;
  reason?: string;
  status: 'pending' | 'accepted' | 'rejected';
  requestedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface EskulItem {
  id: string;
  name: string;
  category: string;
  pembina?: string;
  coach?: string;
  ketua?: string;
  schedule?: string;
  location?: string;
  description?: string;
  coverUrl?: string;
  logoUrl?: string;
  tiktokUrl?: string;
  adminName?: string;
  adminUsername?: string;
  adminPasswordHash?: string;
  members: EskulMember[];
  students?: EskulStudent[];
  joinRequests?: EskulJoinRequest[];
  messages: EskulMessage[];
  gallery: EskulGalleryPhoto[];
  isArchived?: boolean;
  archivedAt?: string;
}

export interface OsisMember {
  id: string;
  name: string;
  nisn?: string;
  gender?: 'L' | 'P';
  jabatan: string;
  bidang?: string;
  gradeAndClass?: string;
  photoUrl?: string;
  quote?: string;
  instagram?: string;
  order: number;
  periode: string;
}

// 🔹 19 ADMIN PERMISSION SCOPES
export type AdminScope = 
  | 'all'
  | 'school_info'        // 1. Kelola Informasi Sekolah
  | 'calendar_events'    // 2. Kelola Kalender Akademik & Kegiatan
  | 'school_hours'        // 3. Kelola Jam Sekolah
  | 'announcements'       // 4. Kelola Pengumuman & Berita
  | 'achievements'        // 5. Kelola Prestasi & Kejuaraan
  | 'teachers'            // 6. Kelola Daftar Guru & Staf
  | 'osis'                // 7. Kelola Profil & Anggota OSIS
  | 'alumni'              // 8. Kelola Alumni & Lulusan
  | 'schedules'           // 9. Kelola Jadwal Pelajaran
  | 'gallery'             // 10. Upload & Kelola Galeri Foto / Kegiatan
  | 'photo_privacy'       // 11. Atur Privasi Foto
  | 'student_data'        // 12. Kelola Data Siswa / Anggota
  | 'change_passwords'    // 13. Ubah Sandi Siswa / Anggota
  | 'reset_sessions'      // 14. Reset Status Login Akun
  | 'internal_messages'   // 15. Kirim Pesan Internal Sekolah
  | 'view_stats'          // 16. Lihat Statistik Sekolah
  | 'archive_data'        // 17. Arsipkan & Kembalikan Data
  | 'photo_orders'        // 18. Kelola Pesanan Cetak Foto Kenangan
  | 'website_settings'    // 19. Ubah Pengaturan Website Lainnya
  | 'classes'
  | 'eskul'
  | 'activities'
  | 'facilities'
  | 'slider';

export interface AdminPermissionOption {
  id: AdminScope;
  number: number;
  label: string;
  description: string;
}

export const ADMIN_PERMISSION_OPTIONS: AdminPermissionOption[] = [
  { id: 'school_info', number: 1, label: 'Kelola Informasi Sekolah', description: 'Profil, Visi Misi, Sejarah, Struktur Organisasi, Fasilitas' },
  { id: 'calendar_events', number: 2, label: 'Kelola Kalender Akademik & Kegiatan', description: 'Hari libur, jadwal ujian, rapor, dan kegiatan sekolah' },
  { id: 'school_hours', number: 3, label: 'Kelola Jam Sekolah', description: 'Jam masuk, istirahat 1 & 2, dan jam bel pulang' },
  { id: 'announcements', number: 4, label: 'Kelola Pengumuman & Berita', description: 'Buat pengumuman biasa & pengumuman mendesak' },
  { id: 'achievements', number: 5, label: 'Kelola Prestasi & Kejuaraan', description: 'Daftar juara, piagam penghargaan, dan tingkat lomba' },
  { id: 'teachers', number: 6, label: 'Kelola Daftar Guru & Staf', description: 'Data guru, NIP, mata pelajaran, dan jabatan' },
  { id: 'osis', number: 7, label: 'Kelola Profil & Anggota OSIS', description: 'Pengurus OSIS, jabatan, dan media sosial' },
  { id: 'alumni', number: 8, label: 'Kelola Alumni & Lulusan', description: 'Daftar angkatan lulusan, pesan kesan & cerita sukses' },
  { id: 'schedules', number: 9, label: 'Kelola Jadwal Pelajaran', description: 'Jadwal pelajaran tiap kelas Senin sampai Jumat' },
  { id: 'gallery', number: 10, label: 'Upload & Kelola Galeri Foto / Kegiatan', description: 'Foto/video kenangan kegiatan dan kelas' },
  { id: 'photo_privacy', number: 11, label: 'Atur Privasi Foto', description: 'Mode visibilitas galeri (Publik, Warga Sekolah, Admin)' },
  { id: 'student_data', number: 12, label: 'Kelola Data Siswa / Anggota', description: 'Tambah, ubah, dan hapus data siswa' },
  { id: 'change_passwords', number: 13, label: 'Ubah Sandi Siswa / Anggota', description: 'Ubah kata sandi akun siswa dan anggota' },
  { id: 'reset_sessions', number: 14, label: 'Reset Status Login Akun', description: 'Buka sesi login akun yang terkunci/aktif' },
  { id: 'internal_messages', number: 15, label: 'Kirim Pesan Internal Sekolah', description: 'Kirim pesan ke siswa, per kelas, atau orang tua' },
  { id: 'view_stats', number: 16, label: 'Lihat Statistik Sekolah', description: 'Data ringkas, grafik upload, pemakaian data, pengunjung' },
  { id: 'archive_data', number: 17, label: 'Arsipkan & Kembalikan Data', description: 'Arsipkan data kenangan dan restore kapan saja' },
  { id: 'photo_orders', number: 18, label: 'Kelola Pesanan Cetak Foto Kenangan', description: 'Melihat, memproses, dan menyelesaikan pesanan cetak' },
  { id: 'website_settings', number: 19, label: 'Ubah Pengaturan Website Lainnya', description: 'Konfigurasi umum, warna tema, dan backup database' }
];

export interface CustomAdmin {
  id: string;
  username: string;
  email?: string;
  name: string;
  passwordHash: string;
  role: 'super_admin' | 'custom_admin';
  allowedScopes: AdminScope[];
  isSuperAdminOwner?: boolean;
  createdAt: string;
}

export type LoginRoleStatus = 'super_admin' | 'sub_admin' | 'custom_admin' | 'class_admin' | 'eskul_admin' | 'student' | 'parent';

export interface RegisteredLoginAccount {
  id: string;
  email: string;
  name: string;
  classId?: string; // Class ID or Class Name (e.g. 'class-1', 'X-A', 'Tanpa Kelas')
  className?: string;
  statusRole: LoginRoleStatus;
  statusRoleLabel?: string; // 'Admin Utama' | 'Sub-Admin' | 'Admin Pengelola' | 'Admin Kelas' | 'Admin Ekskul' | 'Siswa Kelas' | 'Orang Tua'
  eskulId?: string;
  eskulName?: string;
  allowedScopes?: AdminScope[]; // 19 Opsi Izin khusus untuk Admin Pengelola
  createdAt: string;
  updatedAt?: string;
  isSuperAdmin?: boolean;
  isSubAdmin?: boolean;
  notes?: string;
}

export interface AuthSession {
  role: UserRole;
  username?: string;
  email?: string;
  studentId?: string;
  classId?: string;
  eskulId?: string;
  name?: string;
  avatarUrl?: string;
  googleSub?: string;
  token?: string;
  deviceId: string;
  allowedScopes?: AdminScope[];
  isSuperAdminOwner?: boolean;
  isSubAdmin?: boolean;
}

export interface ActiveSessionRecord {
  accountKey?: string;
  accountType?: 'super_admin' | 'custom_admin' | 'class_admin' | 'eskul_admin' | 'student' | 'eskul_student' | 'school_member' | 'google_user';
  accountName?: string;
  username?: string;
  email?: string;
  avatarUrl?: string;
  studentId?: string;
  studentName?: string;
  classId?: string;
  eskulId?: string;
  deviceId: string;
  loginTime: string;
  deviceLabel: string;
  lastActive?: string;
}

// 📦 TAHAP 6: 14+ KATEGORI ARSIP
export type ArchiveCategoryKey = 
  | 'all'
  | 'classes'
  | 'eskul'
  | 'photos'
  | 'activities'
  | 'announcements'
  | 'students'
  | 'achievements'
  | 'calendar'
  | 'schedules'
  | 'library'
  | 'ranks'
  | 'school_hours'
  | 'history_archive'
  | 'alumni'
  | 'photo_orders'
  | 'internal_messages';

export interface ArchiveCategoryOption {
  key: ArchiveCategoryKey;
  number: number;
  label: string;
  icon: string;
  description: string;
}

export const ARCHIVE_CATEGORY_OPTIONS: ArchiveCategoryOption[] = [
  { key: 'all', number: 1, label: 'Semua', icon: 'CheckSquare', description: 'Arsipkan seluruh data sekaligus dari semua kategori' },
  { key: 'classes', number: 2, label: 'Kelas', icon: 'School', description: 'Data kelas lama / angkatan yang sudah lulus' },
  { key: 'eskul', number: 3, label: 'Ekstrakurikuler', icon: 'Award', description: 'Kegiatan ekskul periode sebelumnya' },
  { key: 'photos', number: 4, label: 'Kenangan / Galeri Foto', icon: 'Camera', description: 'Foto kenangan tahun-tahun sebelumnya' },
  { key: 'activities', number: 5, label: 'Kegiatan', icon: 'CalendarDays', description: 'Dokumentasi kegiatan yang sudah selesai' },
  { key: 'announcements', number: 6, label: 'Pengumuman', icon: 'Megaphone', description: 'Pengumuman yang sudah kadaluarsa / tidak berlaku' },
  { key: 'students', number: 7, label: 'Data Siswa', icon: 'Users', description: 'Data siswa yang sudah lulus / alumni' },
  { key: 'achievements', number: 8, label: 'Prestasi & Kejuaraan', icon: 'Trophy', description: 'Daftar prestasi tahun-tahun sebelumnya' },
  { key: 'calendar', number: 9, label: 'Kalender Akademik', icon: 'Calendar', description: 'Kalender tahun ajaran yang sudah berakhir' },
  { key: 'schedules', number: 10, label: 'Jadwal Pelajaran', icon: 'BookOpen', description: 'Jadwal pelajaran periode sebelumnya' },
  { key: 'library', number: 11, label: 'Perpustakaan Digital', icon: 'BookMarked', description: 'Data buku dan riwayat peminjaman lama' },
  { key: 'ranks', number: 12, label: 'Peringkat Siswa', icon: 'Medal', description: 'Daftar peringkat periode sebelumnya' },
  { key: 'school_hours', number: 13, label: 'Jam Sekolah', icon: 'Clock', description: 'Pengaturan jam sekolah yang sudah tidak berlaku' },
  { key: 'history_archive', number: 14, label: 'Sejarah & Arsip Lama', icon: 'History', description: 'Foto dan data sejarah lama' }
];

export interface ArchivedItemRecord {
  id: string;
  originalId: string;
  category: ArchiveCategoryKey;
  title: string;
  description?: string;
  data: any;
  dataPayload?: any;
  itemCount?: number;
  archivedAt: string;
  archivedBy?: string;
  academicYear?: string;
  approxSizeMb: number;
}

export type BellScheduleGroup = SchoolBellSchedule;
export type HistoryEvent = SchoolHistoryEvent;
export type SchoolTopRank = SchoolTopRankStudent;
export type SchoolTopRankItem = SchoolTopRankStudent;
export type UksMedicOfficer = UksMedicStaff;
export type UksMedicineStock = UksMedicine;
export type UksImmunizationSchedule = UksImmunization;
export type ContactVisitorMessage = ContactMessage;
export type InternalSchoolMessage = InternalMessage;
export type FarewellBatchInfo = FarewellBatchData;
export type PhotoPrivacyPolicy = PhotoPrivacyMode | { mode: PhotoPrivacyMode; watermarkEnabled?: boolean };

export interface VisitorStatsRecord {
  totalViews: number;
  dailyViews: number;
  monthlyViews: number;
  uniqueVisitors: number;
  storageUsedMb: number;
  totalStorageQuotaMb: number;
  topPages?: { pageName: string; viewCount: number }[];
}

export interface StudentRankBadge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// 🔗 SISTEM PENGIRIMAN & PEMBAGI DATA KE SITUS TUJUAN (CROSS-SITE DISPATCH ENGINE)
export type SenderConnectionStatus = 
  | 'pending' 
  | 'pending_approval' 
  | 'connected' 
  | 'active' 
  | 'rejected' 
  | 'disconnected' 
  | 'invalid_key' 
  | 'error';

export type DispatchedFileType = 'photo' | 'video' | 'document' | 'other' | 'all';

export interface SenderConnection {
  id: string;
  targetSiteName: string;
  targetSiteUrl: string;
  connectionKey: string;
  allowedFileTypes: DispatchedFileType[];
  maxFileSizeMb: number;
  status: SenderConnectionStatus;
  createdAt?: string;
  requestedAt?: string;
  approvedAt?: string;
  rejectedAt?: string;
  disconnectedAt?: string;
  lastDispatchedAt?: string;
  lastDispatchedFileName?: string;
  rejectionReason?: string;
  statusMessage?: string;
  requestedBy?: string;
  dispatchedCount?: number;
  autoSendEnabled?: boolean;
}

export interface DispatchedFileRecord {
  id: string;
  connectionId?: string;
  targetConnectionId?: string;
  targetSiteName: string;
  targetSiteUrl: string;
  fileName: string;
  fileType: DispatchedFileType;
  fileSizeBytes: number;
  fileSizeFormatted?: string;
  sourceModule: string;
  dispatchedAt: string;
  status?: 'sent' | 'pending' | 'failed';
  dispatchStatus?: 'sent' | 'pending' | 'failed' | 'delivered' | 'success';
  statusDetail?: string;
  autoDispatched?: boolean;
  fileUrl?: string;
}


