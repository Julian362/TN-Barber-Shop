import { Link } from 'react-router-dom'
import { Fragment } from 'react';
//import { useState, useEffect, Fragment } from 'react';

function NavBar(props) {

    // const agregarProyecto = function (newProyect) {
    //     const nuevoProyectos = [...lista_datos];
    //     nuevoProyectos.push(newProyect);
    //     setListaDatos(nuevoProyectos);
    //   }
    // "fstannah4@independent.co.uk", "password": "jkdjifp",
    // useEffect(function () {
    //     const cargarDisponibles = async () => {
    //         props.setPaginasCargar(props.recargar);
    //     }
    //     cargarDisponibles();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const paginaRenderizada_usuario_externo = (
        <>
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "20px" }}>
                {props.paginasCargar.nombre}
            </button>
            <ul className="dropdown-menu">
                <Link className="dropdown-item" to='/Editar-usuario'>Editar usuario</Link>
                <Link className="dropdown-item" to='/Historial-citas'>Historial citas</Link>
                <p className="dropdown-item" onClick={()=>{window.location.href="/"}}>Cerrar sesión</p>
            </ul>
        </>
    );
    const paginaRenderizada_usuario_interno = (
        <>
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: "20px" }}>
                {props.paginasCargar.nombre}
            </button><ul className="dropdown-menu">
                <Link className="dropdown-item" to='/Editar-usuario'>Editar usuario</Link>
                <Link className="dropdown-item" to='/Gestion-reserva'>Gestión reserva</Link>
                <Link className="dropdown-item" to='/AdministradorServicios'>Gestión servicios</Link>
                <Link className="dropdown-item" to='/Gestion-personal-administrador'>Gestión personal - Admin</Link>
                <Link className="dropdown-item" to='/GestionPersonalSuper'>Gestion personal - Super</Link>
                <Link className="dropdown-item" to='/Reportes'>Reportes</Link>
                <p className="dropdown-item" onClick={()=>{window.location.href="/"}}>Cerrar sesión</p>
            </ul>
        </>
    );

    var paginaRenderizada = (
        <>
            <Link to='/Login'>
                <span className="btn btn-primary"  style={{ fontSize: "20px" }}>
                    Mi cuenta
                </span>
            </Link>
        </>
        );

    if (props.paginasCargar.rol === "usuario externo") {
        paginaRenderizada = paginaRenderizada_usuario_externo
    }
    else if (props.paginasCargar.rol === "usuario interno admin") {
        paginaRenderizada = paginaRenderizada_usuario_interno
    }
    else if (props.paginasCargar.rol === "usuario interno super") {
        paginaRenderizada = paginaRenderizada_usuario_interno
    }
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand titulo" id="titulo" to='/'>NT Barbershop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id="logo" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span id="logo" ></span>
                        <Link to='/'>
                            <img src="/img/logo.png" id="imagenButton" alt="" />
                        </Link>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav contenedorIzquierda">
                            <Link className="col nav-link" id="listasI" to='/'>Servicios</Link>
                            <Link className="col nav-link" id="listasI" to='/Contactos'>Contactos</Link>
                        </div>
                        <Link to="/">
                            <img src="img/logo.png" id="logo2" alt="" />
                        </Link>
                        <div className="navbar-nav contenedorDerecha">
                            <Link className="col nav-link" id="listasD" to='/Agenda-tu-cita'>Agenda tu cita</Link>

                            <div className="col nav-link" id="listasD">
                                <div className="btn-group">
                                    {paginaRenderizada}
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