import { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin, Copy, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
import Magnet from '../components/reactbits/Magnet';
import TextType from '../components/reactbits/TextType';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [copied, setCopied] = useState(false);
    const { t } = useLanguage();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // EmailJS configuration from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS not configured. Please check your .env file.');
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Cahyadi Prasetyo', // Your name
                },
                publicKey
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('chdprasetyo@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-[#fafafa] relative overflow-hidden">
            {/* Background Grid (Consistent with Home) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section */}
                <div className="mb-20 border-b border-black pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm font-bold text-gray-500 tracking-[0.2em] uppercase mb-4 block">
                            {t.contact.label}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight text-black mb-6">
                            {t.contact.title}
                        </h1>
                        <div className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                            <TextType
                                text={[t.contact.subtitle]}
                                typingSpeed={30}
                                showCursor={true}
                                cursorClassName="bg-black w-3 h-8 ml-1"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="group"
                        >
                            <h3 className="text-lg font-bold text-gray-400 mb-4 uppercase tracking-widest">{t.contact.email}</h3>
                            <button
                                onClick={handleCopyEmail}
                                className="w-full text-left p-8 bg-white border border-black rounded-2xl relative overflow-hidden group-hover:bg-black group-hover:text-white transition-all duration-500"
                            >
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <p className="text-sm font-mono opacity-60 mb-2">MAIL TO</p>
                                        <p className="text-xl md:text-2xl font-bold break-all">chdprasetyo@gmail.com</p>
                                    </div>
                                    {copied ? <CheckCircle size={24} className="text-green-500" /> : <Copy size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </div>
                            </button>
                        </motion.div>

                        {/* Socials */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <h3 className="text-lg font-bold text-gray-400 mb-6 uppercase tracking-widest">SOCIALS</h3>
                            <div className="flex flex-wrap gap-4">
                                <Magnet padding={50} magnetStrength={5}>
                                    <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                                        <Github size={24} />
                                    </a>
                                </Magnet>
                                <Magnet padding={50} magnetStrength={5}>
                                    <a href="https://www.linkedin.com/in/cahyadi-prasetyo-924616290/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                                        <Linkedin size={24} />
                                    </a>
                                </Magnet>
                                <Magnet padding={50} magnetStrength={5}>
                                    <a href="https://www.instagram.com/cahyadi_p24/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300">
                                        <Instagram size={24} />
                                    </a>
                                </Magnet>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex items-center gap-4 text-gray-600"
                        >
                            <MapPin size={24} />
                            <span className="text-lg font-medium">Bintan, Kepulauan Riau, Indonesia</span>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="bg-white p-8 md:p-12 rounded-[2rem] border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full h-16 px-0 bg-transparent border-b-2 border-gray-200 text-xl font-medium focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                                            placeholder={t.contact.form.namePlaceholder}
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-bold uppercase tracking-wider"
                                        >
                                            {t.contact.form.name}
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full h-16 px-0 bg-transparent border-b-2 border-gray-200 text-xl font-medium focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
                                            placeholder={t.contact.form.emailPlaceholder}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-bold uppercase tracking-wider"
                                        >
                                            {t.contact.form.email}
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full p-0 py-4 bg-transparent border-b-2 border-gray-200 text-xl font-medium focus:outline-none focus:border-black transition-colors peer placeholder-transparent resize-none"
                                            placeholder={t.contact.form.messagePlaceholder}
                                        />
                                        <label
                                            htmlFor="message"
                                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-bold uppercase tracking-wider"
                                        >
                                            {t.contact.form.message}
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full py-6 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-3 disabled:opacity-70 group"
                                    >
                                        {status === 'loading' ? (
                                            <span>{t.contact.form.sending}</span>
                                        ) : status === 'success' ? (
                                            <>
                                                <CheckCircle size={24} className="text-green-400" />
                                                <span>{t.contact.form.sent}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{t.contact.form.send}</span>
                                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm text-center font-bold tracking-wide animate-pulse">
                                        {t.contact.form.error}
                                    </p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
