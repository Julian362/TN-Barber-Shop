import React, { useState, useEffect } from 'react'
import Footer from '../Footer'
import ModalCalificar from './ModalCalificar'
import "../../css/historialCitas.css"

const HistorialCitas = (props) => {
     
    var host = "http://localhost:8081";
    var nickname = props.paginasCargar.nickname;
    
    //tabla servicios agendados
    const [listaAgendados, setlistaAgendados] = useState([]);
    useEffect(function () {
        const solicitarAgenda = () => {
            const estado = "programado";
            console.log(nickname)
            fetch(`${host}/consultar/citasAgendadas/${nickname}-${estado}`)
            .then(res => res.json())
            .then(res => {
                setlistaAgendados(res); 
            })
        }
        solicitarAgenda();
    },[])
    
    const agendados = listaAgendados.map((p) =>
        <>
            <tr>
                <td>{p.servicio}</td>
                <td>{p.fecha}</td>
                <td>{p.duracion}</td>
                <td>{p.nombre} {p.apellido}</td>
                <td>
                    <div id="btn-contenedor">
                        <button type="button" id="btn-eliminar" className="btn btn-primary mt-1 mb-1 w-75 programada">Programado</button>
                        <button type="button" id="btn-eliminar" className="btn btn-danger mt-1 mb-1 w-75 eliminar">Cancelar</button>
                    </div>
                </td>
            </tr>
        </>
    );
    
    /* const agendados = (
        <>
            <tr>
                <td>{listaAgendados.servicio}</td>
                <td>{listaAgendados.fecha}</td>
                <td>{listaAgendados.duracion}</td>
                <td>{listaAgendados.nombre} {listaAgendados.apellido}</td>
                <td>
                    <div id="btn-contenedor">
                        <button type="button" id="btn-eliminar" className="btn btn-primary mt-1 mb-1 w-75 programada">Programado</button>
                        <button type="button" id="btn-eliminar" className="btn btn-danger mt-1 mb-1 w-75 eliminar">Cancelar</button>
                    </div>
                </td>
            </tr>
        </>
    ); */

    //tabla historial de servicios 
    const [listaHistorial, setlistaHistorial] = useState([]);
    useEffect(function () {
        const solicitarHistorial = () => {
            const estado = "finalizado";
            fetch(`${host}/consultar/Historial/${nickname}-${estado}`)
            .then(res => res.json())
            .then(res => {
                setlistaHistorial(res); 
            })
        }
        solicitarHistorial();
    },[])

    const historial = listaHistorial.map((p) =>
        <>
            <tr>
                <td>{p.servicio}</td>
                <td>{p.fecha}</td>
                <td>{p.duracion}</td>
                <td>{p.nombre} {p.apellido}</td>
                <td><ModalCalificar /></td>
            </tr>
        </>
    );

    return (
        <>
            <div>
                <img src="/img/imagAgenda.png" alt="" />
                <img className="position-absolute top-0 start-0" src="/img/Res1.svg" alt=""
                    style={{ height: "28%", marginTop: "17rem" }} />
            </div>

            <div className="container mt-4 mx-auto mw-100">
                <div className="row">
                    <div className="col-md-9">
                        <div className="card bg-primary pb-4"
                            style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                            <h2 className="text-center align-middle mt-2 mb-2">Servicios agendados</h2>
                            <table className="table-responsive-sm table-hover table-bordered text-center align-middle">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th scope="col">Servicio</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Duración</th>
                                        <th scope="col">Encargado(a)</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#E4E4E4" }}>
                                    {agendados}
                                </tbody>
                            </table>
                        </div>

                        <div className="card bg-primary pb-4 mt-4"
                            style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                            <h2 className="text-center align-middle mt-2 mb-2">Histórico de servicios</h2>
                            <table className="table-responsive-sm table-hover table-bordered text-center align-middle">
                                <thead>
                                    <tr style={{ backgroundColor: "#B7B7B7" }}>
                                        <th scope="col">Servicio</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Duración</th>
                                        <th scope="col">Encargado(a)</th>
                                        <th scope="col">Calificar</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "#E4E4E4" }}>
                                    {historial}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card bg-white"
                            style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                            <img className="mt-4" src="/img/Res1.svg" alt=""
                                style={{
                                    width: "50%",
                                    height: "fit-content",
                                    marginLeft: "25%"
                                }} />
                            <p className="text-center mt-3 mr-2 ml-2">- Quienes somos -</p>
                            <p className="text-center mr-3 ml-3">Somos una Barberia caracterizada por su elegancia, personal profesional, sus servicios integrales, su excelente atención y su agradable ambiente.</p>
                        </div>
                        <div className="card bg-white mt-4 mb-4"
                            style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                            <img className="mt-4" src="/img/Res1.svg" alt=""
                                style={{
                                    width: "50%",
                                    height: "fit-content",
                                    marginLeft: "25%"
                                }} />
                            <p className="text-center mt-3 mr-2 ml-2">- Horarios -</p>
                            <div className="mr-3 ml-3">
                                <div className="row">
                                    <div className="col pr-0">
                                        <ul>
                                            <li>Lunes</li>
                                            <li>Martes</li>
                                            <li>Miércoles</li>
                                            <li>Jueves</li>
                                            <li>Viernes</li>
                                            <li>Sábado</li>
                                            <li>Domingo</li>
                                        </ul>
                                    </div>
                                    <div className="col pr-0">
                                        <ul className="pl-0" style={{ listStyle: "none" }}>
                                            <li>10:00 - 20:00</li>
                                            <li>10:00 - 20:00</li>
                                            <li>10:00 - 20:00</li>
                                            <li>10:00 - 20:00</li>
                                            <li>10:00 - 20:00</li>
                                            <li>10:00 - 20:00</li>
                                            <li>10:00 - 20:00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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
