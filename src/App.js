import "./App.css";
import DocumentList from "./components/DocumentList";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import DocumentMenu from "./components/DocumentMenu";
import DocumentEdit from "./components/DocumentEdit";
import DocumentEdit1 from "./components/DocumentEdit1";
import DocumentEdit2 from "./components/DocumentEdit2";
import DocumentEdit3 from "./components/DocumentEdit3";
import DoumentContextProvider from "./Contexts/DocumentContext";

function App () {
  return(
    <DoumentContextProvider>
       <div>
          <Router>
            <Switch>
              <Route exact path="/" component={DocumentList}/>
              <Route path="/menu" component={DocumentMenu}/>
              <Route path="/edit" component={DocumentEdit}/>
              <Route path="/edit1" component={DocumentEdit1}/>
              <Route path="/edit2" component={DocumentEdit2}/>
              <Route path="/edit3" component={DocumentEdit3}/>
            </Switch>
          </Router>
       </div>
      </DoumentContextProvider>
      )
}

export default App;
