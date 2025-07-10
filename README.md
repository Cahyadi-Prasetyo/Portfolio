# 🎨 Portfolio IMK – Laravel + TailwindCSS + Three.js

**Portfolio IMK** adalah proyek UAS dari mata kuliah *Interaksi Manusia dan Komputer (IMK)* yang dibangun dengan pendekatan modern web development. Aplikasi ini tidak hanya menampilkan karya-karya portofolio secara estetik, tetapi juga mengintegrasikan pengalaman pengguna interaktif menggunakan **Three.js**, **Tailwind CSS**, dan sistem pengelolaan data melalui halaman admin.

---

## 🧩 Fitur Utama

- 💼 Tampilan portofolio interaktif dengan visual 3D dari **[Three.js](https://threejs.org/)**
- 🎨 Styling dinamis dan responsif menggunakan **[Tailwind CSS](https://tailwindcss.com/)**
- 📧 Formulir kontak yang mengirim langsung ke email pemilik
- 🔐 Halaman admin untuk menambahkan, mengedit, atau menghapus data portofolio
- 🧠 Struktur view modular menggunakan Blade Template Laravel

---

## 📁 Struktur View (resources/views)

```

resources/views/
│
├── admin/             # Halaman dashboard admin
│   ├── auth/          # Halaman login admin
│   │   └── login.blade.php
│   ├── partials/
│   │   └── footer.blade.php
│   │   └── navbar.blade.php
│   │   └── sidebar.blade.php
│   ├── index.blade.php
│   .....
├── partials/          # Komponen layout utama di halaman portfolio (navbar, footer, dll)
│   ├── footer.blade.php
│   └── navbar.blade.php
│
├── home.blade.php     # Halaman utama (home, about, skill, project, experience, education, activities)
├── articles.blade.php
├── contact.blade.php
├── show.blade.php
└── welcome.blade.php  # Default route

````

---

## 🚀 Instalasi Proyek

### 1. **Clone Repository**
```bash
git clone https://github.com/Cahyadi-Prasetyo/portfolio.git
cd portfolio-imk
````

### 2. **Install Dependency PHP dan Frontend**

```bash
composer install
npm install
```

### 3. **Install Three.js**

```bash
npm install three
```

Import `three` di file JS (misalnya di `resources/js/app.js`):

```js
import * as THREE from 'three';
```

### 4. **Copy File Environment**

```bash
cp .env.example .env
php artisan key:generate
```

### 5. **Atur Database**

Edit `.env` dan sesuaikan konfigurasi:

```
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
```

Lalu jalankan migrasi:

```bash
php artisan migrate
```

### 6. **Kompilasi Asset Frontend (Tailwind, JS, Three.js)**

```bash
npm run dev
```

### 7. **Jalankan Aplikasi**

```bash
php artisan serve
```

Akses aplikasi di: `http://127.0.0.1:8000`

---

## 🛠️ Teknologi yang Digunakan

## 🛠️ Teknologi yang Digunakan

| Logo                                                                                                                        |Deskripsi                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| ![Laravel](https://img.shields.io/badge/Laravel-F55247?style=for-the-badge&logo=laravel&logoColor=white)| Backend framework PHP modern untuk routing, controller, dsb |
| ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)   | Utility-first CSS framework untuk desain modern dan cepat   |
| ![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)   | Library JavaScript untuk grafik 3D berbasis WebGL           |
| ![Blade](https://img.shields.io/badge/Blade-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)     | Template engine Laravel untuk membuat tampilan dinamis      |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)   | Bahasa pemrograman utama untuk interaktivitas dan logika UI |


---

## 📬 Kontak

📧 Email dikirim langsung ke alamat pribadi melalui form contact. Tidak menggunakan database untuk penyimpanan pesan.

---

## 📄 Lisensi

Proyek ini dibuat sebagai bagian dari penilaian akademik mata kuliah *Interaksi Manusia dan Komputer*. Penggunaan diperbolehkan untuk referensi dan pengembangan non-komersial.

---

> Dibuat dengan semangat oleh **Cahyadi Prasetyo**
> Universitas Maritim Raja Ali Haji (UMRAH) – Teknik Informatika
> Tahun Akademik 2025

```
