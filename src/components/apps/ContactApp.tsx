import { Mail, Github, Linkedin, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ContactApp() {
    const [copied, setCopied] = useState(false);
    const email = "cahyadiprasetyo@example.com"; // Replace with actual email

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-full w-full p-8 pt-16 flex flex-col items-center justify-start text-white select-none overflow-y-auto custom-scrollbar">

            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                    <Mail size={32} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                    Open for collaboration, full-time opportunities, or just a tech chat.
                </p>
            </div>

            {/* Email Action */}
            <div className="w-full max-w-sm bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center justify-between group hover:bg-white/10 transition-colors cursor-pointer"
                onClick={handleCopy}
            >
                <div>
                    <span className="text-xs text-gray-500 block mb-1 uppercase tracking-wider">Email Address</span>
                    <span className="text-sm font-mono text-white">{email}</span>
                </div>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/20 transition-colors">
                    {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400" />}
                </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 w-full max-w-sm">
                <a href="https://github.com/cahyadi-prasetyo" target="_blank" rel="noopener noreferrer"
                    className="flex-1 p-3 bg-gray-900 border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm font-medium">
                    <Github size={18} />
                    GitHub
                </a>
                <a href="https://linkedin.com/in/cahyadiprasetyo" target="_blank" rel="noopener noreferrer"
                    className="flex-1 p-3 bg-[#0A66C2] border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform text-sm font-medium">
                    <Linkedin size={18} />
                    LinkedIn
                </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 w-full max-w-sm text-center pb-8">
                <p className="text-xs text-gray-500 mb-4">Or send a direct message</p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Subject" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500/50 transition-colors" />
                    <textarea placeholder="Message..." rows={3} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-orange-500/50 transition-colors resize-none"></textarea>
                    <button className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        <Send size={16} />
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
}
