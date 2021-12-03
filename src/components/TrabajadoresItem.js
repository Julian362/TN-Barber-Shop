import ModalAgendar from "./ModalAgendar";
import '../css/Agenda.css'

function TrabajadoresItem(props){
    return(
        <div className="row ListaTrabajadores">
            <div className="prueba">
                <button type="button" className="btn"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src={props.rutafoto} alt="" /> 
                    <ModalAgendar/>
                </button>
                <h5> {props.nickname} </h5>
            </div>                  
        </div>   
    );
}
export default TrabajadoresItem;