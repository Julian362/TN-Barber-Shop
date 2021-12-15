import React from 'react';
import Footer from '../Footer';
import Redes from '../Redes'
import '../../css/Reportes.css';


const HistorialCitas = (props) => {

    const lista_usuarios_atendidos = props.atendidos;

    const lista_usuarios = lista_usuarios_atendidos.map((p) =>
        <>
            <tr style={{ height:"3rem" }}>
                <td>{p.fecha}</td>
                <td>{p.cantidad}</td>
            </tr>
        </>
    );
    const ingresos= props.ingresos;

    const lista_ingresos = ingresos.map((p) =>
        <>
            <tr style={{ height:"3rem" }}>
                <td>{p.fecha}</td>
                <td>{p.nombre}</td>
                <td>${p.precio}.000</td>
            </tr>
        </>
    );

    const disponibles= props.disponibles;

    const lista_disponibles = disponibles.map((p) =>
        <>
            <tr style={{ height:"3rem" }}>
                <td>{p.fecha}</td>
                <td>{p.inicio}</td>
                <td>{p.fin}</td>
            </tr>
        </>
    );

    const servicios = props.Servicios;

    const total_ingresos = ingresos.map((p) => p.precio).reduce((prev, curr) => prev + curr, 0);

    const lista_servicios = servicios.map((p) =>
        <>
            <option value="{p.nombre}">{p.nombre}</option>
        </>
    );

    const total = lista_usuarios_atendidos.map((p) => p.cantidad).reduce((prev, curr) => prev + curr, 0);

    return (
            <>
                <div className="supervisor-contenedor">
                    <img className="mt-4"src="/img/Res1.svg" alt="" id="logo-responsive-reportes"/>
                    <h1>SUPERVISOR</h1>
                    <h3>Reportes</h3>
                    <div className="card bg-primary pb-4 reportes-containter"
                        style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                        <h3 className="text-center align-middle mt-2 mb-2">Usuarios atendidos</h3>
                        <div className="reportes-blanco-container">
                            <div className="usuarios-atendidos-date">
                                <div className="input-group input-group-container">
                                    <div className="input-group  input-group-fit-content">
                                        <h5 className="h5-center" for="desde-date" onChange="Desde()">Desde:</h5>
                                        <input type="date" className="form-control border-form" id="desde-date"  />
                                    </div>
                                    <div className="input-group input-group-fit-content">
                                        <h5 className="h5-center" for="hasta-date">Hasta:</h5>
                                        <input type="date" className="form-control border-form" id="hasta-date"  />
                                    </div>
                                </div>
                            </div>
                            <table className="table-responsive-sm table-hover table-bordered text-center usuarios-atendidos-tabla">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "50%", height:"3rem" }} >Fecha</th>
                                        <th style={{ width: "50%", height:"3rem" }} >Cantidad de usuarios atendidos</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#E4E4E4" }}>
                                    {lista_usuarios}
                                </tbody>
                                <tfoot>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "50%", height:"3rem" }}>Total</th>
                                        <th style={{ width: "50%", height:"3rem" }}>{total}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="card bg-primary pb-4 reportes-containter"
                        style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                        <h3 className="text-center align-middle mt-2 mb-2">Ingresos</h3>
                        <div className="reportes-blanco-container">
                            <div className="ingresos-date">
                                <div className="input-group input-group-container">
                                    <div className="input-group  input-group-fit-content">
                                        <h5 className="h5-center" for="desde-date">Desde:</h5>
                                        <input type="date" className="form-control border-form" id="desde-date"  />
                                    </div>
                                    <div className="input-group  input-group-fit-content">
                                        <h5 className="h5-center" for="hasta-date">Hasta:</h5>
                                        <input type="date" className="form-control border-form" id="hasta-date"  />
                                    </div>
                                    <div className="input-group  input-group-fit-content">
                                        <h5 className="h5-center" for="reportes-servicios">Servicios :</h5>
                                        <select className="form-select form-control border-form" id="reportes-servicios">
                                            <option selected>Seleccionar servicio</option>
                                            {lista_servicios}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <table className="table-responsive-sm table-hover table-bordered text-center usuarios-atendidos-tabla">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "33%", height:"3rem" }} >Fecha</th>
                                        <th style={{ width: "33%", height:"3rem" }} >Servicio</th>
                                        <th style={{ width: "33%", height:"3rem" }} >Ingresos</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#E4E4E4" }}>
                                    {lista_ingresos}
                                </tbody>
                                <tfoot>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "33%", height:"3rem" }} colspan="2">Total</th>
                                        <th style={{ width: "33%", height:"3rem" }}>${total_ingresos}.000</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="card bg-primary pb-4 reportes-containter"
                        style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                        <h3 className="text-center align-middle mt-2 mb-2">Espacios disponibles</h3>
                        <div className="reportes-blanco-container">
                            <div className="ingresos-disponible">
                                <div className="input-group input-group-container">
                                    <div className="input-group  input-group-fit-content">
                                        <h5 className="h5-center" for="desde-date">Desde:</h5>
                                        <input type="date" className="form-control border-form" id="desde-date"  />
                                    </div>
                                    <div className="input-group  input-group-fit-content">
                                        <h5 className="h5-center" for="reportes-servicios">Servicios :</h5>
                                        <select className="form-select form-control border-form" id="reportes-servicios">
                                            <option selected>Seleccionar servicio</option>
                                            {lista_servicios}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <table className="table-responsive-sm table-hover table-bordered text-center usuarios-atendidos-tabla">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "33%", height:"3rem" }} >Fecha</th>
                                        <th style={{ width: "33%", height:"3rem" }} >Inicio (Hora)</th>
                                        <th style={{ width: "33%", height:"3rem" }} >Fin (Hora)</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#E4E4E4" }}>
                                    {lista_disponibles}
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