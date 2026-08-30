import { SchoolInfo, ClassRoom, Student, TeacherStaff, Announcement, EskulItem, AcademicCalendarEvent, SchoolFacility } from '../types';

export function getWebsiteIndexHtml(schoolInfo: SchoolInfo): string {
  return `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(schoolInfo.name || 'Galeri Kenangan Sekolah')}</title>
    <meta name="description" content="${escapeHtml(schoolInfo.tagline || 'Platform digital arsip kenangan, profil sekolah, media kegiatan, direktori kelas & siswa, struktur guru dan staf.')}" />
    <meta name="theme-color" content="#5A5A40" />
    
    <!-- Open Graph / Meta Sosial -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(schoolInfo.name || 'Galeri Kenangan Sekolah')}" />
    <meta property="og:description" content="${escapeHtml(schoolInfo.tagline || 'Platform digital arsip kenangan, profil sekolah, media kegiatan, direktori kelas & siswa, struktur guru dan staf.')}" />
    <meta property="og:site_name" content="${escapeHtml(schoolInfo.name || 'Galeri Kenangan Sekolah')}" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="${escapeHtml(schoolInfo.name || 'Galeri Kenangan Sekolah')}" />
    <meta property="twitter:description" content="${escapeHtml(schoolInfo.tagline || 'Platform digital arsip kenangan, profil sekolah, media kegiatan, direktori kelas & siswa, struktur guru dan staf.')}" />

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#FBFBFA] text-[#2D2D2A] antialiased selection:bg-[#5A5A40] selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

function escapeHtml(str?: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function generateSchoolPortalHtml(params: {
  schoolInfo: SchoolInfo;
  classes?: ClassRoom[];
  students?: Student[];
  teachers?: TeacherStaff[];
  announcements?: Announcement[];
  eskulList?: EskulItem[];
  calendarEvents?: AcademicCalendarEvent[];
  facilities?: SchoolFacility[];
}): string {
  const {
    schoolInfo,
    classes = [],
    students = [],
    teachers = [],
    announcements = [],
    eskulList = [],
    calendarEvents = [],
    facilities = []
  } = params;

  const dateStr = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const safeSchoolName = escapeHtml(schoolInfo.name || 'SMA Negeri 1 Nusantara');
  const safeTagline = escapeHtml(schoolInfo.tagline || 'Pusat Keunggulan Akademik, Karakter & Teknologi');
  const safeAkreditasi = escapeHtml(schoolInfo.akreditasi || 'A');
  const safeNpsn = escapeHtml(schoolInfo.npsn || '10203040');
  const safeAddress = escapeHtml(schoolInfo.address || 'Jl. Pendidikan No. 01');
  const safeAcademicYear = escapeHtml(schoolInfo.academicYear || '2026/2027');
  const safeCreator = escapeHtml(schoolInfo.creatorName || 'Waa-O51W');
  const safeEmail = escapeHtml(schoolInfo.email || 'info@sekolah.sch.id');
  const safePhone = escapeHtml(schoolInfo.phone || '(021) 7890123');
  const safeWebsite = escapeHtml(schoolInfo.website || 'https://sman1nusantara.sch.id');
  const safeVisi = escapeHtml(schoolInfo.visi || 'Mencetak generasi berakhlak mulia, berprestasi unggul, dan siap menghadapi tantangan masa depan.');
  const safeSejarah = escapeHtml(schoolInfo.sejarah || '');

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeSchoolName} — Arsip & Portal Web Interaktif</title>
  <meta name="description" content="${safeTagline}">
  <style>
    :root {
      --primary: #5A5A40;
      --primary-dark: #444430;
      --primary-light: #767658;
      --primary-subtle: #F2F2EC;
      --bg: #FBFBFA;
      --card-bg: #FFFFFF;
      --text: #2D2D2A;
      --muted: #6E6E64;
      --border: #E2E2D8;
      --accent: #EFEFEA;
      --gold: #B48C36;
      --gold-bg: #FEF9EE;
      --shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
      --radius: 16px;
    }

    [data-theme="dark"] {
      --primary: #8E8E6E;
      --primary-dark: #A4A485;
      --primary-light: #5A5A40;
      --primary-subtle: #242420;
      --bg: #181816;
      --card-bg: #22221F;
      --text: #EBEBE5;
      --muted: #A2A296;
      --border: #3A3A34;
      --accent: #2C2C28;
      --gold: #D4AF37;
      --gold-bg: #2A2416;
      --shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding-bottom: 60px;
      transition: background-color 0.2s, color 0.2s;
    }

    .container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }

    /* Top Nav */
    .top-header {
      background: var(--card-bg);
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 10px rgba(0,0,0,0.02);
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }
    .brand-box {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: var(--text);
    }
    .logo-icon {
      width: 44px;
      height: 44px;
      background: var(--primary);
      color: #fff;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      font-weight: bold;
    }
    .brand-title { font-size: 17px; font-weight: 800; line-height: 1.2; }
    .brand-subtitle { font-size: 11px; color: var(--muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; }

    .header-actions { display: flex; align-items: center; gap: 8px; }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      border: 1px solid var(--border);
      background: var(--card-bg);
      color: var(--text);
      transition: all 0.15s;
    }
    .btn:hover { background: var(--accent); }
    .btn-primary { background: var(--primary); color: #fff; border-color: var(--primary); }
    .btn-primary:hover { background: var(--primary-dark); }

    /* Hero Banner */
    .hero {
      background: linear-gradient(135deg, var(--card-bg) 0%, var(--primary-subtle) 100%);
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 36px 28px;
      margin: 20px 0;
      box-shadow: var(--shadow);
      text-align: center;
      position: relative;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 12px;
      background: var(--accent);
      color: var(--primary);
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 999px;
      margin-bottom: 12px;
      border: 1px solid var(--border);
    }
    .badge-gold { background: var(--gold-bg); color: var(--gold); border-color: var(--gold); }
    h1 { font-size: 32px; font-weight: 800; margin-bottom: 8px; letter-spacing: -0.5px; }
    .hero-lead { font-size: 15px; color: var(--muted); max-width: 800px; margin: 0 auto 18px; }

    .meta-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      font-size: 13px;
      color: var(--muted);
      padding-top: 16px;
      border-top: 1px solid var(--border);
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 10px;
      margin-bottom: 24px;
    }
    .stat-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 16px 12px;
      text-align: center;
      box-shadow: var(--shadow);
    }
    .stat-val { font-size: 26px; font-weight: 800; color: var(--primary); }
    .stat-label { font-size: 11px; color: var(--muted); font-weight: 700; text-transform: uppercase; margin-top: 2px; }

    /* Navigation Tabs */
    .tabs-wrapper {
      position: sticky;
      top: 70px;
      z-index: 90;
      background: var(--bg);
      padding: 8px 0;
      margin-bottom: 20px;
    }
    .tabs-bar {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 4px;
      scrollbar-width: none;
    }
    .tabs-bar::-webkit-scrollbar { display: none; }
    .tab-btn {
      padding: 8px 16px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      color: var(--muted);
      font-size: 13px;
      font-weight: 700;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s;
    }
    .tab-btn:hover { color: var(--text); background: var(--accent); }
    .tab-btn.active {
      background: var(--primary);
      color: #fff;
      border-color: var(--primary);
      box-shadow: 0 2px 8px rgba(90,90,64,0.3);
    }

    /* Tab Contents */
    .tab-pane { display: none; }
    .tab-pane.active { display: block; animation: fadeIn 0.25s ease-in-out; }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Content Cards & Sections */
    .card-section {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: var(--shadow);
    }
    .section-head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
      gap: 10px;
    }
    .section-title { font-size: 19px; font-weight: 800; }

    /* Search Input */
    .search-input {
      width: 100%;
      max-width: 320px;
      padding: 8px 14px;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--bg);
      color: var(--text);
      font-size: 13px;
      outline: none;
    }
    .search-input:focus { border-color: var(--primary); ring: 2px var(--primary); }

    /* Grids */
    .grid-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 14px;
    }
    .sub-card {
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .sub-card:hover { transform: translateY(-2px); box-shadow: var(--shadow); }
    .sub-card h4 { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
    .sub-card p { font-size: 13px; color: var(--muted); margin-bottom: 6px; }

    /* Tables */
    .table-responsive { overflow-x: auto; margin-top: 10px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }
    th, td { padding: 12px 14px; border-bottom: 1px solid var(--border); }
    th { background: var(--accent); color: var(--text); font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
    tbody tr:hover { background: var(--accent); }

    /* Footer */
    footer {
      text-align: center;
      margin-top: 40px;
      padding: 24px;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 13px;
    }

    @media print {
      .top-header, .tabs-wrapper, .header-actions, .search-input { display: none !important; }
      .tab-pane { display: block !important; margin-bottom: 30px; page-break-after: always; }
      body { background: #fff; color: #000; padding: 0; }
      .hero, .card-section { box-shadow: none; border: 1px solid #ccc; }
    }
  </style>
</head>
<body data-theme="light">

  <!-- Header -->
  <header class="top-header">
    <div class="container header-inner">
      <a href="#beranda" class="brand-box" onclick="showTab('beranda')">
        <div class="logo-icon">🏛️</div>
        <div>
          <div class="brand-subtitle">Portal Web Sekolah</div>
          <div class="brand-title">${safeSchoolName}</div>
        </div>
      </a>
      <div class="header-actions">
        <button class="btn" onclick="toggleDarkMode()" title="Ganti Tema">🌓 Mode</button>
        <button class="btn btn-primary" onclick="window.print()" title="Cetak atau Simpan PDF">🖨️ Cetak / PDF</button>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- Hero Banner -->
    <div class="hero">
      <span class="badge badge-gold">⭐ Akreditasi ${safeAkreditasi}</span>
      <h1>${safeSchoolName}</h1>
      <p class="hero-lead">${safeTagline}</p>
      <div class="meta-bar">
        <span>📍 ${safeAddress}</span>
        <span>🏫 NPSN: <strong>${safeNpsn}</strong></span>
        <span>📅 Tahun Ajaran: <strong>${safeAcademicYear}</strong></span>
        <span>👤 Pembuat: <strong>${safeCreator}</strong></span>
        <span>🕒 Diekspor: ${dateStr}</span>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-val">${classes.length}</div>
        <div class="stat-label">Rombel Kelas</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${students.length}</div>
        <div class="stat-label">Siswa Aktif</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${teachers.length}</div>
        <div class="stat-label">Guru & Staf</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${calendarEvents.length}</div>
        <div class="stat-label">Agenda Kalender</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${announcements.length}</div>
        <div class="stat-label">Pengumuman</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${eskulList.length}</div>
        <div class="stat-label">Ekstrakurikuler</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">${facilities.length}</div>
        <div class="stat-label">Fasilitas</div>
      </div>
    </div>

    <!-- Tabs Navigation Bar -->
    <div class="tabs-wrapper">
      <div class="tabs-bar">
        <button class="tab-btn active" onclick="showTab('beranda')">🏫 Beranda & Profil</button>
        <button class="tab-btn" onclick="showTab('kelas')">🎓 Rombel Kelas (${classes.length})</button>
        <button class="tab-btn" onclick="showTab('siswa')">👥 Direktori Siswa (${students.length})</button>
        <button class="tab-btn" onclick="showTab('guru')">👨‍🏫 Guru & Staf (${teachers.length})</button>
        <button class="tab-btn" onclick="showTab('kalender')">📅 Kalender Akademik (${calendarEvents.length})</button>
        <button class="tab-btn" onclick="showTab('warta')">📢 Warta & Pengumuman (${announcements.length})</button>
        <button class="tab-btn" onclick="showTab('ekskul')">🏆 Ekstrakurikuler (${eskulList.length})</button>
        <button class="tab-btn" onclick="showTab('fasilitas')">🏛️ Fasilitas (${facilities.length})</button>
        <button class="tab-btn" onclick="showTab('kontak')">📞 Kontak & Lokasi</button>
      </div>
    </div>

    <!-- TAB 1: BERANDA & PROFIL -->
    <div id="tab-beranda" class="tab-pane active">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Visi & Misi Sekolah</div>
        </div>
        <div class="grid-cards">
          <div class="sub-card">
            <h4>🎯 Visi Utama</h4>
            <p>${safeVisi}</p>
          </div>
          <div class="sub-card">
            <h4>📌 Misi Penyelenggaraan</h4>
            <p>${schoolInfo.misi && schoolInfo.misi.length > 0 ? schoolInfo.misi.map(m => `• ${escapeHtml(m)}`).join('<br>') : 'Menyelenggarakan pembelajaran berkualitas dan membina karakter unggul peserta didik.'}</p>
          </div>
        </div>
      </div>

      ${safeSejarah ? `
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Linimasa & Sejarah Sekolah</div>
        </div>
        <p style="font-size:14px;color:var(--text);line-height:1.7;">${safeSejarah}</p>
      </div>
      ` : ''}
    </div>

    <!-- TAB 2: ROMBEL KELAS -->
    <div id="tab-kelas" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Daftar Rombongan Belajar / Kelas (${classes.length})</div>
        </div>
        <div class="grid-cards">
          ${classes.map(c => {
            const count = students.filter(s => s.classId === c.id).length;
            return `
              <div class="sub-card">
                <span class="badge">${escapeHtml(c.grade || 'Tingkat')}</span>
                <h4>${escapeHtml(c.name)}</h4>
                <p><strong>Wali Kelas:</strong> ${escapeHtml(c.perangkat?.waliKelas || 'Belum diisi')}</p>
                <p><strong>Ketua Kelas:</strong> ${escapeHtml(c.perangkat?.ketuaKelas || '-')}</p>
                <p><strong>Jumlah Siswa:</strong> ${count} Siswa Terdata</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- TAB 3: DIREKTORI SISWA -->
    <div id="tab-siswa" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Direktori Siswa Terdata (${students.length})</div>
          <input type="text" id="search-siswa" class="search-input" placeholder="🔍 Cari nama siswa, NISN, cita-cita..." onkeyup="filterTable('search-siswa', 'table-siswa')">
        </div>
        <div class="table-responsive">
          <table id="table-siswa">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>NISN</th>
                <th>Kelas</th>
                <th>Cita-cita</th>
                <th>Kutipan / Catatan</th>
              </tr>
            </thead>
            <tbody>
              ${students.map((s, idx) => {
                const cls = classes.find(c => c.id === s.classId);
                return `
                  <tr>
                    <td>${idx + 1}</td>
                    <td><strong>${escapeHtml(s.name)}</strong></td>
                    <td>${escapeHtml(s.nisn || '-')}</td>
                    <td>${escapeHtml(cls ? cls.name : '-')}</td>
                    <td>${escapeHtml(s.citaCita || '-')}</td>
                    <td><em>${escapeHtml(s.quote || s.pesanKesan || '-')}</em></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 4: GURU & STAF -->
    <div id="tab-guru" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Dewan Pendidik & Tenaga Kependidikan (${teachers.length})</div>
          <input type="text" id="search-guru" class="search-input" placeholder="🔍 Cari guru, NIP, mata pelajaran..." onkeyup="filterTable('search-guru', 'table-guru')">
        </div>
        <div class="table-responsive">
          <table id="table-guru">
            <thead>
              <tr>
                <th>Nama Guru / Staf</th>
                <th>NIP</th>
                <th>Mata Pelajaran / Posisi</th>
                <th>Catatan / Biodata</th>
              </tr>
            </thead>
            <tbody>
              ${teachers.map(t => `
                <tr>
                  <td><strong>${escapeHtml(t.name)}</strong></td>
                  <td>${escapeHtml(t.nip || '-')}</td>
                  <td>${escapeHtml(t.subjects?.join(', ') || t.roleTitle || t.role || '-')}</td>
                  <td><em>${escapeHtml(t.bio || '-')}</em></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 5: KALENDER AKADEMIK -->
    <div id="tab-kalender" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Agenda & Kalender Akademik (${calendarEvents.length})</div>
          <input type="text" id="search-kalender" class="search-input" placeholder="🔍 Cari kegiatan, tanggal..." onkeyup="filterTable('search-kalender', 'table-kalender')">
        </div>
        <div class="table-responsive">
          <table id="table-kalender">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Agenda Kegiatan</th>
                <th>Kategori</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              ${calendarEvents.map(ev => `
                <tr>
                  <td><strong>${escapeHtml(ev.startDate)}${ev.endDate ? ' s/d ' + escapeHtml(ev.endDate) : ''}</strong></td>
                  <td>${escapeHtml(ev.title)}</td>
                  <td><span class="badge" style="margin:0;">${escapeHtml(ev.category)}</span></td>
                  <td>${escapeHtml(ev.description || '-')}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 6: WARTA & PENGUMUMAN -->
    <div id="tab-warta" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Warta & Pengumuman Sekolah (${announcements.length})</div>
        </div>
        <div class="grid-cards">
          ${announcements.map(a => `
            <div class="sub-card">
              <span class="badge">${escapeHtml(a.category || 'Pengumuman')}</span>
              <h4>${escapeHtml(a.title)}</h4>
              <p style="font-size:11px;color:var(--muted);margin-bottom:8px;">📅 ${escapeHtml(a.date || '-')}</p>
              <p>${escapeHtml(a.content || '-')}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- TAB 7: EKSTRAKURIKULER -->
    <div id="tab-ekskul" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Ekstrakurikuler & Pengembangan Bakat (${eskulList.length})</div>
        </div>
        <div class="grid-cards">
          ${eskulList.map(e => `
            <div class="sub-card">
              <span class="badge">${escapeHtml(e.category || 'Ekskul')}</span>
              <h4>${escapeHtml(e.name)}</h4>
              <p><strong>Pembina:</strong> ${escapeHtml(e.pembina || e.coach || '-')}</p>
              <p><strong>Ketua:</strong> ${escapeHtml(e.ketua || '-')}</p>
              <p><strong>Jadwal:</strong> ${escapeHtml(e.schedule || '-')}</p>
              <p>${escapeHtml(e.description || '-')}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- TAB 8: FASILITAS -->
    <div id="tab-fasilitas" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Sarana & Prasarana Sekolah (${facilities.length})</div>
        </div>
        <div class="grid-cards">
          ${facilities.map(f => `
            <div class="sub-card">
              <h4>${escapeHtml(f.nama)}</h4>
              <p>${escapeHtml(f.deskripsi || '-')}</p>
              ${f.lokasi ? `<p style="font-size:12px;">📍 Lokasi: ${escapeHtml(f.lokasi)}</p>` : ''}
              ${f.kondisi ? `<p style="font-size:12px;">✨ Kondisi: ${escapeHtml(f.kondisi)}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- TAB 9: KONTAK -->
    <div id="tab-kontak" class="tab-pane">
      <div class="card-section">
        <div class="section-head">
          <div class="section-title">Informasi Kontak & Layanan Resmi</div>
        </div>
        <div class="grid-cards">
          <div class="sub-card">
            <h4>📍 Alamat Lengkap</h4>
            <p>${safeAddress}</p>
            <p>${escapeHtml(schoolInfo.city || '')}, ${escapeHtml(schoolInfo.province || '')} ${escapeHtml(schoolInfo.postalCode || '')}</p>
          </div>
          <div class="sub-card">
            <h4>📞 Telepon & Surel</h4>
            <p><strong>Telepon:</strong> ${safePhone}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Website:</strong> ${safeWebsite}</p>
          </div>
          <div class="sub-card">
            <h4>💻 Informasi Sistem</h4>
            <p><strong>Pengembang Sistem:</strong> ${safeCreator}</p>
            <p><strong>Platform:</strong> Arsip Web HTML Mandiri</p>
            <p><strong>Status Berkas:</strong> Berkas HTML Portabel (Dapat dijalankan tanpa koneksi internet)</p>
          </div>
        </div>
      </div>
    </div>

  </main>

  <footer>
    <div class="container">
      <p>© ${new Date().getFullYear()} <strong>${safeSchoolName}</strong>. Seluruh Hak Cipta Dilindungi.</p>
      <p style="font-size:11px;margin-top:4px;">Berkas HTML Portal Sekolah Mandiri • Dapat dibuka secara offline di semua peramban web.</p>
    </div>
  </footer>

  <script>
    function showTab(tabName) {
      const panes = document.querySelectorAll('.tab-pane');
      const btns = document.querySelectorAll('.tab-btn');
      
      panes.forEach(pane => pane.classList.remove('active'));
      btns.forEach(btn => btn.classList.remove('active'));

      const targetPane = document.getElementById('tab-' + tabName);
      if (targetPane) targetPane.classList.add('active');

      const activeBtn = Array.from(btns).find(btn => btn.getAttribute('onclick')?.includes("'" + tabName + "'"));
      if (activeBtn) activeBtn.classList.add('active');
    }

    function toggleDarkMode() {
      const body = document.body;
      const current = body.getAttribute('data-theme');
      body.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
    }

    function filterTable(inputId, tableId) {
      const input = document.getElementById(inputId);
      const filter = input.value.toLowerCase();
      const table = document.getElementById(tableId);
      const rows = table.getElementsByTagName('tr');

      for (let i = 1; i < rows.length; i++) {
        let text = rows[i].textContent || rows[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  </script>
</body>
</html>`;
}

