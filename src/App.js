import './App.css';
import NavBar from './components/navegacion/NavBar';
import './css/bootstrap.css'
import './css/NavBar.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react';

import Servicios from './components/paginas/Servicios';
import Agenda from './components/paginas/Agenda';
import Contactos from './components/paginas/Contactos';
import EditarUsuario from './components/paginas/EditarUsuario';
import Inicio from './components/paginas/Inicio';
import IniciarSesion from './components/paginas/IniciarSesion'
import HistorialCitas from './components/paginas/HistorialCitas';
import GestionPersonalAdmin from './components/paginas/GestionPersonalAdmin';
import Reportes from './components/paginas/Reportes';
import AdministradorServicios from './components/paginas/AdministradorServicios';
import Registro from './components/Registro'
import GestionReserva from './components/paginas/GestionReserva';
import Gestion from './components/paginas/Gestion';



function App() {

	const [lista_usuarios_atendidos] = useState([
		{ id: "1", fecha: "23/11/2021", cantidad: 12 },
		{ id: "1", fecha: "23/11/2021", cantidad: 20 }
	]);



	const Lista_Servicios = [
		{ id: "1", nombre: "Marcación de contornos", duracion: "30min", precio: "$ 5.000", rutaimg: "/img/MarcaCon.png" },
		{ id: "2", nombre: "Diseño de corte", duracion: "1 hora", precio: "$ 15.000", rutaimg: "/img/DiseñoC.png" },
		{ id: "3", nombre: "Diseño de barba", duracion: "1 hora", precio: "$ 10.000", rutaimg: "/img/DiseñoB.png" },
		{ id: "4", nombre: "Diseño de corte y barba", duracion: "1 hora", precio: "$ 25.000", rutaimg: "/img/DiseñoCB.png" },
		{ id: "5", nombre: "Limpieza facial", duracion: "1 hora", precio: "$ 20.000", rutaimg: "/img/LimpiezaF.png" },
	];

	const [lista_ingresos] = useState([
		{ id: "1", fecha: "23/11/2021",nombre: "Marcación de contornos",precio: 5},
		{ id: "2", fecha: "23/11/2021",nombre: "Marcación de contornos",precio: 5},
		{ id: "3", fecha: "23/11/2021",nombre: "Marcación de contornos",precio: 5}
	]);

	const [lista_disponibles] = useState([
		{ id: "1", fecha: "23/11/2021",inicio: "01:00 pm",fin: "2:00 pm"},
		{ id: "2", fecha: "23/11/2021",inicio: "01:00 pm",fin: "2:00 pm"},
		{ id: "3", fecha: "23/11/2021",inicio: "01:00 pm",fin: "2:00 pm"}
	]);

	const Lista_Trabajadores = [
		{ id: "1", Nickname: "Racastano", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "2", Nickname: "DavHD", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "3", Nickname: "Juliancho", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "4", Nickname: "Majito", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "5", Nickname: "MR. Stiven", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "6", Nickname: "RockyFer", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "7", Nickname: "El yuca", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "8", Nickname: "RockyFer", rutafoto: "/img/ImgTrabajador.png" },
		{ id: "9", Nickname: "El yuca", rutafoto: "/img/ImgTrabajador.png" },
	];

	const [lista_ServAgendados] = useState([
		{ id: "1", servicio: "Marcación de contornos", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:"agendado"},
		{ id: "2", servicio: "Diseño de corte", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:"agendado"},
		{ id: "3", servicio: "Diseño de barba", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:"agendado"},
		{ id: "4", servicio: "Diseño de corte y barba", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:true}
	]);

	const [lista_Historial] = useState([
		{ id: "1", servicio: "Marcación de contornos", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:"agendado"},
		{ id: "2", servicio: "Diseño de corte", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:"agendado"},
		{ id: "3", servicio: "Diseño de barba", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado:"agendado"},
		{ id: "4", servicio: "Diseño de corte y barba", fecha: "23/11/2021", duracion:"01:00 pm - 03:00 pm", encargado:"Jorge Isaacs", estado: true}
	]);

	
	return (
		<>
			<div className="containerimg">
				<Router>
				<NavBar />
					<Switch>
						<Route path='/Agenda-tu-cita'>
							<Agenda Servicios={Lista_Servicios} Trabajadores={Lista_Trabajadores}/> 
						</Route>
						<Route path='/Gestion' component={Gestion} />
						<Route path='/Historial-citas'> 
							<HistorialCitas agendados={lista_ServAgendados}
											historial={lista_Historial}/>
						</Route>
						<Route path='/Gestion-personal-administrador'>
							<GestionPersonalAdmin empleados={Lista_Trabajadores}/>
						</Route>
						<Route path='/Gestion-reserva' component={GestionReserva} />
						<Route path='/Registro' component ={Registro} />
						<Route path='/' exact component={Inicio} />
						<Route path='/Servicios' component={Servicios} />
						<Route path='/Contactos' component={Contactos} />
						<Route path='/Editar-usuario' component={EditarUsuario} />
						<Route path='/Login' component={IniciarSesion} />
						<Route path='/AdministradorServicios' >
						<AdministradorServicios 
						Servicios={Lista_Servicios}/>
						</Route>
						<Route exact path='/Reportes' >
						<Reportes
						atendidos= {lista_usuarios_atendidos}
						Servicios={Lista_Servicios}
						ingresos={lista_ingresos}
						disponibles={lista_disponibles}
						/>
						</Route>
					</Switch >
				</Router >
			</div >
		</>
	);
}

export default App;