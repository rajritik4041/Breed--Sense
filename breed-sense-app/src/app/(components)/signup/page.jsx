"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { link } from 'framer-motion/client';

function Page() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [user, setuser] = useState({
    email: "",
    password: "",
    number: "",
    username: ""
  })

  const [buttonDisabled, setbuttonDisabled] = useState(false)

  const signup = async (data) => {
    try {
      setloading(true)
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login")
    }
    catch (error) {
      console.log("Signup failed", error)
    }
    finally {
      setloading(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setbuttonDisabled(false)
    }
    else {
      setbuttonDisabled(true)
    }
  }, [user])
  return (

    // <div className="w-100% bg-sky-300  h-screen flex justify-center ">
    //   <div className=" block ">
    <div className="flex flex-col h-screen justify-center items-center  bg-sky-500 ">
      <div className="w-[350px] h-[650px] rounded-3xl text-center bg-sky-300 shadow-lg">
        <h1 className="font-bold text-2xl pt-6 pb-4">Breed Sense</h1>

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border-2 border-sky-500 m-2 w-56 rounded-[5px] pl-3  text-[20px] bg-white text-black hover:text-black"
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "Min length is 3" },
              maxLength: { value: 8, message: "Max length is 8" },
            })}
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setuser({ ...user, username: e.target.value })}
          />
          {errors.username && <div className="text-red-700">{errors.username.message}</div>}

          <input
            className="border-2 border-sky-500 m-2 w-56 rounded-[5px] pl-3 text-[20px] bg-white text-black hover:text-black"
            placeholder="Phone number"
            {...register("number", {
              required: { value: true, message: "Phone number is required" },
              minLength: { value: 10, message: "Min length is 10 digits" },
            })}
            type="number"
            id="number"
            value={user.number}
            onChange={(e) => setuser({ ...user, number: e.target.value })}
          />
          {errors.number && <div className="text-red-700">{errors.number.message}</div>}

          <input
            className="border-2 border-sky-500 m-2 w-56 rounded-[5px] pl-3  text-[20px] bg-white text-black hover:text-black"
            placeholder="Email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          />
          {errors.email && <div className="text-red-700">{errors.email.message}</div>}

          <input
            className="border-2 border-sky-500 m-2 w-56 rounded-[5px] pl-3 text-[20px]   bg-white text-balck hover:text-black"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: { value: 7, message: "Min length is 7" },
            })}
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          />
          {errors.password && <div className="text-red-700">{errors.password.message}</div>}
          <input
            className="border-2 border-sky-500 m-2 w-56 rounded-[5px] pl-3  text-[20px] bg-white text-black hover:text-black"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            type="password"
          />
          {errors.confirmPassword && (
            <div className="text-red-700">{errors.confirmPassword.message}</div>
          )}

          <button type="submit" className="border-2 border-sky-500 hover:border-blue-600  m-2 w-56 rounded-[10px] p-2  text-[20px] bg-sky-500 text-white hover:text-black hover:bg-blue-600  cursor-pointer" onClick={signup} >
            {buttonDisabled ? "No Sign Up" : "Sign Up"}
          </button>
        </form>
        <div className="flex flex-row items-center justify-center w-full">
          <hr className="border-sky-600 border-1 w-[45%]" />
          <span className="mx-2 text-balck text-[20px]">or</span>
          <hr className="border-sky-600 border-1 w-[45%]" />
        </div>


        <div className="mt-2">
          <button
            onClick={() => signIn("github")}
            className="bg-gray-700 text-white border-black p-2 w-[222px] text-[20px] rounded-lg m-2 cursor-pointer hover:bg-black"
          >
            Sign in with GitHub
          </button>
          <button
            onClick={() => signIn("google")}
            className="bg-white text-black p-2 border-white  w-[222px] text-[20px] rounded-lg cursor-pointer  hover:bg-blue-700"
          >
            Sign in with Google
          </button>
        </div>
        <br />
        <div>
          Already registered? <Link className="text-blue-800 font-serif " href="/login">Log In</Link>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

export default Page;
 {/* <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: { value: 7, message: "Min length is 7" },
            })}
            type="password"
              id="password"
              value={user.password}
            onChange={(e) => setuser({ ...user, password: e.target.value })}
          />
          {errors.password && <div className="text-red-700">{errors.password.message}</div>}

          <input
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-400 text-white hover:text-black"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: { value: true, message: "Confirm your password" },
              })}
              type="password"
              id="confirm"
              value={user.confirm}
              onChange={(e) => setuser({ ...user, confirm: e.target.value })}
          />
          {errors.confirmPassword && <div className="text-red-700">{errors.confirmPassword.message}</div>} */}

          {/* <input
                className="border-2 border-sky-500 m-2 w-56 rounded-[10px] p-2 text-[20px] bg-sky-500 text-white hover:text-black cursor-pointer" onClick={signup}
                type="submit"
                value="Sign Up"
              /> */}