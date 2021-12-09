function ServicioItem(props){

    return(
        <div className="ServicioItem ml-4 mb-4">
            <div className="row">
                <div className="col-8 contenedorinfo">
                    <h4>{props.nombre}</h4>
                    <h5> {props.duracion} - {props.precio} </h5>
                </div>
                <div className="col-4 contenedorimg">
                    <button className="btn btn-outline-primary btnServicios" id="Servicio" >
                        <img src={props.rutaimg} alt=""/>
                    </button>
                </div>
            </div>
        </div> 
    );
}
export default ServicioItem;