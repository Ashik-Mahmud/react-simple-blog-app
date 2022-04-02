import axios from "axios";
import { useEffect, useState } from "react";

const useSinglePost = (id) =>{
    const [singlePost, setSinglePost] = useState({})
    useEffect(()=>{
       axios.get(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`).then(response =>{
        setSinglePost(response.data);
       })
    }, [id])    
    return  [singlePost, setSinglePost];
}

export default useSinglePost;