import { useContext, useState } from "react"
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useFormik } from "formik";


const Login = () => {
  const {showPopUp, setShowPopUp} = useContext(AppContext);
  
  const initialValues = {
    fullname:"",
    email:"",
    password:""
  }

  const validate = (value) =>{
    let errors = {};
    if(!value.fullname){
      errors.fullname = "Required"
    }
    if(!value.email){
      errors.email = "Required"
    }
    if(!value.password){
      errors.password = "Required"
    }
    return errors;
  }

  const onSubmit = (value) =>{
    console.log("Form submitted", value);
  }

  const formik = useFormik({initialValues, validate, onSubmit})

  const [state, setState] = useState('Sign Up');

  const onSubmitHandler = async (event)=>{
    event.preventDefault()
  }
  
  return (
    <div className={`${showPopUp?'block':'hidden'}`}>
      <form onSubmit={formik.handleSubmit} className="bg-[rgba(0,0,0,0.63)] fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="bg-white flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <div className="w-full flex justify-between">
        <p className="text-2xl font-semibold">{state==='Sign Up'?"Create Account":"Login"}</p>
        <img onClick={()=>setShowPopUp(false)} className="w-8 cursor-pointer" src={assets.cross_icon} alt="close"/>
        </div>
        <p>Please {state==='Sign Up'?"sign up":"log in"} to book appintment</p>
        <div className={`w-full ${state==='Sign Up'?"block":"hidden"}`}>
          <p>Full Name</p>
          <input name="fullname" className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullname}/>
          <p className="text-red-500 mt-1">{formik.touched.fullname && formik.errors.fullname?formik.errors.fullname:""}</p>
        </div>
        <div className="w-full">
          <p>Email</p>
          <input name="email" className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={formik.handleChange}  onBlur={formik.handleBlur}value={formik.values.email}/>
          <p className="text-red-500 mt-1">{formik.touched.email && formik.errors.email?formik.errors.email:""}</p>
        </div>
        <div className="w-full">
          <p>Password</p>
          <input name="password" className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={formik.handleChange}  onBlur={formik.handleBlur}value={formik.values.password}/>
          <p className="text-red-500 mt-1">{formik.touched.password && formik.errors.password?formik.errors.password:""}</p>
        </div>
        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base">{state==='Sign Up'?"Create Account":"Login"}</button>
        {
          state==='Sign Up'?
          <p>Already have an account? <span onClick={()=>setState('Log in')} className="text-blue-500 underline cursor-pointer">Login here</span></p>:
          <p>Create an new account? <span onClick={()=>setState('Sign Up')} className="text-blue-500 underline cursor-pointer">Click here</span></p>
        }
      </div>
      </form>
    </div>
  )
}

export default Login