"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Summary", href: "#summary" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Last Work", href: "#last-work" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Scroll spy logic
            const sections = navLinks.map(link => link.name);
            for (const section of sections) {
                const id = section.toLowerCase().replace(" ", "-");
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
                    HR<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative text-sm uppercase tracking-wider font-medium transition-colors hover:text-white ${activeSection === link.name ? "text-white" : "text-gray-400"
                                }`}
                        >
                            {link.name}
                            {activeSection === link.name && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-500"
                                />
                            )}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors ${activeSection === link.name ? "text-blue-500" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
/* We need to import AnimatePresence, so I should fix the Navbar import */
