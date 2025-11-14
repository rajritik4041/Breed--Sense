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
import Link from "next/link";
import { motion } from 'framer-motion'
import  Body  from "@/Components/body/page"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/Components/footer/page";

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
      {/* <Navbar />

      <h1>Welcome, {username}</h1>
      <h1>Your Email: {email}</h1>

      <button onClick={logout}>Logout</button> */}

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


          <div className="hidden md:flex text-white font-bold">
            <div className="bg-violet-500 m-2 rounded-md ">

            </div>
            <div className="m-2 p-1 pl-2.5 pr-2.5 bg-violet-500  rounded-md ">
              Welcome, &nbsp;{username}
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
                <div className="  bg-white  absolute top-16 right-0 pr-1  ">
                  <h1 className=" m-1 pl-5 pr-2 shadow hover:shadow-lg pb- pt-3 block" href="/">welcome  <br /> {username} </h1>
                  <h1 className=" m-1 pl-5 pr-2 shadow hover:shadow-lg pb- pt-3 block" href="/">Email : <br /> {email} </h1>
                  <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block" href="/">Home</Link>
                  <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block " href="/about">About</Link>
                  <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block" href="/contact">Contact Us</Link>
                  <Link className=" m-1 pl-5 shadow hover:shadow-lg pb-2 pt-3 block" href="/opportunities">Oppertunities </Link>
                  <div className="flex p-2.5 m-1 justify-center   shadow hover:shadow-lg ">

                    <div className=" bg-violet-500  rounded-md ">
                      <motion.button
                        className="login-button1 pl-4 pb-2 pt-2 pr-4   hover:bg-violet-600  rounded-md  "
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={logout}
                      >
                        Logout
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

            <Body />
            <Footer />

    </div>
  );
}
