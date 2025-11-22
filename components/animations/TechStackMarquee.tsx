'use client'

import { InfiniteMarquee } from './InfiniteMarquee'

const techStack = {
    row1: [
        'Tailwind CSS',
        'Bootstrap',
        'Vue.js',
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Three.js',
    ],
    row2: [
        'PHP',
        'Laravel',
        'CodeIgniter 3',
        'CodeIgniter 4',
        'Firebase',
        'Node.js',
        'Python',
    ],
    row3: [
        'MySQL',
        'PostgreSQL',
        'Git',
        'Docker',
        'VS Code',
        'Figma',
        'Postman',
        'C/C++',
    ],
}

export function TechStackMarquee() {
    return (
        <section className="py-16 border-y border-slate-200 bg-slate-50/50">
            <div className="space-y-8">
                {/* Row 1 - Moving Right */}
                <InfiniteMarquee baseVelocity={1}>
                    {techStack.row1.map((tech, i) => (
                        <div
                            key={i}
                            className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm"
                        >
                            {tech}
                        </div>
                    ))}
                </InfiniteMarquee>

                {/* Row 2 - Moving Left */}
                <InfiniteMarquee baseVelocity={-1.2}>
                    {techStack.row2.map((tech, i) => (
                        <div
                            key={i}
                            className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm"
                        >
                            {tech}
                        </div>
                    ))}
                </InfiniteMarquee>

                {/* Row 3 - Moving Right */}
                <InfiniteMarquee baseVelocity={0.8}>
                    {techStack.row3.map((tech, i) => (
                        <div
                            key={i}
                            className="px-6 py-3 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 whitespace-nowrap shadow-sm"
                        >
                            {tech}
                        </div>
                    ))}
                </InfiniteMarquee>
            </div>
        </section>
    )
}
