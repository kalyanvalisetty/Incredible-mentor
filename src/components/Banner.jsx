import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

const Banner = () => {
  const{setShowPopUp} = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:pl-14 md:pr-0 lg:pl-12 lg:pr-0 my-20 md:mx-10">
      {/*Left side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Mentors</p>
        </div>
        <button onClick={()=>setShowPopUp(true)} className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all" >Create Account</button>
      </div>

      {/*Right side */}
      <div className="hidden md:block md:w-3/4 lg:w-[470px] relative">
        <img className="w-full absolute bottom-0 right-0 max-w-lg" src={assets.appointment_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
