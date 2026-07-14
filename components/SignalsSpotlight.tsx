"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ShieldCheck, Layers, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedLink } from './AnimatedLink';
import { WebPreviewModal } from './WebPreviewModal';

// 3D Tilt Card effect for the spotlight frame
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 150, damping: 22 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 22 });

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(px);
        y.set(py);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function SignalsSpotlight() {
    const [isOpen, setIsOpen] = useState(false);
    const projectUrl = "https://signalshq-redesign-two.vercel.app/";

    return (
        <div className="flex flex-col justify-center h-full w-full max-w-xl py-8">
            {/* Section Header */}
            <motion.div
                className="flex items-center gap-3 mx-4 my-4 sm:mx-6 sm:my-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-body text-primary">
                    <AnimatedLink>Design Challenge</AnimatedLink>
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full select-none animate-pulse">
                    Featured Redesign
                </span>
            </motion.div>

            {/* Design Challenge Content */}
            <div className="mx-4 sm:mx-6 mb-8">
                <motion.h3 
                    className="text-lg font-semibold text-primary mb-3 leading-tight"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    SignalsHQ — Landing Page Redesign
                </motion.h3>
                <motion.p 
                    className="text-xs text-secondary leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Completed as an open design assignment for an internship application. SignalsHQ is an 
                    AI platform automating research and intake for CPA firms. The challenge was to redesign 
                    the landing page to build user trust, make dense tax-legal resources legible, and structure 
                    raw technical features using technical-brutalism, grid systems, and micro-interactions.
                </motion.p>

                {/* Core Design Pillars */}
                {/* <div className="grid grid-cols-1 gap-4 mb-8">
                    <motion.div 
                        className="flex gap-4 p-3.5 rounded-xl border border-border bg-card/40 hover:bg-card/70 hover:border-border/80 transition-all duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-[#b3a1f0]/10 border border-[#b3a1f0]/20 flex items-center justify-center flex-shrink-0 text-[#b3a1f0]">
                            <ShieldCheck size={16} />
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-primary mb-1">Authoritative Data Hierarchy</h4>
                            <p className="text-[11px] text-secondary leading-relaxed">
                                Treated legal code citations and source verification markers as prominent, first-class UI entities inside clean monospaced sub-blocks.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex gap-4 p-3.5 rounded-xl border border-border bg-card/40 hover:bg-card/70 hover:border-border/80 transition-all duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                            <Layers size={16} />
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-primary mb-1">Technical Brutalism Layout</h4>
                            <p className="text-[11px] text-secondary leading-relaxed">
                                Used thin hairline grids, uppercase metadata labels, and visual "Exhibits" to mirror physical audit dossiers and appeal to CPAs.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex gap-4 p-3.5 rounded-xl border border-border bg-card/40 hover:bg-card/70 hover:border-border/80 transition-all duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0 text-amber-400">
                            <Cpu size={16} />
                        </div>
                        <div>
                            <h4 className="text-xs font-semibold text-primary mb-1">Performance-Driven Prototyping</h4>
                            <p className="text-[11px] text-secondary leading-relaxed">
                                Developed in Next.js and Tailwind, targeting zero-latency layout shifting, custom interactive states, and optimized asset delivery.
                            </p>
                        </div>
                    </motion.div>
                </div> */}

                {/* Interactive Visual Spotlight Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                >
                    <TiltCard className="relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer">
                        {/* Browser Chrome Header Mock */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100/50 dark:bg-neutral-900/50 border-b border-border select-none">
                            {/* Window buttons */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                            </div>
                            {/* URL bar */}
                            <div className="w-3/5 py-0.5 px-3 rounded-md bg-background border border-border/80 text-[10px] font-mono text-secondary text-center truncate">
                                signalshq-redesign-two.vercel.app
                            </div>
                            <div className="w-4" />
                        </div>

                        {/* Screenshot Visual Frame */}
                        <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
                            <Image
                                src="/signalsHQ.png"
                                alt="SignalsHQ Redesign Landing Page Mockup"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
                                sizes="(max-width: 640px) 100vw, 80vw"
                            />
                            {/* Dark/Gradient vignette overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                            {/* Floating CTA Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-100 font-semibold text-xs transition-transform duration-200 active:scale-95 shadow-lg cursor-pointer"
                                >
                                    <ExternalLink size={13} />
                                    Explore Interactive Demo
                                </button>
                                <Link
                                    href={projectUrl}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-semibold text-white transition-colors cursor-pointer"
                                >
                                    Visit Direct Link
                                    <ArrowUpRight size={11} className="text-white/70" />
                                </Link>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>
            </div>

            {/* Interactive Web Preview Modal */}
            <WebPreviewModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                url={projectUrl}
                title="SignalsHQ Redesign Challenge"
            />
        </div>
    );
}
