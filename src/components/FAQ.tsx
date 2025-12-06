import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Do you work with clients internationally?",
        answer: "Yes, I work with clients from all over the world. I am experienced in remote collaboration and use tools that make working across time zones seamless."
    },
    {
        question: "What technologies do you master?",
        answer: "I specialize in the modern JavaScript stack: React, Next.js, and TypeScript for frontend; Node.js and Supabase for backend; and tools like Tailwind CSS and Framer Motion for styling and animation."
    },
    {
        question: "What services do you offer?",
        answer: "I offer a wide range of digital services including web design, full-stack web application development, performance optimization, and UI/UX consultancy."
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take 2-3 months."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-3xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Any questions?</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-0 pb-4">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex justify-between items-center w-full text-left py-4 focus:outline-none group"
                        >
                            <h3 className="text-lg md:text-xl font-medium group-hover:text-gray-600 transition-colors">
                                {faq.question}
                            </h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="text-gray-400" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pb-6 text-gray-500 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
