# Materi React Routing

## Ringkasan Materi KMReact - React Routing

Berikut adalah poin-poin utama yang bisa dipelajari dari materi tentang React Routing:

### 1. Pengertian Router

Router merupakan sebuah modul dalam React yang bertugas mengatur navigasi pada aplikasi Single Page Application (SPA).

### 2. Perbedaan antara Multi Page Application (MPA) dan Single Page Application (SPA)

**Multi Page Application (MPA)**:
MPA adalah jenis aplikasi web di mana setiap permintaan baru memuat ulang seluruh halaman web. Keunggulan MPA antara lain kemudahan dalam optimasi SEO, fleksibilitas dalam mengubah halaman tertentu, dan integrasi dengan alat analisis seperti Google Analytics lebih mudah. Namun, MPA juga memiliki kelemahan seperti waktu unduh yang lebih lama, perlu integrasi antara front-end dan back-end, serta memerlukan perawatan dan pembaruan yang lebih sering.

**Single Page Application (SPA)**:
SPA adalah jenis aplikasi web di mana semua aktivitas dijalankan di satu halaman. Keunggulan SPA meliputi waktu loading yang cepat, tidak ada permintaan server tambahan, responsif, dan meningkatkan pengalaman pengguna. Namun, SPA juga memiliki kekurangan seperti SEO yang mungkin kurang optimal, memerlukan waktu unduh awal yang berat, keamanan yang lebih rendah dibandingkan dengan situs web biasa, dan masalah kompatibilitas browser.

### 3. Hook Routing

Ada empat hook routing yang berguna dalam React:

1. **useHistory**: Memberikan akses ke riwayat yang dapat digunakan untuk navigasi.
2. **useLocation**: Mengembalikan objek lokasi yang mewakili URL saat ini.
3. **useParams**: Mengembalikan objek pasangan kunci/nilai parameter URL untuk akses ke `match.params` dari `<Route>` saat ini.
4. **useRouteMatch**: Digunakan untuk mencocokkan URL saat ini seperti `<Route>`, berguna untuk mendapatkan akses ke data kecocokan tanpa merender `<Route>`.