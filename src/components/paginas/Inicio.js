import '../../css/inicio.css';
import Redes from '../../components/Redes';
import React from 'react';
import Footer from '../../components/Footer';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ModalComentarios from './ModalComentarios';


const Inicio = (props) => {
    const portda2 = {
        backgroundImage: "url(./img/inicio/portada2.jpg)"
    };

    const portda3 = {
        backgroundImage: "url(./img/inicio/portada3.jpg)"
    };

    const portda4 = {
        backgroundImage: "url(./img/inicio/portada4.jpg)"
    }

    return (
        <Fragment>
            <div className="portada1">
                <img src="/img/inicio/portada1.jpg" alt="" />
            </div>

            <div className="contenedor1">
                <img src="/img/inicio/chair.svg" alt="" className="" />
                <h2>SERVICIOS</h2>
                <div className="col-12">

                </div>
                <Link className="btn btn-secondary col-2 m-auto" to='/Agenda-tu-cita' id="btnagendarc"><p>Agendar cita</p></Link>
            </div>

            <div className="portada2" style={portda2}>
                <img src="/img/res1.svg" alt="" className="" id="imgResposive2" />
            </div>

            <div className="contenedor2 row">
                <div className="col-4 cont2">
                    <img src="/img/inicio/horarios.svg" alt="" />
                    <h3>HORARIOS</h3>
                    <p>Lunes a Domingo</p>
                    <p>10:00 am a 08:00 pm</p>
                </div>
                <div className="col-4 cont2">
                    <img src="/img/inicio/phone.svg" alt="" />
                    <h3>LINEA DE ATENCIÓN</h3>
                    <p>Linea de atcion al cliente</p>
                    <p>+57 310 555 55 55</p>

                </div>
                <div className="col-4 cont2">
                    <img src="/img/inicio/sucursales.svg" alt="" />
                    <h3>SEDES</h3>
                    <p>Bolivar, Cartagena</p>
                    <p>Medellin, Tunja</p>
                </div>
            </div>

            <div className="portada3" style={portda3}>
                <img src="/img/res1.svg" alt="" className="" id="imgResposive3" />
            </div>

            <div className="contenedor3 row" id="">
                <h3 className="text-center">COMENTARIOS<img src="/img/inicio/comentarios.svg" alt="" className="" id="chair" /></h3>
                <img src="/img/inicio/mensaje1.svg" alt="" className="col-4" />
                <img src="/img/inicio/mensaje3.svg" alt="" className="col-4" />
                <img src="/img/inicio/mensaje2.svg" alt="" className="col-4" />
                <ModalComentarios id="linkModalMC" />
            </div>
            <div className="portada4" style={portda4}>
                <img src="/img/res1.svg" alt="" className="" id="imgResposive4" />
                <Redes />
            </div>
            <Footer />
        </Fragment>
    )
}

export default Inicio;
