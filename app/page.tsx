import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { TypewriterText } from "@/components/animations/TypewriterText";
import { TechStackMarquee } from "@/components/animations/TechStackMarquee";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedCount } from "@/components/animations/AnimatedCount";

export default async function Home() {
  // Get ALL projects from database
  const dbProjects = await prisma.project.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' },
  });

  // All GitHub projects
  const githubProjects = [
    {
      title: "SiPaKu",
      description: "Sistem Informasi Perkuliahan Akademik Ku (SIPAKU) - Academic management system for universities built with CodeIgniter 4, featuring modern UI with TailwindCSS and Preline UI.",
      tags: ["PHP", "CodeIgniter 4", "TailwindCSS", "MySQL"],
      stars: 2,
      url: "https://github.com/Cahyadi-Prasetyo/SiPaKu"
    },
    {
      title: "Sistem Absensi Real-Time",
      description: "Enterprise-grade real-time distributed attendance system built with Laravel 12 and Laravel Reverb for high availability with WebSocket connections.",
      tags: ["Laravel 12", "Reverb", "MySQL", "WebSockets"],
      stars: 1,
      url: "https://github.com/Cahyadi-Prasetyo/Sistem-Absensi"
    },
    {
      title: "Exam System Platform",
      description: "Web-based exam platform designed for schools to conduct online exams securely and efficiently with auto-grading and real-time monitoring.",
      tags: ["TypeScript", "Next.js", "Security"],
      stars: 0,
      url: "https://github.com/Cahyadi-Prasetyo/Exam-System"
    },
    {
      title: "Bahari Kepri",
      description: "Marine tourism website to promote sea destinations in Kepulauan Riau with interactive maps and booking system integration.",
      tags: ["TypeScript", "Next.js", "Tourism"],
      stars: 0,
      url: "https://github.com/Cahyadi-Prasetyo/bahari-kepri"
    },
    {
      title: "IMK Portfolio",
      description: "Interactive portfolio website featuring works and experiences, built with Laravel, Tailwind CSS, and Three.js for 3D interactive elements.",
      tags: ["Laravel", "Three.js", "Tailwind", "Blade"],
      stars: 1,
      url: "https://github.com/Cahyadi-Prasetyo/IMK-Portfolio",
      live: "https://cahyadiportfolio.my.id/"
    },
    {
      title: "Article Management System",
      description: "Web-based article management system built with CodeIgniter 4, featuring authentication, feedback system, and modern admin panel.",
      tags: ["PHP", "CodeIgniter 4", "MySQL"],
      stars: 0,
      url: "https://github.com/Cahyadi-Prasetyo/ArticleBerita-Sederhana"
    },
    {
      title: "Web Article with Approval",
      description: "Full-stack article management system with multi-level approval workflow (Guest, User, Admin) for content quality assurance.",
      tags: ["Laravel", "Blade", "MySQL", "Workflow"],
      stars: 0,
      url: "https://github.com/Cahyadi-Prasetyo/Web-Article"
    },
    {
      title: "PencatatanGudang",
      description: "C-based inventory management application for terminal-based item recording, viewing, and deletion with CSV export functionality.",
      tags: ["C", "Terminal", "CSV"],
      stars: 2,
      url: "https://github.com/Cahyadi-Prasetyo/PencatatanGudang"
    },
    {
      title: "PAA Project Game",
      description: "Smart Courier game implementation using raylib library, demonstrating algorithm design and game development concepts.",
      tags: ["C", "Raylib", "Game Dev", "Makefile"],
      stars: 2,
      url: "https://github.com/Cahyadi-Prasetyo/PAA-project-game"
    },
    {
      title: "Portfolio (Current)",
      description: "Modern portfolio website built with Next.js, TypeScript, Prisma, and Tailwind CSS featuring admin dashboard and blog system.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      stars: 0,
      url: "https://github.com/Cahyadi-Prasetyo/Portfolio"
    }
  ];

  // Combine all projects (database + GitHub)
  const allProjects = [...dbProjects, ...githubProjects];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm text-slate-600">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Available for new projects</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-slate-900">
                Cahyadi<br />Prasetyo
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TypewriterText />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-4 pt-4">
                <Link href="/projects">
                  <button className="group px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
                    View Work
                    <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-6 py-3 border border-slate-200 text-slate-900 rounded-lg hover:border-slate-900 transition-colors font-medium">
                    Get in Touch
                  </button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-slate-200"></div>
      </div>

      {/* About Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="text-sm uppercase tracking-wider text-slate-500 font-medium">About</h2>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <p className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug">
                  I'm a full-stack developer specializing in building exceptional digital products.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Currently pursuing my degree in Informatics Engineering at Universitas Maritim Raja Ali Haji (UMRAH).
                  I specialize in Laravel, React, and modern JavaScript frameworks, with a strong focus on secure systems and clean API design.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="pt-8">
                  <h3 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-4">Core Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Vue.js', 'Laravel', 'CodeIgniter 4', 'TypeScript', 'Node.js', 'TailwindCSS', 'MySQL'].map((skill, i) => (
                      <ScrollReveal key={skill} delay={0.5 + i * 0.05}>
                        <span className="px-4 py-2 bg-slate-50 text-slate-900 rounded-md text-sm font-medium border border-slate-100">
                          {skill}
                        </span>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-slate-200"></div>
      </div>

      {/* Education Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="text-sm uppercase tracking-wider text-slate-500 font-medium">Education</h2>
              </ScrollReveal>
            </div>

            <div className="space-y-8">
              <ScrollReveal delay={0.2}>
                <div className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900"></div>
                  <div className="space-y-2">
                    <div className="text-sm text-slate-500">2023 - Present</div>
                    <h3 className="text-xl font-bold text-slate-900">Bachelor of Informatics Engineering</h3>
                    <div className="text-lg text-slate-700">Universitas Maritim Raja Ali Haji (UMRAH)</div>
                    <p className="text-slate-600">Faculty of Engineering and Maritime Technology</p>
                    <div className="pt-2 space-y-1 text-sm text-slate-600">
                      <p>• Focus: Full-Stack Development & Secure Systems</p>
                      <p>• Specialization: Web Application Development & API Engineering</p>
                      <p>• Location: Tanjungpinang, Kepulauan Riau</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-slate-200"></div>
      </div>

      {/* Experience Section with Animated Stats */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="text-sm uppercase tracking-wider text-slate-500 font-medium">Experience</h2>
              </ScrollReveal>
            </div>

            <div className="space-y-12">
              <ScrollReveal delay={0.2}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Freelance Full-Stack Developer</h3>
                      <div className="text-slate-600">Self-Employed</div>
                    </div>
                    <div className="text-sm text-slate-500">2023 - Present</div>
                  </div>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Developed and delivered 10+ web applications for various clients</li>
                    <li>• Specialized in Laravel, React, and modern JavaScript frameworks</li>
                    <li>• Implemented secure authentication systems and RESTful APIs</li>
                    <li>• Managed full project lifecycle from requirements to deployment</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <ScrollReveal delay={0.3}>
                  <div className="space-y-2">
                    <AnimatedCount end={10} suffix="+" />
                    <div className="text-sm text-slate-600">Projects Delivered</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                  <div className="space-y-2">
                    <AnimatedCount end={2} suffix="+" />
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                  <div className="space-y-2">
                    <AnimatedCount end={7} suffix="+" />
                    <div className="text-sm text-slate-600">GitHub Stars</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.6}>
                  <div className="space-y-2">
                    <AnimatedCount end={20} suffix="+" />
                    <div className="text-sm text-slate-600">Technologies</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-slate-200"></div>
      </div>

      {/* Selected Work - ALL Projects */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="text-sm uppercase tracking-wider text-slate-500 font-medium">Selected Work</h2>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-slate-600">
                  A collection of {allProjects.length} projects showcasing my full-stack development journey.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="space-y-24">
            {allProjects.map((project, index) => {
              // Check if it's a GitHub project or DB project
              const isGitHub = 'url' in project;

              return (
                <ScrollReveal key={index} delay={0.1 + (index % 3) * 0.1}>
                  <div className="group">
                    <div className="relative aspect-video bg-slate-100 rounded-lg mb-8 overflow-hidden">
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                      <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-slate-900">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      {isGitHub && project.stars > 0 && (
                        <div className="absolute top-6 right-6 flex items-center gap-1 text-slate-600">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          <span className="text-sm">{project.stars}</span>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {(isGitHub ? project.tags : project.tags || []).map((tag: string) => (
                            <span key={tag} className="text-xs text-slate-500 uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-4">
                          {isGitHub ? (
                            <>
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-slate-900 font-medium group-hover:gap-3 transition-all"
                              >
                                View on GitHub
                                <span className="text-sm">→</span>
                              </a>
                              {project.live && (
                                <a
                                  href={project.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all"
                                >
                                  Live Demo
                                  <span className="text-sm">↗</span>
                                </a>
                              )}
                            </>
                          ) : (
                            <Link
                              href={`/projects/${project.id}`}
                              className="inline-flex items-center gap-2 text-slate-900 font-medium group-hover:gap-3 transition-all"
                            >
                              View Details
                              <span className="text-sm">→</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-24 text-center">
              <a
                href="https://github.com/Cahyadi-Prasetyo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 border border-slate-200 text-slate-900 rounded-lg hover:border-slate-900 transition-colors font-medium">
                  View All on GitHub
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Let's work together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Link href="/contact">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-lg">
                Start a Conversation
              </button>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex justify-center gap-8">
              <a
                href="https://github.com/Cahyadi-Prasetyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Twitter
              </a>
              <a
                href="mailto:cahyadi.informatics@gmail.com"
                className="text-slate-400 hover:text-slate-900 transition-colors text-sm font-medium"
              >
                Email
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
