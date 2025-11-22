# Setup Guide

## Quick Start (Menggunakan Supabase - Gratis)

### 1. Setup Database di Supabase

1. Buat akun di [Supabase](https://supabase.com) (gratis)
2. Buat project baru
3. Di dashboard Supabase, pergi ke **Settings** → **Database**
4. Copy **Connection String** (pilih yang "URI")
5. Paste ke file `.env` di variable `DATABASE_URL`

Contoh:
```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT].supabase.co:5432/postgres"
```

### 2. Generate NextAuth Secret

Jalankan command ini untuk generate secret key:

**Windows (PowerShell):**
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy hasilnya dan paste ke `.env` di variable `NEXTAUTH_SECRET`

### 3. Update Admin Credentials

Edit file `.env` dan ubah:
```
ADMIN_EMAIL="email-kamu@example.com"
ADMIN_PASSWORD="password-yang-aman"
```

### 4. Install Dependencies & Setup Database

```bash
npm install
npx prisma migrate dev --name init
npm run db:seed
```

### 5. Jalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

### 6. Login ke Admin Panel

1. Buka [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
2. Login dengan email dan password yang kamu set di `.env`
3. Mulai tambahkan projects dan blog posts!

## Alternatif Database (Selain Supabase)

### Neon (Gratis)
1. Buat akun di [Neon](https://neon.tech)
2. Buat project baru
3. Copy connection string
4. Paste ke `.env`

### Railway
1. Buat akun di [Railway](https://railway.app)
2. Buat PostgreSQL database
3. Copy connection string
4. Paste ke `.env`

### Local PostgreSQL
Jika kamu punya PostgreSQL terinstall di komputer:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio"
```

## Troubleshooting

### Error: "Can't reach database server"
- Pastikan DATABASE_URL sudah benar
- Cek koneksi internet
- Pastikan database sudah dibuat di Supabase/Neon

### Error saat migrate
```bash
npx prisma migrate reset
npx prisma migrate dev --name init
```

### Lupa password admin
Edit `.env`, ubah `ADMIN_PASSWORD`, lalu jalankan:
```bash
npm run db:seed
```

## Prisma Studio (Database GUI)

Untuk melihat dan edit database secara visual:
```bash
npm run db:studio
```

Akan membuka browser dengan GUI untuk manage database.

## Deploy ke Production

### Vercel (Recommended)

1. Push code ke GitHub
2. Import project ke [Vercel](https://vercel.com)
3. Tambahkan environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (URL production kamu)
   - `NEXTAUTH_SECRET`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD`
4. Deploy!

Setelah deploy, jalankan seed di production:
```bash
npx prisma migrate deploy
npx tsx scripts/seed.ts
```

## Customization

### Ganti Nama & Info Personal

Edit file-file ini:
- `app/page.tsx` - Homepage hero section
- `app/layout.tsx` - Title dan metadata
- `components/navbar.tsx` - Logo/brand name

### Ganti Warna Theme

Edit `tailwind.config.ts` untuk customize warna.

### Tambah Halaman Baru

Buat folder baru di `app/nama-halaman/page.tsx`

## Tips

1. Gunakan Prisma Studio untuk manage content lebih mudah
2. Backup database secara berkala
3. Jangan commit file `.env` ke Git
4. Generate NEXTAUTH_SECRET yang kuat untuk production
5. Gunakan password yang aman untuk admin

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
