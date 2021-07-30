//providing text area component
import {BsArrowLeftShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
import { useContext,useState } from "react";
import {DocumentContext} from "../Contexts/DocumentContext";
import {Link,useHistory} from "react-router-dom"
const TextAreaComponent=()=>
{
    const {data,setData}=useContext(DocumentContext);
    const [state, setState] = useState(data.DocumentDescription);
    const [require, setRequire] = useState(false);
    const DocChange=(e)=>
    {
        setState(e.target.value);
    }
    const history = useHistory();
    const saveChange=()=>
    {
        setRequire(false);
        if (state==="")
        {
            setRequire(true);
            return;
        }
        setData({DocumentDescription:state,DocumentType:data.DocumentType,DocumentValidatedBy:data.DocumentValidatedBy});
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
                        <span className="d-block p-2">Enter Document Description</span>
                    </h4>
                </div>
                <div>
                    <h1>
                        <IoMdCheckmark type="button" onClick={saveChange} />
                    </h1>
                </div>
            </div>
            <div>
                <div>
                    {require?<span style={{color:"red"}}>Mandatory Field</span>:""}
                </div>
            <textarea data-testid="txt" className="form-control" rows="3" onChange={DocChange} defaultValue={data.DocumentDescription} required={true}></textarea>
            </div>
        </div> 
    );
}

export default TextAreaComponent;
