## Resume Materi KMReact - CSS

Poin penting yang dapat dipelajarin dari materi CSS adalah

#### 1. Pengertian CSS

CSS atau Cascading Style Sheets merupakan kumpulan aturan yang digunakan untuk memperindah halaman web, seperti mengatur warna, ukuran, jenis huruf, latar belakang, lebar, tinggi, dan lain sebagainya. Lebih dari itu, CSS juga memiliki kemampuan untuk mengatur tata letak atau susunan elemen-elemen pada halaman web, seperti mengatur posisi, mengapungkan, menyelaraskan, menampilkan, atau mengatur posisi elemen-elemen tersebut.

#### 2. Cara menambahkan file CSS ke dalam HTML

Ada 3 cara dalam menambahkan file CSS ke dalam HTML:

- Eksternal CSS: File CSS disisipkan ke dalam tag HTML menggunakan elemen < link >. File CSS biasanya memiliki ekstensi .css.
- Internal CSS: CSS dapat dimasukkan langsung ke dalam file HTML yang sama. Ini didefinisikan di dalam elemen < style >, entah di dalam bagian < head > atau di dalam elemen < style > itu sendiri.
- Inline CSS: CSS dapat diterapkan langsung ke elemen HTML individu menggunakan atribut style. Ini memberikan prioritas tertinggi untuk menerapkan gaya yang unik.

#### 3. Syntax dalam CSS

Dalam CSS, terdapat sintaksis yang digunakan untuk menentukan gaya dan tata letak elemen-elemen pada halaman web. Berikut adalah contoh sintaksis yang umum digunakan:

- Selector: Menunjukkan elemen atau kelompok elemen HTML yang akan diberi gaya.
- Property: Menunjukkan atribut-atribut dari elemen yang ingin Anda gayakan.
- Value: Nilai yang diberikan kepada properti tersebut.

#### 4. CSS Selector

CSS menggunakan selektor (selector) untuk menargetkan elemen HTML yang ingin diberi gaya. Ada beberapa jenis selektor yang umum digunakan, termasuk selektor ID dan selektor kelas (class).

1. Selektor ID (#):
- ID digunakan untuk menargetkan elemen tertentu dalam HTML.
- Penanda ID dimulai dengan tanda pagar (#) diikuti oleh nama ID yang unik.
- Setiap elemen hanya boleh memiliki satu ID dalam satu halaman HTML.
- Nama ID harus unik dalam satu halaman; tidak boleh ada dua elemen dengan ID yang sama.

2. Selektor Class (.):
- Class digunakan untuk menargetkan satu atau lebih elemen yang memiliki kelas yang sama.
- Penanda class dimulai dengan titik (.) diikuti oleh nama kelas.
- Elemen dengan kelas yang sama dapat digunakan berulang kali dalam satu halaman.
- Satu elemen dapat memiliki lebih dari satu kelas yang berbeda.
