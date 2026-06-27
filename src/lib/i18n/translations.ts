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
            bio: 'Mahasiswa Teknik Informatika (UMRAH) yang aktif belajar dan membangun proyek web sejak 2022. Saya berpengalaman mengembangkan aplikasi dari sisi frontend (React, Vue, Svelte) hingga backend (Laravel, Node.js), serta membuat visualisasi data. Melalui magang di BPS Kepri dan Pelindo, saya belajar bekerja dalam tim dan menyelesaikan masalah teknis secara nyata.',
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
            skillsLabel: 'Kemampuan',
            bio: 'Ketertarikan saya di dunia IT dimulai dari bangku SMK hingga kini melanjutkan studi S1 Teknik Informatika di UMRAH. Sejak 2022, saya mulai mempraktikkan teori dengan terjun langsung ke lapangan, seperti membantu digitalisasi data di BPS Provinsi Kepulauan Riau dan mendukung operasional IT di PT. Pelindo.\n\nSaya fokus mendalami Web Development baik dari sisi Frontend (React, Vue, Svelte) maupun Backend (Laravel, Node.js), serta memiliki ketertarikan kuat pada analisis data dan jaringan komputer. Bagi saya, coding adalah alat untuk membuat sistem bermanfaat yang mempermudah pekerjaan sehari-hari.\n\nSaya selalu terbuka untuk belajar hal baru, berkolaborasi dalam tim, atau membantu mewujudkan proyek digital Anda. Mari terhubung! 🚀',
            techStackLabel: 'Tech Stack',
            titleExp: 'Pengalaman',
            titleEdu: 'Pendidikan',
            titleCert: 'Sertifikasi',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Dart']
                },
                backend: {
                    label: 'Backend',
                    items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Python', 'Go']
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
            bio: "An Informatics Engineering student (UMRAH) active in web development and IT since 2022. I have hands-on experience building applications from frontend (React, Vue, Svelte) to backend (Laravel, Node.js), as well as creating data visualizations. Through internships at BPS Kepri and Pelindo, I have learned to collaborate in team environments and solve practical technical problems.",
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
            skillsLabel: 'Skills',
            bio: "My journey in IT started during vocational high school (SMK) and continues as I pursue a Bachelor's degree in Informatics Engineering at UMRAH. Since 2022, I have been putting theory into practice through hands-on roles, such as assisting with data digitalization at BPS Kepulauan Riau and supporting IT operations at PT. Pelindo.\n\nI focus on Web Development from both Frontend (React, Vue, Svelte) and Backend (Laravel, Node.js) perspectives, and have a keen interest in data analysis and computer networking. For me, coding is a tool to build useful systems that simplify daily tasks.\n\nI am always open to learning new things, collaborating in teams, or helping bring your digital projects to life. Let's connect! 🚀",
             techStackLabel: 'Tech Stack',
            titleExp: 'Experience',
            titleEdu: 'Education',
            techStack: {
                frontend: {
                    label: 'Frontend',
                    items: ['React', 'Vue.js', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Flutter', 'Dart']
                },
                backend: {
                    label: 'Backend',
                    items: ['Node.js', 'PHP', 'Laravel', 'CodeIgniter', 'Python', 'Go']
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
                    period: 'Feb 2026 – Present',
                    role: 'Computer Network Lab Assistant',
                    company: 'Universitas Maritim Raja Ali Haji (UMRAH)',
                    logo: '/logo_umrah.webp',
                    points: [
                        'Contributed to academic instructional programs to support student understanding of Computer Networks courses aligned with standard computer science curriculum.',
                        'Designed and simulated complex network architectures (VLAN, Static/Dynamic Routing, Subnetting) using Cisco Packet Tracer as an interactive learning medium.',
                        'Performed deep protocol analysis and data traffic troubleshooting using Wireshark to validate network transmission security and efficiency.',
                        'Evaluated student technical performance through practical exam sessions to ensure mastery of OSI Layer concepts and network infrastructure.',
                    ],
                    skills: 'Computer Networking · Cisco Packet Tracer · Wireshark · Technical Instruction · Troubleshooting'
                },
                {
                    period: 'Jan 2026 – Mar 2026',
                    role: 'IT Web Developer & Data Analyst (Internship)',
                    company: 'Statistics Indonesia (BPS) Kepulauan Riau Province',
                    logo: '/logo_bps.webp',
                    points: [
                        'Digitalized regional statistical data distribution by engineering web interfaces (React/Vue.js) for the Gurindam & Tanjak platforms, ensuring intuitive navigation for complex data.',
                        'Integrated Looker Studio analytics visualizations using PHP, enabling leadership to make real-time, data-driven decisions.',
                        'Accelerated data processing workflows by optimizing the integration pathways between PostgreSQL, Google Sheets API, and analytic dashboards.',
                        'Enhanced dynamic data rendering performance for the flight ticket price monitoring platform (Aeroprice), delivering a seamless and responsive user experience.',
                        'Ensured operational stability of internal information systems by proactively providing daily IT support.'
                    ],
                    skills: 'React.js · Vue.js · PHP · PostgreSQL · Looker Studio · Data Visualization · IT Support'
                },
                {
                    period: 'Nov 2025 – Jan 2026',
                    role: 'Frontend Developer',
                    company: 'UMRAH Lecturer PKM Team',
                    logo: '/logo_umrah.webp',
                    points: [
                        'Designed an innovative video-feed web interface (TikTok-style) using React.js to boost exposure for local MSME products.',
                        'Improved user retention (user engagement) by implementing smooth and interactive video transitions.',
                        'Engineered fully responsive UI component architectures, ensuring optimal layout and performance across desktop and mobile screens.',
                        'Collaborated within cross-functional teams to transform academic research concepts into practical digital products for end-users.'
                    ],
                    skills: 'React.js · Tailwind CSS · Responsive Web Development · Cross-team Collaboration'
                },
                {
                    period: '2024 – Present',
                    role: 'Data Analyst & Administrator',
                    company: 'Posyandu Terintegrasi',
                    logo: '/logo_posyandu.webp',
                    points: [
                        'Managed the public health operational data ecosystem professionally to ensure the accuracy of administrative reporting.',
                        'Conducted routine data analysis and cleaning procedures to minimize anomalies in monthly operational reports.',
                        'Held responsibility for reporting integrity of data used for village-level health policy review and decision making.'
                    ],
                    skills: 'Data Analysis · Administrative Management · Data Integrity · Operational Excellence'
                },
                {
                    period: 'Jan 2022 – Jun 2022',
                    role: 'IT Support (Internship)',
                    company: 'PT. Pelindo (Persero) Regional 1 Tanjungpinang',
                    logo: '/logo_pelindo.webp',
                    points: [
                        'Performed IT technical support duties in a state-owned enterprise (BUMN) environment to maintain daily operational productivity.',
                        'Conducted routine maintenance on hardware and software and ensured local area network (LAN) connectivity stability.',
                        'Resolved daily technical user issues (end-user support) regarding operating systems and office software efficiently.'
                    ],
                    skills: 'Hardware Maintenance · Network Troubleshooting · Technical Support · Corporate Environment'
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
