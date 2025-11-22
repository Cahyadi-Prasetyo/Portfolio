'use client'

import { TypeAnimation } from 'react-type-animation'

export function TypewriterText() {
    return (
        <TypeAnimation
            sequence={[
                'Full-stack developer',
                1000,
                'Full-stack developer crafting exceptional',
                1000,
                'Full-stack developer crafting exceptional digital experiences with modern web technologies.',
                2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-slate-600 max-w-2xl"
            repeat={Infinity}
        />
    )
}
