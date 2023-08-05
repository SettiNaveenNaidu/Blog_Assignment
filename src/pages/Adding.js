import React,{useState,useContext} from "react";
import axios from 'axios' 
import './style.css'
import Navbar from "../components/Navbar";
import { ArrayContext,ArrayProvider } from "./Globalarray";


const Add = ()=> {
    const [title, setTitle] = useState('')
    const [topic,setTopic]=useState('')
    const [content,setContent]=useState('')
    const [img,setImg]=useState(null)
    const {array}=useContext(ArrayContext)
    const id='10'
    const author='naveen'
    const views=10

    const handlepublish=async ()=>{
        axios.post('')
    }
    /*const handlepublish=()=>{
        array.push({id,author,title,topic,content,views,img})
    }*/
    return(
        <>
        <Navbar/>
        <div className="add_post">
            <h3 children='adding_title'>Add</h3>
            <form onSubmit={handlepublish} className="add_form">
                <input type='text' placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type='text' placeholder="Enter Topic" value={topic} onChange={(e)=>setTopic(e.target.value)}/> 
                <textarea placeholder="Enter Content ...." value={content} onChange={(e)=>setContent(e.target.value)}/>
                <input type='file' placeholder="upload Image"/>
                <button type="submit">Publish</button>
            </form>
        </div>
        </>
    )
}
export default Add

