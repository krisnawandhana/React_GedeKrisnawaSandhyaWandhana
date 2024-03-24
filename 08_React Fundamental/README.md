test# Materi Dasar React

## Ringkasan Materi KMReact - Dasar-dasar React

Poin penting yang dapat dipelajari dari materi Pengantar React adalah sebagai berikut:

#### 1. Pengenalan JSX

JSX, singkatan dari JavaScript XML, adalah ekstensi pada JavaScript yang memudahkan penulisan tampilan UI dalam aplikasi React. JSX memungkinkan penggunaan sintaks yang mirip dengan XML/HTML untuk membuat struktur tampilan dalam JavaScript. Dalam JSX, penulisan nama elemen React harus diawali dengan huruf kapital untuk komponen yang kita buat sendiri, dan huruf kecil untuk komponen bawaan.

Contoh:

```jsx
<!-- Komponen React -->
<MyButton>Klik Saya</Button>

<!-- Komponen Bawaan -->
<h1>Hello World!</h1>
```

Untuk menyisipkan ekspresi JavaScript yang valid di dalam JSX, kita dapat menggunakan tanda kurung kurawal.

Contoh:

```jsx
const name = 'Gede Krisnawa Sandhya Wandhana';
const element = <h1>Nama saya adalah {name}</h1>;
```

#### 2. Komponen React dan Props

Komponen React adalah bagian dari kode yang dapat digunakan kembali untuk menentukan tampilan, perilaku, dan state dari sebagian UI. Dalam konteks komponen, terdapat konsep Props yang berperan penting:

Props:

- Props adalah singkatan dari properties, yang memungkinkan kita untuk memberikan argumen atau data kepada komponen.
- Props membuat komponen menjadi lebih dinamis dengan memungkinkan pengaturan nilai dari luar.
- Props disertakan ke dalam komponen dengan cara yang mirip dengan memberikan atribut pada tag HTML.
- Props bersifat read-only dan tidak dapat diubah di dalam komponen.

#### 3. Siklus Hidup Komponen (Lifecycle)

Beberapa metode siklus hidup komponen yang umum digunakan:

1. render()

   - Metode yang paling sering digunakan dalam React.
   - Wajib ada pada komponen kelas.
   - Berupa Pure Function, yang berarti tidak boleh melakukan pemanggilan `setState()` di dalamnya.

2. componentDidMount()

   - Dipanggil setelah komponen dirender pertama kali.
   - Tempat yang tepat untuk melakukan pemanggilan API atau tindakan lain yang diperlukan setelah komponen terpasang.
   - Boleh melakukan pemanggilan `setState()`.

3. componentDidUpdate()

   - Dipanggil setelah terjadi perubahan (perubahan props atau state) yang menyebabkan perubahan pada tampilan komponen.

4. componentWillUnmount()

   - Dipanggil sebelum komponen dihapus dari DOM.
   - Biasanya digunakan untuk membersihkan atau melakukan tindakan terakhir sebelum komponen dihapus.