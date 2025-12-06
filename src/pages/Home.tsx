import { motion } from 'framer-motion';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// import TypingText from '../components/reactbits/TypingText'; // Replaced by TextType
import TextType from '../components/reactbits/TextType';
import ScrollReveal from '../components/reactbits/ScrollReveal';
// import Marquee from '../components/reactbits/Marquee'; // Replaced by ScrollVelocity
import ScrollVelocity from '../components/reactbits/ScrollVelocity';
import RotatingText from '../components/reactbits/RotatingText';
import FAQ from '../components/FAQ';
import Lanyard from '../components/reactbits/Lanyard';

export default function Home() {
    const projects = [
        { id: "001", name: "E-Commerce Platform", category: "Web Development", image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "002", name: "Finance Dashboard", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "003", name: "Social Media App", category: "Mobile App", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { id: "004", name: "AI Portfolio", category: "Creative Dev", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <div className="bg-white min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-20">
                <div className="max-w-[90%] mx-auto w-full">
                    <div className="flex flex-col gap-0 select-none">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-black"
                        >
                            CAHYADI
                        </motion.h1>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="mt-8 md:mt-2 max-w-md"
                            >
                                <div className="text-xl md:text-2xl text-gray-500 font-medium leading-tight mb-4 flex flex-wrap gap-2 items-center">
                                    I am a
                                    <RotatingText
                                        texts={['Frontend Developer', 'UI/UX Designer', 'Creative Coder']}
                                        mainClassName="px-2 bg-black text-white overflow-hidden py-0.5 justify-center rounded-lg inline-flex"
                                        staggerFrom="last"
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        exit={{ y: "-120%" }}
                                        staggerDuration={0.025}
                                        splitLevelClassName="overflow-hidden pb-0.5"
                                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                        rotationInterval={2000}
                                    />
                                </div>

                                <TextType
                                    text={["Crafting digital experiences that matter.", "Building robust web applications."]}
                                    typingSpeed={50}
                                    deletingSpeed={30}
                                    pauseDuration={2000}
                                    className="text-lg text-gray-600 mb-8 block h-16"
                                    cursorClassName="bg-black w-2 h-6 inline-block"
                                />

                                <div className="mt-8 flex gap-4">
                                    <Link to="/contact" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                                        Start a Project <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[12vw] leading-[0.85] font-black tracking-tighter text-right text-black mt-4 md:mt-0"
                            >
                                PRASETYO
                            </motion.h1>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="absolute bottom-12 left-6 hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400"
                    >
                        <ArrowDownLeft size={20} />
                        Scroll Down
                    </motion.div>
                </div>
            </section>

            {/* 2. TECH STACK MARQUEE */}
            <section className="py-20 bg-black text-white">
                <ScrollVelocity
                    texts={['React Next.js TypeScript Tailwind Framer Motion Three.js', 'Creative Developer UI/UX Design Frontend Engineer']}
                    velocity={100}
                    className="text-white hover:text-white/80 transition-colors"
                />
            </section>

            {/* 3. WHO AM I + LANYARD */}
            <section className="py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <ScrollReveal baseOpacity={0} enableBlur={true} baseRotation={5} blurStrength={10}>
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Who Am I?</h2>
                            <p className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                                I'm a passionate developer based in Indonesia, focused on creating interactive experiences and distinct digital products.
                            </p>
                            <p className="text-xl text-gray-500 leading-relaxed mb-12">
                                With a background in generic design and coding, I love to bridge the gap between creative visuals and robust engineering.
                            </p>
                        </ScrollReveal>
                        <Link to="/about" className="text-xl font-bold underline decoration-2 underline-offset-4 hover:text-gray-600 transition-colors">
                            More about me
                        </Link>
                    </div>

                    <div className="h-[600px] w-full relative bg-gray-50 rounded-3xl">
                        <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                    </div>
                </div>
            </section>

            {/* 4. SELECTED PROJECTS */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold"
                        >
                            Selected<br />Projects.
                        </motion.h2>
                        <Link to="/projects" className="hidden md:flex items-center gap-2 font-bold hover:text-gray-600 transition-colors">
                            View All <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-20">
                        {projects.map((project, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="group cursor-pointer">
                                        <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="flex justify-between items-start border-b border-gray-200 pb-6 group-hover:border-black transition-colors duration-300">
                                            <div>
                                                <span className="text-sm font-bold text-gray-400 mb-2 block">DEV.{project.id}</span>
                                                <h3 className="text-2xl font-bold">{project.name}</h3>
                                            </div>
                                            <span className="text-gray-500 font-medium">{project.category}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/projects" className="inline-flex items-center gap-2 font-bold hover:text-gray-600 transition-colors">
                            View All Projects <ArrowUpRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. FAQ SECTION */}
            <section className="py-32 px-6">
                <FAQ />
            </section>

        </div>
    );
}
