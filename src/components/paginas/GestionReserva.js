import React from 'react'
import Footer from '../Footer'
import '../../css/reserva.css'
import Redes from '../Redes'

const GestionReserva = (props) => {

    const serviciosReservados = props.reserva;

    const listaReserva = serviciosReservados.map((p) =>
        <>
            <tr>
                <td>{p.servicio}</td>
                <td>{p.fecha}</td>
                <td>{p.duracion}</td>
                <td>{p.encargado}</td>
                <td>
                    <div id="btn-contenedor">
                        <button type="button" id="btn-eliminar" className="btn btn-primary mt-1 mb-1 w-75 programada">Programado</button>
                        <button type="button" id="btn-eliminar" className="btn btn-primary mt-1 mb-1 w-75 eliminar">Cancelar</button>
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
