import Login from "../Login";
import Footer from "../Footer";
function IniciarSesion(){
    const Contenedor={
        marginTop:"150px"
    }
    return(
        <div style={Contenedor}>
            <Login/>
            <Footer/>
        </div>
    );
}
export default IniciarSesion;