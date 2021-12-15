import React from 'react'

const ModalCalificar = () => {
    return (
        <>
            <button type="button" className="btn btn-primary mt-1 mb-1 w-75"  data-bs-toggle="modal" data-bs-target="#exampleModal">Calificar</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundImage: "url(/img/modalComentario.png)" }}>
                        <div className="modal-header border-0">
                            <img className="mt-1" src="/img/Res1.svg" alt=""
                                style={{
                                    width: "50%",
                                    height: "fit-content",
                                    marginLeft: "25%"
                            }} />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <h4>CALIFICACIÓN</h4>
                        <div className="container" > 
                            <div className="row ms-4 me-5">
                                <div className="col"><img style={{ height: "63px", width: "auto" }} src="/img/star/star1.png" alt="" /></div>
                                <div className="col"><img style={{ height: "63px", width: "auto" }} src="/img/star/star2.png" alt="" /></div>
                                <div className="col"><img style={{ height: "63px", width: "auto" }} src="/img/star/star3.png" alt="" /></div>
                                <div className="col"><img style={{ height: "63px", width: "auto" }} src="/img/star/star4.png" alt="" /></div>
                                <div className="col"><img style={{ height: "63px", width: "auto" }} src="/img/star/star5.png" alt="" /></div>
                            </div>
                            <h4 className="mt-1 mb-2">Agregar comentario</h4>
                            <div className="card bg-white ps-3 pe-3 pt-3 pb-3 ms-3 me-3"
                                style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)" }}>
                                <textarea className="form-control" style={{ borderRadius: "20px", height:"320px"}} placeholder="" id="floatingTextarea"></textarea>
                            </div>
                        </div>
                    </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-primary mx-auto w-25 mb-3">Calificar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default ModalCalificar
