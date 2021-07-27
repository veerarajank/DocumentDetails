import {BsArrowLeftShort,BsChevronRight} from "react-icons/bs";
import {IoIosBulb} from "react-icons/io";
import { Component } from "react";

class DocumentMenu extends Component
{
     constructor()
    {
        super();
        this.state={
            MenuOption:"Edit"
        }
        
    }
    backToHome=(e)=>
    {
       this.props.history.push("/");
    }  
    goToNext=(e)=>
    {
        this.props.history.push("/edit");
    }          
    render()
    {
        return(
            <div>
              <div className="Menu-Head">
                 <h1>
                      <BsArrowLeftShort type="button" onClick={()=>{this.backToHome()}}/>
                 </h1>
                 <h4>
                     <span className="d-block p-2">
                         Document Menu
                     </span>
                </h4>
               </div>
              <div className="Menu-SubHead">
                    <span className="d-block p-2"><IoIosBulb/></span>
                    <span className="d-block p-2">Below are the options available for this document</span>
              </div>
              <div>
                 <h6><span className="d-block p-2 bg-secondary">MENU OPTIONS</span></h6>
              </div>
              <div className="List-Items">
                  <div>
                    <span className="d-block p-2">{this.state.MenuOption}</span>
                  </div>
                  <div>
                    <span className="d-block p-2">
                        <BsChevronRight type="button" onClick={()=>{this.goToNext()}}/>
                    </span>
                 </div>
              </div>
            </div>
          )
    }
}

export default DocumentMenu;
