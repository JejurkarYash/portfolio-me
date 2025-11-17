"use client";

import React, { useEffect, useState } from 'react'
import { Sun, Moon, Github, Linkedin } from "lucide-react"
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const socialLinks = [
        {
            name: 'X (Twitter)',
            url: 'https://x.com/YashJejurkar',
            icon: (
                <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="transition-colors"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com/JejurkarYash',
            icon: <Github size={18} />
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/yash-jejurkar/',
            icon: <Linkedin size={18} />
        },
    ]

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 
                        backdrop-blur-md bg-background/70 
                        border border-border
                        h-12 sm:h-14 w-[90%] max-w-[170px] sm:max-w-44
                        flex items-center justify-between px-3 sm:px-4
                        rounded-full 
                        shadow-lg z-50'
        >
            {/* Theme Toggle Button */}
            <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='h-8 w-8 sm:h-10 sm:w-10 bg-card border border-border rounded-full 
                           flex items-center justify-center 
                           hover:border-primary transition-colors'
                aria-label='Toggle theme'
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme === 'dark' ? (
                        <motion.div
                            key="sun"
                            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Sun className='text-primary' size={18} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="moon"
                            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <Moon className='text-primary' size={18} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Social Links */}
            <div className='flex flex-row items-center justify-center gap-3 sm:gap-4'>
                {socialLinks.map((social, index) => (
                    <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <Link
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-secondary hover:text-primary transition-colors'
                            aria-label={social.name}
                        >
                            <motion.div
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {social.icon}
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default NavBar; 