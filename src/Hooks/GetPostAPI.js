import { useState,useEffect } from "react";
export const GetPostAPI=({url,type,text})=>
{
    const [response, setResponse] = useState(null);
    const [error,setError]=useState(null);
    useEffect(() => {
        async function FetchCall() {
            try {
              const result = await fetch(url,{method:type,body:text});
              const data = await result.json();
              setResponse(data);
            } catch (e) {
              setError(e);
            }
          }
        FetchCall();
    }, [url,type,text])
    return {response,error,setResponse}
    
  }
  export default GetPostAPI;