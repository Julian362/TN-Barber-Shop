import ModalAgendar from "./ModalAgendar";
import '../css/Agenda.css'

function TrabajadoresItem(props){

    return(
        <div className="row ListaTrabajadores">
            <div className="prueba">                    
                <ModalAgendar rutafoto={props.rutafoto}/>
                <h5 style={{textAlign:"center", marginLeft:"0px"}}> {props.nickname} </h5>
            </div>                  
        </div>   
    );
}
export default TrabajadoresItem;