"use client";

import React from 'react'
import { AnimatedLink } from './AnimatedLink';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div className=" max-w-xl text-left justify-center items-center w-full h-full gap-4   ">

            {/* header */}
            <motion.div
                className="flex flex-col h-full justify-center gap-2 text-left mx-4 sm:mx-6 mt-12 sm:mt-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className='text-xl sm:text-2xl'><AnimatedLink>
                    Yash Jejurkar
                </AnimatedLink></h1>
                <p className='text-secondary text-body'> Developer | Engineer</p>
            </motion.div>

            {/* body */}
            <motion.div
                className='text-left items-center mx-4 sm:mx-6 mt-4 sm:mt-6'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
                <p className='text-sm sm:text-base text-secondary leading-6 sm:leading-7 flex flex-col gap-[0.2px] tracking-tight'>
                    <span>

                        I’m Yash, a web developer who cares about how things look and feel.
                        I love turning complex ideas into clean, functional interfaces.
                    </span>
                    <br />
                    <span>

                        I build with Next.js, Typescript, Tailwind, focusing on design systems, motion, and the space where design meets code.
                    </span>
                    <br />

                    <span>

                        Good design isn’t loud — it’s invisible. It just works.
                    </span>
                </p>
            </motion.div>
        </div >
    )
}

export default AboutMe