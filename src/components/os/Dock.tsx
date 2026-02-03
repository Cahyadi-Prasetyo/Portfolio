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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
            <div className="flex items-end gap-3 px-4 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/20">
                {apps.map((app) => (
                    <div key={app.id} className="relative flex flex-col items-center gap-2 group">

                        {/* Tooltip */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: hovered === app.id ? 1 : 0, y: hovered === app.id ? -15 : 10 }}
                            className="absolute -top-10 bg-gray-900/90 text-white text-[10px] font-medium px-2 py-1 rounded-md backdrop-blur-sm whitespace-nowrap pointer-events-none border border-white/10 shadow-lg"
                        >
                            {app.name}
                        </motion.div>

                        {/* Icon */}
                        <motion.button
                            onMouseEnter={() => setHovered(app.id)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => onOpenApp(app.id)}
                            whileHover={{ scale: 1.2, y: -10 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg text-white ${app.color} transition-all duration-200 ring-1 ring-white/20`}
                        >
                            <app.icon size={24} strokeWidth={2} />
                        </motion.button>

                        {/* Active Dot (Placeholder) */}
                        <div className="w-1 h-1 bg-white/60 rounded-full opacity-0 group-active:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>
        </div>
    );
}
