import '../css/registro.css'
import Redes from '../components/Redes'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Registro() {

    const showContraseña = function(e){
            if(document.getElementById("Contraseñas-Registro").type === "text"){
                document.getElementById("Contraseñas-Registro").type = "password";
                document.getElementById("contraseña-show").value = "Mostrar";
            }else if(document.getElementById("Contraseñas-Registro").type === "password"){
                document.getElementById("Contraseñas-Registro").type = "text";
                document.getElementById("contraseña-show").value = "Ocultar";
            }
    }
    const showContraseña2 = function(e){
            if(document.getElementById("Confirmar-Registro").type === "text"){
                document.getElementById("Confirmar-Registro").type = "password";
                document.getElementById("Confirmar-show").value = "Mostrar";
            }else if(document.getElementById("Confirmar-Registro").type === "password"){
                document.getElementById("Confirmar-Registro").type = "text";
                document.getElementById("Confirmar-show").value = "Ocultar";
            }
    }
    var host = "http://localhost:8081";
    const registrar = function(e) {
        const nombre = document.getElementById("Nombres-Registro").value;
        const apellido = document.getElementById("Apellidos-Registro").value;
        const documento = document.getElementById("Documento-Registro").value;
        const t_documento = document.getElementById("tipo-Documento-Registro").value;
        const nickname = document.getElementById("Nickname-Registro").value;
        const correo = document.getElementById("Correo-Registro").value;
        const password = document.getElementById("Contraseñas-Registro").value;
        console.log(nombre);
        fetch(`${host}/usuario/registrar/${nombre}-${apellido}-${documento}-${t_documento}-${nickname}-${correo}-${password}`)
            .then(res => {
                alert("registrado correctamente")
            })
    }

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
                                <option selected id="tipo-Documento-Registro">Tipo</option>
                                <option value="1">C.C</option>
                                <option value="2">T.I</option>
                                <option value="3">C.E</option>
                            </select>
                            <input className="form-control" id="Documento-Registro" placeholder="Documento" style={{width:"75%"}}/>
                    </div>

                    <input type="text" className="form-control input-Registro" id="Nickname-Registro" placeholder="Nickname" />
                    <input type="mail" className="form-control input-Registro" id="Correo-Registro" placeholder="Correo" />
                    <div className="input-group input-Registro" style={{width:"85%"}} >
                        <input type="button" class="form-control form-icon" id="contraseña-show" onClick={showContraseña} style={{width:"25%"}} value="Mostrar"/>
                        <input type="password" className="form-control input-Registro" id="Contraseñas-Registro" placeholder="Contraseña" style={{width:"75%"}} />
                    </div>
                    <div className="input-group input-Registro" style={{width:"85%"}} >
                        <input type="button" class="form-control form-icon" id="Confirmar-show" onClick={showContraseña2} style={{width:"25%"}} value="Mostrar"/>
                        <input type="password" className="form-control input-Registro" id="Confirmar-Registro" placeholder="Confirmar contraseña" style={{width:"75%"}} />
                    </div>
                <div className="custom-control custom-checkbox Politica-Registro">
                    <input className="custom-control-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="custom-control-label" for="flexCheckDefault">
                        Acepto política de tratamiento de datos
                    </label>
                </div>

                <button className="btn btn-primary btn-Registro" onClick={registrar} >Registrar</button>
                </form>


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
