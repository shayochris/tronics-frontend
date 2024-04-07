import { useEffect, useState } from "react"
import { useMain } from "../contexts/MainContext";
import axios from "axios";

const UseFetch = (url) =>{
  const {baseURL} = useMain();
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [data,setData] = useState([]);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      axios.get(`${baseURL}${url}`)
      .then(res =>{
        setLoading(false);
        setData(res.data);
      })
    },500)
  },[]);

  return {loading,error, data};
}

export default UseFetch;