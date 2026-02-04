import { motion } from "framer-motion";
import { Database, Server, Layout, Globe, Cpu, Code2, Settings } from "lucide-react";

export default function TechApp() {
    return (
        <div className="h-full overflow-y-auto p-6 md:p-8 text-white select-none custom-scrollbar pb-20">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Cpu className="text-blue-400" />
                    System Arsenal
                </h1>
                <p className="text-gray-400 text-sm max-w-lg">
                    Production-ready technologies categorized by layer.
                    Focused on scalability, performance, and adaptability.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Backend */}
                <StackCard
                    icon={<Server size={20} />}
                    title="Backend Development"
                    items={["Next.js (API/Full Stack)", "Laravel & PHP", "Node.js (Bun/Express)", "CodeIgniter 4"]}
                    desc="Building robust server-side logic and scalable architectures."
                    delay={0.1}
                />

                {/* Frontend */}
                <StackCard
                    icon={<Layout size={20} />}
                    title="Frontend Ecosystem"
                    items={["Next.js (SSR/CSR)", "React & TypeScript", "Tailwind CSS", "Framer Motion"]}
                    desc="Component-driven architecture for complex interactive UIs."
                    delay={0.2}
                />

                {/* Database */}
                <StackCard
                    icon={<Database size={20} />}
                    title="Data Engineering"
                    items={["PostgreSQL & MySQL", "Supabase", "Data Cleaning/Processing", "Redis"]}
                    desc="Designing schema and processing raw data for analytical dashboards."
                    delay={0.3}
                />

                {/* API */}
                <StackCard
                    icon={<Globe size={20} />}
                    title="API & Integration"
                    items={["RESTful API Design", "System Integration", "Microservices Communication"]}
                    desc="Connecting internal services and third-party endpoints securely."
                    delay={0.4}
                />

                {/* Tools */}
                <StackCard
                    icon={<Settings size={20} />}
                    title="Tools & Workflow"
                    items={["Git Version Control", "CI/CD Pipelines", "Environment Config", "Modular Structure"]}
                    desc="Maintaining high code quality and production standards."
                    delay={0.5}
                />

                {/* Adaptability (Bonus) */}
                <StackCard
                    icon={<Cpu size={20} />}
                    title="Engineering Adaptability"
                    items={["Legacy System Refactoring", "Performance Optimization", "Quick Learning Curve"]}
                    desc="Ready to dive into any stack to solve the problem at hand."
                    delay={0.6}
                />

            </div>
        </div>
    );
}

function StackCard({ icon, title, items, desc, delay }: { icon: React.ReactNode, title: string, items: string[], desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.4 }}
            className="p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
        >
            <div className="flex items-center gap-3 mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                <div className="p-2 bg-blue-500/10 rounded-lg">{icon}</div>
                <h3 className="font-bold text-white text-base">{title}</h3>
            </div>
            <ul className="mb-4 space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="text-gray-300 text-xs flex items-start gap-2 font-mono">
                        <span className="text-blue-500/50 mt-0.5">▹</span>
                        {item}
                    </li>
                ))}
            </ul>
            <p className="text-gray-500 text-[10px] leading-relaxed border-t border-white/5 pt-3">
                {desc}
            </p>
        </motion.div>
    );
}
