// import logo from './logo.svg';
import './App.css';
import SeleccionaTuRol from "./components/SeleccionaTuRol"
import Cocina from './components/Cocina';
import TomarPedido from './components/TomarPedido';
import SushiSanKun from './assets/SushiSanKun.png';
import imagenMesero from './assets/imagenMesero.png'
import imagenCocinero from './assets/imagenCocinero.png'
import 'bootstrap/dist/css/bootstrap.css';
import Titulo from './components/Titulo'

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
<Titulo />
      <Switch>
        <Route path="/" exact>

          <SeleccionaTuRol />
          <div className="container">
            <div className="row">
              <div className="col-3"></div>
              <img src={imagenMesero} alt="" />
              <img src={imagenCocinero} alt="" />
              <button type="button" className="btn btn-primary m-12">hola</button>
              <button type="button" className="btn btn-primary">hola</button>
            </div>
          </div>
        </Route>

        <Route path="/cocina" exact>
          <Cocina />
        </Route>

        <Route path="/mesas" exact>
          <TomarPedido />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

