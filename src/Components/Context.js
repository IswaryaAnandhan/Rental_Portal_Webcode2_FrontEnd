import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserProvider = ({children})=>{
    const[CartItems,setCartItems]=useState([]);
    return<UserContext.Provider value={{CartItems,setCartItems}}>{children}</UserContext.Provider>
}