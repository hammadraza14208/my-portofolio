"use client";
import React, { useState } from "react";
import SplashScreen from "../components/SplashScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LastWork from "../components/LastWork";
import Contact from "../components/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-white">
            <AnimatePresence>
                {loading && <SplashScreen finishLoading={() => setLoading(false)} />}
            </AnimatePresence>

            <AnimatePresence>
                {!loading && (
                    <motion.div
                        key="navbar"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Navbar />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!loading && (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <Hero />
                        <Summary />
                        <Skills />
                        <Projects />
                        <LastWork />
                        <Contact />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
