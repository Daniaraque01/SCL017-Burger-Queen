// import logo from './logo.svg';
import './App.css';
import SeleccionaTuRol from "./components/SeleccionaTuRol";
import Cocina from './components/Cocina';
import TomarPedido from './components/TomarPedido';
import SushiSanKun from './assets/SushiSanKun.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <img src= {SushiSanKun} alt = ""/>
     
    </div>
      <Switch>
      <Route path="/" exact>
      <div>
        <SeleccionaTuRol/>
        </div>
    </Route>

    <Route path="/cocina" exact>
        <Cocina/>
    </Route>

    <Route path="/mesas" exact>
        <TomarPedido/>
    </Route>

    </Switch>
    </Router>
  );
}

export default App;

