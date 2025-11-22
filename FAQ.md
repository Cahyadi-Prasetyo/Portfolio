# Frequently Asked Questions (FAQ)

## Setup & Installation

### Q: Apakah saya perlu install PostgreSQL di komputer saya?
**A:** Tidak perlu! Gunakan cloud database gratis seperti Supabase atau Neon. Lebih mudah dan tidak perlu setup lokal.

### Q: Berapa biaya untuk hosting?
**A:** Gratis! Gunakan:
- Vercel (hosting) - Free tier
- Supabase/Neon (database) - Free tier
- Total: $0/bulan untuk portfolio personal

### Q: Saya tidak punya pengalaman dengan Next.js, apakah bisa?
**A:** Ya! Project ini sudah siap pakai. Kamu hanya perlu:
1. Setup database (5 menit)
2. Run commands (5 menit)
3. Customize content via admin panel

### Q: Bagaimana cara generate NEXTAUTH_SECRET?
**A:** Jalankan command ini di terminal:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```
Copy hasilnya ke `.env`

## Database

### Q: Apa itu Prisma?
**A:** Prisma adalah ORM (Object-Relational Mapping) yang membuat interaksi dengan database lebih mudah. Kamu tidak perlu menulis SQL manual.

### Q: Bagaimana cara melihat data di database?
**A:** Gunakan Prisma Studio:
```bash
npm run db:studio
```
Akan membuka GUI di browser untuk manage database.

### Q: Bagaimana cara backup database?
**A:** 
- **Supabase**: Automatic backups included
- **Manual**: Export via Prisma Studio atau pg_dump

### Q: Bisa pakai MySQL atau MongoDB?
**A:** Bisa! Edit `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "mysql"  // atau "mongodb"
  url      = env("DATABASE_URL")
}
```
Lalu run `npx prisma migrate dev`

## Admin Panel

### Q: Bagaimana cara menambah admin user baru?
**A:** Saat ini hanya support 1 admin. Untuk multiple admins, perlu modifikasi:
1. Tambah registration page
2. Update seed script
3. Add user management di admin panel

### Q: Lupa password admin, bagaimana?
**A:** 
1. Edit `.env`, ubah `ADMIN_PASSWORD`
2. Run `npm run db:seed` lagi
3. Login dengan password baru

### Q: Apakah admin panel responsive?
**A:** Ya, tapi optimal di desktop. Untuk mobile, gunakan Prisma Studio sebagai alternatif.

### Q: Bagaimana cara logout dari admin?
**A:** Klik "Logout" di navbar admin panel, atau buka `/api/auth/signout`

## Content Management

### Q: Bagaimana cara upload gambar?
**A:** Saat ini belum ada image upload. Opsi:
1. Host gambar di Imgur/Cloudinary
2. Paste URL di admin panel
3. Atau implement image upload (lihat NEXT_STEPS.md)

### Q: Apakah support markdown untuk blog?
**A:** Belum built-in. Saat ini plain text. Untuk markdown:
1. Install `react-markdown`
2. Update blog post display component

### Q: Bagaimana cara membuat blog post draft?
**A:** Di admin panel, set "Published" ke false. Post tidak akan muncul di public page.

### Q: Bisa schedule post untuk publish nanti?
**A:** Belum ada fitur ini. Perlu tambah field `publishedAt` dan logic untuk check date.

## Customization

### Q: Bagaimana cara ganti warna theme?
**A:** Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Q: Bagaimana cara ganti font?
**A:** Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
const font = YourFont({ subsets: ["latin"] });
```

### Q: Bisa tambah halaman baru?
**A:** Ya! Buat folder baru di `app/`:
```
app/
  about/
    page.tsx
```

### Q: Bagaimana cara ganti logo?
**A:** Edit `components/navbar.tsx`, ganti text "Portfolio" dengan:
```tsx
<Image src="/logo.png" alt="Logo" width={100} height={40} />
```

## Deployment

### Q: Kenapa build error di Vercel?
**A:** Common issues:
1. Environment variables belum di-set
2. DATABASE_URL tidak valid
3. TypeScript errors - run `npm run build` locally dulu

### Q: Bagaimana cara update production setelah deploy?
**A:** Push ke GitHub, Vercel auto-deploy. Atau manual:
```bash
vercel --prod
```

### Q: Apakah perlu run migration di production?
**A:** Ya, setelah first deploy:
```bash
npx prisma migrate deploy
```

### Q: Custom domain tidak work?
**A:** 
1. Add domain di Vercel dashboard
2. Update DNS records
3. Wait 24-48 hours untuk propagation

## Performance

### Q: Website loading lambat?
**A:** Check:
1. Image optimization - gunakan next/image
2. Database query - optimize dengan Prisma
3. Vercel region - pilih yang dekat dengan audience

### Q: Bagaimana cara improve SEO?
**A:** 
1. Update metadata di `app/layout.tsx`
2. Add meta tags per page
3. Generate sitemap
4. Add structured data (Schema.org)

### Q: Bisa pakai CDN untuk images?
**A:** Ya! Gunakan:
- Cloudinary
- Imgix
- Vercel Image Optimization (built-in)

## Troubleshooting

### Q: Error "Can't reach database server"?
**A:** 
1. Check DATABASE_URL di `.env`
2. Verify database is running
3. Check firewall/network
4. Test connection: `npx prisma db pull`

### Q: Error "Module not found"?
**A:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Q: Prisma Client error?
**A:** 
```bash
npx prisma generate
```

### Q: Migration error?
**A:** 
```bash
npx prisma migrate reset
npx prisma migrate dev --name init
```

### Q: TypeScript errors?
**A:** 
```bash
npm run build
```
Fix errors yang muncul satu per satu.

### Q: Port 3000 already in use?
**A:** 
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

## Features

### Q: Apakah ada dark mode?
**A:** Belum built-in. Lihat NEXT_STEPS.md untuk implementasi.

### Q: Bisa tambah comments di blog?
**A:** Belum ada. Bisa integrate:
- Disqus
- Giscus (GitHub Discussions)
- Custom comment system

### Q: Apakah ada search functionality?
**A:** Belum ada. Perlu implement:
1. Search bar component
2. API route untuk search
3. Prisma query dengan `contains`

### Q: Bisa export blog posts?
**A:** Via Prisma Studio atau custom script:
```bash
npx prisma db pull
```

## Security

### Q: Apakah aman?
**A:** Ya, dengan:
- Password hashing (bcrypt)
- NextAuth.js authentication
- Route protection (middleware)
- Input validation (Zod)

### Q: Bagaimana cara protect dari spam?
**A:** Tambahkan:
- Rate limiting
- CAPTCHA (reCAPTCHA)
- Email verification

### Q: Apakah perlu HTTPS?
**A:** Vercel automatically provides HTTPS. Untuk custom domain, SSL certificate auto-generated.

## Cost & Scaling

### Q: Kapan perlu upgrade dari free tier?
**A:** 
- Vercel: >100GB bandwidth/month
- Supabase: >500MB database atau >2GB bandwidth
- Untuk portfolio personal, free tier cukup!

### Q: Bagaimana cara handle traffic tinggi?
**A:** 
- Vercel auto-scales
- Database connection pooling
- Add caching layer (Redis)
- CDN untuk static assets

### Q: Bisa monetize portfolio?
**A:** Ya! Tambahkan:
- Stripe untuk paid services
- Ads (Google AdSense)
- Affiliate links
- Sponsored content

## Support

### Q: Dimana bisa minta bantuan?
**A:** 
1. Check dokumentasi di folder ini
2. Next.js docs: https://nextjs.org/docs
3. Prisma docs: https://www.prisma.io/docs
4. Stack Overflow
5. GitHub Issues (jika ada repo)

### Q: Bisa hire developer untuk customize?
**A:** Ya! Cari di:
- Upwork
- Fiverr
- Freelancer.com
- Local developer communities

### Q: Apakah ada video tutorial?
**A:** Belum ada untuk project ini. Tapi banyak tutorial Next.js + Prisma di YouTube.

## Miscellaneous

### Q: Bisa pakai untuk client projects?
**A:** Ya! Project ini open source (MIT License). Bebas digunakan untuk personal atau commercial.

### Q: Bagaimana cara contribute?
**A:** Jika ada GitHub repo:
1. Fork repository
2. Create feature branch
3. Submit pull request

### Q: Apakah mobile app available?
**A:** Belum. Tapi bisa convert ke:
- React Native (reuse components)
- PWA (Progressive Web App)

### Q: Bisa integrate dengan CMS lain?
**A:** Ya! Bisa integrate:
- Contentful
- Sanity
- Strapi
- WordPress (headless)

---

**Tidak menemukan jawaban?**
Check dokumentasi lain atau buat issue di GitHub repository.
