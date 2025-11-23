"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
}

export default function DecryptedText({
    text,
    speed = 50,
    className = "",
    parentClassName = "",
    encryptedClassName = "",
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;

        clearInterval(intervalRef.current as NodeJS.Timeout);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                prev
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current as NodeJS.Timeout);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        scramble();
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, []);

    return (
        <span
            className={parentClassName}
            onMouseEnter={() => {
                setIsHovering(true);
                scramble();
            }}
            onMouseLeave={() => setIsHovering(false)}
        >
            <span className={className}>{displayText}</span>
        </span>
    );
}
