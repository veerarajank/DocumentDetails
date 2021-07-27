import "./App.css";
import DocumentList from "./components/DocumentList";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import DocumentMenu from "./components/DocumentMenu";
import DocumentEdit from "./components/DocumentEdit";
import DocumentEdit1 from "./components/DocumentEdit1";
import {useEffect,useState} from "react";

function App () {
  const [state, setstate] = useState({DocumentType:"",DocumentDescription:""})
  useEffect(() => {
    fetch('http://localhost:52773/document/v1/getDocumentDetails')
        .then(response=>response.json())
        .then((result)=>
        {
          setstate({DocumentType:result.DocumentType,DocumentDescription:result.Description})
        }
        )
        .catch(error=>
            {
                alert("Network error");
            }
        ) 
  },[]);
  const [FieldEdit,setFieldEdit]=useState("");
  const storeFieldEdit=(value)=>
  {
    setFieldEdit(value);
  }
  const storeDetails=(value,fieldChanged,Document)=>
  {
    if (FieldEdit==="DocumentDescription")
    {
      Document.DocumentDescription=value;
    }
    else if (FieldEdit==="DocumentType")
    {
      Document.DocumentType=value;
    }
    console.log(value);
    console.log(fieldChanged);
    console.log(Document);
    setstate(Document);
  }
  
 
  return(
        <div>
          <Router>
            <Switch>
              <Route exact path="/" render={(props)=>(<DocumentList {...props} Document={state}/>)}></Route>
              <Route path="/menu" component={DocumentMenu}></Route>
              <Route path="/edit" render={(props)=>(<DocumentEdit {...props} Document={state} storeFieldEdit={storeFieldEdit} />)}></Route>
              <Route path="/edit1" render={(props)=>(<DocumentEdit1 {...props} Document={state} FieldEdit={FieldEdit} storeDetails={storeDetails}/>)}></Route>
            </Switch>
          </Router>
        </div>
      )
}

export default App;
