import Login from "../Login";
function IniciarSesion(props){
    return(
        <div >
            <Login setPaginasCargar={props.setPaginasCargar}/>
        </div>
    );
}
export default IniciarSesion;