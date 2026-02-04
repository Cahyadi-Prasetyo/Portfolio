import { motion } from "framer-motion";
import { Database, Server, Layout, Globe, Cpu, Code2, Layers } from "lucide-react";

export default function TechApp() {
    return (
        <div className="h-full overflow-y-auto p-8 text-white select-none">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Cpu className="text-blue-400" />
                    System Architecture
                </h1>
                <p className="text-gray-400 text-sm max-w-lg">
                    Comprehensive overview of the technical stack and data flow powering my applications.
                    Built for scalability, performance, and maintainability.
                </p>
            </div>

            {/* Architecture Diagram Visualization */}
            <div className="relative w-full max-w-3xl mx-auto py-8">

                {/* Connecting Lines (Background) */}
                <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none">
                    <div className="w-1 h-3/4 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />
                </div>

                <div className="grid gap-12 relative z-10">

                    {/* 1. Frontend Layer */}
                    <TechLayer
                        title="Presentation Layer (Frontend)"
                        icon={<Layout size={20} />}
                        color="border-blue-500/30 bg-blue-500/5 text-blue-300"
                        delay={0.1}
                    >
                        <TechBadge name="React 18" />
                        <TechBadge name="TypeScript" />
                        <TechBadge name="Tailwind CSS" />
                        <TechBadge name="Framer Motion" />
                        <TechBadge name="Vite / Next.js" />
                    </TechLayer>

                    {/* Arrow Down */}
                    <div className="flex justify-center text-gray-600"><Layers size={16} /></div>

                    {/* 2. Backend Layer */}
                    <TechLayer
                        title="Application Layer (Backend / API)"
                        icon={<Server size={20} />}
                        color="border-purple-500/30 bg-purple-500/5 text-purple-300"
                        delay={0.3}
                    >
                        <TechBadge name="Node.js" />
                        <TechBadge name="Bun Runtime" />
                        <TechBadge name="RESTful API" />
                        <TechBadge name="Express / NestJS" />
                        <TechBadge name="Auth (JWT)" />
                    </TechLayer>

                    {/* Arrow Down */}
                    <div className="flex justify-center text-gray-600"><Layers size={16} /></div>

                    {/* 3. Data Layer */}
                    <TechLayer
                        title="Data Persistence Layer"
                        icon={<Database size={20} />}
                        color="border-green-500/30 bg-green-500/5 text-green-300"
                        delay={0.5}
                    >
                        <TechBadge name="PostgreSQL" />
                        <TechBadge name="MySQL" />
                        <TechBadge name="Supabase" />
                        <TechBadge name="Redis" />
                        <TechBadge name="Prisma ORM" />
                    </TechLayer>

                </div>
            </div>

            {/* DevOps / Tools Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-gray-400 mb-4 flex items-center gap-2">
                    <Code2 size={16} />
                    Development & DevOps Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                    {["Git", "Docker", "Linux Shell", "VS Code", "Postman", "Vercel / Netlify", "CI/CD"].map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}

function TechLayer({ title, icon, color, children, delay }: { title: string, icon: React.ReactNode, color: string, children: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className={`p-6 rounded-2xl border ${color} backdrop-blur-sm relative overflow-hidden group`}
        >
            <div className="flex items-center gap-3 mb-4">
                <span className="p-2 rounded-lg bg-white/5">{icon}</span>
                <h2 className="font-semibold text-white/90">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                {children}
            </div>
        </motion.div>
    );
}

function TechBadge({ name }: { name: string }) {
    return (
        <span className="px-3 py-1.5 rounded-md bg-black/40 border border-white/10 text-xs font-mono hover:bg-white/10 transition-colors cursor-default">
            {name}
        </span>
    );
}
