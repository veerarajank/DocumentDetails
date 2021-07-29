import "./App.css";
import DocumentList from "./DocumentList";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import DocumentMenu from "./DocumentMenu";
import DocumentEdit from "./DocumentEdit";
import TextAreaComponent from "./TextAreaComponent";
import SelectComponent from "./SelectComponent";
import SelectMultiple from "./SelectMultiple";
import DoumentContextProvider from "../Contexts/DocumentContext";

function App () {
  return(
    <DoumentContextProvider>
       <div>
          <Router>
            <Switch>
              <Route exact path="/" component={DocumentList}/>
              <Route path="/menu" component={DocumentMenu}/>
              <Route path="/edit" component={DocumentEdit}/>
              <Route path="/text" component={TextAreaComponent}/>
              <Route path="/select" component={SelectComponent}/>
              <Route path="/selectMultiple" component={SelectMultiple}/>
            </Switch>
          </Router>
       </div>
    </DoumentContextProvider>
      )
}

export default App;
