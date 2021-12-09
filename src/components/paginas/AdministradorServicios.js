import React from 'react';
import {Link} from 'react-router-dom'
import Footer from '../Footer';
import Redes from '../Redes'
import '../../css/AdministradorServicios.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HistorialCitas = (props) => {

    const servicios = props.Servicios;

    const lista_servicios = servicios.map((p) =>
        <>
            <tr style={{ height:"3rem" }}>
                <td>{p.nombre}</td>
                <td>{p.Descripción}</td>
                <td>{p.duracion}</td>
                <td>
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <Link className="icon-color">
                                <i className="bi bi-pencil-square icono-tabla"></i>
                            </Link>
                            </div>
                        <div className="col-6 mx-auto">
                            <Link className="icon-color">
                                <i className="bi bi-trash icono-tabla"></i>
                            </Link>
                            </div>
                    </div>
                </td>
            </tr>
        </>
    );

    return (
            <>
                <div className="supervisor-contenedor">
                    <img className="mt-4"src="/img/Res1.svg" alt="" id="logo-responsive-servicios"/>
                    <h1>ADMINISTRADOR</h1>
                    <h3>Servicios</h3>
                    <form className="form-servicios">
                        <input type="text" className="form-control form-control-servicios-admin" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Nombre"/>
                        <div class="input-group ">
                            <input type="text" aria-label="First name" class="form-control form-control-servicios-admin mr-2 " placeholder="Valor"/>
                            <input type="text" aria-label="Last name" class="form-control form-control-servicios-admin ml-2" placeholder="Duración"/>
                        </div>
                        <textarea className="form-control form-control-servicios-admin" aria-label="With textarea" placeholder="Descripción"></textarea>
                        <button type="button" className="btn btn-primary btn-lg mt-3">Guardar</button>
                    </form>
                    <div className="card bg-primary pb-4 servicios-containter"
                        style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                        <h3 className="text-center align-middle mt-2 mb-2">Lista de servicios</h3>
                        <div className="servicios-blanco-container">
                            <table className="table-responsive-sm table-hover table-bordered text-center servicios-tabla">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "35%", height:"3rem" }} >Servicio</th>
                                        <th style={{ width: "35%", height:"3rem" }} >Descripción</th>
                                        <th style={{ width: "10%", height:"3rem" }} >Duración</th>
                                        <th style={{ width: "10%", height:"3rem" }} >Acciones</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#E4E4E4" }}>
                                    {lista_servicios}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Redes/>
                    <br/>
                </div>
                <div>
                    <Footer />
                </div>
            </>
    )
}

export default HistorialCitas