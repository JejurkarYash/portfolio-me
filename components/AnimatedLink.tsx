"use client";
import React, { ReactNode } from 'react'
import { motion } from "motion/react";

export const AnimatedLink = ({ children }: { children: ReactNode }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return (
        <span
            className="relative inline-block font-medium text-foreground cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <motion.span
                className="absolute left-0 bottom-0 h-[1px] bg-foreground "
                initial={{ width: 0 }}
                animate={{ width: isHovered ? "100%" : 0 }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            />
        </span>
    )
}
