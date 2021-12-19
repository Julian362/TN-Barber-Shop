import React from 'react'
import '../../css/SweetAlert.css';

const Swal = require('sweetalert2');

const FormGestionPersonal = (props) => {

    const styleInput = {
        height: "42px",
        width: "80%",
        marginLeft: "10%",
        fontSize: "20px",
        borderRadius: "11px"
    }

    function EditarCambios (){        
        Swal.fire({
            title: '¿Estás seguro de editar la información?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#E7BC4D',
            denyButtonText: `No guardar`,

            }).then((result) => {
            if (result.isConfirmed) {  

                var host = "http://localhost:8081";
                const nombre = document.getElementById("nombre").value;
                const apellido = document.getElementById("apellido").value;
                const t_documento = document.getElementById("tipo-Documento-Registro2").value;
                const documento = document.getElementById("Documento-Registro2").value;
                const nickname = document.getElementById("nickname").value;
                const cargo = document.getElementById("rol").value;
                const correo = document.getElementById("correo").value;
                const contrasena = document.getElementById("contrasena").value;             
                
                fetch(`${host}/personas/editar/${nombre}-${apellido}-${documento}-${t_documento}-${nickname}-${correo}-${contrasena}-${cargo}`)
                    .then(res => {
                        Swal.fire('Los cambios han sido guardados exitosamente, reinicie la pagina para ver los cambios efectuados', '', 'success')
                })               

            } else if (result.isDenied) {
                Swal.fire('Los cambios no han sido guardados', '', 'info')
            }
          })
    }

    // function validarContrasena(){
    //     const contrasena = document.getElementById("contrasena").value;
    //     const Confirmarcontrasena = document.getElementById("confirmarContrasena").value;

    //     if(contrasena!==Confirmarcontrasena){
    //         document.getElementById("confirmarContrasena").style.background="red";
    //         document.getElementById("confirmarContrasena").placeholder="Las contraseñas no coinciden";
    //         return false;
    //     }
    //     else{
    //         document.getElementById("confirmarContrasena").style.background="none";
    //     }
    // }
    // const Lista_Trabajadores = document.getElementById("nombre").value = vTrabajadores.nombre
 

    return (
        <>
            <form>
                <div className="container mt-5">
                    <div className="row row-cols-2 mx-auto" style={{ height: "268px" }}>
                        <div className="col p-0">
                            <input type="text" className="form-control text-center" id="nombre" placeholder="Nombre" style={styleInput} />
                        </div>
                        <div className="col p-0">
                            <input type="text" className="form-control text-center" id="apellido" placeholder="Apellidos" style={styleInput} />
                        </div>
                        {/* <div className="col p-0">
                            <input type="number" className="form-control text-center" id="identificacion" placeholder="Numero de documento" style={styleInput}/>
                        </div> */}


                        <div className="col m-0">
                            <div className="input-group m-auto" style={{ width: "85%" }}>
                                <select className="form-select form-select-cc"  style={{ width: "25%", borderRadius:"11px 0px 0px 11px" }}>
                                    <option id="tipo-Documento-Registro2">Tipo</option>
                                    <option value="C.C">C.C</option>
                                    <option value="T.I">T.I</option>
                                    <option value="C.E">C.E</option>
                                </select>
                                <input className="form-control" id="Documento-Registro2" placeholder="Documento" style={{ width: "65%" }} />
                            </div>
                        </div>
                        <div className="col p-0">
                            <input type="text" className="form-control text-center" id="nickname" placeholder="Nickname" disabled style={styleInput} />
                        </div>
                        <div className="col p-0">
                            <input type="text" className="form-control text-center" id="rol" placeholder="rol" style={styleInput} />
                        </div>
                        <div className="col p-0">
                            <input type="email" className="form-control text-center" id="correo" placeholder="Email" style={styleInput} />
                        </div>
                        <div className="col p-0">
                            <input type="password" className="form-control text-center" id="contrasena" placeholder="Contraseña" disabled style={styleInput} />
                        </div>
                        <div className="col p-0">
                            {/* <input type="text" className="form-control text-center " id="cargo" placeholder="Cargo" style={styleInput} /> */}
                        </div>
                    </div>
                    <button type="button" onClick={EditarCambios}  className="btn btn-primary mb-4 mt-0" style={{ fontSize: "24px", width: "30%", marginLeft: "35%" }}>Aplicar cambios</button>

                </div>
            </form>
        </>

    )
}

export default FormGestionPersonal