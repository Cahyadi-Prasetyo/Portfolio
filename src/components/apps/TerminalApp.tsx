import { useState, useEffect, useRef } from "react";

export default function TerminalApp() {
    const [history, setHistory] = useState<string[]>([
        "Welcome to Cahyadi Term v1.0.0",
        "Type 'help' to see available commands."
    ]);
    const [input, setInput] = useState("");
    const endRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newLines = [`➜ ~ ${input}`];

            if (cmd === 'help') {
                newLines.push("Available commands:", "  help     - Show this menu", "  about    - Who is this guy?", "  clear    - Clear screen", "  skills   - List technical skills");
            } else if (cmd === 'clear') {
                setHistory([]);
                setInput("");
                return;
            } else if (cmd === 'about') {
                newLines.push("Cahyadi Prasetyo | Full Stack Dev", "Loves building things with code.");
            } else if (cmd === 'skills') {
                newLines.push("React, Laravel, Node.js, TypeScript, Docker");
            } else if (cmd === '') {
                // do nothing
            } else {
                newLines.push(`command not found: ${cmd}`);
            }

            setHistory(prev => [...prev, ...newLines]);
            setInput("");
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
