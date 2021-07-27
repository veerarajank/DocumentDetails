import {BsChevronRight,BsArrowLeftShort} from "react-icons/bs";
import {IoIosBulb,IoMdCheckmark} from "react-icons/io";
import { Component } from "react";

class DocumentEdit extends Component
{
    constructor()
    {
        super();
    }
       
    backTo=(e)=>
    {
        this.props.history.push("/menu");
    }
    backToHome=(e)=>
    {
        this.props.history.push("/");
    }
    goToEdit1=(value,props)=>
    {
        this.props.storeFieldEdit(value);
        this.props.history.push("/edit1")
    }
    // render function to load the page            
    render()
    {
        return(
            <div>
                <div className="List-Head">
                    <div className="Menu-Head">
                        <h1>
                            <BsArrowLeftShort type="button" onClick={()=>{this.backTo()}}/>
                        </h1>
                        <h4>
                            <span className="d-block p-2">Edit Document</span>
                        </h4>
                    </div>
                    <div>
                        <h1>
                            <IoMdCheckmark type="button" onClick={()=>{this.backTo()}} />
                        </h1>
                    </div>
                </div>
                <div className="Menu-SubHead">
                    <span className="d-block p-2"><IoIosBulb/></span>
                    <span className="d-block p-2">Make additions to the document below.</span>
            </div>
            <div>
                <h6><span className="d-block p-2 bg-secondary">DOCUMENT INFORMATION</span></h6>
            </div>
            <div>
                <div className="List-Items">
                <div>
                    <span className={"d-block p-2"}>DESCRIPTION</span>
                </div>
                <div className="Sub-List-Items">
                    <span className={"d-block p-2"}>{this.props.Document.DocumentDescription}</span>
                    <span className={"d-block p-2"}><BsChevronRight onClick={()=>{this.goToEdit1("DocumentDescription",this.props)}}/></span>
                </div>
            </div>
            <div>
            <div className="List-Items">
                <div>
                    <span className={"d-block p-2"}>TYPE</span>
                </div>
                <div className="Sub-List-Items">
                    <span className={"d-block p-2"}>{this.props.Document.DocumentType}</span>
                    <span className={"d-block p-2"}><BsChevronRight onClick={()=>{this.goToEdit1("DocumentType",this.props)}}/></span>
                </div>
            </div>
            </div>
        </div>
        </div>
        );
    }
}

export default DocumentEdit;
