"use client";

import { AnimatedLink } from './AnimatedLink';
import Image from 'next/image';
import { MoveUpRight, ArrowUpRight, GithubIcon } from "lucide-react"
import Link from 'next/link';
import { motion } from 'framer-motion';

const projectsList = [
    {
        id: 1,
        title: "Lynx Draw",
        image: "/lynxDraw.png",
        link: "https://lynx-draw-frontend.onrender.com/",

        description: "A real-time collaborative whiteboard built with Next.js and WebSockets."
    },
    {
        id: 2,
        title: "Second Brain",
        image: "/secondBrain.png",
        link: "https://second-brain-8gsk.vercel.app/",
        description: "A smart bookmarking app that saves and organizes content from across the web — all in one place."
    }
]


const featuredProjects = [
    {
        id: 1,
        title: "Employee Managment Dashboard",
        link: "https://verto-assig.vercel.app/",
        image: "/employeeManagement.png",
        description: "This is a full-stack Employee Management System built with modern web technologies"
    },
    {
        id: 2,
        title: "Web Based Wallet",
        image: "/webWallet.png",
        link: "https://web-based-wallet.vercel.app/",
        description: "web based wallet that allows user's to create a multiple wallet ang generate a private and public key."

    },
    {
        id: 3,
        title: "Stock Watchlist",
        image: "/stockWatchlist.png",
        link: "https://quontify-assgigment-frontend.onrender.com/",
        description: "The project allows users to add stock names (1–5 uppercase letters) and view them in their watchlist,"
    }



]

const Projects = () => {
    return (
        <div className='flex flex-col justify-center h-full w-full max-w-xl'>
            {/* header */}
            <motion.div
                className='flex mx-4 my-4 sm:mx-6 sm:my-6  text-left'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className='text-body text-primary'><AnimatedLink>Featured Projects</AnimatedLink></h2>
            </motion.div>

            {/*  Featured projects */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 sm:mx-6 my-4'>
                {
                    projectsList.map((project: any, index: number) => (
                        <motion.div
                            key={project.id}
                            className='flex flex-col gap-2'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <Link
                                target="_blank"
                                href={project.link}>
                                <Image src={project.image} alt={project.title} width={300} height={300} className='rounded-lg hover:cursor-pointer w-full h-auto' />
                                <h3 className='text-sm my-2 flex flex-row gap-1 items-center hover:cursor-pointer'><AnimatedLink>{project.title}</AnimatedLink> <ArrowUpRight className='text-secondary' size={16} /></h3>
                            </Link>
                            <p className='text-xs sm:text-sm text-secondary leading-relaxed'>{project.description}</p>
                        </motion.div>
                    ))
                }

            </div>

            {/* Other Projects  */}
            <div className='flex flex-col justify-center h-full w-full'>
                <motion.div
                    className='flex mx-4 sm:mx-6 sm:my-6  text-left mb-3'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className='text-body text-primary'> <AnimatedLink>Other Projects</AnimatedLink></h2>
                </motion.div>

                {/* projects */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 sm:mx-6 my-4'>
                    {
                        featuredProjects.map((project: any, index: number) => (
                            <motion.div
                                key={project.id}
                                className='flex flex-col gap-2'
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <Link
                                    target="_blank"
                                    href={project.link}
                                >
                                    <Image src={project.image} alt={project.title} width={300} height={300} className='rounded-lg hover:cursor-pointer w-full h-auto' />
                                    <h3 className='text-sm my-2 flex flex-row gap-1 items-center hover:cursor-pointer'><AnimatedLink>{project.title}</AnimatedLink> <ArrowUpRight className='text-secondary' size={16} /></h3>
                                </Link>
                                <p className='text-xs sm:text-sm text-secondary leading-relaxed'>{project.description}</p>
                            </motion.div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Projects; 