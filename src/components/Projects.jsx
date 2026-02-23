"use client";
import React from "react";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "SaaS Analytics Dashboard",
        category: "Web Application",
        image: "/projects/saas.png",
        tech: ["Next.js", "Tailwind", "Framer Motion", "Recharts"]
    },
    {
        title: "Modern E-Commerce Platform",
        category: "E-Commerce",
        image: "/projects/ecommerce.png",
        tech: ["React", "Redux", "Stripe", "Tailwind"]
    },
    {
        title: "Tech Startup Landing Page",
        category: "Marketing Website",
        image: "/projects/startup.png",
        tech: ["Next.js", "GSAP", "Tailwind"]
    }
];

const ProjectCard = ({ project }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        }}
        className="group relative rounded-2xl overflow-hidden glass cursor-pointer"
    >
        <div className="relative h-72 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300 backdrop-blur-sm">
                        {t}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
