import React, { useState,useEffect} from "react";
import axios from "axios";
import PostStruct from "./PostStruct";


const Sort=()=>{
    const [sort,setSort]=useState('date')
    const [order,setOrder]=useState('asc')
    const [post, setPost] = useState([])
    useEffect(() => {getposts()}, [sort,order])

    const getposts = () => {
        /*const params = { sort_by: sort }*/

        axios.get(`/api/posts`, { /*params */})
           .then
           (res => setPost(res.data))
          .catch
          (err => console.error('Error', err))
      }
    
    return(
        <>
        <div className="sort_cont">
            <div className="sort_type">
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="sort_date">
            <option value="date">Sort by Date</option>
            <option value="like">Sort by Likes</option>
            </select>
            </div>
            <div className="sort_order">
            <select value={order} onChange={(e) => setOrder(e.target.value)} className="ascend">
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
            </select>
            </div>
        </div>
        {
            post.map((item)=>{
                <PostStruct></PostStruct>
            })
        }
        </>
    )

}
export default Sort