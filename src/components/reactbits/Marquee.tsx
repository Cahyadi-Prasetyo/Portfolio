import { motion } from "framer-motion";

export default function Marquee() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden select-none">
            <div className="flex whitespace-nowrap overflow-hidden relative">
                <motion.div
                    className="flex whitespace-nowrap text-8xl md:text-9xl font-black uppercase tracking-tighter"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    <span className="mr-12">React Next.js TypeScript Tailwind Framer Motion Three.js</span>
                    <span className="mr-12">React Next.js TypeScript Tailwind Framer Motion Three.js</span>
                    <span className="mr-12">React Next.js TypeScript Tailwind Framer Motion Three.js</span>
                    <span className="mr-12">React Next.js TypeScript Tailwind Framer Motion Three.js</span>
                </motion.div>
            </div>

            <div className="flex whitespace-nowrap overflow-hidden relative mt-8">
                <motion.div
                    className="flex whitespace-nowrap text-8xl md:text-9xl font-black uppercase tracking-tighter text-transparent stroke-white"
                    style={{ WebkitTextStroke: "2px white" }}
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    <span className="mr-12">Creative Developer UI/UX Design Frontend Engineer</span>
                    <span className="mr-12">Creative Developer UI/UX Design Frontend Engineer</span>
                    <span className="mr-12">Creative Developer UI/UX Design Frontend Engineer</span>
                    <span className="mr-12">Creative Developer UI/UX Design Frontend Engineer</span>
                </motion.div>
            </div>
        </section>
    );
}
