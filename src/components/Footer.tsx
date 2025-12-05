import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h2 className="text-xl font-bold">Cahyadi Prasetyo.</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
