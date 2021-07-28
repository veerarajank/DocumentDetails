import { useState,createContext,useEffect } from "react";
import GetPostAPI from "../Hooks/GetPostAPI";
export const DocumentContext=createContext();

const DoumentContextProvider=(props)=>
{
    const [data, setData] = useState({DocumentDescription:"this is test document",DocumentType:"Standard",DocumentValidatedBy:["Administrator","Provider"]})
    const {response}=GetPostAPI({url:"http://localhost:52773/document/v1/getDocumentDetails",type:"get",text:null})
    useEffect(() => {
        if (response)
        {
            setData(response);
        }
    }, [response]);
    const saveData=({url,type,text})=>
    {
        GetPostAPI({url:"http://localhost:52773/document/v1/getDocumentDetails",type:"get",text:null})
    }
    return (
        <DocumentContext.Provider value={{data,setData,saveData}}>
            {props.children}
        </DocumentContext.Provider>
    )
}

export default DoumentContextProvider;