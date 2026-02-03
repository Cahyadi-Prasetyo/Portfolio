import { Briefcase, GraduationCap, MapPin, Github, Linkedin, Mail, ExternalLink, User } from "lucide-react";

export default function AboutApp() {
    return (
        <div className="h-full overflow-y-auto p-6 space-y-8 text-gray-200 select-text">

            {/* Header / Profile Card */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-white/5 p-6 rounded-2xl border border-white/10">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 overflow-hidden shadow-lg p-1">
                        <img
                            src="https://github.com/cahyadip.png"
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover bg-gray-900"
                            onError={(e) => {
                                // Fallback if github image fails
                                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Cahyadi+Prasetyo&background=random";
                            }}
                        />
                    </div>
                </div>

                <div className="text-center md:text-left space-y-2 flex-1">
                    <h1 className="text-2xl font-bold text-white">Cahyadi Prasetyo</h1>
                    <p className="text-blue-400 font-medium">Informatics Engineering Student</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-400">
                        <MapPin size={14} />
                        <span>Riau Islands, Indonesia</span>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                        Mahasiswa Teknik Informatika di Universitas Maritim Raja Ali Haji.
                        Memiliki latar belakang di bidang IT Support dan pengembangan web (Frontend).
                        Senang mempelajari teknologi baru dan membangun solusi digital.
                    </p>

                    <div className="flex gap-3 pt-2 justify-center md:justify-start">
                        <SocialLink href="https://github.com" icon={<Github size={16} />} label="GitHub" />
                        <SocialLink href="https://linkedin.com" icon={<Linkedin size={16} />} label="LinkedIn" />
                        <SocialLink href="mailto:email@example.com" icon={<Mail size={16} />} label="Email" />
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <section>
                <SectionTitle icon={<Briefcase size={18} />} title="Experience" />
                <div className="mt-4 space-y-6 border-l-2 border-white/10 ml-3 pl-6 relative">

                    <TimelineItem
                        role="IT Division Intern"
                        company="BPS Provinsi Kepulauan Riau"
                        period="Jan 2026 - Mar 2026"
                        desc="Divisi TI/Pengolahan. Bertanggung jawab dalam pengolahan data statistik dan dukungan teknis operasional TI."
                    />

                    <TimelineItem
                        role="Frontend Developer (PKM Team)"
                        company="Universitas Maritim Raja Ali Haji"
                        period="2025 - Present"
                        desc="Terlibat dalam tim PKM Dosen sebagai pengembang Frontend. Mengembangkan antarmuka pengguna untuk aplikasi riset/pengabdian."
                    />

                    <TimelineItem
                        role="IT Support Intern"
                        company="PT. Pelindo Regional 1 Tanjungpinang"
                        period="Jan 2022 - Jun 2022"
                        desc="Menangani maintenance hardware (PC bongkar/pasang, printer) dan konfigurasi jaringan perusahaan."
                    />

                    <TimelineItem
                        role="Wakil Ketua Divisi Kewarganegaraan"
                        company="SMKN 1 Bintan Timur"
                        period="2020 - 2021"
                        desc="Aktif dalam organisasi sekolah, memimpin inisiatif divisi kewarganegaraan."
                    />

                    <TimelineItem
                        role="Mentor Pramuka"
                        company="SMPN 26 Bintan Timur"
                        period="Sep 2017 - Nov 2017"
                        desc="Membimbing siswa junior dalam kegiatan kepramukaan dan pengembangan karakter."
                    />

                </div>
            </section>

            {/* Education Section */}
            <section>
                <SectionTitle icon={<GraduationCap size={18} />} title="Education" />
                <div className="mt-4 space-y-4">

                    <EducationItem
                        school="Universitas Maritim Raja Ali Haji"
                        degree="S1 Teknik Informatika"
                        year="2023 - Present"
                        desc="Fakultas Teknik dan Teknologi Kemaritiman. Fokus pada Rekayasa Perangkat Lunak dan teknologi web."
                    />

                    <EducationItem
                        school="SMKN 1 Bintan Timur"
                        degree="Rekayasa Perangkat Lunak (RPL)"
                        year="2020 - 2023"
                        desc="Mempelajari dasar-dasar pemrograman, database, dan pengembangan aplikasi."
                    />

                </div>
            </section>

        </div>
    );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode, title: string }) {
    return (
        <div className="flex items-center gap-2 text-white border-b border-white/10 pb-2">
            <span className="text-blue-400">{icon}</span>
            <h2 className="font-semibold">{title}</h2>
        </div>
    );
}

function TimelineItem({ role, company, period, desc }: { role: string, company: string, period: string, desc: string }) {
    return (
        <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors" />

            <h3 className="font-bold text-white text-base">{role}</h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-blue-300/80 mb-1 font-mono">
                <span>{company}</span>
                <span>•</span>
                <span>{period}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        </div>
    );
}

function EducationItem({ school, degree, year, desc }: { school: string, degree: string, year: string, desc: string }) {
    return (
        <div className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                <div>
                    <h3 className="font-bold text-white">{school}</h3>
                    <p className="text-blue-200 font-medium text-sm">{degree}</p>
                    <p className="text-xs text-gray-400 mt-1">{desc}</p>
                </div>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300 whitespace-nowrap self-start md:self-auto mt-2 md:mt-0 font-mono">
                    {year}
                </span>
            </div>
        </div>
    );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-xs font-medium transition-colors text-gray-300 hover:text-white"
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}
