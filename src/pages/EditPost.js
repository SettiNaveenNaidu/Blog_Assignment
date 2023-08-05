import React,{useState,useEffect} from "react";
import axios from 'axios' 
import './style.css'
import Navbar from "../components/Navbar";



const Edit = ({})=> {

    const [title, setTitle] = useState('')
    const [topic,setTopic]=useState('')
    const [content,setContent]=useState('')
    const [img,setImg]=useState(null)

    /*useEffect(()=>{
        const res=axios.get('')
        const data=res.data
        setTitle(data.title)
        setTopic(data.topic)
        setContent(data.text)
        setImg(`url`)
    },[id])*/
    
    
    const handleUpdate=async ()=>{
        axios.post('data by id')

    }

    return(
        <>
        <Navbar/>
        <div className="add_post">
            <h3 children='adding_title'>Add</h3>
            <form onSubmit={handleUpdate} className="add_form">
                <input type='text' placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type='text' placeholder="Enter Topic" value={topic} onChange={(e)=>setTopic(e.target.value)}/> 
                <textarea placeholder="Enter Content ...." value={content} onChange={(e)=>setContent(e.target.value)}/>
                <input type='file' placeholder="upload Image"/>
                <button type="submit">Update</button>
            </form>
        </div>
        </>
    )
}
export default Edit

