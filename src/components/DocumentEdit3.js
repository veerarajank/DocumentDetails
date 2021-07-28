import {BsArrowLeftShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
import { useContext,useState,useEffect } from "react";
import {DocumentContext} from "../Contexts/DocumentContext";
import {Link,useHistory} from "react-router-dom"
import GetPostAPI from "../Hooks/GetPostAPI";
const DocumentEdit2=()=>
{
    const {data,setData}=useContext(DocumentContext);
    const [list, setList] = useState([]);
    const [state, setState] = useState(data.DocumentValidatedBy)
    const {response,error}=GetPostAPI({url:"http://localhost:52773/document/v1/getDocumentValidatedBy",type:"get",text:null});
    useEffect(() => {
       if (response)
       {
            setList(response);
       }
    }, [response])
    const history = useHistory();
    if (error)
    {
        return(
            <div>
                Please check the service 
            </div>
        )
    }
    const DocChange=(e)=>
    {
        let array=[]
        for(let inc=0;inc<e.target.selectedOptions.length;inc++)
        {
            array.push(e.target.selectedOptions[inc].value)
        }
        setState(array);
    }
    
    const saveChange=()=>
    {
        setData({DocumentDescription:data.DocumentDescription,DocumentType:data.DocumentType,DocumentValidatedBy:state});
        history.push("/edit");
    }
    return(
        <div>
            <div className="List-Head">
                <div className="Menu-Head">
                    <h1>
                        <Link to="/edit">
                            <BsArrowLeftShort type="button" className="text-white"/>
                        </Link>
                    </h1>
                    <h4>
                        <span className="d-block p-2">Enter Description</span>
                    </h4>
                </div>
                <div>
                    <h1>
                        <IoMdCheckmark type="button" onClick={saveChange} />
                    </h1>
                </div>
            </div>
            <div>
                <select className="form-control" multiple onChange={DocChange}>
                    {
                        list.map(({value,display})=>(
                            <option key={value} value={display}>
                                {display}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div> 
    );
    
}

export default DocumentEdit2;
