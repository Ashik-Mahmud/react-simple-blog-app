import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () =>{
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        axios.get('data.json').then(response => setBlogs(response.data))
    }, [])
    return [blogs, setBlogs]
};
export default useBlogs;