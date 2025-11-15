"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { motion } from 'framer-motion'
import Body from "@/Components/body/page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/Components/footer/page";
import Navbar from "@/app/(components)/navbar/page";

export default function Profile() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  // Fetch user from backend
  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => {
        setUsername(res.data.user.username);
        setEmail(res.data.user.email);
      })
      .catch(() => {
        router.push("/"); // Not logged in → go home
      });
  }, []);

  // Disable back button
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  // Logout
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const [showDiv, setShowDiv] = useState(false);
  const navlink = [
    { id: "Home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "contact", label: "Contact Us", href: "/contact" },
    { id: "opportunities", label: "Opportunities", href: "/opportunities" },
  ]


  return (
    <div>
      <Navbar />
      <Body />
      <Footer />

    </div>
  );
}
