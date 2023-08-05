import { createContext,useEffect,useState } from "react"
import axios from 'axios'

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [curuser,setCuruser]=useState(JSON.parse(localStorage.getItem('user')||null)) 

    const login = async(values)=>{
        const res = await axios.post('/users/sign_in',values)
        setCuruser(res.data)
    }
    const logout=async(values)=>{
        const res=await axios.post("/users/sign_out")
        setCuruser(null)
    }

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(curuser))},[curuser])
    
    return <AuthContext.Provider value={{curuser,login,logout}}>{children}</AuthContext.Provider>
    
}