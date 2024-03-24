# Materi Penanganan Event

## Ringkasan Materi KMReact - Penanganan Event

Poin penting yang dapat dipelajari dari materi Penanganan Event adalah sebagai berikut:

#### 1. Pengenalan State

State merupakan data privat sebuah komponen dalam React. Data ini hanya tersedia untuk komponen tersebut dan tidak dapat diakses dari komponen lain.

- State merupakan data yang dapat dimodifikasi menggunakan metode `setState()`.
- Setiap kali terjadi perubahan pada state, akan terjadi proses render ulang pada komponen.
- Perubahan state bersifat asynchronous.
- State digunakan dalam komponen kelas (class components).

Perbedaan antara Props dan State:

- **Props** hanya dapat dibaca (read-only), sedangkan **State** dapat diubah secara asynchronous.
- **Props** tidak dapat dimodifikasi, sedangkan **State** dapat dimodifikasi menggunakan `this.setState()`.

#### 2. Komponen Berdasarkan State

Komponen dalam React dapat dibagi menjadi dua jenis berdasarkan penggunaan state:

- **Stateful (Komponen Berkeadaan)**: Komponen ini memiliki state. Biasanya dibuat menggunakan class. Kelebihan dari komponen ini adalah memiliki siklus hidup (lifecycle).
- **Stateless (Komponen Tanpa Keadaan)**: Komponen ini tidak memiliki state, tetapi hanya menerima props. Umumnya dibuat menggunakan function karena lebih ringkas.

Komponen stateful dan stateless memiliki sejumlah nama alternatif, seperti:

- **Stateful**: Smart Component & Dump Component, Container Component & Presentational Component.
- **Stateless**: Functional Component.

Perbedaan antara Komponen Berkeadaan dan Komponen Tanpa Keadaan:

- Komponen Berkeadaan memiliki pemahaman tentang aplikasi dan dapat melakukan pengambilan data, sedangkan Komponen Tanpa Keadaan tidak.
- Komponen Berkeadaan berinteraksi secara langsung dengan aplikasi, sedangkan Komponen Tanpa Keadaan hanya bertujuan untuk visualisasi.
- Komponen Berkeadaan biasanya tidak dapat digunakan kembali, sementara Komponen Tanpa Keadaan dapat digunakan kembali.
- Komponen Berkeadaan meneruskan status dan data ke komponen anak, sedangkan Komponen Tanpa Keadaan hanya berkomunikasi dengan komponen induk.

#### 3. Penanganan Event

Penanganan Event merupakan metode untuk menanggapi aksi atau event yang dilakukan pengguna pada suatu komponen. Beberapa contoh event yang umum digunakan antara lain:

- Clipboard Events (promise terpenuhi)
- Form Events (seperti onChange, onSubmit)
- Mouse Events (seperti onClick, onDoubleClick, onMouseOver)
- Generic Events (seperti onError, onLoad)

