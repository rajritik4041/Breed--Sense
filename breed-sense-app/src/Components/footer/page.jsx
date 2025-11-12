"use client"
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-600 to-purple-900 text-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section - Brand */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                Breedify
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              An AI tool for cattle & buffalo breed recognition - aligned with Digital India
            </p>
            <div className="pt-4 space-y-1">
              <p className="text-gray-300 text-sm">
                <span className="text-gray-400">Created By</span>
              </p>
              <p className="text-blue-300 font-semibold">Raj Ritik Varma</p>
            </div>
          </div>

          {/* Center Section - Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-6">Quick Links</h2>
            <nav className="space-y-3">
              <a 
                href="#home" 
                className="block text-gray-200 hover:text-blue-300 transition-colors duration-300 transform hover:translate-x-1"
              >
                → Home
              </a>
              <a 
                href="#how-to-work" 
                className="block text-gray-200 hover:text-blue-300 transition-colors duration-300 transform hover:translate-x-1"
              >
                → How To Work
              </a>
              <a 
                href="#features" 
                className="block text-gray-200 hover:text-blue-300 transition-colors duration-300 transform hover:translate-x-1"
              >
                → Features
              </a>
              <a 
                href="#contact" 
                className="block text-gray-200 hover:text-blue-300 transition-colors duration-300 transform hover:translate-x-1"
              >
                → Contact Us
              </a>
            </nav>
          </div>

          {/* Right Section - Get in Touch */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Get in Touch</h2>
            <p className="text-gray-200 text-sm">
              We're happy to talk to you. Reach out anytime!
            </p>
            
            <div className="space-y-4">
              {/* Phone */}
              <a 
                href="tel:+919236134041"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-300 transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">+91 9236134041</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:rajritik.4041@gmail.com"
                className="flex items-center gap-3 text-gray-200 hover:text-blue-300 transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">rajritik.4041@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row align-middle pt-6">
          <p className="text-gray-300 text-sm">
            © 2025 Breedify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer