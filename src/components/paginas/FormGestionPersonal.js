import React from 'react'

const FormGestionPersonal = () => {

    const styleInput = {
        height: "42px",
        width: "80%",
        marginLeft: "10%",
        fontSize: "20px",
        borderRadius: "11px"
    }

    return (
        <>
            <form>
                <div className="container mt-5">
                    <div class="row row-cols-2 mx-auto" style={{ height: "268px" }}>
                        <div class="col p-0">
                            <input type="text" className="form-control text-center" id="nombre" placeholder="Nombre" style={styleInput} />
                        </div>
                        <div class="col p-0">
                            <input type="text" className="form-control text-center" id="apellido" placeholder="Apellidos" style={styleInput} />
                        </div>
                        {/* <div class="col p-0">
                            <input type="number" className="form-control text-center" id="identificacion" placeholder="Numero de documento" style={styleInput}/>
                        </div> */}


                        <div class="col m-0">
                            <div className="input-group m-auto" style={{ width: "85%" }}>
                                <select class="form-select form-select-cc" style={{ width: "25%", borderRadius:"11px 0px 0px 11px" }}>
                                    <option selected>Tipo</option>
                                    <option value="1">C.C</option>
                                    <option value="2">T.I</option>
                                    <option value="3">C.E</option>
                                </select>
                                <input className="form-control" id="Documento-Registro2" placeholder="Documento" style={{ width: "65%" }} />
                            </div>
                        </div>
                        <div class="col p-0">
                            <input type="text" className="form-control text-center" id="nickname" placeholder="Nickname" style={styleInput} />
                        </div>
                        <div class="col p-0">
                            <input type="text" className="form-control text-center" id="cargo" placeholder="Cargo" style={styleInput} />
                        </div>
                        <div class="col p-0">
                            <input type="email" className="form-control text-center" id="correo" placeholder="Email" style={styleInput} />
                        </div>
                        <div class="col p-0">
                            <input type="password" className="form-control text-center" id="contrasena" placeholder="Contraseña" style={styleInput} />
                        </div>
                        <div class="col p-0">
                            <input type="password" className="form-control text-center " id="confirmarContrasena" placeholder="Confirmar contraseña" style={styleInput} />
                        </div>
                    </div>
                    <button class="btn btn-primary mb-4 mt-0" style={{ fontSize: "24px", width: "15%", marginLeft: "42.5%" }}>Guardar</button>

                </div>
            </form>
        </>

    )
}

export default FormGestionPersonal