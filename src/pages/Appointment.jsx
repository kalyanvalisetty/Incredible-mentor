import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import Related from '../components/Related';

const Appointment = () => {
  const {mentorsID} = useParams();
  const {mentors, currency} = useContext(AppContext);
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

  const [mentorInfo, setMentorInfo] = useState(null);
  const [mentorSlots, setMentorSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  useEffect(()=>{fetchMentorInfo()},[mentors,mentorsID])
  useEffect(()=>{getAvailableSlots()},[mentorInfo])

  const getAvailableSlots = async() =>{
      setMentorSlots([])

      //getting Current date
      let today = new Date()
      for(let i=0; i<7; i++){
        //getting date with Index
        let currentDate = new Date(today)
        currentDate.setDate(today.getDate()+i)

        //setting end time of the date with index
        let endTime = new Date()
        endTime.setDate(today.getDate()+i)
        endTime.setHours(21,0,0,0)

        //setting Hours
        if(today.getDate()==currentDate.getDate()){
          currentDate.setHours(currentDate.getHours()>10? currentDate.getHours()+1:10)
          currentDate.setMinutes(currentDate.getMinutes()>30? 30:0)
        }else{
          currentDate.setHours(10)
          currentDate.setMinutes(0)
        }
        
        let timeSlots = []

        while(currentDate<endTime){
          let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})

          //add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })

          //Increment current time by 30 minute
          currentDate.setMinutes(currentDate.getMinutes()+30)
        }
        setMentorSlots(prev=>([...prev, timeSlots]))
      }
  }
  
  const fetchMentorInfo = async()=>{
    const mentorInfo = mentors.find((item)=>item?._id==mentorsID);
    setMentorInfo(mentorInfo);
  }


  return mentorInfo && (
    <div>
      {/*Mentors Details*/}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
         <img className='w-full sm:max-w-72 rounded-lg' src={mentorInfo.image} alt="mentorimg" />
        </div>

      <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        {/*Name, degree, speciality and experience*/}
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{mentorInfo.name}
          <img className='w-5' src={assets.verified_icon} alt="verified"/></p>
        <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
          <p>{mentorInfo.degree} - {mentorInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full'>{mentorInfo.experience}</button>
        </div>

        {/*Mentors About*/}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt=""/></p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{mentorInfo.about}</p>
        </div>
        <p className="text-gray-600 font-medium mt-4">Appointment Fee: 
          <span className="text-gray-800 ml-1">{currency} {mentorInfo.fees}</span></p>
      </div>
      </div>

      {/**Booking Slots */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
         <p>Booking Slots</p>
         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 p-1'>
          {mentorSlots.length && mentorSlots.map((item,index)=>(
            <div onClick={()=>setSlotIndex(index)} className={`text-center py-2 px-6 min-w-16 rounded-xl cursor-pointer ${slotIndex == index ? 'bg-primary text-white':'border border-gray-400'}`} key={index}>
                <p className='text-xs'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p className='text-lg'>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
         </div>
         <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 p-1'>
         {mentorSlots.length && mentorSlots[slotIndex].map((item,index)=>(
                <p onClick={()=>setSlotTime(item.time)}  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-xl cursor-pointer ${item.time == slotTime ? 'bg-primary text-white':'border border-gray-400'}`}
                key={index}>
                  {item.time.toLowerCase()}
                </p>
          ))}
         </div>
         <button className='bg-primary text-white text-sm font-light px-6 py-3 rounded-xl my-6'>
          Book an Appointment</button>
      </div>
      
      <Related mentorsID={mentorsID} speciality={mentorInfo.speciality}/>
    </div>
  )
}

export default Appointment