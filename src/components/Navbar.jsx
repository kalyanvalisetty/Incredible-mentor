import { React, useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";

const Navbar = () => {

  const navigate = useNavigate();

  const{setShowPopUp} = useContext(AppContext);
  const [showMenu, setshowMenu] = useState(false);
  const [token, settoken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-5 border-b border-b-gray-400 mb-4">
      <NavLink to="/">
        <img className="w-40 cursor-pointer" src={assets.logo} />
      </NavLink>
      <ul className="hidden md:flex items-start gap-5 font-medium text-gray-500">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/mentors">
          <li className="py-1">ALL MENTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-10 rounded-full"
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p className="hover:text-black cursor-pointer" onClick={() => navigate("/my-profile")}>My Profile</p>
                <p className="hover:text-black cursor-pointer" onClick={() => navigate("/my-appointments")}>My Appointments</p>
                <p className="hover:text-black cursor-pointer" onClick={() => settoken(false)}>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={()=>setShowPopUp(true)}
            className="bg-primary flex flex-col md:flex-row text-white px-8 py-3 rounded-full"
          >
            <span>Create</span><span>Account</span>
          </button>
        )}
        <img onClick={()=>setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon}/>
      </div>

       {/**Side Bar menu for small screens */}
       <div className={`md:hidden z-20 top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${showMenu?'fixed w-full':'h-0 w-0'}`}>
  
            <div className="flex items-center justify-between px-5 py-6">
                <img className="w-36" src={assets.logo} alt="logo"/>
                <img onClick={()=>setshowMenu(false)} className="w-7" src={assets.cross_icon} alt="close"/>
            </div>

            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-gray-500">
            <NavLink onClick={()=>setshowMenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
            <NavLink onClick={()=>setshowMenu(false)} to="/mentors"><p className="px-4 py-2 rounded inline-block">ALL MENTORS</p></NavLink>
            <NavLink onClick={()=>setshowMenu(false)} to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
            <NavLink onClick={()=>setshowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
            </ul>

      </div>
    </div>
  );
};

export default Navbar;
