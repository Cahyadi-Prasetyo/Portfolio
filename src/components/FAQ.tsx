import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto w-full px-6">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-10">
                {t.faq.title}
            </h2>

            {/* FAQ Items */}
            <div className="border-b border-gray-300">
                {t.faq.questions.map((faq, index) => (
                    <div key={index} className="border-t border-gray-300">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex justify-between items-center w-full text-left py-7 focus:outline-none group"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold  transition-colors pr-8">
                                {faq.question}
                            </h3>
                            <div className="flex-shrink-0">
                                {openIndex === index ? (
                                    <Minus className="text-black w-7 h-7" strokeWidth={1.5} />
                                ) : (
                                    <Plus className="text-black w-7 h-7" strokeWidth={1.5} />
                                )}
                            </div>
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
                                    <p className="pb-7 text-black text-lg md:text-xl leading-relaxed max-w-4xl">
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
