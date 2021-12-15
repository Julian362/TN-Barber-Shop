import React from 'react';
import '../../css/ModalComentarios.css'

const ModalComentarios = () => {
    return (
        <>
            <button type="button" className="btn btn-secondary col-2 m-auto p-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver comentarios</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundImage: "url(/img/inicio/bg-comentarios.svg)" }}>
                        <div className="modal-header border-0">
                            <img className="mt-1" src="/img/Res1.svg" alt=""
                                style={{
                                    width: "50%",
                                    height: "fit-content",
                                    marginLeft: "25%"
                                }} />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body" >
                            <div className="container-white" >

                                <div className="card bg ps-3 pe-3 pt-3 pb-3 ms-3 me-3"
                                    style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)", backgroundColor: "#E7BC4D" }}>
                                    <h5 id="titleMC">COMENTARIOS<img src="/img/inicio/comentarios.svg" alt="" className="" id="chair" /></h5>
                                    <div className="row bg-white" id="boxMC">

                                        <div className="col-8" id="boxMC1">
                                            <p id="serviMC">SERVICIO</p>
                                            <p>dlskfklsd dlskjfklsdj dlsjflksdjflkjsdalf lsdjjlkfjlsd dsfsd  dsfsd dsf </p>
                                            <p id="userMC">Nombre de Usuario</p>
                                        </div>

                                        <div className="col-4" id="boxMC2">
                                            <p id="calNumMC">4</p>
                                            <p id="calMC">Calificación</p>
                                            <p id="dataMC">12-12-12</p>
                                        </div>
                                        <hr style={{ width: "80%" }} className="" id="hrMC" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalComentarios
