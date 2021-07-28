import {useState,useEffect} from "react";
const Document=(response)=>
{
    const [data, setData] = useState([]);
    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);
    return {data}
}
export default Document;