import {Fragment} from 'react'
import {Link} from 'react-router-dom'


function NavBar() {

    const style={
        color:"#E7BC4D",
        fontSize:"35px"
    }
    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand titulo" id="titulo" to='/' style={style}>NT Barbershop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id="logo" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span id="logo" ></span>
                <Link to='/'>
                    <img src="/img/logo.png" id="imagenButton" alt=""/>
                </Link>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav contenedorIzquierda">
                    <Link className="col nav-link" id="listasI" to='/Servicios'>Servicios</Link>
                    <Link className="col nav-link" id="listasI" to='/Contactos'>Contactos</Link>
                </div>
                <Link to="/">
                    <img  src="img/logo.png" id="logo2" alt=""/>
                </Link>
                <div className="navbar-nav contenedorDerecha">
                    <Link className="col nav-link" id="listasD" to='/Agenda-tu-cita'>Agenda tu cita</Link>

                    <div className="col nav-link" id="listasD">
                        <div class="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "20px"}}>
                                Usuario
                            </button>
                            <ul className="dropdown-menu">
                                <Link className="dropdown-item" to='/Usuario'>Editar usuario</Link>
                                <Link className="dropdown-item" to='/Historial-citas'>Historial citas</Link>
                                <Link className="dropdown-item" to='/Gestion-personal'>Gestión personal</Link>                              
                                <Link className="dropdown-item" to='/Login'>Iniciar usuario</Link>
                                <Link className="dropdown-item" to='/Registro'>Registro</Link>
                                <Link className="dropdown-item" to='/Editar-usuario'>Editar usuario</Link>
                                <Link className="dropdown-item" to='/Historial-citas'>Historial citas</Link>
                                <Link className="dropdown-item" to='/Reportes'>Supervisor Reportes</Link>
                                <Link className="dropdown-item" to='/AdministradorServicios'>Administrador Servicios</Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </nav>
        </Fragment>
    );
}
export default NavBar;