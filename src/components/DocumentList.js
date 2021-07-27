import {BsList} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

// common table column adder into each row 
// parameters 
// value - which value need to be added in column
// classApply - className which having styles
const Columns=({name,value,classApply})=>
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
};
class DocumentList extends Component
{
    //Constructor to initialize the values 
    backToHome=(e)=>
    {
        this.props.history.push("/menu");
    }
    
    // render function to load the page            
    render()
    {
        return(
            <div>
            <div className="List-Head">
                <h4>
                    <span className="d-block p-2">
                        Document Details
                    </span>
                </h4>
                <h1>
                    <BsList type="button" onClick={()=>{this.backToHome()}} />
                </h1>
            </div>
    
            <div>
                <h6><span className="d-block p-2 bg-secondary">DOCUMENT INFORMATION</span></h6>
            </div>
            <div>
                <Columns name={"DESCRIPTION"} value={this.props.Document.DocumentDescription} classApply={"d-block p-2"}/>
                <hr/>
                <Columns name={"TYPE"} value={this.props.Document.DocumentType} classApply={"d-block p-2"}/>
            </div>
        </div>
        );
    }
}

export default DocumentList
