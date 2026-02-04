import { MapPin, Calendar, Terminal, Briefcase, User } from "lucide-react";

export default function AboutApp() {
    return (
        <div className="h-full p-8 text-white select-none overflow-y-auto custom-scrollbar">

            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1 mb-4 shadow-xl shadow-blue-500/20 overflow-hidden">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden relative">
                        <img src="/assets/my-self.png" alt="Cahyadi Prasetyo" className="w-full h-full object-cover object-top scale-150 translate-y-2" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Cahyadi Prasetyo</h2>
                <div className="text-blue-400 font-mono text-xs tracking-widest mt-1">FULL STACK ENGINEER</div>
            </div>

            <div className="space-y-6 max-w-sm mx-auto">

                {/* Bio */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                        "Engineering scalable solutions with a focus on backend architecture and interactive data visualization."
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3">
                        <MapPin size={18} className="text-red-400" />
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Location</div>
                            <div className="text-sm font-medium">Indonesia</div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3">
                        <Calendar size={18} className="text-yellow-400" />
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Experience</div>
                            <div className="text-sm font-medium">4+ Years</div>
                        </div>
                    </div>
                </div>

                {/* Details list */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Terminal size={16} className="text-green-400" />
                        <span>System Architecture & API Design</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Briefcase size={16} className="text-purple-400" />
                        <span>Open for Opportunities</span>
                    </div>
                </div>

                {/* Tagline */}
                <div className="pt-6 border-t border-white/10 text-center">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono border border-blue-500/20">
                        STATUS: ONLINE
                    </div>
                </div>

            </div>
        </div>
    );
}
