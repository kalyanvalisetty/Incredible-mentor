import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";


const Mentors = () => {
  const {speciality} = useParams();
  const {mentors} = useContext(AppContext);
  const [filteredmentors, setFilteredmentors] = useState([]);
  const [showfilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>applyFilter(),[mentors,speciality])

  const applyFilter = () =>{
    if(speciality){
      setFilteredmentors(mentors.filter((item)=>item?.speciality === speciality));
    }
    else{
      setFilteredmentors(mentors);
    }
  }  

  return (
    <div>
      <p className='text-gray-600'>
        Browse through the Mentors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button onClick={()=>setShowFilter(prev=>!prev)} className={`flex items-center px-3 py-1 rounded border text-sm transition-all sm:hidden ${showfilter?'bg-primary text-white':''}`}><span>Filter</span><img className="w-4 ml-1" src={assets.filter_icon} alt="filter"/></button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showfilter?'flex':'hidden sm:flex'}`}>
          <p onClick={()=>speciality=="Frontend Developer"?navigate('/mentors'): navigate('/mentors/Frontend Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="Frontend Developer"?"bg-primary text-white":""}`}>Frontend Developer</p>
          <p onClick={()=>speciality=="Backend Developer"?navigate('/mentors'): navigate('/mentors/Backend Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="Backend Developer"?"bg-primary text-white":""}`}>Backend Developer</p>
          <p onClick={()=>speciality=="Data Scientist"?navigate('/mentors'): navigate('/mentors/Data Scientist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="Data Scientist"?"bg-primary text-white":""}`}>Data Scientist</p>
          <p onClick={()=>speciality=="Full Stack Developer"?navigate('/mentors'): navigate('/mentors/Full Stack Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="Full Stack Developer"?"bg-primary text-white":""}`}>Full Stack Developer</p>
          <p onClick={()=>speciality=="QA Engineer"?navigate('/mentors'): navigate('/mentors/QA Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="QA Engineer"?"bg-primary text-white":""}`}>QA Engineer</p>
          <p onClick={()=>speciality=="Data Engineer"?navigate('/mentors'): navigate('/mentors/Data Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="Data Engineer"?"bg-primary text-white":""}`}>Data Engineer</p>
          <p onClick={()=>speciality=="UI-UX Engineer"?navigate('/mentors'): navigate('/mentors/UI-UX Engineer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality=="UI-UX Engineer"?"bg-primary text-white":""}`}>UI/UX Engineer</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-2 sm:px-0'>
            {filteredmentors.map((item, index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt=''/>
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Mentors