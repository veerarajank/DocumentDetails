import {BsChevronRight,BsArrowLeftShort} from "react-icons/bs";
import {IoIosBulb,IoMdCheckmark} from "react-icons/io";
import {Link} from "react-router-dom";
import {DocumentContext} from "../Contexts/DocumentContext";
import { useContext } from "react";

const DocumentEdit=()=>
{
    const {data}=useContext(DocumentContext);
    console.log(data);
    return(
        <div>
            <div className="List-Head">
                <div className="Menu-Head">
                    <h1>
                        <Link to="/menu"><BsArrowLeftShort type="button" className="text-white"/></Link>
                    </h1>
                    <h4>
                        <span className="d-block p-2">Edit Document</span>
                    </h4>
                </div>
                <div>
                    <h1>
                        <Link to="/"><IoMdCheckmark type="button" className="text-white"/></Link>
                    </h1>
                </div>
            </div>
            <div className="Menu-SubHead">
                <span className="d-block p-2">
                    <IoIosBulb/>
                </span>
                <span className="d-block p-2">
                    Make additions to the document below.
                </span>
            </div>
            <div>
                <h6>
                    <span className="d-block p-2 bg-secondary">
                        DOCUMENT INFORMATION
                    </span>
                </h6>
            </div>
            <div>
                <div className="List-Items">
                    <div>
                        <span className={"d-block p-2"}>DESCRIPTION</span>
                    </div>
                    <div className="Sub-List-Items">
                        <span className={"d-block p-2"}>
                            {data.DocumentDescription}
                        </span>
                        <Link to="/edit1">
                            <span className={"d-block p-2"}>
                                <BsChevronRight/>
                            </span>
                        </Link>
                    </div>
                </div>
        <div>
             <div className="List-Items">
                <div>
                    <span className={"d-block p-2"}>TYPE</span>
                </div>
                <div className="Sub-List-Items">
                    <span className={"d-block p-2"}>{data.DocumentType}</span>
                    <span className={"d-block p-2"}>
                        <Link to="/edit2">
                            <BsChevronRight />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
        <div>
             <div className="List-Items">
                <div>
                    <span className={"d-block p-2"}>VALIDATED BY</span>
                </div>
                <div className="Sub-List-Items">
                    <span className={"d-block p-2"}>{data.DocumentValidatedBy.toString()}</span>
                    <span className={"d-block p-2"}>
                        <Link to="/edit3">
                            <BsChevronRight />
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}

export default DocumentEdit;
