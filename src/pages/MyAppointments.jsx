import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const MyAppointments = () => {

  const {mentors} = useContext(AppContext);
  return (
    <div>
      <p className="pb-3 mt-12 text-lg font-medium text-zinc-700 border-b">My appointments</p>
      <div>
        {mentors.slice(0,2).map((item,index)=>(
          <div key={index} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b">
            <div>
            <img className="w-36" src={item.image} alt=""/>
            </div>
          <div className="flex-1 text-sm text-zinc-600">
            <p className="text-neutral-800 font-semibold">{item.name}</p>
            <p>{item.speciality}</p>
            <p className="text-zinc-700 font-medium mt-1">Address:</p>
            <p className="text-xs">{item.address.line1}</p>
            <p className="text-xs">{item.address.line2}</p>
            <p className="text-sm mt-1"><span className="text-sm text-neutral-700 font-medium">Date &amp; Time:</span> 19 Dec 2024 |  07:00 PM</p>
          </div>


          <div className="flex flex-col gap-2 justify-end text-sm text-center">
            <button className="text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-green-400 hover:text-white transition-all duration-300">Pay Online</button>
            <button className="text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">Cancel appointment</button>
          </div>
      </div>
        ))}
      </div>
    </div>    
  )
}

export default MyAppointments