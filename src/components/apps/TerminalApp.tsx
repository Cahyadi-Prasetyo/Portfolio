import { useState, useEffect, useRef } from "react";

export default function TerminalApp() {
    const [history, setHistory] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const endRef = useRef<HTMLDivElement>(null);

    // Initial greeting with typing effect
    useEffect(() => {
        const greeting = [
            "Welcome to Cahyadi Term v1.0.0",
            "Type 'help' to see available commands."
        ];

        let lineIndex = 0;
        let charIndex = 0;
        let currentHistory: string[] = [];

        const typeLine = () => {
            if (lineIndex < greeting.length) {
                if (charIndex < greeting[lineIndex].length) {
                    // This logic is a bit complex for a simple state update in React, 
                    // simplifying to just showing lines one by one for stability
                    setHistory(prev => {
                        const newHistory = [...prev];
                        if (newHistory.length <= lineIndex) {
                            newHistory.push(greeting[lineIndex][charIndex]);
                        } else {
                            newHistory[lineIndex] += greeting[lineIndex][charIndex];
                        }
                        return newHistory;
                    });
                    charIndex++;
                    setTimeout(typeLine, 30);
                } else {
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeLine, 100);
                }
            }
        };

        // Simpler approach: Show lines with delay
        setTimeout(() => setHistory(["Welcome to Cahyadi Term v1.0.0"]), 100);
        setTimeout(() => setHistory(prev => [...prev, "Type 'help' to see available commands."]), 800);

    }, []);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newLines = [`➜ ~ ${input}`]; // Command line immediately

            setHistory(prev => [...prev, ...newLines]);
            setInput("");

            // Process response
            let responseLines: string[] = [];
            if (cmd === 'help') {
                responseLines = ["Available commands:", "  help     - Show this menu", "  about    - Who is this guy?", "  clear    - Clear screen", "  skills   - List technical skills"];
            } else if (cmd === 'clear') {
                setHistory([]);
                return;
            } else if (cmd === 'about') {
                responseLines = ["Cahyadi Prasetyo | Full Stack Dev", "Loves building things with code."];
            } else if (cmd === 'skills') {
                responseLines = ["React, Laravel, Node.js, TypeScript, Docker"];
            } else if (cmd === '') {
                // do nothing
            } else {
                responseLines = [`command not found: ${cmd}`];
            }

            // Simulate processing delay
            if (responseLines.length > 0) {
                setIsTyping(true);
                setTimeout(() => {
                    setHistory(prev => [...prev, ...responseLines]);
                    setIsTyping(false);
                }, 300);
            }
        }
    };

    return (
        <div className="p-4 h-full bg-gray-950/50 font-mono text-sm text-gray-300 overflow-y-auto" onClick={() => document.getElementById('term-input')?.focus()}>
            <div className="space-y-1">
                {history.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap leading-relaxed">{line}</div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
                <span className="text-green-400">➜ ~</span>
                <input
                    id="term-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent outline-none flex-1 text-white"
                    autoFocus
                    autoComplete="off"
                />
            </div>
            <div ref={endRef} />
        </div>
    );
}
