import { motion } from "framer-motion";
import { User, Briefcase, Terminal, Mail, Cpu } from "lucide-react";
import { useState } from "react";

interface DockProps {
    onOpenApp: (id: string) => void;
}

export default function Dock({ onOpenApp }: DockProps) {
    const apps = [
        { id: "about", name: "About Me", icon: User, color: "bg-blue-500" },
        { id: "projects", name: "Projects", icon: Briefcase, color: "bg-purple-500" },
        { id: "stack", name: "Tech Stack", icon: Cpu, color: "bg-emerald-500" },
        { id: "terminal", name: "Terminal", icon: Terminal, color: "bg-gray-800" },
        { id: "contact", name: "Contact", icon: Mail, color: "bg-orange-500" },
    ];

    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-fit px-4 md:px-0">
            <div className="flex items-end gap-2 md:gap-3 px-3 py-2 md:px-4 md:py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20 mx-auto overflow-x-auto no-scrollbar max-w-full">
                {apps.map((app) => (
                    <div key={app.id} className="relative flex flex-col items-center gap-2 group flex-shrink-0">



                        {/* Icon */}
                        <motion.button
                            onMouseEnter={() => setHovered(app.id)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => onOpenApp(app.id)}
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg text-white ${app.color} transition-all duration-200 ring-1 ring-white/20`}
                        >
                            <app.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                        </motion.button>

                        {/* Sub-line / Label */}
                        <div className="mt-1">
                            <span className="text-[10px] text-white/50 bg-black/50 px-1.5 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
                                {app.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
