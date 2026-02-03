import { ArrowUpRight } from "lucide-react";

export default function ProjectsApp() {
    // Placeholder data - ideally fetched from your data source
    const projects = [
        { id: 1, title: "E-Commerce Dashboard", category: "React Dashboard", color: "bg-blue-500" },
        { id: 2, title: "Social Media App", category: "Full Stack", color: "bg-purple-500" },
        { id: 3, title: "Finance Tracker", category: "Mobile App", color: "bg-green-500" },
        { id: 4, title: "Portfolio OS", category: "Creative", color: "bg-orange-500" },
    ];

    return (
        <div className="p-4 h-full overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 px-2">Recent Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-200 cursor-pointer flex flex-col gap-3"
                    >
                        <div className={`w-full h-24 ${project.color}/20 rounded-lg border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform`}>
                            <span className="text-2xl">📂</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm truncate">{project.title}</h3>
                            <p className="text-xs text-gray-400">{project.category}</p>
                        </div>
                        <div className="mt-auto pt-2 flex justify-end">
                            <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors">
                                <ArrowUpRight size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
