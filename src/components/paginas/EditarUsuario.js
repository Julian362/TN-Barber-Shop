import '../../css/edicion.css'
import Redes from '../Redes';
import Footer from '../Footer';
// import { Link } from 'react-router-dom';

function EditarUsuario() {

    return (
        <div>
            <div className="espacio_para_que_no_se_vea_mal_el_icono_de_inicio">

            </div>

            <div className="Form-Inicio-Edicion mt-5">
                <img className="mt-4" src="/img/Res1.svg" alt="" id="logo-responsive-Edicion" />
                <p id="Iniciar-Edicion">EDITAR USUARIO</p>


                <form id="formulario-Edicion">

                    <input type="text" className="form-control input-Edicion" id="Nombres-Edicion" placeholder="Nombres" />
                    <input type="text" className="form-control input-Edicion" id="Apellidos-Edicion" placeholder="Apellidos" />

                    <div className="input-group input-Edicion" style={{width:"85%"}}>
                            <select className="form-select form-select-cc" style={{width:"25%"}}>
                                <option defaultValue>Tipo</option>
                                <option value="1">C.C</option>
                                <option value="2">T.I</option>
                                <option value="3">C.E</option>
                            </select>
                            <input className="form-control" id="Documento-Edicion" placeholder="Documento" style={{width:"75%"}}/>
                    </div>

                    <input type="text" className="form-control input-Edicion" id="Nickname-Edicion" placeholder="Nickname" />
                    <input type="mail" className="form-control input-Edicion" id="Correo-Edicion" placeholder="Correo" />
                    <input type="password" className="form-control input-Edicion" id="Contraseñas-Edicion" placeholder="Contraseña" />
                    <input type="password" className="form-control input-Edicion" id="Confirmar-Edicion" placeholder="Confirmar contraseña" />

                </form>

                <button className="btn btn-primary btn-Edicion ">Guardar</button>

                <div className="Redes-Edicion">
                    <Redes />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default EditarUsuario
