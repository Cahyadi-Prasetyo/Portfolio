import { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { supabase } from '../../utils/supabase/client';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import Lanyard from '../components/reactbits/Lanyard';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const { error } = await supabase
                .from('messages')
                .insert([formData]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="pt-32 pb-20 px-6 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,1fr,420px] gap-12">

                {/* Contact Info */}
                <div>
                    <ScrollReveal>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 block">Let's Connect</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Get in Touch.</h1>
                        <p className="text-xl text-gray-500 max-w-lg mb-12">
                            Have a project in mind or just want to say hi? Feel free to drop me a message.
                        </p>
                    </ScrollReveal>

                    <div className="space-y-6">
                        <ScrollReveal delay={0.2}>
                            <a href="mailto:contact@example.com" className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                                <Mail className="text-gray-900" size={24} />
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-500">contact@example.com</p>
                                </div>
                            </a>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="flex gap-4">
                                <a href="#" className="flex-1 flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <Github size={24} />
                                    <span className="font-bold">GitHub</span>
                                </a>
                                <a href="#" className="flex-1 flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                                    <Linkedin size={24} />
                                    <span className="font-bold">LinkedIn</span>
                                </a>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100">
                                <MapPin className="text-gray-400" size={24} />
                                <p className="text-gray-500 font-medium">Bintan, Indonesia</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <ScrollReveal delay={0.3}>
                        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? (
                                        <>
                                            <CheckCircle size={20} /> Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} /> Send Message
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                                )}
                            </div>
                        </form>
                    </ScrollReveal>
                </div>

                {/* Lanyard Sidebar - NOW WITH LARGER DISPLAY */}
                <div className="hidden lg:block">
                    <div className="sticky top-24">
                        <ScrollReveal delay={0.5}>
                            <div className="rounded-2xl overflow-hidden bg-gray-50/30">
                                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

            </div>
        </div>
    );
}
