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
            greeting: 'Hai! Saya Cahyadi Prasetyo 👋',
            value: 'Full-Stack Developer, IT Mentor, & Data Enthusiast.',
            bio: 'Seorang Full-Stack Developer yang memadukan latar belakang akademis dengan pengalaman nyata di industri sejak 2022. Mulai dari merancang platform data strategis untuk BPS hingga mengoptimalkan infrastruktur IT korporasi di Pelindo, saya berfokus menciptakan solusi teknologi yang efisien dan berdampak.',
            cta: 'Lihat Hasil Kerja Saya',
            ctaSecondary: 'Hubungi Saya',
            cvVisual: 'Download CV'
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
            whoAmI: 'Siapa saya.',
            readMore: 'Selengkapnya',
            bio: 'Rekam jejak saya di industri dimulai pada 2022. Alih-alih hanya mempelajari teori, saya langsung terjun membangun arsitektur data berskala regional untuk Badan Pusat Statistik (BPS) dan memastikan keandalan infrastruktur jaringan di Pelindo.\n\nDengan fondasi kuat di Web Development dan Sistem Terdistribusi, saya melihat kode sebagai jembatan untuk memecahkan masalah bisnis yang nyata. Saya terbiasa mengelola sistem dari sisi frontend (React, Vue, Svelte) hingga backend (Laravel, Node.js).\n\nSaat ini, saya mengeksplorasi bagaimana AI dapat diintegrasikan untuk menciptakan aplikasi generasi berikutnya yang lebih pintar. Jika Anda memiliki ide proyek atau membutuhkan mitra teknis yang andal, mari berdiskusi. 🚀',
            techStackLabel: 'Tech Stack',
            titleExp: 'Pengalaman',
            titleEdu: 'Pendidikan',
            titleCert: 'Sertifikasi',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS']
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
                    label: 'DevOps',
                    items: ['Docker', 'Nginx']
                },
                design: {
                    label: 'Design Tools',
                    items: ['Figma', 'Canva']
                },
                vcs: {
                    label: 'Version Control',
                    items: ['Git', 'GitHub']
                },
                data_ai: {
                    label: 'Data & AI',
                    items: ['Looker Studio', 'Pandas', 'Metabase', 'Google Sheets']
                }
            },
            experience: [
                {
                    period: 'Februari 2026 – Sekarang',
                    role: 'Asisten Praktikum Jaringan Komputer',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo_umrah.webp',
                    points: [
                        'Berkontribusi dalam program instruksional akademik untuk mendukung pemahaman mahasiswa pada mata kuliah Jaringan Komputer dengan standar kurikulum teknik informatika.',
                        'Merancang dan mensimulasikan arsitektur jaringan kompleks (VLAN, Static/Dynamic Routing, Subnetting) menggunakan Cisco Packet Tracer sebagai media pembelajaran interaktif.',
                        'Melakukan analisis protokol mendalam dan troubleshooting lalu lintas data menggunakan Wireshark untuk memvalidasi keamanan dan efisiensi transmisi jaringan.',
                        'Mengevaluasi performa teknis mahasiswa melalui sesi responsi praktikum untuk memastikan penguasaan konsep OSI Layer dan infrastruktur jaringan.'
                    ],
                    skills: 'Computer Networking · Cisco Packet Tracer · Wireshark · Technical Instruction · Troubleshooting'
                },
                {
                    period: 'Januari 2026 – Maret 2026',
                    role: 'IT Web Developer & Data Analyst (Internship)',
                    company: 'BPS Provinsi Kepulauan Riau',
                    logo: '/logo_bps.webp',
                    points: [
                        'Mendigitalisasi distribusi data statistik regional dengan merekayasa antarmuka (React/Vue.js) platform Gurindam & Tanjak, memastikan navigasi data kompleks menjadi intuitif bagi masyarakat luas.',
                        'Mengintegrasikan visualisasi analitik Looker Studio menggunakan PHP, memberdayakan pimpinan BPS Kepri untuk mengambil keputusan secara real-time dan berbasis data.',
                        'Mempercepat alur kerja pengolahan data melalui optimasi jalur integrasi antara PostgreSQL dan Spreadsheet API langsung ke dalam dasbor analitik.',
                        'Mendongkrak performa rendering data dinamis pada platform pemantau harga tiket (Aeroprice), memberikan pengalaman pengguna yang lebih mulus dan responsif.',
                        'Menjamin stabilitas operasional sistem informasi internal melalui dukungan infrastruktur (IT Support) harian secara proaktif.'
                    ],
                    skills: 'React.js · Vue.js · PHP · PostgreSQL · Looker Studio · Data Visualization · IT Support'
                },
                {
                    period: 'November 2025 – Januari 2026',
                    role: 'Frontend Developer',
                    company: 'Tim PKM Dosen UMRAH',
                    logo: '/logo_umrah.webp',
                    points: [
                        'Merancang antarmuka inovatif bergaya interaksi video (TikTok-style) dengan React.js untuk mendongkrak visibilitas produk UMKM lokal.',
                        'Meningkatkan retensi pengguna (user engagement) melalui implementasi transisi video yang mulus dan interaktif.',
                        'Merekayasa arsitektur komponen UI yang responsif sempurna, memastikan performa dan tata letak optimal dari layar desktop hingga mobile.',
                        'Bersinergi dalam tim lintas fungsi guna mentransformasi konsep akademis menjadi produk digital yang berdaya guna bagi pengguna akhir.'
                    ],
                    skills: 'React.js · Tailwind CSS · Responsive Web Development · Cross-team Collaboration'
                },
                {
                    period: '2024 – Sekarang',
                    role: 'Data Analyst & Administrator',
                    company: 'Posyandu Terintegrasi',
                    logo: '/logo_posyandu.webp',
                    points: [
                        'Mengelola ekosistem data operasional secara profesional untuk memastikan keakuratan pelaporan administrasi kesehatan masyarakat.',
                        'Melakukan analisis data rutin dan pembersihan data (data cleaning) untuk meminimalisir anomali pada laporan operasional bulanan.',
                        'Bertanggung jawab atas integritas pelaporan data yang menjadi acuan dalam peninjauan kebijakan kesehatan tingkat desa/kelurahan.'
                    ],
                    skills: 'Data Analysis · Administrative Management · Data Integrity · Operational Excellence'
                },
                {
                    period: 'Januari 2022 – Juni 2022',
                    role: 'IT Support (Internship)',
                    company: 'PT. Pelindo (Persero) Regional 1 Tanjungpinang',
                    logo: '/logo_pelindo.webp',
                    points: [
                        'Menjalankan fungsi dukungan teknis di lingkungan Badan Usaha Milik Negara (BUMN) untuk mendukung produktivitas operasional perusahaan.',
                        'Melakukan pemeliharaan rutin pada perangkat keras dan perangkat lunak serta memastikan stabilitas konektivitas jaringan lokal (LAN).',
                        'Menyelesaikan kendala teknis harian pengguna (end-user support) terkait sistem operasi dan aplikasi perkantoran secara efektif.'
                    ],
                    skills: 'Hardware Maintenance · Network Troubleshooting · Technical Support · Corporate Environment'
                }
            ],
            education: [
                {
                    period: '2023 – Sekarang',
                    degree: 'S1 Teknik Informatika',
                    school: 'Universitas Maritim Raja Ali Haji',
                    logo: '/logo_umrah.webp',
                    desc: 'Fokus pada pengembangan perangkat lunak dan data analytics. IPK Saat Ini: 3.43'
                },
                {
                    period: '2020 – 2023',
                    degree: 'Rekayasa Perangkat Lunak',
                    school: 'SMKN 1 Bintan Timur',
                    logo: '/logo_smk.webp',
                    desc: 'Mempelajari dasar pemrograman, basis data, dan pengembangan aplikasi. Nilai Rata-rata: 88.18'
                }
            ],
            certifications: [
                {
                    year: '2023',
                    title: 'Sertifikat Kompetensi',
                    issuer: 'Lembaga Sertifikasi',
                    logo: '/Sertifikat-Kompetensi.webp',
                    desc: 'Sertifikat kompetensi keahlian.'
                },
                {
                    year: '2022',
                    title: 'Sertifikat Praktik Kerja Lapangan',
                    issuer: 'Instansi PKL',
                    logo: '/Sertifikat-PKL.webp',
                    desc: 'Sertifikat penyelesaian Praktik Kerja Lapangan (PKL).'
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
            filterAI: 'AI',
            filterGame: 'Game',
            liveDemo: 'Lihat Demo',
            sourceCode: 'Source Code',
            backToProjects: 'Kembali ke Proyek'
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
                { q: 'Teknologi apa yang menjadi fokus utama Anda?', a: 'Sebagai Full-Stack Developer, saya menguasai ekosistem modern seperti React, Svelte, dan Node.js, dipadukan dengan keandalan backend tradisional (Laravel/PHP). Saya juga merancang arsitektur database (PostgreSQL) yang berfokus pada skalabilitas dan keamanan data.' },
                { q: 'Apakah Anda menerima kerja sama proyek freelance?', a: 'Sangat terbuka. Mulai dari pengembangan aplikasi web end-to-end, integrasi sistem, hingga pembuatan dashboard analitik data tingkat korporasi (seperti pengalaman saya di BPS). Saya memprioritaskan komunikasi transparan dan pengiriman tepat waktu.' },
                { q: 'Sejauh apa pengalaman Anda di industri?', a: 'Saya mulai terlibat secara profesional sejak awal 2022. Portofolio saya mencakup proyek infrastruktur IT di BUMN (Pelindo) hingga digitalisasi platform pemerintahan (BPS Kepri). Saya terbiasa dengan standar dan tekanan industri nyata.' },
                { q: 'Bagaimana alur kerja jika saya ingin menyewa jasa Anda?', a: 'Kita akan mulai dengan sesi konsultasi gratis untuk memahami masalah bisnis Anda. Selanjutnya, saya akan menyusun rancangan sistem dan estimasi waktu. Hubungi saya melalui form kontak atau email untuk memulai diskusi.' }
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
            email: 'chdprasetyo@gmail.com',
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
            greeting: "Hi! I'm Cahyadi Prasetyo 👋",
            value: 'Full-Stack Developer, IT Mentor, & Data Enthusiast.',
            bio: "A Full-Stack Developer blending an academic background with real-world industry experience since 2022. From engineering strategic data platforms for BPS to optimizing corporate IT infrastructure at Pelindo, my focus is on delivering efficient and impactful technological solutions.",
            cta: 'See My Work',
            ctaSecondary: 'Contact Me',
            cvAts: 'Download ATS CV',
            cvVisual: 'Download Visual CV'
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
            whoAmI: 'Who I am.',
            readMore: 'Read more',
            bio: "My industry track record began in 2022. Rather than just studying theory, I dove straight into engineering regional-scale data architectures for Statistics Indonesia (BPS) and ensuring network infrastructure reliability at Pelindo.\n\nWith a strong foundation in Web Development and Distributed Systems, I view code as a bridge to solve real-world business problems. I am accustomed to managing systems from the frontend (React, Vue, Svelte) to the backend (Laravel, Node.js).\n\nCurrently, I am exploring how AI can be integrated to build smarter, next-generation applications. If you have a project idea or need a reliable technical partner, let's discuss. 🚀",
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
                    label: 'DevOps',
                    items: ['Docker', 'Nginx']
                },
                design: {
                    label: 'Design Tools',
                    items: ['Figma', 'Canva']
                },
                vcs: {
                    label: 'Version Control',
                    items: ['Git', 'GitHub']
                },
                data_ai: {
                    label: 'Data & AI',
                    items: ['Looker Studio', 'Pandas', 'Metabase', 'Google Sheets']
                }
            },
            experience: [
                {
                    period: 'Feb 2026 – Sekarang',
                    role: 'Computer Network Lab Assistant',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo_umrah.webp',
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
                    logo: '/logo_bps.webp',
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
                    logo: '/logo_umrah.webp',
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
                    logo: '/logo_posyandu.webp',
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
                    logo: '/logo_pelindo.webp',
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
                    logo: '/logo_umrah.webp',
                    desc: 'Focusing on software engineering and data analytics. Current GPA: 3.43'
                },
                {
                    period: '2019 – 2022',
                    degree: 'Software Engineering',
                    school: 'SMKN 1 Bintan Timur',
                    logo: '/logo_smk.webp',
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
            filterAI: 'AI',
            filterGame: 'Game',
            liveDemo: 'Live Demo',
            sourceCode: 'Source Code',
            backToProjects: 'Back to Projects'
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
                { q: 'What is your primary technology stack?', a: 'As a Full-Stack Developer, I specialize in modern ecosystems like React, Svelte, and Node.js, paired with reliable traditional backends (Laravel/PHP). I also design highly scalable and secure database architectures (PostgreSQL).' },
                { q: 'Are you available for freelance projects?', a: 'Absolutely. Whether it\'s end-to-end web app development, system integration, or corporate-grade data analytics dashboards (similar to my work at Statistics Indonesia). I prioritize transparent communication and timely delivery.' },
                { q: 'How extensive is your industry experience?', a: 'I began my professional involvement in early 2022. My portfolio spans from IT infrastructure in state-owned enterprises (Pelindo) to governmental platform digitalization (BPS). I am highly accustomed to real-world industry standards and pressures.' },
                { q: 'What is your workflow if I want to hire you?', a: 'We start with a free consultation to understand your business problem. Then, I will provide a system design proposal and timeline. Reach out via the contact form or email to start the conversation.' }
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
            email: 'chdprasetyo@gmail.com ' ,
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
