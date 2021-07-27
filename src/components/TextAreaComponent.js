import {useState} from "react";
import {BsArrowLeftShort} from "react-icons/bs";
import {IoMdCheckmark} from "react-icons/io";

function TextAreaComponent({props})
{
    const [state, setstate] = useState(props.Document);
    //console.log(state.DocumentDescription);
    const ChangedValues=(e)=>
    {
        if (props.FieldEdit==="DocumentDescription")
        {
            setstate({Description:e.target.value,Type:state.Type})
        }
        else if (props.FieldEdit==="DocumentType")
        {
            this.setState({Description:state.Type,Type:e.target.value})
        }
    }
    const saveChildValue=()=>
    {
        console.log(state.Description);
        props.saveValues(state.Description,props.FieldEdit,props.Document);
    }
    const backToOneStep=(e)=>
    {
        e.preventDefault();
        props.backTo("/edit");
    }
    return(
        <div>
            <div className="List-Head">
                <div className="Menu-Head">
                     <h1>
                        <BsArrowLeftShort type="button" onClick={backToOneStep} />
                    </h1>
                    <h4>
                        <span className="d-block p-2">Enter Description</span>
                    </h4>
                </div>
                <div>
                    <h1>
                        <IoMdCheckmark type="button" onClick={saveChildValue}/>
                    </h1>
                </div>
            </div>
           <div>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={ChangedValues} defaultValue={state.DocumentDescription}></textarea>
            </div>
        </div>
    );
}

export default TextAreaComponent;
