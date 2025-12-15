import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    scrollContainerRef,
    enableBlur = false, // Disabled by default for performance
    baseOpacity = 0.1,
    baseRotation = 3,
    blurStrength = 4,
    containerClassName = '',
    textClassName = '',
    rotationEnd = 'bottom bottom',
    wordAnimationEnd = 'bottom bottom'
}) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const triggersRef = useRef<ScrollTrigger[]>([]);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span className="inline-block word" key={index}>
                    {word}
                </span>
            );
        });
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        const wordElements = el.querySelectorAll<HTMLElement>('.word');

        // Create a single timeline for better performance
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scroller,
                start: 'top bottom-=20%',
                end: wordAnimationEnd,
                scrub: 0.5, // Smoother scrub
                fastScrollEnd: true, // Performance optimization
            }
        });

        // Batch animations together
        tl.fromTo(el,
            { transformOrigin: '0% 50%', rotate: baseRotation },
            { rotate: 0, ease: 'none' },
            0
        );

        tl.fromTo(wordElements,
            { opacity: baseOpacity },
            { opacity: 1, stagger: 0.02, ease: 'none' }, // Reduced stagger
            0
        );

        // Only add blur if explicitly enabled (expensive operation)
        if (enableBlur) {
            tl.fromTo(wordElements,
                { filter: `blur(${blurStrength}px)` },
                { filter: 'blur(0px)', stagger: 0.02, ease: 'none' },
                0
            );
        }

        if (tl.scrollTrigger) {
            triggersRef.current.push(tl.scrollTrigger);
        }

        return () => {
            // Clean up only our triggers, not all triggers
            triggersRef.current.forEach(trigger => trigger.kill());
            triggersRef.current = [];
            tl.kill();
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

    return (
        <h2 ref={containerRef} className={`my-5 ${containerClassName}`} style={{ willChange: 'transform' }}>
            <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`}>{splitText}</p>
        </h2>
    );
};

export default ScrollReveal;
