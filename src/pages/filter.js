import React from "react"
import axios from 'axios'
import { useState,useEffect } from "react"
import PostStruct from "./PostStruct"
import './style.css'

const Filter=()=>{
    const [author,setAuthor]=useState('')
    const [sdate,setSdate]=useState('')
    const [edate,setEdate]=useState('')
    const [filteredPosts, setFilteredPosts] = useState([])

    const handleFilter=()=>{
        const searchquery={}
        searchquery.author=author
        searchquery.sdate=sdate
        searchquery.edate=edate
        axios.get('',).then((res)=>{
            setFilteredPosts(res.data)
        })
    }
    useEffect(()=>{
        handleFilter()
    },[])
    return (
        <>
        <div className="filter">
            <span>Filter By :</span>
            <span>Author :</span>
            <input type='text' value={author} placeholder="author" onChange={(e)=>setAuthor(e.target.value)}></input>
            <span>Start Date :</span>
            <input type='text' value={sdate} placeholder="date" onChange={(e)=>setSdate(e.target.value)}></input>
            <span>End Date :</span>
            <input type='text' value={edate} placeholder="date" onChange={(e)=>setEdate(e.target.value)}></input>
        </div>    
        {
            /*(filteredPosts).map(()=>{
                <PostStruct></PostStruct>
            }) */          
        }
        </>        
    )
}
export default Filter