"use client";

import { useState } from 'react';
import { AnimatedLink } from './AnimatedLink';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { WebPreviewModal } from './WebPreviewModal';

type Project = {
    id: number;
    title: string;
    link: string;
    github?: string;
    description: string;
    tags: string[];
    image: string;
    accent: string;
};

const projectsList: Project[] = [
    {
        id: 0,
        title: "Throttlr",
        image: "/throttlr.png",
        link: "https://throttlr.yashjejurkar.me/",
        github: "https://github.com/JejurkarYash/ratelimiter-microservice",
        description: "Rate Limiting as a Service — drop-in SDK middleware, Redis Lua scripts, Fixed & Sliding Window algorithms, real-time analytics dashboard.",
        tags: ["Node.js", "Redis", "Next.js", "Prisma", "TypeScript"],
        accent: "#ea580c",
    },
    {
        id: 1,
        title: "Lynx Draw",
        image: "/lynxDraw.png",
        link: "https://lynx-draw-frontend.onrender.com/",
        github: "https://github.com/JejurkarYash/lynx-draw",
        description: "Real-time collaborative whiteboard load tested with 100 concurrent users at 110ms p95. Redis Pub/Sub for zero-latency canvas sync.",
        tags: ["Next.js", "WebSockets", "Redis", "TypeScript"],
        accent: "#10b981",
    },
    {
        id: 2,
        title: "Second Brain",
        image: "/secondBrain.png",
        link: "https://second-brain-8gsk.vercel.app/",
        github: "https://github.com/JejurkarYash/second-brain",
        description: "Personal knowledge vault for saving content from YouTube, Twitter, and articles with metadata scraping and encrypted public sharing.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        accent: "#f59e0b",
    },
];

// 3D tilt card effect
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

    const rotateX = useTransform(ySpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

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

function FeaturedCard({ project, index, onExpand }: { project: Project; index: number; onExpand: (p: Project) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group"
        >
            <TiltCard className="relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
            >
                {/* Screenshot */}
                <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    {/* Gradient overlay at bottom of image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                    {/* Accent color line at top */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-80"
                        style={{ background: project.accent }}
                    />

                    {/* Numbered badge */}
                    <div className="absolute top-3 left-3 font-mono text-[10px] text-secondary bg-background/80 backdrop-blur-sm border border-border/60 px-2 py-0.5 rounded-full select-none">
                        {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Hover action buttons */}
                    <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        <button
                            onClick={() => onExpand(project)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[10px] font-semibold text-primary hover:bg-card transition-colors cursor-pointer"
                        >
                            <ExternalLink size={10} />
                            Preview
                        </button>
                        <Link
                            href={project.link}
                            target="_blank"
                            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[10px] font-semibold text-primary hover:bg-card transition-colors cursor-pointer"
                            onClick={e => e.stopPropagation()}
                        >
                            Visit
                            <ArrowUpRight size={10} />
                        </Link>
                    </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                        <Link href={project.link} target="_blank" className="group/title">
                            <h3 className="text-sm font-semibold text-primary flex items-center gap-1 group-hover/title:underline underline-offset-2">
                                {project.title}
                                <ArrowUpRight size={13} className="text-secondary transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                            </h3>
                        </Link>
                        {project.github && (
                            <Link href={project.github} target="_blank" className="text-secondary hover:text-primary transition-colors flex-shrink-0">
                                <Github size={14} />
                            </Link>
                        )}
                    </div>
                    <p className="text-xs text-secondary leading-relaxed mb-3">{project.description}</p>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-background border border-border text-secondary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
}

const Projects = () => {
    const [previewProject, setPreviewProject] = useState<Project | null>(null);

    return (
        <div className="flex flex-col justify-center h-full w-full max-w-xl">
            {/* Section header */}
            <motion.div
                className="flex items-center gap-3 mx-4 my-4 sm:mx-6 sm:my-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h2 className="text-body text-primary"><AnimatedLink>Selected Work</AnimatedLink></h2>
                <span className="text-[11px] font-mono text-secondary bg-card border border-border px-2 py-0.5 rounded-full">
                    {projectsList.length} projects
                </span>
            </motion.div>

            {/* Featured grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-4 sm:mx-6 mb-6">
                {projectsList.map((p, i) => (
                    <FeaturedCard key={p.id} project={p} index={i} onExpand={setPreviewProject} />
                ))}
            </div>

            {/* Preview Modal */}
            <WebPreviewModal
                isOpen={previewProject !== null}
                onClose={() => setPreviewProject(null)}
                url={previewProject?.link || ""}
                title={previewProject?.title || ""}
            />
        </div>
    );
};

export default Projects;