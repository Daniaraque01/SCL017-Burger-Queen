// import logo from './logo.svg';
import './App.css';
import SeleccionaTuRol from "./components/SeleccionaTuRol"
import Cocina from './components/Cocina';
import SushiSanKun from './assets/SushiSanKun.png';
import imagenMesero from './assets/imagenMesero.png'
import imagenCocinero from './assets/imagenCocinero.png'
import 'bootstrap/dist/css/bootstrap.css';
import Titulo from './components/Titulo'
import ImagenCocinerx from './components/ImagenCocinerx';
import ImagenMeserx from './components/ImagenMeserx'; 
import Card from './components/Card'

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
      <Switch>
        <Route path="/" exact>
        <div className="paginaPrincipal">
        <Titulo />
          <SeleccionaTuRol />
          <Link to = "/mesas">
          <ImagenMeserx />
          </Link>
          <Link to = "/cocina">
          <ImagenCocinerx />
          </Link>
          </div>
        </Route>
        

        <Route path="/cocina" exact>
          <Cocina />
        </Route>

        <Route path="/mesas" exact>
          <Card />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

