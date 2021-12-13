import '../css/registro.css'
import Redes from '../components/Redes'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

var host = "http://localhost:8081";
const consultar = function() {
    const nombre = document.getElementById("Nombres-Registro").value;
    console.log(nombre)
    fetch(`${host}/producto/consultar/${nombre}`)
    .then(res => res.json())
    .then(res => {
        document.getElementById("Apellidos-Registro").value = res.price;
    })
}
function Registro() {

    return (
        <div>
            <div className="espacio_para_que_no_se_vea_mal_el_icono_de_inicio">

            </div>

            <div className="Form-Inicio-Registro mt-5">
                <img className="mt-4" src="/img/Res1.svg" alt="" id="logo-responsive-Registro" />
                <p id="Iniciar-Registro">REGISTRO</p>


                <form id="formulario-Registro">

                    <input type="text" className="form-control input-Registro" id="Nombres-Registro" placeholder="Nombres" />
                    <input type="text" className="form-control input-Registro" id="Apellidos-Registro" placeholder="Apellidos" />

                    <div className="input-group input-Registro" style={{width:"85%"}}>
                            <select className="form-select form-select-cc" style={{width:"25%"}}>
                                <option selected>Tipo</option>
                                <option value="1">C.C</option>
                                <option value="2">T.I</option>
                                <option value="3">C.E</option>
                            </select>
                            <input className="form-control" id="Documento-Registro" placeholder="Documento" style={{width:"75%"}}/>
                    </div>

                    <input type="text" className="form-control input-Registro" id="Nickname-Registro" placeholder="Nickname" />
                    <input type="mail" className="form-control input-Registro" id="Correo-Registro" placeholder="Correo" />
                    <input type="password" className="form-control input-Registro" id="Contraseñas-Registro" placeholder="Contraseña" />
                    <input type="password" className="form-control input-Registro" id="Confirmar-Registro" placeholder="Confirmar contraseña" />

                </form>

                <div className="custom-control custom-checkbox Politica-Registro">
                    <input className="custom-control-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="custom-control-label" for="flexCheckDefault">
                        Acepto política de tratamiento de datos
                    </label>
                </div>

                <button className="btn btn-primary btn-Registro" onClick={consultar}>Registrar</button>

                <Link className="Login-Registro" to='/Login' id="Login-Registro"><p>Ya tengo cuenta</p></Link>
                <div className="Redes-Registro">
                    <Redes />
                </div>
            </div>
            <Footer />
        </div>
    );
}






export default Registro
