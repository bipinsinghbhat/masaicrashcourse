import { createContext, useState } from "react";

export const AuthContext=createContext()


const AuthProvider=({children})=>{

     const [isAuth,setIsAuth]=useState(false)
     const [token,setToken]=useState("")
    
     const login=({payload})=>{
          setIsAuth(true)
          setToken(payload)
     }

     const logout=()=>{
         setIsAuth(false)
         setToken("")
     }

     
     return (
         <AuthContext.Provider value={{login,logout,isAuth,setIsAuth}}>
              {children}
         </AuthContext.Provider>
     )
}

export default AuthProvider;