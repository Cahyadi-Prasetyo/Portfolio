'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface AnimatedCountProps {
    end: number
    suffix?: string
    duration?: number
}

export function AnimatedCount({ end, suffix = '', duration = 2 }: AnimatedCountProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <div ref={ref} className="text-4xl font-bold text-slate-900">
            {inView ? (
                <CountUp end={end} duration={duration} suffix={suffix} />
            ) : (
                <span>0{suffix}</span>
            )}
        </div>
    )
}
