import React,{useState,useEffect} from "react";
import axios from 'axios'
import './style.css'

const Profilepage=({match})=>{
    const [userdata,setUserdata]=useState()
    useEffect(()=>{
        const res=axios.get()
        const profile=res.data
        setUserdata(profile)
    },[])

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name:{}</p>
        </div>
    )
}

export default Profilepage