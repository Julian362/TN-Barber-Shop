import React from 'react'
import Footer from '../Footer'
import FormGestionPersonal from './FormGestionPersonal'
import Redes from '../Redes'
import "../../css/FormularioGestion.css"
import { useState, useEffect, Fragment } from 'react';


const GestionPersonalAdmin = () => {

    const [listaEmpleados, setlistaEmpleados] = useState([]);
    const [condicion,setcondicion]=useState(true);
    const [empladoseleccionado,setempladoseleccionado] = useState({});
    var host = "http://localhost:8081";
    
    useEffect(function () {
        const solicitarEmpleados = () => {            
            const rol = "usuario interno";
            fetch(`${host}/consultar/trabajadores/${rol}`)
            .then(res => res.json())
            .then(res => {
                setlistaEmpleados(res);
            })
        }
        solicitarEmpleados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const cargarDatosInput = (nick,e) =>{
        var variable_axu_trabajador;
        if(condicion){
            variable_axu_trabajador = listaEmpleados.find((p) => p.nickname === nick);
        }
        else{
            variable_axu_trabajador = empladoseleccionado;
        }
        document.getElementById("nombre").value = variable_axu_trabajador.nombre;
        document.getElementById("apellido").value = variable_axu_trabajador.apellido;
        document.getElementById("Documento-Registro2").value = variable_axu_trabajador.numero_documento;
        document.getElementById("tipo-Documento-Registro2").innerHTML = variable_axu_trabajador.tipo_documento;
        document.getElementById("nickname").value = variable_axu_trabajador.nickname;
        document.getElementById("correo").value = variable_axu_trabajador.correo;
        document.getElementById("rol").value = variable_axu_trabajador.rol;
        document.getElementById("contrasena").value = variable_axu_trabajador.password;
        // document.getElementById("cargo").value = variable_axu_trabajador.cargo;
    }
    const empleados = listaEmpleados.map((p) =>
                    
                    <>
                        <div className="col" id={p.nickname} style={{cursor:"pointer"}} onClick={() => cargarDatosInput(p.nickname) }>
                            <div className="card" style={{ width: "80%", marginLeft: "10%", border: 0 }}>
                                <img src="/img/ImgTrabajador.png" className="card-img-top" alt="..." style={{ height: "fit-content", width: "auto" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{p.nickname}</h5>
                                </div>
                            </div>
                        </div>
                    </>
                )
    
                      
    function buscarempleado(){
        const nicknamebuscar = document.getElementById("buscador").value;
        fetch(`${host}/usuario/filtrar/${nicknamebuscar}`)
        .then(res => res.json())            
        .then(res => {
            setempladoseleccionado(res);
            setlistaEmpleados([]);
            setcondicion(false);             
            console.log(empladoseleccionado);
        })
    }
        const empleadosfiltrados = (
                        
            <>
                <div className="col" id={empladoseleccionado.nickname} style={{cursor:"pointer"}} onClick={() => cargarDatosInput(empladoseleccionado.nickname) }>
                    <div className="card" style={{ width: "80%", marginLeft: "10%", border: 0 }}>
                        <img src="/img/ImgTrabajador.png" className="card-img-top" alt="..." style={{ height: "fit-content", width: "auto" }} />
                        <div className="card-body">
                            <h5 className="card-title text-center">{empladoseleccionado.nickname}</h5>
                        </div>
                    </div>
                </div>
            </> 
    )

    function RegistrosTotales(){
        fetch(`${host}/usuarios/filtrar/registrostotales`)
        .then(res => res.json())            
        .then(res => {
            setcondicion(true);
            setlistaEmpleados(res);            
        })
        
    }
        
    function filtrarTrabajadorPersonal(){
        const rol = "usuario interno personal";
        fetch(`${host}/usuario/filtrar/cargo/${rol}`)
        .then(res => res.json())            
        .then(res => {
            setcondicion(true);
            setlistaEmpleados(res);            
        })
    }

    function filtrarSupervisores(){
        const rol = "usuario interno super";
        fetch(`${host}/usuario/filtrar/cargo/${rol}`)
        .then(res => res.json())            
        .then(res => {
            setcondicion(true);
            setlistaEmpleados(res);            
        })
    }
    return (
        <>
            <div className="bg-white" style={{ height: "120px" }}></div>

            <div className="card bg-white mt-5 mb-5 mx-auto"
                style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)", minWidth: "800px", maxWidth: "1024px" }}>
                <img className="mt-4" src="/img/Res1.svg" alt=""
                    style={{ width: "25%", height: "fit-content", marginLeft: "37.5%" }} />

                <p className="text-center mt-3" style={{ fontSize: "36px" }}>ADMINISTRADOR</p>
                
                {/* <div>
                    <h4 style={{textAlign:"center"}}> Editar datos de los trabajadores seleccionados. </h4>
                </div> */}

                <div className="btn-group col-8 m-auto primary" role="group" aria-label="Basic radio toggle button group">
                   
                    <div style={{ width: "50%" }}>
                        <input type="radio" className="btn-check" name="btnradio" onClick={RegistrosTotales} id="btnradio2" autoComplete="off" defaultChecked />
                        <label className="btn btn-outline-secondary" htmlFor="btnradio2" style={{ width: "100%" , height:"90%", fontSize:"22px", paddingTop:"2px"}} > Todos los registros </label>
                    </div>


                    <div style={{ width: "50%" }}>
                        <input type="radio" className="btn-check btn-primary btnradio1" onClick={filtrarTrabajadorPersonal} name="btnradio" id="btnradio1" autoComplete="off"/>
                        <label className="btn btn-outline-secondary" htmlFor="btnradio1" style={{ width: "100%" , height:"90%", fontSize:"22px", paddingTop:"2px"}} > Barberos </label>
                    </div>

                    <div style={{ width: "50%" }}>
                        <input type="radio" className="btn-check" name="btnradio" onClick={filtrarSupervisores} id="btnradio3" autoComplete="off" />
                        <label className="btn btn-outline-secondary" htmlFor="btnradio3" style={{ width: "100%" , height:"90%", fontSize:"22px", paddingTop:"2px"}}> Supervisores </label>
                    </div>

                </div>

                <FormGestionPersonal/>

                <div className="input-group mb-3 m-auto col-6">
                    <input type="text" className="form-control text-center" id="buscador" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{ height: "fit-content", width: "auto", paddingLeft: "15%" }} />
                    <span className="input-group-text bi bi-search" onClick={buscarempleado} id="basic-addon1" style={{ cursor:"pointer" }}></span>
                </div>

                {condicion ?                
                    <div className="container mt-4 mb-4" style={{textAlign:"center"}}>
                        <div className="row row-cols-6" style={{textAlign:"center"}}> 
                            {empleados}
                        </div>
                    </div>
                : 
                    <div className="container mt-4 mb-4">
                        <div className="row row-cols-6"> 
                            {empleadosfiltrados}
                        </div>
                    </div>
                
                }

                {/* <div className="container mt-4 mb-4">
                    <div className="row row-cols-6"> 
                        {empleados}
                    </div>
                </div>
                empleadosfiltrados
 */}
                <div style={{ height: "80px" }}><Redes /></div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default GestionPersonalAdmin