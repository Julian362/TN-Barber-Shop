import React from 'react';
import Footer from '../Footer';
import Redes from '../Redes'
import TrabajadoresItem from '../TrabajadoresItem';
import ServiciosItem from '../ServicioItem'
import '../../css/Agenda.css'

function agenda(props){

    const vServicios = props.Servicios;
    const Lista_Servicios = vServicios.map ( p => 
            <ServiciosItem
                id= { p.id }
                nombre = { p.nombre }
                duracion = { p.duracion }
                precio = { p.precio}
                rutaimg = { p.rutaimg }
            />
        );
    const vTrabajadores = props.Trabajadores;
    const Lista_Trabajadores = vTrabajadores.map ( t =>
            <TrabajadoresItem 
              id = {t.id}
              nickname = {t.Nickname}
              rutafoto = {t.rutafoto}
            />
        );

    return ( 
    <>
        <div className="contenedortotal" >
            <img id="LogoMT" className="mt-3 mb-5" src="/img/Res1.svg" alt="" />
            <h1 className="mb-4">SELECCIONAR UN SERVICIO</h1>
            <div className="ContenedorServicios">                
                {Lista_Servicios}                                  
            </div>
            <h1>SELECCIONAR UN TRABAJADOR</h1>
            <div className="trabajadores mb-4">
                {Lista_Trabajadores}       
            </div>
            <Redes/>
        </div>
        <Footer/>
    </>   
    );
};

export default agenda;
