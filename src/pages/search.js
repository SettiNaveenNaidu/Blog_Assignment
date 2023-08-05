import React,{useState} from "react"
import axios from 'axios'

const Searching=()=>{
    
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch=()=>{
    axios.get('').then((res) => {setSearchResults(res.data)})}
        
    return(
        <div className="search">
            <div className="search_bar">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="search_input" placeholder="Enter to search"/>
            <button onClick={handleSearch} className="search_button">Search</button>
            </div>
        
        {/*searchResults.map(()=>(
            <div>
                
            </div>
        ))*/} 
        </div>       
    
      )
    }

export default Searching



