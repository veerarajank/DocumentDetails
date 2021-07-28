import {BsList} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom"
import {DocumentContext} from "../Contexts/DocumentContext";
import { useContext } from "react";

const DisplayValues=({name,value,classApply})=>
{
    return(
        <div className="List-Items">
            <div>
                <span className={classApply}>{name}</span>
            </div>
            <div>
                <span className={classApply}>{value}</span>
            </div>
        </div>
    );
}
 
const DocumentList = () => {
    const {data}=useContext(DocumentContext);
    return (
        <div>
            <div>
                <div className="List-Head">
                    <h4>
                        <span className="d-block p-2">
                            Document Details
                        </span>
                    </h4>
                    <h1>
                        <Link to="/menu"><BsList type="button" className="text-white"/></Link>
                    </h1>
                </div>
                <div>
                    <h6><span className="d-block p-2 bg-secondary">DOCUMENT INFORMATION</span></h6>
                </div>
                <div>
                    <DisplayValues name={"DESCRIPTION"} value={data.DocumentDescription} classApply={"d-block p-2"}/>
                    <hr/>
                    <DisplayValues name={"TYPE"} value={data.DocumentType} classApply={"d-block p-2"}/>
                    <hr/>
                    <DisplayValues name={"VALIDATED BY"} value={data.DocumentValidatedBy.toString()} classApply={"d-block p-2"}/>
                </div>
            </div>
        </div>
    )
}

export default DocumentList;

