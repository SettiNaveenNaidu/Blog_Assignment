import React,{useEffect, useState} from "react";
import axios from 'axios'
import './style.css'
import PostStruct from "./PostStruct"

const Userposts=()=>{
    const [userposts,setUserposts]=useState([])

    useEffect(()=>{
        const res= axios.get('/api/articles/:id')
        const posts=res.data
        setUserposts(posts)       
    },[])

    return (
        <div>
            <span>User Posts</span>
            {userposts.map((post)=>{

                <PostStruct ></PostStruct>
            })}
        </div>
    )
}
export default Userposts

