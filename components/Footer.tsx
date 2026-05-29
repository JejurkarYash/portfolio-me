"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <motion.div
            className="flex flex-col justify-center max-w-xl text-left w-full h-full mb-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* CTA block */}
            <div className="mx-4 sm:mx-6 mt-8">
                {/* Label */}
                <p className="text-[11px] font-mono text-secondary uppercase tracking-widest mb-3 select-none">
                    Let's work together
                </p>

                {/* Big statement */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary leading-tight tracking-tight mb-6 max-w-sm">
                    Got an idea?<br />
                    <span className="text-secondary">Let's ship it.</span>
                </h2>

                {/* Email CTA */}
                <Link href="mailto:yashjejurkar.dev@gmail.com" className="group block">
                    <motion.div
                        className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-border bg-card hover:border-primary/40 hover:bg-card transition-all duration-300"
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors flex-shrink-0">
                                <Mail size={16} className="text-secondary group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <p className="text-[10px] text-secondary mb-0.5">Reach me at</p>
                                <p className="text-sm font-medium text-primary">yashjejurkar.dev@gmail.com</p>
                            </div>
                        </div>
                        <ArrowUpRight size={18} className="text-secondary group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.div>
                </Link>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-4">
                    {[
                        { label: "GitHub", href: "https://github.com/JejurkarYash", icon: <Github size={15} /> },
                        { label: "LinkedIn", href: "https://www.linkedin.com/in/yash-jejurkar/", icon: <Linkedin size={15} /> },
                        {
                            label: "X (Twitter)", href: "https://x.com/YashJejurkar",
                            icon: (
                                <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            )
                        },
                    ].map(({ label, href, icon }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card hover:border-primary/40 hover:text-primary text-secondary text-xs font-medium transition-all duration-200"
                        >
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>

                {/* Divider + copyright */}
                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                    <p className="text-[11px] font-mono text-secondary">
                        © 2025 Yash Jejurkar
                    </p>
                    <p className="text-[11px] font-mono text-secondary">
                        Built with Next.js · Tailwind · Framer
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Footer;