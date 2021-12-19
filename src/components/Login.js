import '../css/Login.css'
import Redes from '../components/Redes'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Login(props) {

    var host = "http://localhost:8081";
    const ensayo = (e) => {
        const iniciarSesion = () => {
            const correo = document.getElementById("Correo").value;
            const password = document.getElementById("Contraseña").value;
            fetch(`${host}/usuario/iniciarSesion/${correo}-${password}`)
            .then(res => res.json())
            .then(res => {
                alert("inicio de sesión correctamente")
                const a = () => {props.setPaginasCargar(res)}
                a()
            })
        }
        iniciarSesion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    return (
        <div>
            <div className="espacio_para_que_no_se_vea_mal_el_icono_de_inicio">

            </div>

            <div className="Form-Inicio mt-5">
                <img className="mt-4" src="/img/Res1.svg" alt="" id="logo-responsive" />
                <p id="Iniciar">INICIAR SESIÓN</p>
                <form id="formulario">
                    <input type="text" className="form-control" id="Correo" placeholder="Correo" />
                    <input type="password" className="form-control" id="Contraseña" placeholder="Contraseña" />
                </form>
                <Link to=""><p id="Olvidar">¿Olvidaste tu contraseña?</p></Link>
                <button className="btn btn-primary btn-Ingresar " onClick={ensayo}>Ingresar</button>
                <Link className="Registro" to='/Registro' id="Registrate"><p>Registrarse</p></Link>
                <div className="Redes-Login">
                    <Redes />
                </div>
            </div>
            <Footer />

        </div>

    );
}
export default Login;