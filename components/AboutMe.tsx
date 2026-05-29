"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedLink } from './AnimatedLink';

const ROLES = [
    "Full-Stack Developer",
    "Backend Engineer",
    "Open Source Builder",
    "Systems Thinker",
    "UI/UX Enthusiast"
];

const AboutMe = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const role = ROLES[roleIndex];
        let timeout: ReturnType<typeof setTimeout>;

        if (typing) {
            if (displayed.length < role.length) {
                timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
            } else {
                timeout = setTimeout(() => setTyping(false), 2000);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
            } else {
                setRoleIndex((i) => (i + 1) % ROLES.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, roleIndex]);

    useEffect(() => {
        const interval = setInterval(() => setShowCursor(c => !c), 530);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-xl text-left w-full h-full">
            {/* Top accent line */}
            <motion.div
                className="mx-4 sm:mx-6 mt-12 sm:mt-20"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Terminal pill */}
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-[11px] font-mono text-secondary mb-5 select-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    available for internship · 2026
                </motion.div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-none mb-2">
                    <AnimatedLink>Yash Jejurkar</AnimatedLink>
                </h1>

                {/* Typing role */}
                <div className="h-7 flex items-center">
                    <span className="text-base sm:text-lg font-mono text-secondary">
                        {displayed}
                        <span
                            className="ml-0.5 inline-block w-[2px] h-[1em] bg-secondary align-middle"
                            style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
                        />
                    </span>
                </div>
            </motion.div>

            {/* Bio */}
            <motion.div
                className="mx-4 sm:mx-6 mt-6 sm:mt-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            >
                <p className="text-sm sm:text-base text-secondary leading-7 tracking-tight max-w-md">
                    I build things for the web — clean APIs, sharp UIs, and systems that scale. Obsessed with performance: every query, every roundtrip, every millisecond.
                </p>
                <p className="text-sm sm:text-base text-secondary leading-7 tracking-tight max-w-md mt-3">
                    Currently deep in{" "}
                    <span>distributed systems</span>,{" "}
                    <span>Redis</span>, and{" "}
                    <span>Next.js</span>.
                    Good code is invisible — it just works.
                </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
                className="mx-4 sm:mx-6 mt-8 flex items-center gap-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
                {[
                    { value: "3+", label: "Projects shipped" },
                    { value: "2+", label: "Years building" },
                    { value: "3", label: "Hackathons" },
                ].map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                        <span className="text-xl font-semibold text-primary leading-none">{stat.value}</span>
                        <span className="text-[11px] text-secondary mt-0.5">{stat.label}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AboutMe;