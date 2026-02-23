"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="home" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background animated gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center pt-20">
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Crafting Scalable, High-Performance & Visually Refined Web Experiences.
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Frontend Developer specializing in React.js, Next.js, and modern UI systems.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#projects" className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
                        View Projects
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
