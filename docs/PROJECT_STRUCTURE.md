# Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin Panel (Protected)
│   │   ├── blog/                 # Blog management
│   │   ├── contacts/             # Contact messages
│   │   ├── login/                # Admin login
│   │   ├── projects/             # Project management
│   │   ├── layout.tsx            # Admin layout
│   │   └── page.tsx              # Admin dashboard
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   └── contact/              # Contact form endpoint
│   ├── blog/                     # Public blog pages
│   │   ├── [slug]/               # Individual blog post
│   │   └── page.tsx              # Blog listing
│   ├── contact/                  # Contact page
│   ├── projects/                 # Projects showcase
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # UI components
│   │   ├── button.tsx
│   │   └── input.tsx
│   └── navbar.tsx                # Navigation bar
├── lib/                          # Utility functions
│   ├── prisma.ts                 # Prisma client
│   └── utils.ts                  # Helper functions
├── prisma/                       # Database
│   └── schema.prisma             # Database schema
├── scripts/                      # Utility scripts
│   └── seed.ts                   # Database seeding
├── auth.config.ts                # NextAuth configuration
├── auth.ts                       # NextAuth setup
├── middleware.ts                 # Route protection
├── .env                          # Environment variables
├── .env.example                  # Environment template
├── package.json                  # Dependencies
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── README.md                     # Project documentation
└── SETUP.md                      # Setup instructions

```

## Key Files Explained

### Database (Prisma)

**prisma/schema.prisma**
- Defines database models: User, Project, Post, Skill, Contact
- PostgreSQL as database provider

**lib/prisma.ts**
- Prisma client singleton
- Prevents multiple instances in development

### Authentication

**auth.ts & auth.config.ts**
- NextAuth.js v5 configuration
- Credentials provider for email/password login
- Session management

**middleware.ts**
- Protects `/admin` routes
- Redirects unauthenticated users to login

### Frontend Pages

**app/page.tsx** - Homepage
- Hero section
- About preview
- Featured projects

**app/projects/page.tsx** - Projects showcase
- Lists all published projects
- Filterable by tags

**app/blog/page.tsx** - Blog listing
- All published blog posts
- Sorted by date

**app/contact/page.tsx** - Contact form
- Form submission
- Saves to database

### Admin Panel

**app/admin/*** - Content management
- Dashboard with statistics
- CRUD operations for projects and blog posts
- View contact messages
- Protected by authentication

### Components

**components/navbar.tsx**
- Main navigation
- Active link highlighting

**components/ui/***
- Reusable UI components
- Button, Input, etc.
- Styled with Tailwind CSS

## Database Models

### User
- Admin authentication
- Email, password (hashed), name

### Project
- Portfolio projects
- Title, description, content, image
- Tags, featured flag, published status
- Demo URL, GitHub URL

### Post
- Blog posts
- Title, slug, excerpt, content
- Tags, published status
- Created/updated timestamps

### Skill
- Your skills
- Name, category, level (0-100)
- Icon, order for sorting

### Contact
- Contact form submissions
- Name, email, subject, message
- Read/unread status

## API Routes

**POST /api/contact**
- Saves contact form submission

**POST /api/auth/signin**
- Authenticates admin user

**POST /api/auth/signout**
- Logs out admin user

## Environment Variables

Required in `.env`:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Application URL
- `NEXTAUTH_SECRET` - Secret for session encryption
- `ADMIN_EMAIL` - Admin login email
- `ADMIN_PASSWORD` - Admin login password

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:seed` - Seed database
- `npm run db:studio` - Open Prisma Studio

## Tech Stack Summary

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** NextAuth.js v5
- **Form Handling:** React Hook Form + Zod
- **UI Components:** Custom with CVA (Class Variance Authority)
