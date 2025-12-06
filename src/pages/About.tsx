import { Briefcase, GraduationCap } from 'lucide-react';
import ScrollReveal from '../components/reactbits/ScrollReveal';

export default function About() {
    const experience = [
        { year: "2023 - Present", role: "Senior Frontend Developer", company: "Tech Corp", desc: "Leading the frontend team..." },
        { year: "2021 - 2023", role: "Full Stack Developer", company: "Startup Inc", desc: "Building scalable web apps..." },
    ];

    const education = [
        { year: "2017 - 2021", role: "B.S. Computer Science", company: "University of Technology", desc: "Major in Software Engineering" },
    ];

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
            {/* Removed sidebar - Lanyard moved to Contact page */}
            <div className="max-w-5xl mx-auto">
                <ScrollReveal>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Who Am I?</h1>
                    <div className="prose prose-lg text-gray-600 mb-16">
                        <p>
                            I'm a passionate developer based in Indonesia, focused on creating interactive experiences and distinct digital products.
                            With a background in generic design and coding, I love to bridge the gap between creative visuals and robust engineering.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or gaming.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Experience */}
                <ScrollReveal delay={0.2}>
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gray-100 rounded-xl"><Briefcase size={24} /></div>
                            <h2 className="text-2xl font-bold">Experience</h2>
                        </div>
                        <div className="space-y-12 border-l-2 border-gray-100 pl-8 ml-4">
                            {experience.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-gray-200 rounded-full" />
                                    <span className="text-sm text-gray-400 font-mono mb-1 block">{item.year}</span>
                                    <h3 className="text-xl font-bold">{item.role}</h3>
                                    <div className="text-gray-500 font-medium mb-2">{item.company}</div>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Education */}
                <ScrollReveal delay={0.3}>
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-gray-100 rounded-xl"><GraduationCap size={24} /></div>
                            <h2 className="text-2xl font-bold">Education</h2>
                        </div>
                        <div className="space-y-12 border-l-2 border-gray-100 pl-8 ml-4">
                            {education.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-gray-200 rounded-full" />
                                    <span className="text-sm text-gray-400 font-mono mb-1 block">{item.year}</span>
                                    <h3 className="text-xl font-bold">{item.role}</h3>
                                    <div className="text-gray-500 font-medium mb-2">{item.company}</div>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
