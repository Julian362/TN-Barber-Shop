function ModalAgendar() {
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundImage: "url(/img/modalComentario.png)" }}>
                        <div className="modal-header border-0">
                            <img className="mt-4" src="/img/Res1.svg" alt=""
                                style={{
                                    width: "50%",
                                    height: "fit-content",
                                    marginLeft: "25%"
                            }} />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <p>CALIFICACIÓN</p>
                        
                    </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default ModalAgendar;