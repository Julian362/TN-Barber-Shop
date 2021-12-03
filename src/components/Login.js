import '../css/Login.css'
import Redes from '../components/Redes'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Login() {

    const Posicion = {
        marginTop: "345px"
    }

    return (
        <div>
            <div className="espacio_para_que_no_se_vea_mal_el_icono_de_inicio">

            </div>

            <div className="Form-Inicio mt-5">
                <img className="mt-4" src="/img/Res1.svg" alt="" id="logo-responsive" />
                <p id="Iniciar">INICIAR SESIÓN</p>
                <form id="formulario">
                    <input type="text" className="form-control" id="Nombre" placeholder="Correo" />
                    <input type="password" className="form-control" id="Contraseña" placeholder="Contraseña" />
                </form>
                <Link to=""><p id="Olvidar">¿Olvidaste tu contraseña?</p></Link>
                <button className="btn btn-primary btnIngresar ">Ingresar</button>
                <Link className="Registro" to='/Registro' id="Registrate"><p>Registrarse</p></Link>
                <div style={Posicion}>
                    <Redes />
                </div>
            </div>
            <Footer />

        </div>

    );
}
export default Login;