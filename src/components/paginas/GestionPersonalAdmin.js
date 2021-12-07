import React from 'react'
import Footer from '../Footer'
import FormGestionPersonal from './FormGestionPersonal'
import Redes from '../Redes'



const GestionPersonalAdmin = (props) => {

    const listaEmpleados = props.empleados.map((p)=>
        <>
            <div className="col">
                <div className="card" style={{width: "80%", marginLeft:"10%", border:0}}>
                    <img src={p.rutafoto} className="card-img-top" alt="..." style={{height:"fit-content", width:"auto"}}/>
                    <div className="card-body">
                        <h5 className="card-title text-center">{p.Nickname}</h5>
                    </div>
                </div>   
            </div>
        </>
    );

    return (
        <>
        <div className="bg-white" style={{ height: "120px"}}></div>
        
        <div className="card bg-white mt-5 mb-5 mx-auto"
            style={{ borderRadius: "20px", boxShadow: "5px 5px 4px rgba(199, 199, 199, 0.67)", width:"80%"}}>
            <img className="mt-4" src="/img/Res1.svg" alt=""
                style={{width: "25%", height: "fit-content", marginLeft: "37.5%"}} />
            
            <p className="text-center mt-3" style={{ fontSize:"36px"}}>ADMINISTRADOR</p>
            
            <div className="btn-group w-50  mx-auto" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" style={{fontSize:"24px"}}>Personal</button>
                <button type="button" className="btn btn-outline-primary" style={{fontSize:"24px"}}>Supervisores</button>
            </div>
            
            <FormGestionPersonal/>

            <div className="container-fluid w-50 mb-4">
                <form className="d-flex">
                    <input className="form-control me-2 text-center" type="search" placeholder="Buscar" aria-label="Search" style={{fontSize:"20px", height:"42px"}}/>
                    <img src="/img/lupa.png" alt="" style={{height:"fit-content", width:"auto"}}/>
                </form>
            </div>

            <div className="container mt-4 mb-4">
                <div className="row row-cols-6">
                    {listaEmpleados}
                </div>
            </div>
            
            <div style={{height:"80px"}}><Redes/></div>
        </div>
       
        <div>
            <Footer />
        </div>
        </>
    )
}

export default GestionPersonalAdmin