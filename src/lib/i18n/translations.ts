export type Language = 'id' | 'en';

export const translations: Record<Language, any> = {
    id: {
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            projects: 'Proyek',
            contact: 'Kontak'
        },
        hero: {
            greeting: 'Halo, saya Cahyadi Prasetyo.',
            value: 'Saya membangun solusi web yang memecahkan masalah bisnis nyata.',
            bio: 'Full-Stack Developer yang fokus pada hasil. Berpengalaman membangun platform data untuk pemerintah, sistem monitoring untuk BUMN, dan aplikasi UMKM — bukan sekadar website yang cantik.',
            cta: 'Lihat Hasil Kerja Saya',
            ctaSecondary: 'Hubungi Saya'
        },
        trust: {
            label: 'Dipercaya oleh',
            orgs: [
                { name: 'BPS Kepulauan Riau', type: 'Pemerintah' },
                { name: 'PT. Pelindo', type: 'BUMN' },
                { name: 'UMRAH', type: 'Universitas' },
                { name: 'Posyandu Terintegrasi', type: 'Publik' }
            ]
        },
        selectedWork: {
            label: 'Hasil Kerja',
            title: 'Proyek Terpilih',
            viewAll: 'Lihat Semua Proyek'
        },
        about: {
            title: 'Tentang Saya',
            bio: 'Saya Cahyadi Prasetyo, mahasiswa Teknik Informatika di Universitas Maritim Raja Ali Haji. Sejak 2022, saya sudah terlibat dalam berbagai proyek nyata — dari membangun platform data statistik untuk BPS, hingga sistem monitoring harga tiket pesawat.\n\nSaya bukan tipe developer yang hanya bisa coding. Saya memahami konteks bisnis, berkomunikasi dengan stakeholder, dan memastikan solusi yang saya bangun benar-benar dipakai dan berdampak.\n\nSaat ini saya terbuka untuk peluang freelance dan kolaborasi proyek.',
            techStackLabel: 'Tech Stack',
            titleExp: 'Pengalaman',
            titleEdu: 'Pendidikan',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
                },
                backend: {
                    label: 'Backend',
                    items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Python']
                },
                database: {
                    label: 'Database',
                    items: ['PostgreSQL', 'MySQL', 'Prisma']
                },
                devops: {
                    label: 'DevOps & Tools',
                    items: ['Git', 'Docker', 'Nginx', 'VS Code']
                },
                data_ai: {
                    label: 'Data & Analytics',
                    items: ['Looker Studio', 'Pandas', 'Metabase', 'Google Sheets']
                }
            },
            experience: [
                {
                    period: 'Feb 2026 – Jul 2026',
                    role: 'Asisten Praktikum Jaringan Komputer',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo-umrah.png',
                    desc: 'Mendampingi mahasiswa dalam konsep jaringan komputer terapan.',
                    highlights: [
                        {
                            title: 'Laboratorium Jaringan & Infrastruktur',
                            desc: 'Bertanggung jawab mendampingi mahasiswa dalam memahami konsep fundamental dan terapan jaringan komputer. Saya merancang skenario praktikum yang mencakup Subnetting, konfigurasi Routing (Statik & Dinamis), serta implementasi VLAN.'
                        },
                        {
                            title: 'Analisis Protokol & Troubleshooting',
                            desc: 'Mendemonstrasikan analisis paket data (TCP/UDP/HTTP) secara real-time menggunakan Wireshark. Menggunakan Cisco Packet Tracer untuk mensimulasikan topologi jaringan kompleks, membantu mahasiswa mengidentifikasi bottleneck dan memahami alur data pada OSI Layer.'
                        }
                    ]
                },
                {
                    period: 'Jan 2026 – Mar 2026',
                    role: 'IT Web Developer & Data Analyst (Internship)',
                    company: 'BPS Provinsi Kepulauan Riau',
                    logo: '/logo-bps.png',
                    desc: 'Membangun platform data statistik regional dan dashboard analytics internal.',
                    highlights: [
                        {
                            title: 'Ekosistem Platform Gurindam',
                            desc: 'Merekayasa antarmuka pengguna (Frontend) untuk platform distribusi data statistik regional. Saya menggunakan React dan Vue.js untuk memastikan penyajian data yang kompleks tetap responsif dan mudah dinavigasi oleh publik.'
                        },
                        {
                            title: 'Data Integration & PHP Embedding',
                            desc: 'Mengembangkan sistem integrasi visualisasi data pada platform Tanjak menggunakan PHP. Saya mengimplementasikan teknik embedding dinamis untuk menyajikan laporan interaktif dari Looker Studio langsung ke dalam lingkungan website internal BPS.'
                        },
                        {
                            title: 'Internal Analytics Dashboard',
                            desc: 'Membangun dasbor pemantauan data internal yang terhubung dengan PostgreSQL dan Spreadsheet API. Mengoptimalkan visualisasi pada Looker Studio untuk mendukung pengambilan keputusan berbasis data oleh pimpinan BPS Kepri secara real-time.'
                        },
                        {
                            title: 'Aeroprice Flight Monitoring',
                            desc: 'Berkontribusi sebagai Frontend Developer dalam membangun platform pemantau harga tiket pesawat. Fokus pada optimasi performa rendering data dinamis untuk memberikan pengalaman pengguna yang cepat dalam memantau fluktuasi harga maskapai.'
                        }
                    ]
                },
                {
                    period: 'Nov 2025 – Jan 2026',
                    role: 'Frontend Developer',
                    company: 'Tim PKM Dosen UMRAH',
                    logo: '/logo-umrah.png',
                    desc: 'Membangun platform promosi UMKM berbasis video.',
                    highlights: [
                        {
                            title: 'UMKM Video-Style Platform',
                            desc: 'Merekayasa antarmuka web inovatif berbasis video-feed (serupa interaksi TikTok) untuk meningkatkan eksposur produk lokal. Saya menggunakan React.js dan Tailwind CSS untuk membangun komponen UI yang interaktif, memastikan transisi konten video yang mulus dan responsif di berbagai perangkat.'
                        }
                    ]
                },
                {
                    period: '2024 – Sekarang',
                    role: 'Data Analyst & Administrator',
                    company: 'Posyandu Terintegrasi',
                    logo: '/logo-posyandu.png',
                    desc: 'Mengelola sistem data kesehatan masyarakat.',
                    highlights: [
                        {
                            title: 'Operational Data & Integrity Management',
                            desc: 'Mengelola sistem administrasi data digital untuk operasional bulanan. Bertanggung jawab penuh atas validasi dan akurasi pelaporan data kesehatan masyarakat, melakukan analisis rutin untuk memastikan integritas informasi sebelum diserahkan dalam laporan administrasi resmi.'
                        }
                    ]
                },
                {
                    period: 'Jan 2022 – Jun 2022',
                    role: 'IT Support (Internship)',
                    company: 'PT. Pelindo (Persero) Regional 1 Tanjungpinang',
                    logo: '/logo-pelindo.png',
                    desc: 'Dukungan teknis IT di BUMN.',
                    highlights: [
                        {
                            title: 'Infrastructure & Technical Support',
                            desc: 'Memberikan dukungan teknis on-site untuk memastikan kelancaran operasional IT di lingkungan BUMN. Cakupan pekerjaan meliputi troubleshooting jaringan lokal (LAN), pemeliharaan perangkat keras (hardware maintenance), serta instalasi dan konfigurasi perangkat lunak pendukung staf perusahaan.'
                        }
                    ]
                }
            ],
            education: [
                {
                    period: '2023 – Sekarang',
                    degree: 'S1 Teknik Informatika',
                    school: 'Universitas Maritim Raja Ali Haji',
                    logo: '/logo-umrah.png',
                    desc: 'Fokus pada pengembangan perangkat lunak dan data analytics.'
                },
                {
                    period: '2019 – 2022',
                    degree: 'Rekayasa Perangkat Lunak',
                    school: 'SMKN 1 Bintan Timur',
                    logo: '/logo-smkn.png',
                    desc: 'Mempelajari dasar pemrograman, basis data, dan pengembangan aplikasi.'
                }
            ]
        },
        projects: {
            label: 'Proyek',
            title: 'Proyek Saya',
            desc: 'Proyek-proyek yang sudah saya kerjakan.',
            filterAll: 'Semua',
            filterWeb: 'Website',
            filterMobile: 'Mobile',
            filterAI: 'AI'
        },
        featured: {
            label: 'Proyek Pilihan',
            title: 'Proyek Pilihan',
            viewAll: 'Lihat Semua Proyek'
        },
        faq: {
            label: 'FAQ',
            title: 'Pertanyaan Umum',
            items: [
                { q: 'Teknologi apa yang kamu kuasai?', a: 'Saya bekerja dengan React, Vue.js, Svelte, Node.js, PHP (Laravel), PostgreSQL, dan tools data analytics seperti Looker Studio dan Power BI.' },
                { q: 'Apakah kamu menerima freelance?', a: 'Ya, saya terbuka untuk proyek freelance. Mari diskusikan kebutuhan Anda.' },
                { q: 'Berapa lama pengalaman kerjamu?', a: 'Saya sudah terlibat dalam proyek profesional sejak 2022 — termasuk internship di BPS dan PT. Pelindo, serta proyek riset di universitas.' },
                { q: 'Bagaimana cara menghubungi kamu?', a: 'Langsung melalui halaman kontak atau email ke hello@cahyadiprasetyo.com.' }
            ]
        },
        contact: {
            label: 'Kontak',
            title: 'Mari Bekerja Sama',
            desc: 'Punya proyek atau ide? Saya siap berdiskusi.',
            nameLabel: 'Nama',
            namePlaceholder: 'Nama Anda',
            emailLabel: 'Email',
            emailPlaceholder: 'email@contoh.com',
            subjectLabel: 'Subjek',
            subjectPlaceholder: 'Tentang apa?',
            messageLabel: 'Pesan',
            messagePlaceholder: 'Ceritakan tentang proyek Anda...',
            send: 'Kirim Pesan',
            email: 'hello@cahyadiprasetyo.com',
            orEmail: 'Atau kirim email langsung ke'
        },
        footerCta: {
            title: 'Punya proyek yang ingin didiskusikan?',
            desc: 'Mari wujudkan ide Anda.',
            button: 'Hubungi Saya'
        },
        footer: {
            copy: '© 2026 Cahyadi Prasetyo. All rights reserved.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: "Hi, I'm Cahyadi Prasetyo.",
            value: 'I build web solutions that solve real business problems.',
            bio: 'Results-driven Full-Stack Developer. Experienced building data platforms for government, monitoring systems for state-owned enterprises, and MSME applications — not just pretty websites.',
            cta: 'See My Work',
            ctaSecondary: 'Contact Me'
        },
        trust: {
            label: 'Trusted by',
            orgs: [
                { name: 'BPS Kepulauan Riau', type: 'Government' },
                { name: 'PT. Pelindo', type: 'State Enterprise' },
                { name: 'UMRAH', type: 'University' },
                { name: 'Posyandu Terintegrasi', type: 'Public Health' }
            ]
        },
        selectedWork: {
            label: 'Selected Work',
            title: 'Selected Projects',
            viewAll: 'View All Projects'
        },
        about: {
            title: 'About Me',
            bio: "I'm Cahyadi Prasetyo, a Computer Science student at Universitas Maritim Raja Ali Haji. Since 2022, I've been involved in real-world projects — from building statistical data platforms for BPS, to flight price monitoring systems.\n\nI'm not just a developer who codes. I understand business context, communicate with stakeholders, and make sure the solutions I build are actually used and create impact.\n\nCurrently open for freelance opportunities and project collaborations.",
            techStackLabel: 'Tech Stack',
            titleExp: 'Experience',
            titleEdu: 'Education',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']
                },
                backend: {
                    label: 'Backend',
                    items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Python']
                },
                database: {
                    label: 'Database',
                    items: ['PostgreSQL', 'MySQL', 'Prisma']
                },
                devops: {
                    label: 'DevOps & Tools',
                    items: ['Git', 'Docker', 'Nginx', 'VS Code']
                },
                data_ai: {
                    label: 'Data & Analytics',
                    items: ['Looker Studio', 'Pandas', 'Metabase', 'Google Sheets']
                }
            },
            experience: [
                {
                    period: 'Feb 2026 – Jul 2026',
                    role: 'Computer Network Lab Assistant',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo-umrah.png',
                    desc: 'Guiding students through applied computer networking concepts.',
                    highlights: [
                        {
                            title: 'Network Lab & Infrastructure',
                            desc: 'Responsible for guiding students in understanding fundamental and applied computer networking concepts. Designed lab scenarios covering Subnetting, Routing configuration (Static & Dynamic), and VLAN implementation.'
                        },
                        {
                            title: 'Protocol Analysis & Troubleshooting',
                            desc: 'Demonstrated real-time packet data analysis (TCP/UDP/HTTP) using Wireshark. Used Cisco Packet Tracer to simulate complex network topologies, helping students identify bottlenecks and understand data flow across the OSI Layer.'
                        }
                    ]
                },
                {
                    period: 'Jan 2026 – Mar 2026',
                    role: 'IT Web Developer & Data Analyst (Internship)',
                    company: 'BPS Kepulauan Riau Province',
                    logo: '/logo-bps.png',
                    desc: 'Built regional statistical data platform and internal analytics dashboards.',
                    highlights: [
                        {
                            title: 'Gurindam Platform Ecosystem',
                            desc: 'Engineered the user interface (Frontend) for the regional statistical data distribution platform. Used React and Vue.js to ensure complex data presentation remained responsive and navigable by the public.'
                        },
                        {
                            title: 'Data Integration & PHP Embedding',
                            desc: 'Developed data visualization integration system on the Tanjak platform using PHP. Implemented dynamic embedding techniques to serve interactive reports from Looker Studio directly into the internal BPS website environment.'
                        },
                        {
                            title: 'Internal Analytics Dashboard',
                            desc: 'Built an internal data monitoring dashboard connected to PostgreSQL and Spreadsheet API. Optimized Looker Studio visualizations to support real-time data-driven decision making by BPS Kepri leadership.'
                        },
                        {
                            title: 'Aeroprice Flight Monitoring',
                            desc: 'Contributed as Frontend Developer in building a flight price monitoring platform. Focused on dynamic data rendering performance optimization to provide fast user experience in monitoring airline price fluctuations.'
                        }
                    ]
                },
                {
                    period: 'Nov 2025 – Jan 2026',
                    role: 'Frontend Developer',
                    company: 'PKM Dosen Team, UMRAH',
                    logo: '/logo-umrah.png',
                    desc: 'Built MSME promotion platform with video-based interface.',
                    highlights: [
                        {
                            title: 'UMKM Video-Style Platform',
                            desc: 'Engineered an innovative video-feed based web interface (similar to TikTok interaction) to boost local product exposure. Used React.js and Tailwind CSS to build interactive UI components, ensuring smooth video content transitions responsive across various devices.'
                        }
                    ]
                },
                {
                    period: '2024 – Present',
                    role: 'Data Analyst & Administrator',
                    company: 'Posyandu Terintegrasi',
                    logo: '/logo-posyandu.png',
                    desc: 'Managing public health data systems.',
                    highlights: [
                        {
                            title: 'Operational Data & Integrity Management',
                            desc: 'Managing digital data administration system for monthly operations. Fully responsible for validation and accuracy of public health data reporting, conducting routine analysis to ensure information integrity before submission in official administrative reports.'
                        }
                    ]
                },
                {
                    period: 'Jan 2022 – Jun 2022',
                    role: 'IT Support (Internship)',
                    company: 'PT. Pelindo (Persero) Regional 1 Tanjungpinang',
                    logo: '/logo-pelindo.png',
                    desc: 'IT technical support in state-owned enterprise.',
                    highlights: [
                        {
                            title: 'Infrastructure & Technical Support',
                            desc: 'Provided on-site technical support to ensure smooth IT operations in a state-owned enterprise environment. Work scope included local network (LAN) troubleshooting, hardware maintenance, and installation and configuration of supporting software for company staff.'
                        }
                    ]
                }
            ],
            education: [
                {
                    period: '2023 – Present',
                    degree: 'Bachelor of Computer Science',
                    school: 'Universitas Maritim Raja Ali Haji',
                    logo: '/logo-umrah.png',
                    desc: 'Focusing on software engineering and data analytics.'
                },
                {
                    period: '2019 – 2022',
                    degree: 'Software Engineering',
                    school: 'SMKN 1 Bintan Timur',
                    logo: '/logo-smkn.png',
                    desc: 'Studied programming fundamentals, databases, and application development.'
                }
            ]
        },
        projects: {
            label: 'Projects',
            title: 'My Projects',
            desc: 'Projects I have worked on.',
            filterAll: 'All',
            filterWeb: 'Website',
            filterMobile: 'Mobile',
            filterAI: 'AI'
        },
        featured: {
            label: 'Selected Work',
            title: 'Selected Projects',
            viewAll: 'View All Projects'
        },
        faq: {
            label: 'FAQ',
            title: 'Frequently Asked',
            items: [
                { q: 'What technologies do you work with?', a: 'I work with React, Vue.js, Svelte, Node.js, PHP (Laravel), PostgreSQL, and data analytics tools like Looker Studio and Power BI.' },
                { q: 'Are you available for freelance?', a: "Yes, I'm open for freelance projects. Let's discuss your needs." },
                { q: 'How much experience do you have?', a: "I've been involved in professional projects since 2022 — including internships at BPS and PT. Pelindo, as well as university research projects." },
                { q: 'How can I reach you?', a: 'Through the contact page or email me directly at hello@cahyadiprasetyo.com.' }
            ]
        },
        contact: {
            label: 'Contact',
            title: "Let's Work Together",
            desc: 'Have a project or idea? I am ready to discuss.',
            nameLabel: 'Name',
            namePlaceholder: 'Your name',
            emailLabel: 'Email',
            emailPlaceholder: 'email@example.com',
            subjectLabel: 'Subject',
            subjectPlaceholder: 'What is this about?',
            messageLabel: 'Message',
            messagePlaceholder: 'Tell me about your project...',
            send: 'Send Message',
            email: 'hello@cahyadiprasetyo.com',
            orEmail: 'Or email me directly at'
        },
        footerCta: {
            title: 'Have a project to discuss?',
            desc: "Let's make your idea a reality.",
            button: 'Contact Me'
        },
        footer: {
            copy: '© 2026 Cahyadi Prasetyo. All rights reserved.'
        }
    }
};
