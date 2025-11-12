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

    const router = useRouter()
    const [user, setuser] = useState({
        email: "",
        password: "",
    })
    const [buttondisabled, setbuttonDisabled] = useState(false)
    const [loading, setloading] = useState(false)
    const login = async () => {
        try {
            setloading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login successful:", response.data);
            router.push("/profile");
        } catch (error) {
            console.log("Login failed:", error.response?.data || error.message);
        } finally {
            setloading(false); // stop loading after request
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

                        <div className="mt-2">
                            <div className="or">

                                <h1> OR </h1>
                            </div>

                            <p className="text-lg font-serif pt-2">Already have an account?</p>
                            <button
                                onClick={() => signIn("github")}
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg m-2 hover:bg-black"
                            >
                                Sign in with GitHub
                            </button>
                            <button
                                onClick={() => signIn("google")}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-700"
                            >
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
