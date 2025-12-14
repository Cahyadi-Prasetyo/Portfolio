import { useState } from 'react';
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin, Copy, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';
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
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS not configured.');
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Cahyadi Prasetyo',
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

    const socialLinks = [
        { Icon: Github, href: "https://github.com/Cahyadi-Prasetyo", color: "hover:bg-[#181717] hover:text-white" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/cahyadi-prasetyo-924616290/", color: "hover:bg-[#0077B5] hover:text-white" },
        { Icon: Instagram, href: "https://www.instagram.com/cahyadi_p24/", color: "hover:bg-[#E1306C] hover:text-white" }
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background text-primary selection:bg-accent-blue selection:text-white">

            <div className="max-w-6xl mx-auto px-4 md:px-6">

                {/* HEADER */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-white px-4 py-1.5 rounded-full text-sm font-semibold text-accent-green shadow-sm mb-6 border border-green-100">
                        Let's Talk
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                        {t.contact.title}
                    </h1>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Left Column: Info Cards (Span 5) */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Email Card - Bento */}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={handleCopyEmail}
                            className="w-full text-left bg-surface p-8 rounded-bento shadow-bento hover:shadow-bento-hover transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h3 className="text-xs font-bold uppercase text-secondary tracking-widest mb-4">Email</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-xl md:text-2xl font-bold text-primary break-all">chdprasetyo@gmail.com</p>
                                    {copied ? <CheckCircle className="text-accent-green" /> : <Copy className="text-gray-300 group-hover:text-accent-blue transition-colors" />}
                                </div>
                                <p className="text-sm text-secondary mt-2 group-hover:text-accent-blue transition-colors">
                                    {copied ? "Copied to clipboard!" : "Click to copy"}
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                        </motion.button>

                        {/* Socials - Bento */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-surface p-8 rounded-bento shadow-bento flex flex-col justify-center"
                        >
                            <h3 className="text-xs font-bold uppercase text-secondary tracking-widest mb-6">Socials</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary transition-all duration-300 ${social.color}`}
                                    >
                                        <social.Icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Location - Bento */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-surface p-8 rounded-bento shadow-bento flex items-center gap-6"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                                <MapPin size={24} className="text-secondary" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase text-secondary tracking-widest mb-1">Office</h3>
                                <p className="text-lg font-bold text-primary">Bintan, Kepulauan Riau</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form (Span 7) */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-surface p-8 md:p-12 rounded-bento shadow-bento h-full"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold text-black ml-1">{t.contact.form.name}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all outline-none font-medium"
                                            placeholder={t.contact.form.namePlaceholder}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold text-black ml-1">{t.contact.form.email}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all outline-none font-medium"
                                            placeholder={t.contact.form.emailPlaceholder}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-black ml-1">{t.contact.form.message}</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all outline-none font-medium resize-none"
                                        placeholder={t.contact.form.messagePlaceholder}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <span>{t.contact.form.sending}</span>
                                    ) : status === 'success' ? (
                                        <>
                                            <CheckCircle size={20} />
                                            <span>{t.contact.form.sent}</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>{t.contact.form.send}</span>
                                            <ArrowRight size={20} />
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm text-center font-bold bg-red-50 p-3 rounded-lg border border-red-100">
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
