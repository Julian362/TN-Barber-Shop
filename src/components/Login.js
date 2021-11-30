import '../css/Login.css'
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div>
        <div className="Form-Inicio mt-5">
            <img className="mt-4"src="/img/Res1.svg" alt="" id="logo-responsive"/>
            <p id="Iniciar">INICIAR SESIÓN</p>
            <form>
            <input type="text" className="form-control ml-5 mr-5" id="Nombre" placeholder="Nombre"/>
            <input type="password" className="form-control mx-5" id="Contraseña" placeholder="Contraseña"/>
            </form>
            <Link to=""><p id="Olvidar">¿Olvidaste tu contraseña?</p></Link>
            <button class="btn btn-primary btnIngresar">Ingresar</button>
            <Link to=""><p id="Registrate">Registrarse</p></Link>
            <div className="redes">
                <div className="row">
                    <div className="col">
                        <img id="logoface" src="/img/LogoFace.png" alt=""/>
                    </div>
                    <div className="col">
                        <img id="logoinsta" src="/img/LogoInsta.png" alt=""/>
                    </div>
                    <div className="col">
                        <img id="logowhat" src="/img/LogoWhat.png" alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </div>
        
    );
}
export default Login;