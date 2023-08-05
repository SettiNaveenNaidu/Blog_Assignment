import React from "react";
import { ArrayContext,ArrayProvider } from "./Globalarray";
import { useContext } from "react";


const Category=({topic})=>{
    const {array}=useContext(ArrayContext)
    return(
        <div className="category_cont">
            <button className="each_category">{topic}</button>  
        </div>
    )
}
export default Category

