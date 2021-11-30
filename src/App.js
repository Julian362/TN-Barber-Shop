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

function App() {
  return (
    <>
    <div className="containerimg">
      <Router>

        <NavBar/>
        
        <Switch>

          <Route path='/' exact component={Inicio}/>
          <Route path='/Servicios' component ={Servicios} />
          <Route path='/Agenda-tu-cita' component ={Agenda} />
          <Route path='/Contactos' component ={Contactos} />
          <Route path='/Usuario' component ={Usuario} />

        </Switch>

      </Router>


    </div> 

    </>
  );
}

export default App;
