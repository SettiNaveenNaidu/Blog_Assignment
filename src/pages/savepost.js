import React from "react";
import {useState,useEffect } from "react";
import axios from 'axios'

const Save=({id})=>{
    const [save,setSaved]=useState(null)

    const handlesave=()=>{
        if (save) return; 
        axios.post().then((res) => {setSaved(true)
        })}   
    return(
        <div>
            <button onClick={handlesave} disabled={setSaved} className="save_button">
           {save ? 'Saved' : 'Save'}
          </button>
        </div>
    )

}
export default Save