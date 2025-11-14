"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Main() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 overflow">
                <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white font-extrabold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
                        >
                            Welcome to Breed-Sense
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/95 text-xl md:text-2xl font-medium mb-10 leading-relaxed"
                        >
                            Image-based Breed Recognition<br />
                            Cattle & Buffaloes Identification System
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >    <label for="Hello"></label>
                            <input className="pl-2 pt-1 h-8 sm:h-10  w-32 text-[15px]  sm:text-[20px] sm:w-72 font-from-neutral-50 sm:font-extrabold   border-2 rounded-lg border-white border-solid  bg-gradient-to-r from-purple-300 to-purple-100   hover:border-white  hover:font-normal hover:bg-yellow-300   text-black hover:text-black "
                                type="file" id="cameraInput" accept="image/*" capture="camera" placeholder="Choose image " />
                                
                        </motion.div>
                    </div>
                </div>
                {/* Decorative wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(233, 213, 255)" />
                    </svg>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gradient-to-b from-purple-100 to-purple-50 py-20">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center font-bold text-4xl md:text-5xl mb-16 text-gray-800"
                    >
                        Learn How It Works
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: "📷", title: "1. Capture", desc: "Farmer snaps a photo of the animal" },
                            { icon: "🔎", title: "2. Classify", desc: "Lightweight AI analyzes on cloud device" },
                            { icon: "📋", title: "3. Report", desc: "Receive breed info and expert tips" }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
                            >
                                <div className="text-6xl mb-6">{step.icon}</div>
                                <h3 className="font-bold text-2xl mb-4 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-b from-purple-50 to-white py-20">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center font-bold text-4xl md:text-5xl mb-16 text-gray-800"
                    >
                        Features & Benefits
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Accurate Breed Recognition",
                                desc: "Uses color, body shape, horns and facial cues to classify breeds.",
                                gradient: "from-purple-400 to-purple-500"
                            },
                            {
                                title: "Breed-Specific Guidance",
                                desc: "Milk yield estimates, feeding & disease susceptibility tips.",
                                gradient: "from-indigo-400 to-indigo-500"
                            },
                            {
                                title: "Lightweight & Offline-Friendly",
                                desc: "Works on low-end phones and caches results when offline.",
                                gradient: "from-violet-400 to-violet-500"
                            },
                            {
                                title: "Data Storage & Reports",
                                desc: "Cloud records for insurance claims and government schemes.",
                                gradient: "from-fuchsia-400 to-fuchsia-500"
                            },
                            {
                                title: "Dynamic Learning",
                                desc: "Model retrains with farmer-submitted images to improve accuracy.",
                                gradient: "from-purple-400 to-purple-600"
                            },
                            {
                                title: "Farmer-Friendly UI",
                                desc: "Minimal text, big icons, local language support ready.",
                                gradient: "from-pink-400 to-pink-500"
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gradient-to-b from-white to-purple-50 py-20">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center font-bold text-4xl md:text-5xl mb-16 text-gray-800"
                    >
                        Testimonials
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                name: "John Doe",
                                text: "This technology has revolutionized our cattle farming business.",
                                role: "Dairy Farmer"
                            },
                            {
                                name: "Jane Smith",
                                text: "The breed recognition feature is very accurate and helpful.",
                                role: "Livestock Manager"
                            }
                        ].map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                                <div className="font-bold text-gray-900">{t.name}</div>
                                <div className="text-sm text-gray-500">{t.role}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main