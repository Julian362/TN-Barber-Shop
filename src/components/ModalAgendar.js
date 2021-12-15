import React from "react";
function ModalAgendar(props) {

    const Parrafo={
        textAlign:"Center",
        margin:"auto"
    }

    return(
    <>  
    <button type="button" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">
        <img src={props.rutafoto} alt="" /> 
    </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundImage: "url(/img/modalComentario.png)"}}>
                        <div className="modal-header border-0">                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <h4 style={Parrafo}>SELECCIONAR FECHA</h4>
                        <form>
                            <input type="Date" className="form-control mt-4 mb-4" style={{textAlign:"center"}}/>
                            <h4 style={Parrafo}>SELECCIONAR HORA</h4> 
                        </form>      
                            <button className="btn btn-primary btn-lg"> 8:00 </button>
                                      
                    </div>
                        <div className="modal-footer border-0">
                            <button type="button" className="btn btn-primary btn-lg" style={Parrafo}>Agendar cita</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
    );
}
export default ModalAgendar;