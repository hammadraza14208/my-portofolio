"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ finishLoading }) => {
    useEffect(() => {
        const finishTimeout = setTimeout(() => {
            finishLoading();
        }, 2500); // 2.5 seconds before hiding
        return () => {
            clearTimeout(finishTimeout);
        };
    }, [finishLoading]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="flex flex-col items-center space-y-4">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold tracking-tight text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hammad Raza
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-400 tracking-wide uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Frontend Developer
                    </motion.p>

                    <motion.div
                        className="w-48 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.div
                            className="h-full bg-blue-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SplashScreen;
