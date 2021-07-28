import { useState,useEffect } from "react";
const GetPostAPI=({url,type,text})=>
{
    const [response, setResponse] = useState(null);
    const [error,setError]=useState(null);
    useEffect(() => {
        fetch(url, {
            method: type,
            body: text
        })
        .then((resp)=> {
            return resp.json();
        })
        .then((data)=> {
            setResponse(data);
        })
        .catch((err)=>
        {
            setError(err);
        })
        
    }, [url,type,text])
    return {response,error}
    
  }
  export default GetPostAPI;