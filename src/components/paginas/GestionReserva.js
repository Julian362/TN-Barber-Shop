import React from 'react'
import Footer from '../Footer'
import '../../css/reserva.css'
import Redes from '../Redes'
import { useState, useEffect, Fragment } from 'react';

var host = "http://localhost:8081";
const GestionReserva = () => {
    const [listaAgenda, setlistaAgenda] = useState([]);

    useEffect(function () {
        const solicitarProgramados = () => {
            const estado = "programado";
            fetch(`${host}/consultar/agenda/${estado}`)
                .then(res => res.json())
                .then(res => {
                    setlistaAgenda(res);
                })
        }
        solicitarProgramados();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Función para eliminar los servicios agendados

    const eliminarServicio = (p) => {
        const _id=p._id;
        const eliminarProgramados = () => {
            fetch(`${host}/eliminar/agenda/${_id}`)
                .then(res => res.json())
                .then(res => {
                    document.getElementById(p._id).innerHTML=""
                })
        }
        eliminarProgramados();
       } //by Julian :)


    const listaReserva = listaAgenda.map((p) =>
        <>
            <tr  id={p._id}>
                {/* <td>{p._id}</td>  */}
                <td id={p.servicio}>{p.servicio}</td>
                <td id={p.fecha}>{p.fecha}</td>
                <td id={p.hora_inicio}>{p.hora_inicio}</td>
                <td id={p.duracion}>{p.duracion + " minutos"}</td>
                <td id={p.nombre + " " + p.apellido}>{p.nombre + " " + p.apellido}</td>
                <td key={p.servicio}>
                    <div id="btn-contenedor">
                        <button type="button" id="btn-eliminar" className="btn btn-primary mt-1 mb-1 w-75 programada" >Cancelar</button>
                        {<button type="button" id="btn-eliminar" className="btn btn-primary mt-1 mb-1 w-75 eliminar" onClick={() => eliminarServicio(p)}>Cancelar</button>}
                    </div>
                </td>
            </tr>
        </>
    );

    return (
        <>
            <div className="reserva-contenedor">
                <img className="mt-4" src="/img/Res1.svg" alt="" id="logo-responsive-reserva" />
                <h1>ADMINISTRADOR</h1>
                <h3>Gestión reserva</h3>

                <div className="card bg-primary pb-4 reserva-containter"
                    style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                    <h2 className="text-center align-middle mt-2 mb-2">Servicios agendados</h2>

                    <table className="table-responsive-sm table-hover table-bordered text-center align-content-center">
                        <thead>
                            <tr style={{ backgroundColor: "#B7B7B7" }}>
                                <th scope="col">Servicio</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora inicio</th>
                                <th scope="col">Duración</th>
                                <th scope="col">Encargado(a)</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: "#E4E4E4" }}>
                            {listaReserva}
                        </tbody>
                    </table>
                </div>
                <Redes />
                <br />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default GestionReserva
