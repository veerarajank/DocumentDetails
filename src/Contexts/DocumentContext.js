import { useState,createContext,useEffect } from "react";
import GetPostAPI from "../Hooks/GetPostAPI";
export const DocumentContext=createContext();

export const DocumentContextProvider=({children})=>
{
    const [data, setData] = useState({DocumentDescription:"this is test document",DocumentType:"Standard",DocumentValidatedBy:["Administrator","Provider"]})
    const {response}=GetPostAPI({url:"http://localhost:52773/document/v1/getDocumentDetails",type:"get",text:null})
    useEffect(() => {
        if (response)
        {
            setData(response);
        }
    }, [response]);
    return (
        <DocumentContext.Provider value={{data,setData}}>
            {children}
        </DocumentContext.Provider>
    )
}
export default DocumentContextProvider;