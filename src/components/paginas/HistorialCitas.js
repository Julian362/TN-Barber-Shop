import React from 'react'

const HistorialCitas = () => {
    return (
        <>
        <div>
            <img src="/img/imagAgenda.png" alt=""/>   
        </div>

        <div class="container mt-4 mx-auto mw-100">
            <div class="row">
                <div class="col-sm-9"> 
                    <div className="card bg-primary pb-4" 
                        style={{borderRadius: "20px", boxShadow:"5px 5px 4px rgba(199, 199, 199, 0.67)"}}>
                        <h2 class="text-center align-middle mt-2 mb-2">Servicios Agendados</h2>
                        <table class="table-responsive-sm table-hover table-bordered text-center align-middle">
                            <thead>
                                <tr style={{backgroundColor: "#B7B7B7"}}>
                                    <th scope="col">Servicio</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Duración</th>
                                    <th scope="col">Encargado(a)</th>
                                    <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody style={{backgroundColor: "#E4E4E4"}}>
                                <tr>
                                    <td>Marcación de contornos</td>
                                    <td>20 - 12 - 2021</td>
                                    <td>01:00 pm - 03:00 pm</td>
                                    <td>Jorge Isaacs</td>
                                    <td>
                                        <button  type="button" class="btn btn-primary">Programada</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marcación de contornos</td>
                                    <td>20 - 12 - 2021</td>
                                    <td>01:00 pm - 03:00 pm</td>
                                    <td>Jorge Isaacs</td>
                                    <td>
                                        <button  type="button" class="btn btn-primary">Programada</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-sm-3">
                    col-sm-4
                </div>
            </div>
        </div>

        </>
    )
}

export default HistorialCitas
