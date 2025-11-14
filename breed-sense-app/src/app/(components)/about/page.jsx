"use client"
import { div } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/Components/footer/page'
import Navbar from '@/Components/Header/page'

function page() {
  return (
    <div className="bg-gradient-to-b  from-purple-200 to-purple-50  ">
      <Navbar />
      <div className=" justify-center  items-center text-center my-8 mx-4 ">
        <div className="header">

          <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">About BreedSense</h1>

          <p className="text-justify mb-3"> BreedSense is an intelligent, image-based breed recognition platform designed to transform livestock
            management and conservation in India. By harnessing the power of artificial intelligence, computer vision,
            and data analytics, BreedSense enables accurate identification of indigenous cattle and buffalo breeds—such
            as Gir, Sahiwal, Murrah, Mehsana, and many more—directly from images.
          </p>
          <p className="text-justify mb-3">
            India’s livestock ecosystem is rich in diversity, yet farmers and officials often struggle with breed
            identification due to limited access to expert knowledge. Incorrect identification can lead to
            inefficiencies in breeding programs, inaccurate productivity assessment, and misallocation of government
            subsidies. BreedSense directly addresses these challenges through automation, transparency, and
            accessibility.
          </p>

          <p className="text-justify mb-3"> At its core, BreedSense functions as a mobile and web-based application that allows users to upload or
            capture a photo and instantly receive breed predictions powered by deep learning models. The system provides
            comprehensive breed information, including origin, physical traits, milk yield, and disease resistance,
            while supporting geo-tagging for monitoring regional breed distribution. Additionally, its multilingual
            interface ensures ease of use across India’s diverse rural communities.
          </p>
          <p className="text-justify mb-3"> The mission of BreedSense is to democratize access to livestock intelligence by integrating advanced AI
            models into everyday agricultural practices. The platform promotes transparency, inclusivity, and innovation
            by reducing reliance on manual verification and expert intervention. For farmers, it simplifies
            decision-making and record-keeping; for government agencies, it enhances livestock census accuracy and
            policy formulation; and for researchers, it enables large-scale data collection for breed conservation.
          </p>

          <p className="text-justify mb-3">Technically, BreedSense leverages Convolutional Neural Networks (CNNs) and transfer learning architectures
            such as ResNet, EfficientNet, and MobileNet for accurate and lightweight deployment. The backend, powered by
            Flask/FastAPI, integrates seamlessly with a user-friendly frontend built using React Native for mobile and
            web accessibility. To ensure usability in low-connectivity areas, the platform supports offline inference
            through TensorFlow Lite and ONNX models.
          </p>
          <p className="text-justify mb-3">By combining advanced AI with user-centric design, BreedSense provides a scalable foundation for future
            enhancements, including disease detection, milk yield prediction, and livestock marketplace integration. It
            can also integrate with national e-governance initiatives like the Rashtriya Gokul Mission, aligning with
            India’s vision of smart and sustainable agriculture.
          </p>
          <p className="text-justify mb-3">BreedSense stands at the intersection of technology, agriculture, and innovation, working to create a future
            where every farmer has access to intelligent, reliable, and affordable livestock solutions.</p>
        </div>


        <div className="origin">

          <h3 className="text-2xl md:text-4xl font-bold text-purple-800 mb-3">The Origin Story</h3>

          <p className="text-justify mb-3">
            BreedSense was conceptualized with a clear understanding of India’s agricultural challenges—farmers rely
            heavily on indigenous cattle and buffalo breeds, yet lack accessible tools for correct identification and
            management. The founders witnessed how misidentification affected breeding outcomes, productivity, and
            eligibility for government support, leading to widespread inefficiencies.</p>
          <p className="text-justify mb-3">Recognizing the power of artificial intelligence and computer vision, the team set out to develop a system
            that could make breed recognition as simple as taking a photo. The goal was to bridge the gap between
            traditional farming knowledge and modern technology, ensuring that even farmers in remote areas could
            benefit from AI without requiring technical expertise.
          </p>
          <p className="text-justify mb-3">What started as a research concept soon evolved into a mission—to empower farmers, support government
            initiatives, and preserve India’s livestock heritage through digital innovation. This vision became the
            foundation of BreedSense.</p>
        </div>




        <div className="visiosion">

          <h2 className="text-3xl  font-bold text-purple-800 mb-4">

            Our Vision and Mission
          </h2>
          <h4 className="text-2xl font-bold text-purple-600  mb-3">Our Vision:</h4>
          <p className="text-justify mb-3">To make breed recognition intelligent, transparent, and universally accessible—empowering India’s livestock
            ecosystem through data-driven decisions, AI technology, and sustainable practices.</p>

          <h4 className="text-2xl font-bold text-purple-600  mb-3">Our Mission:</h4>
          Empower Farmers: Provide a simple tool to identify breeds, track productivity, and manage livestock
          efficiently. <br />
          Support Governance: Assist government bodies in livestock census, breed conservation, and subsidy planning.
          <br />
          Promote Heritage: Preserve and document India’s indigenous cattle and buffalo breeds through digital records.
          <br />
          Advance Innovation: Integrate AI, data analytics, and mobile technology to solve real-world agricultural
          challenges.
          <br />
          Ensure Accessibility: Offer multilingual, offline, and user-friendly features for inclusive participation
          across regions.
        </div>

        <br />

        <div className="creator">

          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-3">

            About the Creator
          </h2>

          <p className="text-justify mb-3">
            we are a team of six passionate innovators,names are<b> Raj Ritik , Piyush , Aman , Dinesh , Garima ,
              Janavhi ,</b>  the creators of BreedSense. we started this project with the goal of combining artificial
            intelligence with agriculture to create a lasting impact on rural livelihoods. Inspired by India’s vast
            diversity of indigenous cattle and buffalo breeds, I wanted to build a platform that makes breed recognition
            simple, transparent, and accessible to everyone—from farmers to researchers.
          </p>
          <p className="text-justify mb-3">With a passion for technology and innovation, I envision BreedSense as more than just a recognition tool—it’s
            a step toward digital empowerment in agriculture, driving awareness, efficiency, and sustainability for the
            livestock sector of India.</p>
        </div>

        <div >

          <motion.button
            className="login-button1 p-2 bg-purple-400    hover:bg-purple-600  rounded-md  "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/contact">&nbsp;&nbsp;&nbsp;Contact Creater&nbsp;&nbsp;&nbsp;</Link>
          </motion.button>
        </div>


      </div >
      <Footer />
    </div >
  )
}

export default page