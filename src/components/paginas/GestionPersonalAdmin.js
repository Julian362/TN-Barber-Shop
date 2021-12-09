import React from 'react'
import Footer from '../Footer'
import FormGestionPersonal from './FormGestionPersonal'
import Redes from '../Redes'
import "../../css/FormularioGestion.css"



const GestionPersonalAdmin = (props) => {

    const listaEmpleados = props.empleados.map((p) =>
        <>
            <div className="col">
                <div className="card" style={{ width: "80%", marginLeft: "10%", border: 0 }}>
                    <img src={p.rutafoto} className="card-img-top" alt="..." style={{ height: "fit-content", width: "auto" }} />
                    <div className="card-body">
                        <h5 className="card-title text-center">{p.Nickname}</h5>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className="bg-white" style={{ height: "120px" }}></div>

            <div className="card bg-white mt-5 mb-5 mx-auto"
                style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)",minWidth:"800px", maxWidth:"1024px" }}>
                <img className="mt-4" src="/img/Res1.svg" alt=""
                    style={{ width: "25%", height: "fit-content", marginLeft: "37.5%" }} />

                <p className="text-center mt-3" style={{ fontSize: "36px" }}>ADMINISTRADOR</p>

                <div className="btn-group col-6 m-auto" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check btn-primary btnradio1" name="btnradio" id="btnradio1" autocomplete="off" checked  style={{ backgroundColor:"red" }}/>
                    <label className="btn btn-outline-secondary" for="btnradio1">Personal</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                    <label className="btn btn-outline-secondary" for="btnradio3">Supervisor</label>
                </div>

                <FormGestionPersonal />

                <div class="input-group mb-3 m-auto col-6">
                    <input type="text" class="form-control text-center " placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" style={{ height: "fit-content", width: "auto", paddingLeft: "15%" }} />
                    <span class="input-group-text bi bi-search" id="basic-addon1"></span>
                </div>

                <div className="container mt-4 mb-4">
                    <div className="row row-cols-6">
                        {listaEmpleados}
                    </div>
                </div>

                <div style={{ height: "80px" }}><Redes /></div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default GestionPersonalAdmin