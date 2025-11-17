"use client";

import React from 'react'
import { AnimatedLink } from './AnimatedLink'
import { motion } from 'framer-motion'

const skillsList = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Redis",
    "Figma"
];

const Skills = () => {
    return (
        <div className='flex flex-col justify-center max-w-xl text-left w-full h-full gap-2'>
            {/* header */}
            <motion.div
                className='mx-4  my-4 sm:mx-6 sm:my-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className='text-body text-primary'><AnimatedLink>Skills</AnimatedLink></h2>
            </motion.div>

            {/* skills */}
            <div className='mx-4 sm:mx-6'>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-secondary select-none'>
                    {skillsList.map((skill, index) => (
                        <motion.li
                            key={index}
                            className='text-xs font-medium  text-body border border-border p-2  md:p-1 rounded-xl w-full text-center hover:bg-card transition-colors'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.03,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default Skills