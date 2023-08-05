import React, { useState } from 'react';
import axios from 'axios';

const Like = ({ postId, initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);
  
    const handleLike = () => {
      if (isLiked) return; 

      axios.post().then((res) => {setLikes(res.data.likes);setIsLiked(true);});}

    return(
        <div>
          <button onClick={handleLike} disabled={isLiked}>
           {isLiked ? 'Liked' : 'Like'}
          </button>
          <span>{likes} Likes</span>
        </div>)
}

export default Like
