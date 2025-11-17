"use client";

import React from 'react'
import { AnimatedLink } from './AnimatedLink'
import { Mail, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
    return (
        <motion.div
            className='flex flex-col justify-center max-w-xl text-left w-full h-full gap-4 mb-24'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* header */}
            <div className='mx-4 sm:mx-6 my-4'>
                <h2 className='text-body text-primary'><AnimatedLink>Hire Me</AnimatedLink></h2>
            </div>

            {/* content */}
            <div className='mx-4 sm:mx-6'>
                <p className='text-sm sm:text-base text-secondary leading-6 sm:leading-7 mb-6'>
                    Looking for a developer who brings ideas to life with clean code and thoughtful design?
                    Let's build something great together.
                </p>

                {/* Email contact */}
                <Link
                    href="mailto:yashjejurkar.dev@gmail.com"
                    className='group'
                >
                    <motion.div
                        className='flex items-center gap-3 p-4 border border-border rounded-xl 
                                   hover:border-primary hover:bg-card transition-all duration-300'
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className='h-10 w-10 rounded-full bg-card border border-border 
                                      flex items-center justify-center group-hover:border-primary 
                                      transition-colors'>
                            <Mail className='text-secondary group-hover:text-primary transition-colors' size={20} />
                        </div>
                        <div className='flex-1'>
                            <p className='text-xs text-secondary'>Email me at</p>
                            <p className='text-sm sm:text-base text-primary font-medium'>yashjejurkar.dev@gmail.com</p>
                        </div>
                        <ArrowUpRight className='text-secondary group-hover:text-primary transition-colors' size={20} />
                    </motion.div>
                </Link>

                {/* Footer text */}
                <div className='mt-8 pt-6 border-t border-border'>
                    <p className='text-xs text-secondary text-center'>
                        © 2024 Yash Jejurkar. Built with Next.js & Tailwind CSS.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer