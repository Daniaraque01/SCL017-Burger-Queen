// import logo from './logo.svg';
import './App.css';
import SelectYourRole from "./components/SelectYourRole"
import Kitchen from './components/Kitchen';
import 'bootstrap/dist/css/bootstrap.css';
import Tittle from './components/Tittle'
import ChefImg from './components/ChefImg';
import WaistressImg from './components/WaitressImg'; 
import Card from './components/Card';
import { collection, getDocs } from "firebase/firestore";
import db from './Firebase/FirebaseConfig';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { useEffect } from 'react';

function App() {
  useEffect(() => {

    const obtenerDatos = async() => {
    const datos = await getDocs(collection(db, 'sushi'));
    console.log(datos , 'datos');
  }

  obtenerDatos();

  },[]);
  return (
    
    <Router>
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
          <Card />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

