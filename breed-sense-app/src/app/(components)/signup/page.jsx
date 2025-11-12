"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

function Page() {
  const { register, handleSubmit, formState: { errors } } = useForm();
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

  const signup = async () => {
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-200 to-purple-300">
      <div className="w-[350px] h-[550px] rounded-3xl text-center bg-gradient-to-b from-purple-300 to-purple-100 shadow-lg">
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
            className="border-2 border-white m-2 w-56 rounded-[5px] pl-3 p-1 text-[16px] bg-gray-500 text-white hover:text-black cursor-pointer"
            type="submit"
            value="Sign Up"
          /> */}
        </form>
        <button className="border-2 border-purple-100 m-2 w-56 rounded-[9px] p-2 text-[16px] bg-gradient-to-l from-purple-400 to-purple-300 text-white cursor-pointer" onClick={signup} >
          {buttonDisabled ? "No Sign Up" : "Sign Up"}
        </button>

        <div className="mt-6">
          <p>Already have an account?</p>
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
  );
}

export default Page;
