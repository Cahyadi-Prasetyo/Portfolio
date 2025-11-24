'use client'

import { useState } from 'react'
import { Send, CheckCircle, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import Lanyard from '@/components/Lanyard'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const supabase = createClient()
            const { error } = await supabase
                .from('messages')
                .insert([formData])

            if (error) throw error

            setStatus('success')
            setFormData({ name: '', email: '', message: '' })

            setTimeout(() => setStatus('idle'), 3000)
        } catch (error) {
            console.error('Error sending message:', error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 3000)
        }
    }

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
                {/* Header */}
                <div className="mb-32">
                    <span className="text-sm font-medium text-gray-400 tracking-widest mb-6 block">
                        LET'S CONNECT
                    </span>
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 tracking-tight mb-12 leading-none">
                        Get in Touch
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-4xl leading-relaxed">
                        Have a project in mind or just want to say hi? Feel free to drop me a message.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-4">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-gray-900 focus:outline-none focus:bg-white transition-colors text-lg"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-4">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-gray-900 focus:outline-none focus:bg-white transition-colors text-lg"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-4">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={8}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-gray-900 focus:outline-none focus:bg-white transition-colors resize-none text-lg"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full px-10 py-6 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 text-xl font-semibold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
                            >
                                {status === 'loading' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={24} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={24} />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className="text-red-600 text-center text-lg">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Sidebar with Lanyard */}
                    <div className="lg:col-span-2 lg:sticky lg:top-32 space-y-6">
                        {/* Discord Status - Lanyard Component */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Discord Status
                            </h3>
                            {/* Replace 'YOUR_DISCORD_USER_ID' with your actual Discord user ID */}
                            <Lanyard userId="YOUR_DISCORD_USER_ID" />
                        </div>

                        {/* Contact Methods */}
                        <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Other Ways to Reach Me
                            </h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:cahyadiprasetyo@example.com"
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-gray-100 transition-colors group border border-gray-200"
                                >
                                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                                        <Mail className="text-gray-900" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1 font-medium">Email</div>
                                        <div className="font-semibold text-gray-900 text-sm">
                                            cahyadiprasetyo@example.com
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/Cahyadi-Prasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-gray-100 transition-colors group border border-gray-200"
                                >
                                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                                        <Github className="text-gray-900" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1 font-medium">GitHub</div>
                                        <div className="font-semibold text-gray-900 text-sm">
                                            @Cahyadi-Prasetyo
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="https://linkedin.com/in/cahyadi-prasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:bg-gray-100 transition-colors group border border-gray-200"
                                >
                                    <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                                        <Linkedin className="text-gray-900" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1 font-medium">LinkedIn</div>
                                        <div className="font-semibold text-gray-900 text-sm">
                                            Cahyadi Prasetyo
                                        </div>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200">
                                    <div className="p-3 bg-gray-100 rounded-xl">
                                        <MapPin className="text-gray-900" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 mb-1 font-medium">Location</div>
                                        <div className="font-semibold text-gray-900 text-sm">
                                            Bintan, Indonesia
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
