"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeBackground({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="min-h-screen bg-background">{children}</div>;
    }

    return (
        <motion.div
            animate={{
                backgroundColor: resolvedTheme === "dark" ? "#000000" : "#ffffff",
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
}
