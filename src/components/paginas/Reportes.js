import React from 'react';
import Footer from '../Footer';
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

    const servicios = props.Servicios;

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
                            <div className="row usuarios-atendidos-date">
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="position-absolute top-50 start-50 translate-middle" for="desde-date">Desde:</h5>
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" id="desde-date" value="2018-07-22"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col">
                                            <h5 className="position-absolute top-50 start-50 translate-middle" for="hasta-date">Hasta:</h5>
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" id="hasta-date" value="2018-07-22"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="table-responsive-sm table-hover table-bordered text-center usuarios-atendidos-tabla">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "50%", height:"3rem" }} >Fecha</th>
                                        <th style={{ width: "50%", height:"3rem" }} >Cantidad de usuariosa atendidos</th>
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
                            <div className="row ingresos-date">
                                <div className="col">
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="position-absolute top-50 start-50 translate-middle" for="desde-date">Desde:</h5>
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" id="desde-date" value="2018-07-22"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-4">
                                            <h5 className="position-absolute top-50 start-50 translate-middle" for="hasta-date">Hasta:</h5>
                                        </div>
                                        <div className="col">
                                            <input type="date" className="form-control" id="hasta-date" value="2018-07-22"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col-6">
                                            <h5 className="position-absolute top-50 start-50 translate-middle" for="reportes-servicios">Servicios :</h5>
                                        </div>
                                        <div className="col-6">
                                            <select class="form-select form-control" id="reportes-servicios">
                                                <option selected>Seleccionar servicio</option>
                                                {lista_servicios}
                                            </select>
                                        </div>
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
                                    {lista_usuarios}
                                </tbody>
                                <tfoot>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th style={{ width: "33%", height:"3rem" }}>Total</th>
                                        <th style={{ width: "33%", height:"3rem" }}>{total}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>
    )
}

export default HistorialCitas