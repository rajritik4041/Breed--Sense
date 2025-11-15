"use client";
import Navbar from '@/app/(components)/navbar/page'
import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import Footer from "@/Components/footer/page";
import { div } from "framer-motion/client";

function Page() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [nomessage, setmessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/users/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setmessage({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message!");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-8  h-100% bg-gradient-to-b  from-purple-400 to-purple-200  ">
        <header className="text-4xl sm:text-7xl flex pb-8  justify-center text-purple-700 font-semibold">
          Contact Us
        </header>

        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 m-2">
          <div className="p-2 bg-gradient-to-b  from-purple-200 to-purple-50 rounded">

            <form action="" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label className="mt-3 ml-0.5 font-normal text-[18px]  " htmlFor="name">Name</label>
              <input
                className="border-2 mt-2 bg-white text-black  border-white p-2  hover:border-black rounded-[8px]"
                placeholder="Enter your username"
                {...register("name", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "Min length is 3" },
                  maxLength: { value: 8, message: "Max length is 8" },
                })}
                type="text"
                id="name"
                value={nomessage.name}
                onChange={(e) => setmessage({ ...nomessage, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500  ml-2 ">Name is required</p>}

              <label className="mt-3 ml-0.5 font-normal text-[18px]  " htmlFor="email">Email</label>
              <input {...register("email", { required: true })} type="email" className="border-2 mt-2  bg-white text-black  border-white p-2  hover:border-black rounded-[8px]" placeholder="eg. example@gmail.com" id="email" value={nomessage.email} onChange={(e) => setmessage({ ...nomessage, email: e.target.value })} />

              {errors.email && <p className="text-red-500  ml-2">Email is required</p>}
              <label className="mt-3 ml-0.5 font-normal text-[18px]  " htmlFor="subject">Subject</label>
              <input type="text" {...register("subject", { required: true })} className="border-2 mt-2 bg-white text-black   border-white p-2  hover:border-black rounded-[8px]" placeholder="Subject" id="subject" value={nomessage.subject} onChange={(e) => setmessage({ ...nomessage, subject: e.target.value })} />
              {errors.subject && <p className="text-red-500  ml-2">subject is required</p>}
              <label className="mt-3 ml-0.5 font-normal text-[18px]  " htmlFor="textbar">Message</label>
              <textarea name="message" {...register("message", { required: true })} className="border-2 mt-2 h-40  bg-white text-black   border-white p-2  hover:border-black rounded-[8px]" placeholder="Enter your message" id="message" value={nomessage.message} onChange={(e) => setmessage({ ...nomessage, message: e.target.value })} ></textarea>
              {errors.message && <p className="text-red-500  ml-2">Massage is required</p>}


              <button className="m-2 bg-purple-500 mt-8 w-52 p-2.5 px-6 font-bold text-white hover:bg-purple-700   rounded-2xl " >Send Message  </button>
            </form>
          </div>
          <div className="p-4  bg-gradient-to-b  from-purple-100 to-purple-50 rounded">
            <div className="flex  flex-col">
              <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }} className="bg-white rounded-2xl mt-4    p-4">
                <h1 className="font-bold text-2xl">Our Address</h1>
                <p>Mahamaya College of Agricultural Engineering & Technology, Akbarpur, Ambedkar Nagar, U.P. (224122)
                  Near Shiv Baba, Faizabad Marg</p>
                <div className="flex">
                  <h3 className="font-bold">Phone : </h3> <a href="tel:+919076611211" className="text-blue-600"> &nbsp; +91 9076611211 </a>
                </div>
                <div className="flex">
                  <h3 className="font-bold">Email&nbsp;  : </h3>  <a href="mailto:deanmcaet@gmail.com" className="text-blue-600"> &nbsp; deanmcaet@gmail.com</a>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }} className="bg-white rounded-2xl mt-4  p-4">
                <span className="text-2xl font-semibold  text-purple-600">For any query regarding website, contact here:</span>

                <p className="font-bold text-xl">Alpha Team </p>
                <div className="flex">
                  <h3 className="font-bold">Phone : </h3> <a href="tel:+919236134041" className="text-blue-600"> &nbsp; +91 9236134041 </a>
                </div>
                <div className="flex">
                  <h3 className="font-bold">Email&nbsp;  : </h3>  <a href="mailto:rajritik.4041@gmail.com" className="text-blue-600">
                    &nbsp; rajritik.4041@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }} className="bg-white rounded-2xl mt-4  p-4">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.893489706102!2d82.4931548!3d26.459162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399093cbf6ffffff%3A0xe886e928b8f0a1e7!2sMahamaya%20College%20of%20Agricultural%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1763095341882!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />



              </motion.div>
              <div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
