"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion'
import { menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { a, div, label, link } from 'framer-motion/client'

const Navbar = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [currentPath, setCurrentPath] = useState("/")
    const pathname = usePathname();

    const isProfilePage = pathname === "/profile";

    const navlink = [
        { id: "Home", label: "Home", href: "/" },
        { id: "about", label: "About Us", href: "/about" },
        { id: "contact", label: "Contact Us", href: "/contact" },
        { id: "opportunities", label: "Opportunities", href: "/opportunities" },
    ]

    // const 
    const handleNavclick = (href) => {
        setCurrentPath(href);
    }
    return (

        <div className="p-0">
            <div className="flex  top-0 justify-between items-center bg-white h-16  sm:h-20  w-100% p-6 ">
                <div className="head items-center sticky pr-3">
                    <h1 className="font-bold text-violet-600   text-[16px]  sm:text-[22px]  ">
                        <Link href="/">Breed-Sense</Link>
                    </h1>
                </div>
                <div className="navigation gap-3.5  hidden md:flex  pl-6 text-blue-500 font-bold items-center">
                    {navlink.map((link) => (
                        <Link className=" text-black hover:text-blue-500 " key={link.id}
                            href={link.href}
                            onClick={() => handleNavclick(link.href)} >
                            {link.label}
                        </Link>
                    )
                    )}
                </div>

                {isProfilePage ? (
                    <> {/* PROFILE PAGE NAVBAR */}
                        <Link href="/profile/settings">Settings</Link>
                        <Link href="/profile/activity">Activity</Link>
                        <Link href="/logout">Logout</Link>
                    </>
                ) : (
                    <>

                        <div className="hidden md:flex text-white font-bold">
                            <div className="bg-violet-500 m-2 rounded-md ">
                                <motion.button
                                    className="signup-button1 p-2  hover:bg-violet-600 rounded-md  "
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/signup">Signup</Link>
                                </motion.button>
                            </div>
                            <div className="m-2 bg-violet-500  rounded-md ">
                                <motion.button
                                    className="login-button1 p-2  hover:bg-violet-600  rounded-md  "
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link href="/login">&nbsp;&nbsp;&nbsp;login&nbsp;&nbsp;&nbsp;</Link>
                                </motion.button>
                            </div>
                        </div>
                        <div className="w-8 h-8 block md:hidden text-white z-50 ">
                            <motion.button onClick={() => setShowDiv(!showDiv)}
                                className="togglte-button bg-violet-500  rounded-md  "
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {showDiv ? <FontAwesomeIcon icon={faXmark} size="2xl" /> : <div className="text-center my-2">
                                    <div className="border-top ml-1 mr-1 border-2  my-1 w-6 mx-auto"></div>
                                    <div className="border-top ml-1 mr-1 border-2  my-1 w-6 mx-auto"></div>
                                    <div className="border-top ml-1 mr-1 border-2  my-1 w-6 mx-auto"></div>
                                </div>}

                            </motion.button>
                            {showDiv && (
                                <div className="text-black">
                                    <div className=" w-48 h-72 bg-white  absolute top-16 right-0  ">
                                        <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block" href="/">Home</Link>
                                        <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block " href="/about">About</Link>
                                        <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block" href="/contact">Contact Us</Link>
                                        <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block" href="/opportunities">Oppertunities </Link>
                                        <div className="flex pl-2.5 pb-2.5 pt-5">
                                            <div className="  bg-violet-500 m-2 rounded-md ">
                                                <Link href="/signup">
                                                    <motion.button
                                                        className="signup-button1 p-2 cursor-pointer hover:bg-violet-600 rounded-md  "
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Signup
                                                    </motion.button>
                                                </Link>
                                            </div>
                                            <div className="m-2 bg-violet-500 rounded-md ">
                                                <Link href="/login" >
                                                    <motion.button
                                                        className="login-button1 p-2 cursor-pointer hover:bg-violet-600 rounded-md  "
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        &nbsp;&nbsp;&nbsp;login&nbsp;&nbsp;&nbsp;
                                                    </motion.button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
export default Navbar