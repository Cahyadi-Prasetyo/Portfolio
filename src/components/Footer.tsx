import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-xl font-bold font-display">Cahyadi Prasetyo.</h2>
                    <p className="text-gray-400 text-sm mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-colors text-white">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
