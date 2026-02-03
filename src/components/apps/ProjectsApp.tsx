import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
    title: string;
    desc: string;
    tech: string[];
    link: string;
    github?: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Sistem Informasi Desa",
        desc: "Web application for village administration management and public information.",
        tech: ["Laravel", "Vue.js", "MySQL"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "E-Commerce Dashboard",
        desc: "Admin dashboard for managing products, orders, and customer analytics.",
        tech: ["React", "Tailwind", "Chart.js"],
        link: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Portfolio v1",
        desc: "Previous personal portfolio website focused on minimal typography.",
        tech: ["HTML", "SCSS", "JS"],
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Weather App",
        desc: "Real-time weather forecast application using OpenWeatherMap API.",
        tech: ["React", "API", "CSS Modules"],
        link: "#",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=600&q=80"
    }
];

export default function ProjectsApp() {
    return (
        <div className="h-full overflow-y-auto p-6 text-white custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm pb-4">
                <p>More projects available on my GitHub</p>
            </div>
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Image Container */}
            <div className="h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-20 flex gap-2">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors">
                            <Github size={16} />
                        </a>
                    )}
                    <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full hover:bg-blue-500 text-white transition-colors">
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium bg-white/5 text-blue-300 rounded border border-white/5">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
