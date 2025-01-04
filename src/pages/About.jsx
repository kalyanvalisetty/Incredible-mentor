import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return(
    <div className="mx-3 sm:mx-[5%]">
        <div className="text-center text-2xl pt-10 text-gray-500">
          <p>ABOUT <span className="text-gray-700 font-semibold">US</span></p>
        </div>

        <div className="my-10 flex flex-col lg:flex-row gap-12">
          <img className="w-full lg:max-w-[460px] h-auto" src={assets.about_image} alt=""/>
          <div className="flex flex-col justify-center gap-6 lg:w-[50%] text-sm text-gray-600">
            <p>At Incredible Mentor, we believe that guidance from experienced professionals can transform dreams into reality. Our platform bridges the gap between ambitious students and industry experts, providing a space where knowledge meets opportunity.</p>
            <p>Whether you're a student seeking career advice, preparing for an important interview, or exploring a new field, Incredible Mentor is here to support your journey. Our mentors come from diverse industries and bring a wealth of experience to help you gain clarity, confidence, and the skills you need to succeed.</p>
            <b className="text-gray-800">Our Vision</b>
            <p>Our vision at Incredible Mentor: we offer personalized mentorship sessions, mock interviews, and career insights tailored to your unique goals. By connecting learners with leaders, we aim to empower the next generation to thrive in their chosen careers.</p>
            <p>Join us at Incredible Mentor and take the first step toward unlocking your true potential. Let's build a brighter future together!</p>
          </div>
        </div>
        
        <div className="text-xl my-4">
          <p>WHY  <span className="text-gray-700 font-semibold">CHOOSE US: </span></p>  
        </div>
        <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted IT professionals in your area.</p>
        </div>
          
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your Career.</p>
          </div>
        </div>
    </div>

  )
}

export default About