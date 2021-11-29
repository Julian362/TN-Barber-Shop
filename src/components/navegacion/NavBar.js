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
                <img src="/img/logo.png" id="imagenButton" alt=""></img>
                </Link>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav contenedorIzquierda">
                    <Link className="col nav-link" id="listasI" to='/Servicios'>Servicios</Link>
                    <Link className="col nav-link" id="listasI" to='/Contactos'>Contactos</Link>            
                </div>  
                <img  src="img/logo.png" id="logo2" alt=""/>
                <div className="navbar-nav contenedorDerecha">
                    <Link className="col nav-link " id="listasD" to='/Agenda-tu-cita'>Agenda tu cita</Link>
                    <Link className="col nav-link" id="listasD" to='/Usuario'>Usuario</Link>            
                </div>                
            </div>
            </div>
        </nav>
      
      </Fragment>
    );
}
export default NavBar;