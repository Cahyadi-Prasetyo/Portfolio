export default function AboutApp() {
    return (
        <div className="p-6 h-full flex flex-col items-center text-center overflow-y-auto">
            <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 overflow-hidden border-2 border-white/20">
                <img
                    src="/assets/my-self.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Cahyadi+Prasetyo&background=random";
                    }}
                />
            </div>

            <h2 className="text-3xl font-bold mb-2">Cahyadi Prasetyo</h2>
            <p className="text-blue-400 font-mono text-sm mb-6">@FullStackDev</p>

            <div className="text-left w-full space-y-4 text-gray-300">
                <p>
                    Hello! I'm a passionate Full Stack Developer who loves building interactive web experiences.
                    This portfolio is a showcase of my ability to create complex UI systems like this Operating System simulation.
                </p>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Tailwind', 'Laravel', 'Node.js', 'PostgreSQL'].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs hover:bg-white/20 transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Contact</h3>
                    <ul className="text-sm space-y-1">
                        <li>📧 chdprasetyo@gmail.com</li>
                        <li>📍 Riau Islands, Indonesia</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
