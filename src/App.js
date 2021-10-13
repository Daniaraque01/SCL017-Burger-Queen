// import logo from './logo.svg';
import './App.css';
import SelectYourRole from "./components/SelectYourRole"
import Kitchen from './components/Kitchen';
import 'bootstrap/dist/css/bootstrap.css';
import Tittle from './components/Tittle'
import ChefImg from './components/ChefImg';
import WaistressImg from './components/WaitressImg'; 
import CartHome from './components/CartHome';
import GoBack from './components/GoBack';
import { CartProvider } from 'react-use-cart';
import Card from './components/Card';
import { collection, getDocs } from "firebase/firestore";
import 'bootstrap/dist/js/bootstrap'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
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

