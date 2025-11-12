"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

function page() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //  Define your onSubmit function
    const onSubmit = async (data) => {
        console.log("Form data:", data);
        // You can handle login logic here — like sending data to your API
    };
    const [errorMsg, setErrorMsg] = useState("");

    const router = useRouter()
    const [user, setuser] = useState({
        email: "",
        password: "",
    })
    const [buttondisabled, setbuttonDisabled] = useState(false)
    const [loading, setloading] = useState(false)
    // const login = async () => {
    //     try {
    //         setloading(true);
    //         const response = await axios.post("/api/users/login", user);
    //         console.log("Login successful:", response.data);
    //         router.push("/profile");
    //     } catch (error) {
    //         console.log("Login failed:", error.response?.data || error.message);
    //     } finally {
    //         setloading(false); // stop loading after request
    //     }
    // };
    const login = async () => {
        try {
            setloading(true);
            setErrorMsg("");

            const response = await axios.post("/api/users/login", user);
            console.log("Login successful:", response.data);

            router.push("/profile");
        } catch (error) {
            console.log("Login failed:", error.response?.data || error.message);

            //  Agar backend se email verify error aaya
            if (error.response?.data?.error) {
                setErrorMsg(error.response.data.error);
            } else {
                setErrorMsg("Something went wrong. Please try again.");
            }
        } finally {
            setloading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setbuttonDisabled(false)
        }
        else {
            setbuttonDisabled(true)
        }
    }, [user])

    return (
        <div className="w-100% bg-gradient-to-b from-sky-300 to-purple-50 flex justify-center ">
            <div className=" block ">
                <div className="box w-[350px] h-[500px]  mt-32 mb-32 rounded-3xl text-center bg-gradient-to-b from-sky-200 to-sky-300 shadow-lg">
                    <h1 className="font-bold text-2xl pt-4 pb-6 block ">Breed Sense </h1>
                    <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="email" className="text-lg text-shadow-xs font-serif">Email:</label>
                            <br />
                            {/* <input className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white  hover:text-black " placeholder='Email'  {...register("email", { minLength: { value: 7, message: "Min length of password is 7" }, })} type="email" /> */}
                            <input className="border-2 border-sky-300 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-white text-black  hover:text-black " type="email" id="email" value={user.email} placeholder="example@email.com" onChange={(e) => setuser({ ...user, email: e.target.value })} />

                            {errors.password && <div className='red'>{errors.password.message}</div>}
                            <br />
                            <label htmlFor="password" className="text-lg text-shadow-xs font-serif">Password:</label>
                            <br />
                            {/* <input className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white  hover:text-black " placeholder='Password'  {...register("password", { minLength: { value: 7, message: "Min length of password is 7" }, })} type="password" /> */}
                            <input className="border-2 border-sky-300 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-white text-black  hover:text-black " type="password" id="password" value={user.password} placeholder="Password" onChange={(e) => setuser({ ...user, password: e.target.value })} />
                            {errors.password && <div className='red'>{errors.password.message}</div>}
                            {/* <br />
                            <input className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white  hover:text-black " disabled={isSubmitting} type="submit" value="Login" />
                            {errors.myform && <div className='red'>{errors.myform.message}</div>}
                            {errors.blocked && <div className='red'>{errors.blocked.message}</div>} */}
                        </form>
                        <button className="border-2 border-sky-300 m-2 w-56 rounded-[9px] p-3 text-[16px] bg-sky-600 text-white  hover:text-black " onClick={login} >
                            {buttondisabled ? "No Login" : "Login"}
                        </button>
                        {errorMsg && <p className="text-red-600 mt-2 font-medium">{errorMsg}</p>}
                        <div className="flex flex-row items-center justify-center pt-2 w-full">
                            <hr className="border-sky-400 border-1 w-[45%]" />
                            <span className="mx-2 font-semibold text-sky-600 ">Or</span>
                            <hr className="border-sky-400 border-1 w-[45%]" />
                        </div>

                        <div className=" flex flex-col justify-center items-center">
                            <button
                                onClick={() => signIn("github")}
                                className="bg-gray-700 w-[220px] text-white p-2  rounded-lg m-1 hover:bg-black"
                            >
                                Sign in with GitHub
                            </button>
                            <button
                                onClick={() => signIn("google")}
                                className="bg-blue-500 w-[220px] text-white p-2 rounded-lg m-1 hover:bg-blue-700"
                            >
                                Sign in with Google
                            </button>
                        </div>
                        <p className="pt-2 text-black">Don’t have an account?  <Link href="/signup " className="text-sky-900" >Sign Up </Link> </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
