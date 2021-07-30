//providing Document menu option
import {BsArrowLeftShort,BsChevronRight} from "react-icons/bs";
import {IoIosBulb} from "react-icons/io";
import {Link} from "react-router-dom";
const DocumentMenu=()=>
{
    return(
        <div>
            <div className="Menu-Head">
                <h1>
                    <Link to="/"><BsArrowLeftShort type="button" className="text-white"/></Link>
                </h1>
                <h4>
                    <span className="d-block p-2">
                        Document Menu
                    </span>
                </h4>
            </div>
            <div className="Menu-SubHead">
                <span className="d-block p-2"><IoIosBulb/></span>
                <span data-testid="editMenu" className="d-block p-2">Below are the options available for this document</span>
            </div>
            <div>
                <h6><span className="d-block p-2 bg-secondary">MENU OPTIONS</span></h6>
            </div>
            <div className="List-Items">
                <div>
                    <span className="d-block p-2">Edit</span>
                </div>
                <div>
                <span className="d-block p-2">
                    <Link to="/edit"><BsChevronRight type="button"/></Link>
                </span>
                </div>
            </div>
        </div>
        )
    
}

export default DocumentMenu;
