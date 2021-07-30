//providing select multiple component option
import {BsArrowLeftShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
import { useContext,useState,useEffect } from "react";
import {DocumentContext} from "../Contexts/DocumentContext";
import {Link,useHistory} from "react-router-dom"
import GetPostAPI from "../Hooks/GetPostAPI";
const SelectMultiple=()=>
{
    const {data,setData}=useContext(DocumentContext);
    const [list, setList] = useState([{"value":1,"display":"Administrator"},{"value":2,"display":"Provider"},{"value":3,"display":"Insurance Vendor"},{"value":4,"display":"Others"}]);
    const [state, setState] = useState(data.DocumentValidatedBy)
    // reading data from API and to show inside the select multiple
    const {response,error}=GetPostAPI({url:"http://localhost:52773/document/v1/getDocumentValidatedBy",type:"get",text:null});
    useEffect(() => {
       if (response)
       {
            setList(response);
       }
    }, [response])
    const history = useHistory();
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
                        <span data-testid="Select-Desc" className="d-block p-2">Select DocumentValidatedBy</span>
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

export default SelectMultiple;
