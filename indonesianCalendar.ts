export interface CalendarDayInfo {
  dateString: string; // YYYY-MM-DD
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSunday: boolean;
  isRedDate: boolean; // Tanggal Merah (Minggu / Libur Nasional)
  redDateReasons: string[];
  isImportantDay: boolean; // Hari Penting (Warna Kuning)
  importantDayReasons: string[];
  schoolEvents: Array<{
    id: string;
    title: string;
    category: string;
    semester?: string;
    description?: string;
    isHoliday?: boolean;
  }>;
}

// 📅 Daftar Hari Libur Nasional Tetap & Perkiraan Indonesia (Tanggal Merah)
export const NATIONAL_HOLIDAYS_FIXED: Record<string, string> = {
  '01-01': 'Tahun Baru Masehi',
  '05-01': 'Hari Buruh Internasional',
  '06-01': 'Hari Lahir Pancasila',
  '08-17': 'Hari Proklamasi Kemerdekaan RI (HUT RI)',
  '12-25': 'Hari Raya Natal',
};

// 📅 Daftar Hari Libur Nasional Fleksibel & Keagamaan Umum (Format: YYYY-MM-DD atau MM-DD)
export const ESTIMATED_HOLIDAYS_BY_YEAR: Record<string, string> = {
  // 2026
  '2026-01-01': 'Tahun Baru 2026 Masehi',
  '2026-01-16': 'Isra Mi\'raj Nabi Muhammad SAW',
  '2026-02-17': 'Tahun Baru Imlek 2577 Kongzili',
  '2026-03-03': 'Hari Suci Nyepi (Tahun Baru Saka 1948)',
  '2026-03-20': 'Hari Raya Idul Fitri 1447 H (Hari 1)',
  '2026-03-21': 'Hari Raya Idul Fitri 1447 H (Hari 2)',
  '2026-04-03': 'Wafat Isa Almasih (Jumat Agung)',
  '2026-05-01': 'Hari Buruh Internasional',
  '2026-05-14': 'Kenaikan Isa Almasih',
  '2026-05-27': 'Hari Raya Idul Adha 1447 H',
  '2026-05-31': 'Hari Raya Waisak 2570 BE',
  '2026-06-01': 'Hari Lahir Pancasila',
  '2026-06-16': 'Tahun Baru Islam 1448 Hijriah',
  '2026-08-17': 'Hari Kemerdekaan Republik Indonesia Ke-81',
  '2026-08-25': 'Maulid Nabi Muhammad SAW 1448 H',
  '2026-12-25': 'Hari Raya Natal',

  // 2027
  '2027-01-01': 'Tahun Baru 2027 Masehi',
  '2027-02-06': 'Tahun Baru Imlek 2578 Kongzili',
  '2027-03-10': 'Hari Raya Idul Fitri 1448 H',
  '2027-05-01': 'Hari Buruh Internasional',
  '2027-06-01': 'Hari Lahir Pancasila',
  '2027-08-17': 'Hari Kemerdekaan Republik Indonesia',
  '2027-12-25': 'Hari Raya Natal',
};

// 🟡 Daftar Hari Penting Nasional & Peringatan Indonesia (Warna Kuning)
export const IMPORTANT_DAYS: Record<string, string> = {
  '01-10': 'Hari Gerakan Satu Juta Pohon & Hari Lingkungan',
  '01-15': 'Hari Dharma Samudera',
  '01-25': 'Hari Gizi Nasional',
  '02-09': 'Hari Pers Nasional (HPN)',
  '02-14': 'Hari Kasih Sayang & Hari Peringatan PETA',
  '02-21': 'Hari Peduli Sampah Nasional & Bahasa Ibu',
  '03-01': 'Hari Penegakan Kedaulatan Negara',
  '03-08': 'Hari Perempuan Internasional',
  '03-09': 'Hari Musik Nasional',
  '03-30': 'Hari Film Nasional',
  '04-21': 'Hari Kartini (Emansipasi Wanita Indonesia)',
  '04-22': 'Hari Bumi Internasional',
  '04-28': 'Hari Puisi Nasional',
  '05-02': 'Hari Pendidikan Nasional (Hardiknas)',
  '05-17': 'Hari Buku Nasional & HUT Perpustakaan Nasional',
  '05-20': 'Hari Kebangkitan Nasional (Harkitnas)',
  '05-29': 'Hari Lanjut Usia Nasional (HLUN)',
  '06-01': 'Hari Lahir Pancasila',
  '06-05': 'Hari Lingkungan Hidup Sedunia',
  '06-21': 'Hari Krida Pertanian',
  '06-24': 'Hari Bidan Nasional',
  '06-29': 'Hari Keluarga Nasional (Harganas)',
  '07-05': 'Hari Bank Indonesia',
  '07-12': 'Hari Koperasi Indonesia',
  '07-22': 'Hari Kejaksaan Republik Indonesia',
  '07-23': 'Hari Anak Nasional (HAN)',
  '08-10': 'Hari Veteran Nasional & Hari Kebangkitan Teknologi Nasional',
  '08-14': 'Hari Pramuka Nasional',
  '08-17': 'Hari Proklamasi Kemerdekaan RI (HUT RI)',
  '09-01': 'Hari Polisi Wanita (Polwan)',
  '09-09': 'Hari Olahraga Nasional (Haornas)',
  '09-17': 'Hari Palang Merah Indonesia (PMI)',
  '09-24': 'Hari Tani Nasional',
  '09-28': 'Hari Kereta Api Nasional',
  '09-30': 'Hari Peringatan Gerakan 30 September (G30S/PKI)',
  '10-01': 'Hari Kesaktian Pancasila',
  '10-02': 'Hari Batik Nasional',
  '10-05': 'Hari Tentara Nasional Indonesia (TNI)',
  '10-14': 'Hari Penglihatan Sedunia',
  '10-22': 'Hari Santri Nasional',
  '10-24': 'Hari Dokter Indonesia (IDI) & PBB',
  '10-28': 'Hari Sumpah Pemuda',
  '10-30': 'Hari Keuangan Nasional / Hari Oeang (HORI)',
  '11-05': 'Hari Cinta Puspa dan Satwa Nasional',
  '11-10': 'Hari Pahlawan Nasional',
  '11-12': 'Hari Kesehatan Nasional & Hari Ayah Nasional',
  '11-14': 'Hari Diabetes Sedunia & Hari Brimob',
  '11-20': 'Hari Anak Sedunia',
  '11-25': 'Hari Guru Nasional (HGN) & HUT PGRI',
  '11-28': 'Hari Menanam Pohon Indonesia',
  '11-29': 'Hari Korpri (Korps Pegawai Republik Indonesia)',
  '12-01': 'Hari AIDS Sedunia',
  '12-03': 'Hari Disabilitas Internasional',
  '12-09': 'Hari Anti Korupsi Sedunia (Hakordia)',
  '12-10': 'Hari Hak Asasi Manusia (HAM)',
  '12-13': 'Hari Nusantara',
  '12-15': 'Hari Juang Kartika TNI AD',
  '12-19': 'Hari Bela Negara',
  '12-22': 'Hari Ibu Nasional',
};

// Helper to get day info
export function getCalendarGrid(year: number, month: number, schoolEvents: Array<any>): CalendarDayInfo[] {
  // month: 0-indexed (0 = Jan, 11 = Dec)
  const firstDayOfMonth = new Date(year, month, 1);
  const startDayOfWeek = firstDayOfMonth.getDay(); // 0 is Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const grid: CalendarDayInfo[] = [];

  // 1. Previous month trailing days
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const prevMonthDate = new Date(year, month - 1, day);
    const dateStr = `${prevMonthDate.getFullYear()}-${String(prevMonthDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const mmDd = `${String(prevMonthDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isSunday = prevMonthDate.getDay() === 0;

    const redReasons: string[] = [];
    if (isSunday) redReasons.push('Hari Libur Akhir Pekan (Minggu)');
    if (ESTIMATED_HOLIDAYS_BY_YEAR[dateStr]) redReasons.push(ESTIMATED_HOLIDAYS_BY_YEAR[dateStr]);
    if (NATIONAL_HOLIDAYS_FIXED[mmDd] && !redReasons.includes(NATIONAL_HOLIDAYS_FIXED[mmDd])) {
      redReasons.push(NATIONAL_HOLIDAYS_FIXED[mmDd]);
    }

    const impReasons: string[] = [];
    if (IMPORTANT_DAYS[mmDd]) impReasons.push(IMPORTANT_DAYS[mmDd]);

    const matchingEvents = (schoolEvents || []).filter(e => {
      if (!e.startDate) return false;
      const start = e.startDate.slice(0, 10);
      const end = e.endDate ? e.endDate.slice(0, 10) : start;
      return dateStr >= start && dateStr <= end;
    });

    matchingEvents.forEach(e => {
      if (e.isHoliday || (e.category && e.category.toLowerCase().includes('libur'))) {
        redReasons.push(e.title);
      }
    });

    grid.push({
      dateString: dateStr,
      dayNumber: day,
      isCurrentMonth: false,
      isToday: dateStr === todayStr,
      isSunday,
      isRedDate: isSunday || redReasons.length > 0,
      redDateReasons: redReasons,
      isImportantDay: impReasons.length > 0,
      importantDayReasons: impReasons,
      schoolEvents: matchingEvents.filter(e => !e.isHoliday && !(e.category && e.category.toLowerCase().includes('libur')))
    });
  }

  // 2. Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const currDate = new Date(year, month, day);
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const mmDd = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isSunday = currDate.getDay() === 0;

    const redReasons: string[] = [];
    if (isSunday) redReasons.push('Hari Libur Akhir Pekan (Minggu)');
    if (ESTIMATED_HOLIDAYS_BY_YEAR[dateStr]) redReasons.push(ESTIMATED_HOLIDAYS_BY_YEAR[dateStr]);
    if (NATIONAL_HOLIDAYS_FIXED[mmDd] && !redReasons.includes(NATIONAL_HOLIDAYS_FIXED[mmDd])) {
      redReasons.push(NATIONAL_HOLIDAYS_FIXED[mmDd]);
    }

    const impReasons: string[] = [];
    if (IMPORTANT_DAYS[mmDd]) impReasons.push(IMPORTANT_DAYS[mmDd]);

    const matchingEvents = (schoolEvents || []).filter(e => {
      if (!e.startDate) return false;
      const start = e.startDate.slice(0, 10);
      const end = e.endDate ? e.endDate.slice(0, 10) : start;
      return dateStr >= start && dateStr <= end;
    });

    matchingEvents.forEach(e => {
      if (e.isHoliday || (e.category && e.category.toLowerCase().includes('libur'))) {
        if (!redReasons.includes(e.title)) redReasons.push(e.title);
      }
    });

    grid.push({
      dateString: dateStr,
      dayNumber: day,
      isCurrentMonth: true,
      isToday: dateStr === todayStr,
      isSunday,
      isRedDate: isSunday || redReasons.length > 0,
      redDateReasons: redReasons,
      isImportantDay: impReasons.length > 0,
      importantDayReasons: impReasons,
      schoolEvents: matchingEvents.filter(e => !e.isHoliday && !(e.category && e.category.toLowerCase().includes('libur')))
    });
  }

  // 3. Next month leading days (fill up to complete weeks, e.g., 35 or 42 cells)
  const remainingCells = (7 - (grid.length % 7)) % 7;
  for (let day = 1; day <= remainingCells; day++) {
    const nextMonthDate = new Date(year, month + 1, day);
    const dateStr = `${nextMonthDate.getFullYear()}-${String(nextMonthDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const mmDd = `${String(nextMonthDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const isSunday = nextMonthDate.getDay() === 0;

    const redReasons: string[] = [];
    if (isSunday) redReasons.push('Hari Libur Akhir Pekan (Minggu)');
    if (ESTIMATED_HOLIDAYS_BY_YEAR[dateStr]) redReasons.push(ESTIMATED_HOLIDAYS_BY_YEAR[dateStr]);
    if (NATIONAL_HOLIDAYS_FIXED[mmDd] && !redReasons.includes(NATIONAL_HOLIDAYS_FIXED[mmDd])) {
      redReasons.push(NATIONAL_HOLIDAYS_FIXED[mmDd]);
    }

    const impReasons: string[] = [];
    if (IMPORTANT_DAYS[mmDd]) impReasons.push(IMPORTANT_DAYS[mmDd]);

    const matchingEvents = (schoolEvents || []).filter(e => {
      if (!e.startDate) return false;
      const start = e.startDate.slice(0, 10);
      const end = e.endDate ? e.endDate.slice(0, 10) : start;
      return dateStr >= start && dateStr <= end;
    });

    matchingEvents.forEach(e => {
      if (e.isHoliday || (e.category && e.category.toLowerCase().includes('libur'))) {
        redReasons.push(e.title);
      }
    });

    grid.push({
      dateString: dateStr,
      dayNumber: day,
      isCurrentMonth: false,
      isToday: dateStr === todayStr,
      isSunday,
      isRedDate: isSunday || redReasons.length > 0,
      redDateReasons: redReasons,
      isImportantDay: impReasons.length > 0,
      importantDayReasons: impReasons,
      schoolEvents: matchingEvents.filter(e => !e.isHoliday && !(e.category && e.category.toLowerCase().includes('libur')))
    });
  }

  return grid;
}

export const MONTH_NAMES_ID = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export const DAY_NAMES_ID = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
export const FULL_DAY_NAMES_ID = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
