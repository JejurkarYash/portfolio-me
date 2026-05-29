"use client";

import React from 'react';
import { AnimatedLink } from './AnimatedLink';
import { motion } from 'framer-motion';

/* ─── Inline SVG brand icons ──────────────────────────── */
const icons: Record<string, React.ReactNode> = {
    TypeScript: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#3178C6">
            <rect width="24" height="24" rx="3" fill="#3178C6" />
            <path d="M13.5 14.5v1.9c.3.2.7.3 1.1.4.4.1.9.1 1.3.1.4 0 .9 0 1.3-.1.4-.1.8-.3 1.1-.5.3-.2.6-.5.8-.9.2-.4.3-.8.3-1.3 0-.4-.1-.7-.2-1-.1-.3-.3-.5-.5-.7-.2-.2-.5-.4-.8-.5-.3-.1-.6-.3-.9-.4l-.8-.3c-.2-.1-.4-.2-.6-.3-.2-.1-.3-.2-.4-.3-.1-.1-.1-.3-.1-.4 0-.1 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.3-.1.4-.2.2 0 .3-.1.5-.1.4 0 .7 0 1 .1.3.1.6.2.9.4v-1.8c-.3-.1-.6-.2-.9-.2-.3-.1-.7-.1-1-.1-.4 0-.9 0-1.3.1-.4.1-.8.3-1.1.5-.3.2-.6.5-.8.9-.2.4-.3.8-.3 1.3 0 .6.2 1.2.5 1.6.3.4.9.8 1.6 1.1l.8.3c.3.1.5.2.7.3.2.1.3.2.4.4.1.1.1.3.1.4 0 .2 0 .3-.1.4-.1.1-.2.2-.3.3-.1.1-.3.1-.5.2-.2 0-.4.1-.6.1-.4 0-.8-.1-1.1-.2-.4-.2-.7-.4-1-.6zM9.5 11H12v-1.5H5v1.5h2.5V18H9.5V11z" fill="white" />
        </svg>
    ),
    JavaScript: (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F7DF1E">
            <rect width="24" height="24" rx="3" fill="#F7DF1E" />
            <path d="M7.5 17.5c.3.5.8.9 1.7.9.9 0 1.5-.5 1.5-1.1 0-.8-.6-1-1.5-1.5l-.5-.2c-1.5-.6-2.4-1.4-2.4-3 0-1.5 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.8 1.5l-1.5 1c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.2 1.2l.5.2c1.7.7 2.7 1.5 2.7 3.1 0 1.8-1.4 2.8-3.3 2.8-1.8 0-3-.9-3.6-2.1l1.8-1zm7 .3c.3.5.6.9 1.2.9.6 0 .9-.3.9-1.3V11h2v6.5c0 2.1-1.2 3.1-3 3.1-1.6 0-2.5-.9-2.9-1.9l1.8-1z" />
        </svg>
    ),
    Go: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#00ADD8" />
            <text x="3" y="17" fontSize="11" fontWeight="bold" fill="white" fontFamily="monospace">Go</text>
        </svg>
    ),
    HTML: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#E34F26" />
            <text x="3.5" y="16.5" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">HTML</text>
        </svg>
    ),
    CSS: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#1572B6" />
            <text x="5" y="16.5" fontSize="9" fontWeight="bold" fill="white" fontFamily="monospace">CSS</text>
        </svg>
    ),
    "Next.js": (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#000" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5V8l7 8.5H11z" fill="white" />
        </svg>
    ),
    React: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#20232a" />
            <circle cx="12" cy="12" r="2" fill="#61DAFB" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
    ),
    "Tailwind CSS": (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#0EA5E9" />
            <path d="M12 6c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.17-1.86 3.5-1.54.76.19 1.31.74 1.91 1.35.98 1 2.11 2.14 4.59 2.14 2.7 0 4.4-1.35 5-4.05-1 1.35-2.17 1.86-3.5 1.54-.76-.19-1.31-.74-1.91-1.35C15.61 7.14 14.48 6 12 6zm-5 6c-2.7 0-4.4 1.35-5 4.05 1-1.35 2.17-1.86 3.5-1.54.76.19 1.31.74 1.91 1.35.98 1 2.11 2.14 4.59 2.14 2.7 0 4.4-1.35 5-4.05-1 1.35-2.17 1.86-3.5 1.54-.76-.19-1.31-.74-1.91-1.35C10.61 13.14 9.48 12 7 12z" fill="white" />
        </svg>
    ),
    "Framer Motion": (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#0055FF" />
            <path d="M5 5h14v7h-7zM5 12h7l7 7H5z" fill="white" />
        </svg>
    ),
    "Node.js": (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#339933" />
            <text x="2" y="16" fontSize="8" fontWeight="bold" fill="white" fontFamily="monospace">node</text>
        </svg>
    ),
    Express: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#333" />
            <text x="2" y="16" fontSize="7.5" fontWeight="bold" fill="white" fontFamily="monospace">expr</text>
        </svg>
    ),
    "REST APIs": (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#6366f1" />
            <text x="2.5" y="15.5" fontSize="7" fontWeight="bold" fill="white" fontFamily="monospace">REST</text>
        </svg>
    ),
    WebSockets: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#8b5cf6" />
            <path d="M8 12c0-2.2 1.8-4 4-4V5L19 9l-7 4v-3c-1.1 0-2 .9-2 2s.9 2 2 2v3c-2.2 0-4-1.8-4-4z" fill="white" />
        </svg>
    ),
    PostgreSQL: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#336791" />
            <text x="3" y="16" fontSize="8.5" fontWeight="bold" fill="white" fontFamily="monospace">PG</text>
        </svg>
    ),
    MongoDB: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#001e2b" />
            <path d="M12 3c0 0-4 5.3-4 9.5C8 16.7 9.8 19 12 19s4-2.3 4-6.5C16 8.3 12 3 12 3z" fill="#00ED64" />
            <rect x="11.5" y="18" width="1" height="4" fill="#00ED64" />
        </svg>
    ),
    Redis: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#DC382D" />
            <text x="2.5" y="16" fontSize="8" fontWeight="bold" fill="white" fontFamily="monospace">redis</text>
        </svg>
    ),
    "Prisma ORM": (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#2D3748" />
            <path d="M4 19L12 3l4 16-12-5z" fill="white" fillOpacity=".8" />
        </svg>
    ),
    Git: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#F05032" />
            <path d="M21.6 11.2l-8.8-8.8c-.4-.4-1.1-.4-1.6 0L9.4 4.2l2 2c.5-.2 1-.1 1.4.3.4.4.5.9.3 1.4l1.9 1.9c.5-.2 1-.1 1.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.3-1.5L12 8.8v5.1c.1.1.3.2.4.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.1-.1.3-.2.4-.3V8.7c-.1-.1-.3-.2-.4-.3-.4-.4-.5-1-.3-1.5L8.1 5.1 2.4 10.8c-.4.4-.4 1.1 0 1.6l8.8 8.8c.4.4 1.1.4 1.6 0l8.8-8.8c.4-.5.4-1.2 0-1.6z" fill="white" />
        </svg>
    ),
    GitHub: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#24292e" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.41-.01 2.74 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="white" />
        </svg>
    ),
    Docker: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#2496ED" />
            <path d="M9.5 8.5h2v2h-2zM12 8.5h2v2h-2zM14.5 8.5h2v2h-2zM9.5 11h2v2h-2zM12 11h2v2h-2zM7 11h2v2H7zM4.5 11h2v2h-2zM14.5 11h2v2h-2zM12 6h2v2h-2z" fill="white" />
            <path d="M20.5 12.5c-.5-.3-1.6-.4-2.4-.2-.1-.8-.6-1.5-1.4-2l-.5-.3-.3.5c-.3.5-.4 1.4-.1 2-.2.1-.5.2-.8.3-.5.1-1 .1-1.5.1H2.4c-.1.9.1 2.5.8 3.5.6.9 1.4 1.5 2.5 1.8.6.1 1.2.2 1.9.2 1.8 0 3.1-.4 4.2-1.3.8-.6 1.4-1.5 1.8-2.5h.2c1.3 0 2.1-.5 2.6-1.5l.1-.2-.3-.2h-.7z" fill="white" />
        </svg>
    ),
    Figma: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#F24E1E" />
            <path d="M8 21c1.1 0 2-.9 2-2v-2H8c-1.1 0-2 .9-2 2s.9 2 2 2z" fill="#0ACF83" />
            <path d="M6 13c0-1.1.9-2 2-2h2v4H8c-1.1 0-2-.9-2-2z" fill="#A259FF" />
            <path d="M6 7c0-1.1.9-2 2-2h2v4H8c-1.1 0-2-.9-2-2z" fill="#F24E1E" />
            <path d="M10 5h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2V5z" fill="#FF7262" />
            <path d="M14 13c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" fill="#1ABCFE" />
        </svg>
    ),
    Vercel: (
        <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect width="24" height="24" rx="3" fill="#000" />
            <path d="M12 4L22 20H2L12 4z" fill="white" />
        </svg>
    ),
};

/* ─── Skill data ──────────────────────────────────────── */
const skillCategories = [
    {
        title: "Languages",
        color: "#6366f1",
        skills: ["TypeScript", "JavaScript", "Go", ],
    },
    {
        title: "Frontend",
        color: "#10b981",
        skills: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Backend",
        color: "#f59e0b",
        skills: ["Node.js", "Express", "REST APIs", "WebSockets"],
    },
    {
        title: "Databases",
        color: "#8b5cf6",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
    },
    {
        title: "Tools",
        color: "#06b6d4",
        skills: ["Git", "GitHub", "Docker", "Figma", "Vercel"],
    },
];

/* ─── Component ───────────────────────────────────────── */
const Skills = () => {
    return (
        <div className="flex flex-col justify-center max-w-xl text-left w-full h-full gap-2 mt-2">
            {/* Header */}
            <motion.div
                className="mx-4 my-4 sm:mx-6 sm:my-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-body text-primary"><AnimatedLink>Stack</AnimatedLink></h2>
            </motion.div>

            {/* Categories stacked, chips flow horizontal */}
            <div className="mx-4 sm:mx-6 flex flex-col gap-5">
                {skillCategories.map((cat, catIndex) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: catIndex * 0.07 }}
                    >
                        {/* Category label */}
                        <div className="flex items-center gap-2 mb-2.5">
                            <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: cat.color }}
                            />
                            <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-secondary select-none">
                                {cat.title}
                            </span>
                        </div>

                        {/* Horizontal wrapping chip row */}
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-card hover:border-primary/30 transition-colors cursor-default select-none group"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.25,
                                        delay: catIndex * 0.07 + i * 0.035,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{ scale: 1.04 }}
                                >
                                    {/* Icon */}
                                    <span className="flex-shrink-0 rounded-[4px] overflow-hidden" style={{ lineHeight: 0 }}>
                                        {icons[skill] ?? (
                                            <span
                                                className="w-4 h-4 rounded-[4px] flex items-center justify-center text-[8px] font-bold text-white"
                                                style={{ background: cat.color }}
                                            >
                                                {skill[0]}
                                            </span>
                                        )}
                                    </span>
                                    {/* Name */}
                                    <span className="text-xs font-medium text-primary leading-none">
                                        {skill}
                                    </span>
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;