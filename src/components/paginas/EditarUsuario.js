import '../../css/edicion.css'
import Redes from '../Redes';
import Footer from '../Footer';
// import { Link } from 'react-router-dom';

var host = "http://localhost:8081";

function TraerDatos() {
    const nickname = document.getElementById("Nickname-Edicion").value;
    console.log(nickname);
    fetch(`${host}/usuario/datospersonales/${nickname}`)
        .then(res => res.json())            
        .then(res => {
            console.log(res);
            document.getElementById("Nombres-Edicion").value = res.nombre;
            document.getElementById("Apellidos-Edicion").value = res.apellido;
            document.getElementById("Documento-Edicion").value = res.numero_documento;
            document.getElementById("tipo-Documento-Edicion").innerHTML = res.tipo_documento;
            document.getElementById("Nickname-Edicion").value = res.nickname;
            document.getElementById("Correo-Edicion").value = res.correo;
            document.getElementById("Contraseñas-Edicion").value = res.password;
            console.log(res.tipo_documento);
        })
}
function EditarDatos(){
    const nombre =  document.getElementById("Nombres-Edicion").value;
    const apellido = document.getElementById("Apellidos-Edicion").value;
    const documento = document.getElementById("Documento-Edicion").value;
    const t_documento = document.getElementById("tipo-Documento-Edicion").value ;
    const nickname =  document.getElementById("Nickname-Edicion").value;
    const correo = document.getElementById("Correo-Edicion").value;
    const password = document.getElementById("Contraseñas-Edicion").value;
    fetch(`${host}/usuario/editar/${nombre}-${apellido}-${documento}-${t_documento}-${nickname}-${correo}-${password}`)
    .then(res => {
        alert("editado correctamente")
    })
}


function EditarUsuario() {

    return (
        <div>
            <div className="espacio_para_que_no_se_vea_mal_el_icono_de_inicio">

            </div>

            <div className="Form-Inicio-Edicion mt-5">
                <img className="mt-4" src="/img/Res1.svg" alt="" id="logo-responsive-Edicion" />
                <p id="Iniciar-Edicion">EDITAR</p>


                <form id="formulario-Edicion">
                <input type="text" className="form-control input-Edicion" id="Nickname-Edicion" placeholder="Nickname" />
                    <input type="text" className="form-control input-Edicion" id="Nombres-Edicion" placeholder="Nombres" />
                    <input type="text" className="form-control input-Edicion" id="Apellidos-Edicion" placeholder="Apellidos" />

                    <div className="input-group input-Edicion" style={{width:"85%"}}>
                            <select class="form-select form-select-cc" style={{width:"25%"}}>
                                <option selected id="tipo-Documento-Edicion">Tipo</option>
                                <option value="1" id="tipo-Documento-Edicion">C.C</option>
                                <option value="2" id="tipo-Documento-Edicion">T.I</option>
                                <option value="3" id="tipo-Documento-Edicion">C.E</option>
                            </select>
                            <input className="form-control" id="Documento-Edicion" placeholder="Documento" style={{width:"75%"}}/>
                    </div>

                    
                    <input type="mail" className="form-control input-Edicion" id="Correo-Edicion" placeholder="Correo" />
                    <input type="password" className="form-control input-Edicion" id="Contraseñas-Edicion" placeholder="Contraseña" />
                    <input type="password" className="form-control input-Edicion" id="Confirmar-Edicion" placeholder="Confirmar contraseña" />

                </form>
                
                <button className="btn btn-primary btn-Edicion mr-3" onClick={TraerDatos}> Mis datos </button>
                <button className="btn btn-primary btn-Edicion " onClick={EditarDatos}> Editar </button>

                <div className="Redes-Edicion">
                    <Redes />
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default EditarUsuario
