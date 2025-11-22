'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ScrollRevealProps {
    children: React.ReactNode
    delay?: number
    className?: string
}

export function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
