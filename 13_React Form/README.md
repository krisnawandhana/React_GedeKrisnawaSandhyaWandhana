# Materi React Form

## Ringkasan Materi KMReact - React Form

Berikut adalah poin-poin penting yang dapat dipelajari dari materi tentang React Form:

### 1. Pengertian Form

Form merupakan salah satu elemen penting dalam pengembangan aplikasi website yang digunakan untuk meng-handle inputan dari pengguna.

### 2. Controlled Component & Uncontrolled Component

**Controlled Component** adalah elemen masukan form di mana nilai-nilainya dikontrol oleh React melalui penyimpanan dan pembaruan state di HTML dan React dengan menggunakan state.

**Uncontrolled Component** merupakan alternatif dari controlled component di mana data form ditangani oleh DOM-nya sendiri. Untuk membuat uncontrolled component, daripada menulis event handler untuk setiap pembaruan state, kita dapat menggunakan ref untuk mengambil nilai form dari DOM.

### 3. Alasan Pentingnya Validasi Form

Validasi form diperlukan dengan alasan sebagai berikut:

- Memastikan input data yang benar dan sesuai dengan format yang diinginkan.
- Melindungi akun pengguna, seperti memastikan pengguna memasukkan data password yang aman.
- Melindungi sistem atau aplikasi dari perilaku pengguna yang ingin meretas sistem atau aplikasi.

Dengan validasi form yang kuat, dapat mengurangi potensi risiko dari perilaku pengguna yang tidak diinginkan.