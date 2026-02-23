"use client";
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
    { name: "React.js", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "Responsive Design", level: "Expert" },
    { name: "Performance Optimization", level: "Intermediate" },
    { name: "UI Implementation", level: "Expert" },
];

const SkillCard = ({ skill, index }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all flex flex-col items-center justify-center text-center group cursor-pointer"
    >
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{skill.name}</h3>
        <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">{skill.level}</span>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Technical Arsenal</h2>
                    <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skillsData.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
