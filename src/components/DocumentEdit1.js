import { Component } from "react";
import {BsArrowLeftShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";
function CommonComponent({FieldEdit})
{
    console.log(FieldEdit);
    return(<div></div>);
    /*const callFunction=(FieldEdit)=>
    {
        console.log(FieldEdit);
        //props.ChangedValues()
    }
    return(
        <div>
            <textarea className="form-control" rows="3" onChange={()=>{callFunction(props.FieldEdit)}} defaultValue={props.Document.DocumentDescription}></textarea>
        </div>
    );*/
}
class DocumentEdit1 extends Component
{
    //Constructor to initialize the values 
    constructor(props)
    {
        super(props);
        this.state={
            Description:"",
            Type:""
        }
        this.ChangedValues=this.ChangedValues.bind(this);
        this.saveValues=this.saveValues.bind(this);
        this.backToOneStep=this.backToOneStep.bind(this);
    }
    backTo(value)
    {
        console.log(value);
        this.props.history.push(value);
    }
    
    ChangedValues(e)
    {
        //console.log(e.target.value);
        if (this.props.FieldEdit==="DocumentDescription")
        {
            this.setState({Description:e.target.value,Type:this.state.Type})
        }
        else if (this.props.FieldEdit==="DocumentType")
        {
            this.setState({Description:this.state.Description,Type:e.target.value})
        }
    }
    backToOneStep(e)
    {
        e.preventDefault();
        this.props.history.push("/edit");
    }
    saveValues()
    {
        this.props.storeDetails(this.state.Description,this.props.FieldEdit,this.props.Document);
        this.props.history.push("/edit");
    }
    
    
   // render function to load the page            
    render()
    {
        console.log(this.props.FieldEdit);
        return(
            <div>
            <div className="List-Head">
                <div className="Menu-Head">
                     <h1>
                        <BsArrowLeftShort type="button" onClick={this.backToOneStep} />
                    </h1>
                    <h4>
                        <span className="d-block p-2">Enter Description</span>
                    </h4>
                </div>
                <div>
                    <h1>
                        <IoMdCheckmark type="button" onClick={this.saveValues}/>
                    </h1>
                </div>
            </div>
           <div>
            <CommonComponent FieldEdit={this.props.FieldEdit}/>
           </div>
        </div> 
        );
    }
}
export default DocumentEdit1;
