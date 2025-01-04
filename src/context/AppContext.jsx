import { createContext, useState } from "react";
import {mentors} from '../assets/assets'

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const[showPopUp, setShowPopUp] = useState(false);
    const currency = '₹';
    const value = {mentors, currency,showPopUp, setShowPopUp}
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider