function ServicioItem(props){

    return(
        <div className="ServicioItem ml-4 mb-4">
            <div className="row">
                <div className="col-8">
                    <h4>{props.nombre}</h4>
                    <h5> {props.duracion} - {props.precio} </h5>
                </div>
                <div className="col-2 contenedorimg">
                    <img src={props.rutaimg} alt=""/>
                </div>
            </div>
        </div> 
    );
}
export default ServicioItem;