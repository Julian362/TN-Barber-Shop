import {Fragment} from 'react'


function NavBar() {

    const style={
        color:"#E7BC4D",
        fontSize:"35px"
    }
    return (
        <Fragment>        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand titulo" id="titulo" href="none" style={style}>NT Barbershop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id="logo" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span id="logo" ></span>
                <img src="/img/logo.png" id="imagenButton" alt=""></img>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav contenedorIzquierda">
                    <a className="nav-link" id="listasI" href="none">Servicios</a>
                    <a className="nav-link" id="listasI" href="none">Contactos</a>            
                </div>  
                <img  src="img/logo.png" id="logo2" alt=""/>
                <div className="navbar-nav contenedorDerecha">
                    <a className="nav-link " id="listasD" href="none">Agenda tu cita</a>
                    <a className="nav-link" id="listasD2" href="none">Usuario</a>            
                </div>                
            </div>
            </div>
        </nav>
      
      </Fragment>
    );
}
export default NavBar;