# Quick Reference Commands

## Initial Setup

```bash
# Install dependencies
npm install

# Setup database (first time)
npx prisma migrate dev --name init

# Seed database with sample data
npm run db:seed

# Start development server
npm run dev
```

## Development

```bash
# Run development server
npm run dev

# Open Prisma Studio (Database GUI)
npm run db:studio

# Check for TypeScript errors
npm run build
```

## Database Commands

```bash
# Create new migration
npx prisma migrate dev --name migration_name

# Apply migrations (production)
npx prisma migrate deploy

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate

# Open Prisma Studio
npx prisma studio

# Seed database
npm run db:seed
```

## Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Useful Commands

```bash
# Generate NextAuth secret
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update
```

## Git Commands (if using Git)

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote
git remote add origin <your-repo-url>

# Push to GitHub
git push -u origin main
```

## Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Troubleshooting

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Reset Prisma
npx prisma migrate reset
npx prisma generate

# Check database connection
npx prisma db pull
```

## Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit environment variables
# Then update DATABASE_URL, NEXTAUTH_SECRET, etc.
```

## Quick Test

After setup, test these URLs:
- Homepage: http://localhost:3000
- Projects: http://localhost:3000/projects
- Blog: http://localhost:3000/blog
- Contact: http://localhost:3000/contact
- Admin Login: http://localhost:3000/admin/login
- Admin Dashboard: http://localhost:3000/admin
