import { useState } from "react"
import { assets } from "../assets/assets"

const MyProfile = () => {

  const[userData, setUserData] = useState({
    name:"Kalyan Valisetty",
    image: assets.profile_pic,
    email:"kalyan33633@gmail.com",
    phone:"+91 891598609",
    address: {
      line1:"17th Cross, Richmond",
      line2: "Circle, Ring Road, London"
    },
    gender:"Male",
    dob:"1999-01-03"
  })

  const [isEdit, setIsEdit] = useState(false)


  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm pt-5">
      <img className="w-36 rounded" src={userData.image} alt=""/>
      {
        isEdit?
        <input className="bg-gray-200 text-3xl p-1 font-medium max-w-60 mt-4" type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev, name:e.target.value}))}/>
        :<p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
        <hr className="bg-zinc-400 h-[1px] border-none"/>
        <div>
          <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-800">
            <p className="font-medium">Email id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {
              isEdit?
              <input className="bg-gray-200 max-w-52" type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev, phone:e.target.value}))}/>
              :<p className="text-blue-500">{userData.phone}</p>
            }
            <p className="font-medium">Address:</p>
            {
              isEdit?
              <p>
                <input className="bg-gray-200" type="text" value={userData.address.line1} onChange={e=>setUserData(prev=>({...prev, address:{...prev.address,line1: e.target.value}}))}/>
                <br/>
                <input className="bg-gray-200" type="text" value={userData.address.line2} onChange={e=>setUserData(prev=>({...prev, address:{...prev.address,line2: e.target.value}}))}/>
              </p>
              :<p className="text-gray-500">
                {userData.address.line1}
                <br/>
                {userData.address.line2}
                </p>
            }
            </div>
        </div>


        <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {
            isEdit?
            <select className="max-w-20 bg-gray-200" value={userData.gender} onChange={(e)=>setUserData(prev=>({...prev, gender:e.target.value}))}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            :<p className="text-gray-500">{userData.gender}</p>
          }
          <p className="font-medium">Birthday:</p>
          {
              isEdit?
              <input className="bg-gray-200 max-w-52" type="date" value={userData.dob} onChange={e=>setUserData(prev=>({...prev, dob:e.target.value}))}/>
              :<p className="text-gray-500">{userData.dob}</p>
            }
        </div>
        </div>

        
        <div className="mt-10">{
          isEdit?
          <button onClick={()=>setIsEdit(false)} className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Save Information</button>
          :
          <button onClick={()=>setIsEdit(true)} className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Edit</button>
          }
        </div>
    </div>
  )
}

export default MyProfile