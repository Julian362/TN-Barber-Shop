import './App.css';
import NavBar from './components/navegacion/NavBar';
import './css/bootstrap.css'
import './css/NavBar.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react';

import Servicios from './components/paginas/Servicios';
import Agenda from './components/paginas/Agenda';
import Contactos from './components/paginas/Contactos';
import Usuario from './components/paginas/Usuario';
import Inicio from './components/paginas/Inicio';
import HistorialCitas from './components/paginas/HistorialCitas';
import Reportes from './components/paginas/Reportes';



function App() {
	const [lista_usuarios_atendidos] = useState([
		{ id:"1", fecha:"23/11/2021", cantidad: 12},
		{ id:"1", fecha:"23/11/2021", cantidad: 20}
	]);


	return (
		<>
			<div className="containerimg">
				<Router>

					<NavBar />

					<Switch>

						<Route path='/' exact component={Inicio} />
						<Route path='/Servicios' component={Servicios} />
						<Route path='/Agenda-tu-cita' component={Agenda} />
						<Route path='/Contactos' component={Contactos} />
						<Route path='/Usuario' component={Usuario} />
						<Route path='/HistorialCitas' component={HistorialCitas} />
						<Route exact path='/Reportes' > <Reportes atendidos= {lista_usuarios_atendidos} /> </Route>

					</Switch>

				</Router>


			</div>

		</>
	);
}

export default App;
