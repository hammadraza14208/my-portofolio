"use client";
import React from "react";
import { motion } from "framer-motion";

const LastWork = () => {
    return (
        <section id="last-work" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Latest Focus</h2>
                    <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto" />
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden glass p-2 w-full max-w-md mx-auto aspect-square">
                            <img
                                src="/Hammad.jpeg"
                                alt="Hammad Raza"
                                className="w-full h-full object-cover object-top rounded-xl mt-0 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl pointer-events-none" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-1/2 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold text-white">Engineering the Future of Web</h3>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            My recent focus has been on architecting full-stack Next.js applications that scale gracefully. By combining modern React features with advanced styling systems, I deliver products that are not only performant but also provide exceptional user experiences.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">Current Stack Focus:</h4>
                            <ul className="grid grid-cols-2 gap-3 mb-6">
                                {["Next.js App Router", "Server Components", "Tailwind CSS", "Framer Motion", "TypeScript", "Performance Tuning"].map((tech, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300 mt-6 cursor-pointer">
                                Let's Collaborate
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LastWork;
