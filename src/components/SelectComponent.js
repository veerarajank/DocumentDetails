import {BsArrowLeftShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
import { useContext,useState,useEffect } from "react";
import {DocumentContext} from "../Contexts/DocumentContext";
import {Link,useHistory} from "react-router-dom"
import GetPostAPI from "../Hooks/GetPostAPI";
const SelectComponent=()=>
{
    const {data,setData}=useContext(DocumentContext);
    const [list, setList] = useState([{"value":1,"display":"Standard"},{"value":2,"display":"Others"}]);
    const [state, setState] = useState(data.DocumentType)
    const {response,error}=GetPostAPI({url:"http://localhost:52773/document/v1/getAllDocumentTypes",type:"get",text:null});
    useEffect(() => {
       if (response)
       {
            setList(response);
       }
    }, [response])
    const history = useHistory();
    const DocChange=(e)=>
    {
        setState(e.target.value);
    }
    
    const saveChange=()=>
    {
        setData({DocumentDescription:data.DocumentDescription,DocumentType:state,DocumentValidatedBy:data.DocumentValidatedBy});
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
                {error?<span>Caution: Application working without service</span>:null}
            </div>
            <div>
                <select className="form-control" onChange={DocChange} value={state}>
                    {list.map(({ value,display }) => (
                        <option key={value} value={display}>
                            {display}
                        </option>
                    ))}
                </select>
            </div>
        </div> 
    );
}

export default SelectComponent;
