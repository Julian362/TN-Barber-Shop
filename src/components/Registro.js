import '../css/registro.css'
import Redes from '../components/Redes'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

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

                    <div className="row tipo-Documento-Registro">
                        <div className="col-3">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Tipo</option>
                                <option value="1">C.C</option>
                                <option value="2">T.I</option>
                                <option value="3">C.E</option>
                            </select>
                        </div>
                        <div className="col-9">
                            <input className="form-control input-Registro" id="Apellidos-Registro" placeholder="Documento"  />
                        </div>
                        
                    </div>

                    <input type="text" className="form-control input-Registro" id="Nickname-Registro" placeholder="Nickname" />
                    <input type="mail" className="form-control input-Registro" id="Correo-Registro" placeholder="Correo" />
                    <input type="password" className="form-control input-Registro" id="Contraseñas-Registro" placeholder="Contraseña" />
                    <input type="password" className="form-control input-Registro" id="Confirmar-Registro" placeholder="Confirmar contraseña" />

                </form>

                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Acepto política de tratamiento de datos
                    </label>
                </div>

                <p id="Politica-Registro"></p>

                <button className="btn btn-primary btn-Registro ">Registrar</button>

                <Link className="Login-Registro" to='/Login' id="Login-Registro"><p>Ya tengo cuenta</p></Link>
                <div >
                    <Redes />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Registro
