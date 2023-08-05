import React from "react";
import { useState} from "react";
import axios from 'axios'
import img1 from './image1.jpg'
import nature from './happiness.jpg'
import { Link } from "react-router-dom";

const PostStruct=({id,title,topic,text,views,created_at,image,author})=>{
    const [view,setView]=useState(0)
    const handleview=()=>{
        setView(view+1)
        axios.post()
    }

    return(
        <div className="post_home_cont">
            
        <div className="post_struct">
            <div className="author_info_home">
                <img src={img1} className="author_home"></img>
                <span>{author}</span>
            </div>
            <h2>{title}</h2>
            <h3>{topic}</h3>
            <p>{text.substring(0, 300)}</p>
            <span>{created_at}</span>
            <Link to='/eachpost'><button className='post_button' onclick={handleview}>View more</button></Link>
        </div>
        <div className="post_image">
            <img src={nature} alt='image' className="home_image"></img>
        </div>
        
        </div>
    )
}
export default  PostStruct