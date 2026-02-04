import { ArrowRight, FileText, Layout } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LandingPageProps {
    onEnterDesktop: () => void;
}

export default function LandingPage({ onEnterDesktop }: LandingPageProps) {
    const roles = [
        "Full Stack Engineer • System Architecture",
        "Backend Engineer • Scalable API & Database",
        "Full Stack Engineer • Data Visualization Systems"
    ];

    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-blue-500/30">

            {/* Abstract Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
                <div className="absolute inset-0 bg-noise opacity-20" />
            </div>

            {/* 1. Subtle OS Signal - Top Bar */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center text-xs text-gray-600 font-mono tracking-widest select-none z-20">
                <div className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-gray-600/50" />
                    <span>CAHYADI_OS_KERNEL</span>
                </div>
                <span>BOOT_SEQUENCE_READY</span>
            </div>

            {/* Content Container (Scrollable) */}
            <div className="z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">

                {/* 1. HERO SECTION */}
                <div className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto mt-20"
                    >
                        {/* Engineering Badge */}
                        <div className="flex justify-center mb-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono tracking-wider text-green-400 bg-green-900/10 rounded-full border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                SYSTEM ONLINE • v2.6.0
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                            Cahyadi Prasetyo
                        </h1>

                        {/* Rotating Roles */}
                        <div className="h-8 mb-8 flex justify-center items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={roleIndex}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-xl md:text-2xl text-gray-300 font-light"
                                >
                                    {roles[roleIndex]}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <p className="text-sm md:text-base text-gray-500 mb-10 font-mono max-w-xl mx-auto border-t border-b border-white/5 py-4">
                            Building scalable web apps, operational dashboards, and API-driven systems.
                            <br /> Focus on reliability, data integrity, and performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
                            <div className="relative">
                                <button
                                    onClick={onEnterDesktop}
                                    className="flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    <span>Enter Desktop Environment</span>
                                    <ArrowRight size={18} />
                                </button>
                                <span className="absolute -bottom-6 left-0 w-full text-center text-[10px] text-gray-500 font-mono tracking-wide opacity-80 whitespace-nowrap">
                                    Explore projects & interactive systems
                                </span>
                            </div>
                            <button
                                onClick={() => window.open('/resume.pdf', '_blank')}
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group text-sm"
                            >
                                <FileText size={18} className="text-gray-300 group-hover:text-white" />
                                <span>Download Resume</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 animate-bounce text-gray-600">
                        <ArrowRight size={20} className="rotate-90" />
                    </div>
                </div>

                {/* 2. VALUE PROPOSITION (About) */}
                <section id="about" className="py-24 px-6 bg-black/50 backdrop-blur-sm border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <SectionHeader title="Engineering Mindset" subtitle="PROBLEM SOLVING OVER PIXEL PUSHING" />

                        <div className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                                <p>
                                    <strong className="text-white">I don't just write code; I design systems.</strong>
                                </p>
                                <p>
                                    As a Full Stack Developer, I focus on the engine under the hood.
                                    My expertise lies in handling data-heavy operations, effectively visualizing complex metrics for dashboards,
                                    and ensuring seamless integration between backend logic and frontend interactivity.
                                </p>
                                <p>
                                    I regularly work with API contracts, data validation, and backend-driven UI states.
                                    I am accustomed to working with operational data, internal agency systems, and scalable architectures.
                                    Often working with legacy systems and imperfect data.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <FeatureCard title="Data Driven" desc="Logic based on real metrics" />
                                <FeatureCard title="Scalable" desc="Modular architecture" />
                                <FeatureCard title="Secure" desc="Best practices standard" />
                                <FeatureCard title="Reliable" desc="Error-proof logic" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT I BUILD */}
                <section className="py-24 px-6 border-t border-white/5 bg-white/5">
                    <div className="max-w-5xl mx-auto">
                        <SectionHeader title="Technical Capabilities" subtitle="WHAT I BUILD" />

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <TechCard
                                icon={<Layout size={32} />}
                                title="Web Applications"
                                desc="Complex, state-heavy interactive applications using React ecosystem. High performance and responsive."
                            />
                            <TechCard
                                icon={<FileText size={32} />} // Using FileText as proxy for Chart/Dashboard
                                title="Dashboards & Viz"
                                desc="Transforming raw data into actionable insights using D3/Recharts. Operational tools for decision making."
                            />
                            <TechCard
                                icon={<ArrowRight size={32} />} // Proxy for Server/API
                                title="API & Backend"
                                desc="RESTful APIs with relational databases (PostgreSQL/MySQL), focused on data integrity and performance."
                            />
                        </div>
                    </div>
                </section>

                {/* 4. WORKING STYLE */}
                <section className="py-24 px-6 border-t border-white/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <SectionHeader title="Methodology" subtitle="HOW I WORK" />

                        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-blue-400 font-mono mb-2">01.</div>
                                <h3 className="text-xl font-bold text-white mb-2">Function First</h3>
                                <p className="text-gray-400 text-sm">Utility and performance take precedence. A pretty button is useless if the API fails.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-blue-400 font-mono mb-2">02.</div>
                                <h3 className="text-xl font-bold text-white mb-2">Modular Code</h3>
                                <p className="text-gray-400 text-sm">Components are isolated, reusable, and easy to maintain for long-term scalability.</p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="text-blue-400 font-mono mb-2">03.</div>
                                <h3 className="text-xl font-bold text-white mb-2">Data Centric</h3>
                                <p className="text-gray-400 text-sm">Every decision is backed by data structure and flow efficiency.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 text-center border-t border-white/5 bg-gradient-to-b from-transparent to-blue-900/20">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to explore the system?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={onEnterDesktop}
                            className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl"
                        >
                            Initialize CahyadiOS
                        </button>

                    </div>
                    <p className="mt-6 text-gray-500 text-sm">
                        Experience the interactive desktop environment.
                    </p>
                </section>

                {/* Footer */}
                <div className="py-8 text-center text-gray-600 text-xs border-t border-white/5">
                    <p>© 2026 Cahyadi Prasetyo. Engineered with React & Bun.</p>
                </div>
            </div>

        </div>
    );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="text-center mb-12">
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-2 block">{subtitle}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>
    );
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
            <h4 className="text-white font-semibold mb-1">{title}</h4>
            <p className="text-gray-400 text-xs">{desc}</p>
        </div>
    );
}

function TechCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-6 bg-black/40 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group">
            <div className="mb-4 text-gray-400 group-hover:text-blue-400 transition-colors">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
