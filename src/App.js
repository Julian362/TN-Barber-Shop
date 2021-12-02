import './App.css';
import NavBar from './components/navegacion/NavBar';
import './css/bootstrap.css'
import './css/NavBar.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

import Servicios from './components/paginas/Servicios';
import Agenda from './components/paginas/Agenda';
import Contactos from './components/paginas/Contactos';
import Usuario from './components/paginas/Usuario';
import Inicio from './components/paginas/Inicio';
import IniciarSesion from './components/paginas/IniciarSesion'
import HistorialCitas from './components/paginas/HistorialCitas';

function App() {

  // const Lista_Servicios = [
  //   {id:"1", nombre: "Marcación de contornos", duracion: "30min", precio: "$ 5.000", rutaimg:"/img/MarcaCon.png"},
  //   {id:"2", nombre: "Diseño de barba", duracion: "1 hora", precio: "$ 10.000", rutaimg:"MisionTIC 2022"},
  //   {id:"3", nombre: "Limpieza facial", duracion: "1 hora", precio: "$ 20.000", rutaimg:"MisionTIC 2022"}
  // ];

  return (
    <>
    <div className="containerimg">
      <Router>

        <NavBar/>
        
        <Switch>

          <Route path='/' exact component = {Inicio} />
          <Route path='/Servicios' component ={Servicios} />
          <Route path='/Agenda-tu-cita' component ={Agenda} />
          <Route path='/Contactos' component ={Contactos} />
          <Route path='/Usuario' component ={Usuario} />
          <Route path='/Login' component ={IniciarSesion}/>
          <Route path='/HistorialCitas' component ={HistorialCitas} />

        </Switch>

      </Router>


    </div> 

    </>
  );
}

export default App;