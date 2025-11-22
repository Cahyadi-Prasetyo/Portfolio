# Setup Checklist ✅

Ikuti checklist ini untuk setup portfolio website kamu:

## 1. Database Setup

- [ ] Buat akun di [Supabase](https://supabase.com) atau [Neon](https://neon.tech)
- [ ] Buat project/database baru
- [ ] Copy connection string
- [ ] Paste ke `.env` di variable `DATABASE_URL`

## 2. Environment Variables

- [ ] Copy `.env.example` ke `.env`
- [ ] Update `DATABASE_URL` dengan connection string kamu
- [ ] Generate `NEXTAUTH_SECRET` dengan command:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
  ```
- [ ] Update `ADMIN_EMAIL` dengan email kamu
- [ ] Update `ADMIN_PASSWORD` dengan password yang aman

## 3. Install & Setup

- [ ] Run `npm install`
- [ ] Run `npx prisma migrate dev --name init`
- [ ] Run `npm run db:seed`
- [ ] Run `npm run dev`

## 4. Test Website

- [ ] Buka http://localhost:3000 - Homepage berfungsi
- [ ] Buka http://localhost:3000/projects - Projects page berfungsi
- [ ] Buka http://localhost:3000/blog - Blog page berfungsi
- [ ] Buka http://localhost:3000/contact - Contact form berfungsi

## 5. Test Admin Panel

- [ ] Buka http://localhost:3000/admin/login
- [ ] Login dengan credentials dari `.env`
- [ ] Dashboard menampilkan statistics
- [ ] Bisa akses Projects management
- [ ] Bisa akses Blog management
- [ ] Bisa lihat Contact messages

## 6. Customization

- [ ] Update nama di `app/page.tsx` (ganti "Your Name")
- [ ] Update title di `app/layout.tsx`
- [ ] Update footer di `app/layout.tsx`
- [ ] Update navbar brand di `components/navbar.tsx`
- [ ] Tambah foto/avatar (optional)

## 7. Add Content

Via Admin Panel:

- [ ] Tambah minimal 3 projects
- [ ] Tambah minimal 1 blog post
- [ ] Update skills (via Prisma Studio atau database)
- [ ] Test contact form

## 8. Styling (Optional)

- [ ] Customize colors di `tailwind.config.ts`
- [ ] Update fonts di `app/layout.tsx`
- [ ] Add dark mode (optional)
- [ ] Add animations (optional)

## 9. Production Ready

- [ ] Generate strong `NEXTAUTH_SECRET` untuk production
- [ ] Update `NEXTAUTH_URL` dengan production URL
- [ ] Test build: `npm run build`
- [ ] Fix any build errors

## 10. Deployment

### Vercel (Recommended)

- [ ] Push code ke GitHub
- [ ] Import project ke [Vercel](https://vercel.com)
- [ ] Add environment variables di Vercel:
  - `DATABASE_URL`
  - `NEXTAUTH_URL` (production URL)
  - `NEXTAUTH_SECRET`
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD`
- [ ] Deploy!
- [ ] Test production website
- [ ] Login ke admin panel di production

## 11. Post-Deployment

- [ ] Add custom domain (optional)
- [ ] Setup analytics (Google Analytics, Vercel Analytics)
- [ ] Test SEO dengan Lighthouse
- [ ] Share portfolio link! 🎉

## Troubleshooting

Jika ada masalah, cek:
- [ ] `SETUP.md` untuk detailed instructions
- [ ] `COMMANDS.md` untuk command reference
- [ ] Console browser untuk error messages
- [ ] Terminal untuk build errors

## Tips

✨ **Pro Tips:**
- Gunakan Prisma Studio (`npm run db:studio`) untuk manage content lebih mudah
- Backup database secara berkala
- Commit code ke Git secara regular
- Test di mobile device juga
- Minta feedback dari teman/kolega

## Need Help?

Dokumentasi lengkap ada di:
- `README.md` - Overview
- `SETUP.md` - Detailed setup guide
- `PROJECT_STRUCTURE.md` - Code structure
- `COMMANDS.md` - Command reference

Happy coding! 🚀
