import React from "react"
import { useParams } from 'react-router-dom'
import OtherProfile from "./Following"

const viewother=()=>{
    const { authorId } = useParams()
    return(
        <div>
            <h2>Other Authors</h2>
           <OtherProfile authorId={authorId} />
        </div>        
    )
}
export default viewother