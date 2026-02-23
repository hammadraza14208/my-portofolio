"use client";
import React from "react";
import { motion } from "framer-motion";

const Summary = () => {
    const features = [
        { title: "Component-Driven Architecture", desc: "Building modular, reusable configurations ensuring UI consistency." },
        { title: "Strong React & Next.js Foundation", desc: "Leveraging Server Components, App Router, and complex state management." },
        { title: "Performance-Focused", desc: "Optimizing Web Vitals, dynamic imports, and static generation for speed." },
        { title: "Clean Maintainable Code", desc: "Adhering to strict linting, TypeScript (when needed), and SOLID principles." }
    ];

    return (
        <section id="summary" className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Professional Overview</h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-lg text-gray-400 leading-relaxed mb-6">
                            I am a dedicated Frontend Developer focused on creating sophisticated, high-performance web applications. I bridge the gap between design and technical implementation, ensuring that digital experiences are both visually compelling and architecturally sound.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            My approach revolves around engineering scalable systems. Whether building robust SaaS platforms or dynamic marketing sites, I maintain a continuous pursuit of technical growth and modern best practices.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="glass p-6 rounded-2xl hover:border-blue-500/30 transition-colors"
                            >
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Summary;
