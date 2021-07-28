import { useState,createContext,useEffect } from "react";
import axios from "axios";
export const DocumentContext=createContext();

const DoumentContextProvider=(props)=>
{
    const [data, setData] = useState({DocumentDescription:"this is test document",DocumentType:"Standard",DocumentValidatedBy:["Administrator","Provider"]})
    useEffect(() => {
        axios['get']('http://localhost:52773/document/v1/getDocumentDetails')
            .then((res) => {
                if (res.data!=null)
                {
                    setData(res.data);
                }              
            })
            .catch((err) => {
            })
    }, []);

    return (
        <DocumentContext.Provider value={{data,setData}}>
            {props.children}
        </DocumentContext.Provider>
    )
}

export default DoumentContextProvider;