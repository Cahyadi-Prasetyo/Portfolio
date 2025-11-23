import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding...')

    // 1. Clean up existing data (optional, be careful in production)
    // await prisma.project.deleteMany()
    // await prisma.skill.deleteMany()
    // await prisma.experience.deleteMany()
    // await prisma.education.deleteMany()
    // await prisma.organization.deleteMany()

    // 2. Seed Education
    await prisma.education.create({
        data: {
            school: 'SMKN 1 Bintan Timur',
            degree: 'Rekayasa Perangkat Lunak', // Assumed based on IT Support internship
            startDate: new Date('2020-07-01'), // Approximate
            endDate: new Date('2023-06-01'),   // Approximate
            description: 'Fokus pada pembuatan website, aplikasi, dan perangkat lunak.',
            order: 1,
        },
    })

    await prisma.education.create({
        data: {
            school: 'MTs N Bintan',
            degree: 'Sekolah Menengah Pertama',
            startDate: new Date('2017-07-01'),
            endDate: new Date('2020-06-01'),
            order: 2,
        },
    })

    // 3. Seed Experience
    await prisma.experience.create({
        data: {
            company: 'PT Pelindo 1 Persero Regional 1 Tanjungpinang',
            role: 'IT Support',
            startDate: new Date('2021-01-01'),
            endDate: new Date('2021-06-30'),
            description: 'Melakukan maintenance perangkat keras dan lunak, troubleshooting jaringan, dan membantu staf dalam penggunaan teknologi.',
            type: 'Internship',
            order: 1,
        },
    })

    await prisma.experience.create({
        data: {
            company: 'Freelance / Community',
            role: 'Mentor Belajar',
            startDate: new Date('2024-01-01'), // Approximate start
            endDate: new Date('2024-06-30'),   // 6 months
            description: 'Membimbing siswa dalam pembelajaran (subjek spesifik dapat ditambahkan).',
            type: 'Part-time',
            order: 2,
        },
    })

    await prisma.experience.create({
        data: {
            company: 'Gerakan Pramuka',
            role: 'Asisten Pembimbing',
            startDate: new Date('2024-07-01'), // Approximate, assuming after mentor?
            endDate: new Date('2024-09-01'),   // 2 months
            description: 'Membantu pembina dalam melatih dan mengawasi kegiatan pramuka.',
            type: 'Volunteering',
            order: 3,
        },
    })

    // 4. Seed Organizations
    await prisma.organization.create({
        data: {
            name: 'OSIS SMKN 1 Bintan Timur',
            role: 'Anggota Divisi Kewarganegaraan',
            startDate: new Date('2020-07-01'),
            endDate: new Date('2021-06-30'),
            description: 'Bertanggung jawab dalam mengelola kegiatan yang berkaitan dengan kedisiplinan dan wawasan kebangsaan.',
            order: 1,
        },
    })

    await prisma.organization.create({
        data: {
            name: 'Pramuka MTs N Bintan',
            role: 'Anggota Aktif',
            startDate: new Date('2017-07-01'),
            endDate: new Date('2020-06-30'),
            description: 'Aktif berpartisipasi dalam berbagai kegiatan kepramukaan, perkemahan, dan lomba tingkat sekolah maupun daerah.',
            order: 2,
        },
    })

    // 5. Seed Skills (Initial Set)
    const skills = [
        { name: 'React', category: 'Frontend' },
        { name: 'Next.js', category: 'Frontend' },
        { name: 'TypeScript', category: 'Languages' },
        { name: 'Tailwind CSS', category: 'Frontend' },
        { name: 'Supabase', category: 'Backend' },
        { name: 'Node.js', category: 'Backend' },
        { name: 'Git', category: 'Tools' },
        { name: 'Figma', category: 'Design' },
    ]
    for (const skill of skills) {
        await prisma.skill.create({
            data: skill,
        })
    }

    // 6. Seed Projects
    await prisma.project.create({
        data: {
            title: 'Exam System',
            slug: 'exam-system',
            description: 'Platform ujian berbasis web yang dirancang untuk memudahkan sekolah dalam melaksanakan ujian secara online, aman, dan efisien.',
            content: 'Dibangun dengan teknologi web modern untuk performa tinggi dan pengalaman pengguna yang baik. Fitur mencakup manajemen soal, pengaturan waktu ujian, dan penilaian otomatis.',
            tags: ['TypeScript', 'Web Platform', 'Education'],
            featured: true,
            demoUrl: null,
            githubUrl: 'https://github.com/Cahyadi-Prasetyo/Exam-System',
        },
    })

    await prisma.project.create({
        data: {
            title: 'Portfolio Website',
            slug: 'portfolio-website',
            description: 'Personal portfolio website built with Next.js, Supabase, and Tailwind CSS.',
            content: 'Full stack portfolio website featuring dynamic content management, soft minimalist design, and interactive animations.',
            tags: ['Next.js', 'React', 'Supabase', 'Tailwind', 'TypeScript'],
            featured: true,
            demoUrl: 'https://aafrzl.my.id',
            githubUrl: 'https://github.com/Cahyadi-Prasetyo/Portfolio',
        },
    })

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
