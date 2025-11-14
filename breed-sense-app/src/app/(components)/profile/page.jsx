// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "@/Components/Header/page";
// import { jwtDecode } from "jwt-decode";

// export default function Profile() {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [email, setemail] = useState("");

//   // Get username from token
//  useEffect(() => {
//     axios.get("/api/users/me").then(res => {
//     setUsername(res.data.username);
//     setemail(res.data.email);
//   });
//   const token=document.cookie
//     .split("; ")
//     .find((row) => row.startsWith("token="))
//     ?.split("=")[1];

//   console.log("TOKEN =", token);

//   if (token) {
//     const decoded = jwtDecode(token);
//     console.log("DECODED TOKEN =", decoded);  

//     setUsername(decoded.username);
//     setemail(decoded.email);
//   }
// }, []);


//   // Disable back button
//   useEffect(() => {
//     window.history.pushState(null, "", window.location.href);
//     window.onpopstate = function () {
//       window.history.pushState(null, "", window.location.href);
//     };
//   }, []);

//   // Logout
//   const logout = async () => {
//     try {
//       await axios.get("/api/users/logout");
//       router.push("/"); //Correct page
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <h1>Welcome, {username}</h1>
//       <h1>Welcome, {email}</h1>
//       <button onClick={logout}>Logout</button>
//     </div>
//   );
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "@/Components/Header/page";

// export default function Profile() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get("/api/users/me")
//       .then(res => setUser(res.data.user))
//       .catch(() => router.push("/"));
//   }, []);

//   if (!user) return <h1>Loading...</h1>;

//   return (
//     <div>
//       <Navbar />
//       <h1>Username: {user.username}</h1>
//       <h1>Email: {user.email}</h1>

//       <button onClick={async () => {
//         await axios.get("/api/users/logout");
//         router.push("/");
//       }}>
//         Logout
//       </button>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/Components/Header/page";

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

  return (
    <div>
      <Navbar />

      <h1>Welcome, {username}</h1>
      <h1>Your Email: {email}</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
