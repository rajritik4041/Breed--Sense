"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

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
      setloading(true);
      const response = await axios.post("/api/users/signup", data);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setbuttonDisabled(false)
    }
    else {
      setbuttonDisabled(true)
    }
  }, [user])
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-purple-200 to-purple-300">
        <div className="w-[350px] h-[650px] rounded-3xl text-center bg-gradient-to-b from-purple-300 to-purple-100 shadow-lg">
          <h1 className="font-bold text-white text-2xl pt-4 pb-6">Breed Sense</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="border-2 border-purple-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
              placeholder="Enter your username"
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
              className="border-2 border-purple-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
              placeholder="Phone number"
              {...register("number", {
                required: { value: true, message: "Phone number is required" },
                minLength: { value: 10, message: "Min length is 10 digits" },
                maxLength: { value: 10, message: "Max length is 10 digits" },
              })}
              type="number"
              id="number"
              value={user.number}
              onChange={(e) => setuser({ ...user, number: e.target.value })}
            />
            {errors.phone && <div className="text-red-700">{errors.phone.message}</div>}

            <input
              className="border-2 border-purple-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
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
              className="border-2 border-purple-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
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
              className="border-2 border-purple-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
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
            <input
              className="border-2 border-purple-100 m-1 w-56 rounded-[9px] p-2 text-[16px] bg-gradient-to-l from-purple-400 to-purple-300 text-white cursor-pointer"
              type="submit"
              value={buttonDisabled ? "No Sign Up" : "Sign Up"}
              onClick={signup}
            />
          </form>
          <div className="flex flex-row items-center justify-center w-full">
            <hr className="border-purple-600 border-1 w-[45%]" />
            <span className="mx-2 font-semibold text-purple-800">or</span>
            <hr className="border-purple-600 border-1 w-[45%]" />
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
          <br />
          <p>Already registered? <span className="text-sky-600"> &nbsp;&nbsp;Log In</span></p>

        </div>

      </div>

    </div>
  );
}

export default Page;