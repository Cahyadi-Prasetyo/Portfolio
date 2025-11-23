"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    text: string[];
    speed?: number;
    waitTime?: number;
    className?: string;
    cursorClassName?: string;
}

export default function Typewriter({
    text,
    speed = 100,
    waitTime = 2000,
    className = "",
    cursorClassName = "",
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentText = text[textIndex];

        const handleType = () => {
            if (!isDeleting) {
                if (currentIndex < currentText.length) {
                    setDisplayText((prev) => prev + currentText[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), waitTime);
                }
            } else {
                if (currentIndex > 0) {
                    setDisplayText((prev) => prev.slice(0, -1));
                    setCurrentIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timer = setTimeout(handleType, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, text, textIndex, speed, waitTime]);

    return (
        <span className={className}>
            {displayText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
}
