import React from 'react'
import Footer from '../Footer'
import '../../css/reserva.css'
import Redes from '../Redes'

const GestionReserva = () => {
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
                        <tr>
                            <td>Marcación de contornos</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:00 pm - 03:00 pm</td>
                            <td>Jorge Isaacs</td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Programada</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Diseño de corte</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:30 pm - 03:30 pm</td>
                            <td>Pedro Casas</td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Cancelada</button>
                            </td>
                        </tr>

                        <tr>
                            <td>Diseño de barba</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:00 pm - 03:00 pm</td>
                            <td>Racastano</td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Programada</button>
                            </td>
                        </tr>                                    <tr>
                            <td>Limpieza facial</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:00 pm - 03:00 pm</td>
                            <td>DavidHD</td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Programada</button>
                            </td>
                        </tr>                                    <tr>
                            <td>Diseño de corte y barba</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:00 pm - 03:00 pm</td>
                            <td>Stiven Álvarez</td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Programada</button>
                            </td>
                        </tr>                                    <tr>
                            <td>Marcación de contornos</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:00 pm - 03:00 pm</td>
                            <td>Julián </td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Programada</button>
                            </td>
                        </tr>                                    <tr>
                            <td>Diseño de corte</td>
                            <td>20 - 12 - 2021</td>
                            <td>01:00 pm - 03:00 pm</td>
                            <td>MJ</td>
                            <td>
                                <button type="button" className="btn btn-primary mt-1 mb-1 w-75">Programada</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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

export default GestionReserva
