"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"

function Page() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signup(data);
  };
  const router = useRouter()
  const [user, setuser] = useState({
    email: "",
    password: "",
    number: "",
    username: ""
  })

  const [buttonDisabled, setbuttonDisabled] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const signup = async (data) => {
  try {
    setLoading(true);
    const response = await axios.post("/api/users/signup", data);
    console.log("Signup success", response.data);
    router.push("/login");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // backend se error message show karo
      setErrorMsg(error.response.data.error); // "Email already in use" ya "Phone number already in use"
    } else {
      setErrorMsg("Something went wrong. Please try again!");
    }
  } finally {
    setLoading(false);
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
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-sky-200 to-sky-300">
        <div className="w-[350px] h-[680px]  rounded-3xl text-center bg-gradient-to-b from-sky-300 to-sky-100 shadow-lg">
          <h1 className="font-bold  text-white text-2xl pt-4 pb-6">Breed Sense</h1>

          <form  onSubmit={(e) => { e.preventDefault(); signup(user); }} >
            <input
              className="border-2 border-sky-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
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
            {errors.username && <div className="flex pl-16 pt-0 pb-0.5  text-red-700">{errors.username.message}</div>}

            <input
              className="border-2 border-sky-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
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
            {errors.number && <div className=" text-red-700 flex pl-16 pt-0 pb-0.5 ">{errors.number.message}</div>}

            <input
              className="border-2 border-sky-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
              placeholder="Email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setuser({ ...user, email: e.target.value })}
            />
            {errors.email && <div className="text-red-700 flex pl-16 pt-0 pb-0.5 ">{errors.email.message}</div>}

            <input
              className="border-2 border-sky-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
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
            {errors.password && <div className="text-red-700 flex pl-16 pt-0 pb-0.5 ">{errors.password.message}</div>}
            <input
              className="border-2 border-sky-100 m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-100 hover:text-black"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
            />
            {errors.confirmPassword && (
              <div className="text-red-700 flex pl-16 pt-0 pb-0.5 ">{errors.confirmPassword.message}</div>
            )}
            <button className="border-2 border-sky-100 m-1 w-56 rounded-[9px] p-2 text-[16px] bg-gradient-to-l from-sky-400 to-sky-300 text-white cursor-pointer" type="submit" disabled={loading}>{loading ? "Signing up..." : "Sign Up"}</button>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
          </form>
          <p>Already registered? <Link href="/login" className="text-blue-800" >Log In </Link> </p>

        </div>

      </div>

    </div>
  );
}

export default Page;