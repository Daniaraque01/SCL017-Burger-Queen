import './App.css';
import SelectYourRole from "./components/SelectYourRole"
import Kitchen from './components/Kitchen';
import 'bootstrap/dist/css/bootstrap.css';
import Tittle from './components/Tittle'
import ChefImg from './components/ChefImg';
import WaistressImg from './components/WaitressImg'; 
import CartHome from './components/CartHome';
import 'bootstrap/dist/js/bootstrap'


import {
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {

  return (
  
    
      <Switch>
        <Route path="/" exact>
        <div className="startPage">
        <Tittle />
          <SelectYourRole />
          <Link to = "/mesas">
          <WaistressImg />
          </Link>
          <Link to = "/cocina">
          <ChefImg />
          </Link>
          </div>
        </Route>
        

        <Route path="/cocina" exact>
          <Kitchen />
        </Route>

        <Route path="/mesas" exact>
          <CartHome />
        </Route>

      </Switch>
 

  );
}

export default App;

