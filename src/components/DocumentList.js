import "./DocumentList.css";
import {BsList} from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import DocumentMenu from"./DocumentMenu";

const DocumentList =()=> {
    return(
        <div>
          <div className="Define-Head bg-primary text-white">
             <h4>
                 <span className="d-block p-2">
                     Document Details
                 </span>
            </h4>
              <h1>
                  <BsList type="button"/>
             </h1>
           </div>
        
          <div>
             <h6><span className="d-block p-2 bg-secondary">DOCUMENT INFORMATION</span></h6>
          </div>
          <div className="table-div">
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <h6>
                                <span className="tblText">
                                    DESCRIPTION
                                </span>
                            </h6>
                        </td>
                        <td className="table-column">
                            <span>
                                To be included as part of the adult admission package. To be completed by doctors
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h6>
                                <span  className="tblText">TYPE</span>
                            </h6>
                        </td>
                        <td className="table-column">
                            <span>Standard</span>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      )
}

export default DocumentList
