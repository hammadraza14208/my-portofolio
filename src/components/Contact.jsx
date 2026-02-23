"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setErrorMessage('Please fill in all fields.');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                const data = await res.json();
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong.');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Let&apos;s Build Together</h2>
                    <p className="text-lg text-gray-400">Open for opportunities and collaborative projects.</p>
                </motion.div>

                <div className="glass p-8 md:p-12 rounded-3xl">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                rows="5"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                placeholder="How can I help you?"
                                disabled={status === 'loading'}
                            />
                        </div>

                        <motion.button
                            whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                            whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </motion.button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
                        <h4 className="text-white font-medium mb-6">Connect with me</h4>
                        <div className="flex space-x-6">
                            {[
                                { icon: <FiGithub />, href: "#" },
                                { icon: <FiLinkedin />, href: "#" },
                                { icon: <FiTwitter />, href: "#" },
                                { icon: <FiMail />, href: "mailto:contact@example.com" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    whileHover={{ y: -5, color: "#60a5fa" }}
                                    className="text-2xl text-gray-400 transition-colors"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm mt-8">
                            &copy; {new Date().getFullYear()} Hammad Raza. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
