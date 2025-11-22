# Portfolio Website

Modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and PostgreSQL.

## Features

- 🎨 Modern and responsive design
- 📝 Blog with markdown support
- 💼 Project showcase
- 📧 Contact form
- 🔐 Admin panel for content management
- 🗄️ PostgreSQL database with Prisma ORM
- 🔒 Authentication with NextAuth.js

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** NextAuth.js v5
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud like Supabase)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your database URL and credentials:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"
   ADMIN_EMAIL="your-email@example.com"
   ADMIN_PASSWORD="your-secure-password"
   ```

5. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

6. Seed the database with initial data:
   ```bash
   npx tsx scripts/seed.ts
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```

8. Open [http://localhost:3000](http://localhost:3000)

## Admin Panel

Access the admin panel at `/admin/login` with the credentials you set in `.env`.

From the admin panel you can:
- Manage projects
- Create and edit blog posts
- View contact form submissions
- Update your portfolio content

## Database Schema

- **User:** Admin authentication
- **Project:** Portfolio projects
- **Post:** Blog posts
- **Skill:** Your skills and expertise
- **Contact:** Contact form submissions

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Database

Use a managed PostgreSQL service:
- [Supabase](https://supabase.com) (Free tier available)
- [Neon](https://neon.tech) (Free tier available)
- [Railway](https://railway.app)

## Customization

1. Update personal information in:
   - `app/page.tsx` (homepage)
   - `app/layout.tsx` (metadata)
   - `components/navbar.tsx` (navigation)

2. Customize styling in `tailwind.config.ts`

3. Add your own content through the admin panel

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create new migration

## License

MIT
