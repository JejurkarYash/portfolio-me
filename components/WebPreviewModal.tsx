"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, RotateCw, Copy, Check, ShieldAlert } from 'lucide-react';

interface WebPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    url: string;
    title: string;
}

export function WebPreviewModal({ isOpen, onClose, url, title }: WebPreviewModalProps) {
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [iframeKey, setIframeKey] = useState(0);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Reset state when url changes
    useEffect(() => {
        if (isOpen) {
            setLoading(true);
            setIframeKey(prev => prev + 1);
        }
    }, [url, isOpen]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleReload = () => {
        setLoading(true);
        setIframeKey(prev => prev + 1);
    };

    // Clean up domain name for display in the address bar
    const displayUrl = url
        .replace(/^(https?:\/\/)?(www\.)?/, '')
        .replace(/\/$/, '');

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-zoom-out"
                    />

                    {/* Window Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                        className="relative w-full max-w-5xl h-[80vh] md:h-[85vh] bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col z-10"
                    >
                        {/* Browser Header / Navigation Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 bg-neutral-100/80 dark:bg-neutral-900/80 border-b border-border backdrop-blur-sm gap-2 select-none">
                            {/* Left: Window Controls */}
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <button
                                    onClick={onClose}
                                    className="group relative w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
                                    aria-label="Close preview"
                                >
                                    <X className="w-2 h-2 text-red-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-[#dfa123]" />
                                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                                <span className="ml-2 text-xs font-medium text-secondary truncate max-w-[150px] sm:max-w-[200px]">
                                    {title}
                                </span>
                            </div>

                            {/* Center: Address Bar */}
                            <div className="flex items-center gap-2 bg-white dark:bg-black border border-border rounded-lg px-3 py-1.5 w-full sm:max-w-md md:max-w-lg lg:max-w-xl transition-all shadow-inner text-xs font-mono text-secondary">
                                <span className="text-emerald-500 select-none">https://</span>
                                <span className="truncate flex-1 select-all">{displayUrl}</span>
                                
                                {/* Copy Button */}
                                <button
                                    onClick={handleCopy}
                                    className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors text-secondary hover:text-primary cursor-pointer"
                                    title="Copy link"
                                >
                                    {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                                </button>
                            </div>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:justify-start">
                                {/* Reload */}
                                <button
                                    onClick={handleReload}
                                    className="p-1.5 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg text-secondary hover:text-primary transition-colors cursor-pointer"
                                    title="Reload preview"
                                >
                                    <RotateCw size={15} className={`${loading ? 'animate-spin' : ''}`} />
                                </button>

                                {/* Open External */}
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 px-2.5 py-1.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-lg text-xs font-medium text-primary transition-colors cursor-pointer"
                                    title="Open website in new tab"
                                >
                                    <span>Open</span>
                                    <ExternalLink size={13} />
                                </a>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="relative flex-1 bg-white dark:bg-neutral-950">
                            {/* Loading State / Skeleton */}
                            {loading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 z-20 gap-4">
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-10 h-10 border-2 border-border border-t-primary rounded-full animate-spin" />
                                    </div>
                                    <div className="flex flex-col items-center gap-1 px-4 text-center">
                                        <p className="text-sm font-medium text-primary">Connecting to {title}...</p>
                                        <p className="text-xs text-secondary">Loading live interactive site</p>
                                    </div>
                                </div>
                            )}

                            {/* IFrame Website Container */}
                            <iframe
                                key={iframeKey}
                                ref={iframeRef}
                                src={url}
                                title={title}
                                className="w-full h-full border-none bg-white"
                                onLoad={() => setLoading(false)}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        {/* Bottom Warning/Disclaimer Bar (Compact) */}
                        <div className="px-4 py-2 bg-neutral-50 dark:bg-neutral-900 border-t border-border flex items-center justify-between text-[11px] text-secondary">
                            <span className="flex items-center gap-1.5 truncate pr-2">
                                <ShieldAlert size={12} className="text-amber-500 flex-shrink-0" />
                                <span className="truncate">Some features or framing policies may differ depending on browsers.</span>
                            </span>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline font-medium whitespace-nowrap flex-shrink-0"
                            >
                                Open in direct tab &rarr;
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
