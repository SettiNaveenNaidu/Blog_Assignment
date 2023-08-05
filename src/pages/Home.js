import React, { useEffect, useState,useContext} from "react";
import {Link } from 'react-router-dom'
import axios from "axios"
import './style.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostStruct from "./PostStruct";
import Large from "./wallpaper";
import Filter from "./filter";
import Searching from "./search";
import Sort from "./Sorting";
import { ArrayContext,ArrayProvider } from "./Globalarray";
import Category from "./Categories";


const Home=()=>{
    const [posts,setPosts]=useState([])
    const {array}=useContext(ArrayContext)
    
    /*const Authentication = !!localStorage.getItem(/*'authToken'*/
     const Authentication=true;
    /*useEffect(()=>{
        const fetchingdata=async()=>{
            const res=await axios.get("/api/posts")
            setPosts(res.data)
            }
            fetchingdata()
        },[])*/   
    
    return(
        <div className="Home">
            <Navbar></Navbar>
            {
                Authentication?(<Large/>):(null)
            }           
            <div className='basic_filters'>
            <div className='home_filter'><Filter></Filter></div>
            <div className="sort_search">
            <div className="sort_home"><Sort></Sort></div>
            <div ><Searching></Searching></div>
            </div>
            </div>

            <div className="post_foot">
            <div className="posts">
                {
                    ((array).map((item)=>{
                        return(
                        
                        <PostStruct key={item.id} id={item.id} title={item.title} topic={item.topic} text={item.text} views={item.views} created_at={item.created_at} img={item.image_url} author={item.author}></PostStruct>)
                    }))
                }
             {/*(posts).map((item)=>{                               
                <Link to='/post/:id'>
                    <PostStruct ></PostStruct>
                </Link>
                })*/}
            </div>
            <div className='asidebar'>
            <h3>Categories</h3>
                <div className="aside_category">
                    
                {
                    ((array).map((item)=>{
                        return(
                            <Category key={item.id} topic={item.topic}></Category>
                        )
                    }))
                }
                </div>                
               <Footer></Footer>
            </div>            
            </div>
        </div>
    )
}
export default Home
