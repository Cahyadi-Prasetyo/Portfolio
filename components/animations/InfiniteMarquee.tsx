'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface InfiniteMarqueeProps {
    children: React.ReactNode
    baseVelocity?: number
    className?: string
}

export function InfiniteMarquee({
    children,
    baseVelocity = 1,
    className = ''
}: InfiniteMarqueeProps) {
    const marqueeRef = useRef<HTMLDivElement>(null)
    const marqueeContentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const marqueeContent = marqueeContentRef.current
        if (!marqueeContent) return

        // Clone content for infinite loop
        const clone = marqueeContent.cloneNode(true) as HTMLDivElement
        marqueeRef.current?.appendChild(clone)
    }, [])

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                ref={marqueeRef}
                className="flex gap-8"
                animate={{
                    x: [0, -1920],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40 / baseVelocity,
                        ease: "linear",
                    },
                }}
            >
                <div ref={marqueeContentRef} className="flex gap-8 shrink-0">
                    {children}
                </div>
            </motion.div>
        </div>
    )
}
