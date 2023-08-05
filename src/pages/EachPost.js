import React, { useEffect, useState,useContext } from "react"
import { Navigate, useNavigate,Link } from "react-router-dom"
import axios from 'axios'
import './style.css'
import Like from "./Like"
import OtherProfile from "./Following"
import { ArrayContext,ArrayProvider } from "./Globalarray";
import img from './ui.jpg'
import img1 from './image1.jpg'
import Navbar from "../components/Navbar"
import Save from "./savepost"





const Eachpost =()=>{ 
    const {array}=useContext(ArrayContext)

    /*const [post,setPost]=useState('')*/
    /*useEffect(()=>{
        const fetchingdata=async()=>{
            const res=await axios.get('/api/articles/:id')
            setPost(res.data)
        }
    })*/
    const Navigate=useNavigate()
    /*setPost(array[0].author)*/

    const handledelete =async ()=>{
        {
            /*
        await axios.delete('/api/articles/:id')    */  

        }
        Navigate('/')
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="each_post">
            <div className="content_each">
                <h1 className="each_post_title">{array[0].title}</h1>
                <div className="userdetails">
                    <img src={img1} style={{width:'50px',height:'50px',borderRadius:'20px',padding:'5px'}}></img>
                    <div className="user"> 
                    <span>{array[0].author}</span>
                    <p>Posted On 20-12-2021</p></div>
                    {/*<OtherProfile></OtherProfile>*/}
                </div>
            <div className="buttons_each">
            <div className="edit">
                <Link to='/'><p>Edit</p></Link>
            </div>
            <div className="delete">                
                <button onClick={handledelete}>Delete</button>
            </div>
            <div className="saved">
                <Save></Save>
                
            </div>
           { /*<div>
                <OtherProfile></OtherProfile>
    </div>*/}
            </div>
            <img src={img} className="blog_image"></img>                
            <p className="each_content">{array[0].text}</p>                            
            {/*<Like postId={32} initialLikes={5} />*/}
         </div>
        </div>
        </>
    )

}
export default Eachpost