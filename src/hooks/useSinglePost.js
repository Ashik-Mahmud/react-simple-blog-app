import axios from "axios";
import { useEffect, useState } from "react";

const useSinglePost = (id, setLoading = false) =>{
    const [singlePost, setSinglePost] = useState({})
    useEffect(()=>{
       axios.get(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`).then(response =>{
        setSinglePost(response.data);
        setLoading(true)
       })
    }, [id, setLoading])    
    return  [singlePost, setSinglePost];
}

export default useSinglePost;