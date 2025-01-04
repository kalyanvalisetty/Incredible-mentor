import React from "react";
import {Routes, Route} from "react-router";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import MyAppointments from "./pages/MyAppointments"
import MyProfile from "./pages/MyProfile"
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Mentors from "./pages/Mentors";
import Footer from "./components/Footer";
import Error from "./pages/Error";

const App = () => {
  return <div className="mx-3 sm:mx-[10%]">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mentors" element={<Mentors/>}/>
      <Route path="/mentors/:speciality" element={<Mentors/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/my-profile" element={<MyProfile/>}/>
      <Route path="/my-appointments" element={<MyAppointments/>}/>
      <Route path="/appointment/:mentorsID" element={<Appointment/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    <Login/>
    <Footer/>
  </div>;
}

export default App;
