"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/Header/page";
import { jwtDecode } from "jwt-decode";


export default function Profile() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");

  // Get username from token
 useEffect(() => {
    axios.get("/api/users/me").then(res => {
    setUsername(res.data.username);
    setemail(res.data.email);
  });
  const token=document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  console.log("TOKEN =", token);

  if (token) {
    const decoded = jwtDecode(token);
    console.log("DECODED TOKEN =", decoded);  // 👈 CHECK THIS

    setUsername(decoded.username);
    setemail(decoded.email);
  }
}, []);


  // Disable back button
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  // Logout
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/"); // 👈 Correct page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome, {username}</h1>
      <h1>Welcome, {email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
