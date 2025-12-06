import { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../../utils/supabase/client';
import Lanyard from '../components/reactbits/Lanyard';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const { t } = useLanguage();

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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 block">{t.contact.label}</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter font-display">{t.contact.title}</h1>
                        <p className="text-xl text-gray-500 max-w-lg mb-12">
                            {t.contact.subtitle}
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            href="mailto:chdprasetyo@gmail.com"
                            className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors"
                        >
                            <Mail className="text-gray-900" size={24} />
                            <div>
                                <h3 className="font-bold text-gray-900">{t.contact.email}</h3>
                                <p className="text-gray-500">chdprasetyo@gmail.com</p>
                            </div>
                        </motion.a>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                                <Github size={24} />
                                <span className="font-bold">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/cahyadi-prasetyo-924616290/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-gray-100 transition-colors">
                                <Linkedin size={24} />
                                <span className="font-bold">LinkedIn</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100"
                        >
                            <MapPin className="text-gray-400" size={24} />
                            <p className="text-gray-500 font-medium">Bintan, Kepulauan Riau, Indonesia</p>
                        </motion.div>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onSubmit={handleSubmit}
                        className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200"
                    >
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">{t.contact.form.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                    placeholder={t.contact.form.namePlaceholder}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">{t.contact.form.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                    placeholder={t.contact.form.emailPlaceholder}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">{t.contact.form.message}</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                                    placeholder={t.contact.form.messagePlaceholder}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === 'loading' ? t.contact.form.sending : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} /> {t.contact.form.sent}
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} /> {t.contact.form.send}
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">{t.contact.form.error}</p>
                            )}
                        </div>
                    </motion.form>
                </div>

                {/* Lanyard Sidebar - NOW WITH LARGER DISPLAY */}
                <div className="hidden lg:block">
                    <div className="sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="rounded-2xl overflow-hidden bg-gray-50/30"
                        >
                            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
}
