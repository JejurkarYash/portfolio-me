"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { AnimatedLink } from './AnimatedLink';

export default function GithubActivity() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Custom color levels matching the portfolio's violet/purple branding.
    // Level 0 (no activity) to Level 4 (highest activity).
    const themeColors = {
        light: ['#f5f5f5', '#e9d5ff', '#d8b4fe', '#a855f7', '#7e22ce'], // Soft purples
        dark: ['#121212', '#2e1065', '#581c87', '#7e22ce', '#a855f7']   // Neon violets
    };

    return (
        <div className="flex flex-col justify-center h-full w-full max-w-xl py-6">
            {/* Section Header */}
            <motion.div
                className="flex items-center gap-3 mx-4 my-4 sm:mx-6 sm:my-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-body text-primary">
                    <AnimatedLink>Contributions</AnimatedLink>
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-wider text-secondary bg-card border border-border px-2.5 py-0.5 rounded-full select-none">
                    GitHub Profile
                </span>
            </motion.div>

            {/* Calendar Container Card */}
            <motion.div 
                className="mx-4 sm:mx-6 p-4 sm:p-5 rounded-2xl border border-border bg-card/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {!mounted ? (
                    // Loading Skeleton to prevent layout shift & SSR mismatch
                    <div className="w-full flex flex-col gap-4 animate-pulse">
                        <div className="h-4 bg-border/40 rounded w-1/3" />
                        <div className="h-[120px] bg-border/20 rounded w-full flex items-center justify-center">
                            <span className="text-[11px] font-mono text-secondary">Loading contribution graph...</span>
                        </div>
                    </div>
                ) : (
                    // Render actual calendar with scroll wrapper for mobile swipeability
                    <div className="w-full overflow-x-auto pb-1 scrollbar-thin select-none">
                        <div className="min-w-[680px]">
                            <GitHubCalendar
                                username="JejurkarYash"
                                colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                                theme={themeColors}
                                blockSize={11}
                                blockMargin={3}
                                fontSize={12}
                            />
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
