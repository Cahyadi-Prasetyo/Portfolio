import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@example.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      password: hashedPassword,
      name: 'Admin',
    },
  })

  console.log('✅ Admin user created:', admin.email)

  // Create sample project
  const project = await prisma.project.create({
    data: {
      title: 'Sample Project',
      description: 'This is a sample project to showcase your work',
      content: 'Detailed description of the project goes here...',
      tags: ['React', 'TypeScript', 'Next.js'],
      featured: true,
      published: true,
      order: 1,
    },
  })

  console.log('✅ Sample project created:', project.title)

  // Create sample blog post
  const post = await prisma.post.create({
    data: {
      title: 'Welcome to My Blog',
      slug: 'welcome-to-my-blog',
      excerpt: 'This is my first blog post',
      content: 'Welcome to my blog! Here I will share my thoughts and experiences...',
      tags: ['General', 'Introduction'],
      published: true,
    },
  })

  console.log('✅ Sample blog post created:', post.title)

  // Create sample skills
  const skills = await prisma.skill.createMany({
    data: [
      { name: 'React', category: 'Frontend', level: 90, order: 1 },
      { name: 'TypeScript', category: 'Language', level: 85, order: 2 },
      { name: 'Node.js', category: 'Backend', level: 80, order: 3 },
      { name: 'PostgreSQL', category: 'Database', level: 75, order: 4 },
    ],
  })

  console.log('✅ Sample skills created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
