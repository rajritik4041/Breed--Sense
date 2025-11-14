"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/Header/page";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Fetch REAL USER from DB using token
  useEffect(() => {
    axios.get("/api/users/me")
      .then(res => {
        setUser(res.data.user);  // user = { id, username, email }
      })
      .catch(() => {
        router.push("/");        // Not logged in → redirect
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

  if (!user) return <h1>Loading...</h1>;

  return (
    <div>
      <Navbar />
      <h1>Username: {user.username}</h1>
      <h1>Email: {user.email}</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
