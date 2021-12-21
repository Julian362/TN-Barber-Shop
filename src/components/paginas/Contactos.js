/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "../../css/contactos.css"

const Contactos = () => {
    // const back = {
    //     backgroundImage: "url(./img/contactos/bg_barber.svg)",
    // };
    return (
        <body>
            <div className="imgHead">
                <img className="logo" src="/img/contactos/NT_Barberia_shop1.svg" alt="" />
                <p className="letter"><strong>Proyecto Final Ciclo4:</strong></p>
                <p>NT barber Shop</p>
                <p>NRC: 1257 Grupo: 3</p>
                <p className="letter"><strong> Agradecimientos a: </strong></p>

                <div className="Creditos">
                    <img src="/img/contactos/MisionTic.png" alt="Uninorte" />
                    <img src="/img/contactos/Uninorte.png" alt="Uninorte" />
                </div>
            </div>




            <p className="headCreadores"> Desarrolladores: </p>
            <div className="row contactos">


                <div className="col dataPersona">

                <a href="https://www.linkedin.com/in/david-daniel-hernandez-molina-98aab920a/" target="_blank"><img
                        src="/img/contactos/davi.png" alt="" /></a>
                    <div className="expandir">
                        <p className="letter"><i> David D. Hernández M. </i> </p>
                        <p><strong>Nickname</strong></p>
                        <p>DavHD</p>
                        <p><strong>Campo Laboral:</strong></p>
                        <p>Ingeniería Electrónica</p>
                        <p><strong>davidhdz99@hotmail.com</strong></p>
                    </div>
                </div>
                <div className="col dataPersona">
                <a href="https://www.linkedin.com/in/julianga/" target="_blank"><img
                        src="/img/contactos/julian.jpg" alt="" /></a>
                    <div className="expandir">
                        <p className="letter"><i> Julian Garcia A. </i> </p>
                        <p><strong>Nickname</strong></p>
                        <p>Julian362</p>
                        <p><strong>Campo Laboral:</strong></p>
                        <p>Ingeniería Informática </p>
                        <p><strong>Julianga362@gmail.com </strong></p>
                    </div>
                </div>

                <div className="col dataPersona">

                <a href="https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-sierra-jim%C3%A9nez-3582a99a/" target="_blank"><img
                        src="/img/contactos/Majoperfil.jpg" alt="" /></a>
                    <div className="expandir">
                        <p className="letter"><i> María J. Sierra J. </i> </p>
                        <p><strong>Nickname</strong></p>
                        <p>MjSierra</p>
                        <p><strong>Campo Laboral:</strong></p>
                        <p>Ingeniería Química </p>
                        <p><strong>mjsierra319@gmail.com </strong></p>
                    </div>
                </div>

                <div className="col dataPersona">
                <a href="https://www.linkedin.com/in/raúl-andres-castaño-castellar-41b75bb3/" target="_blank"><img
                        src="/img/contactos/raulperfil.jpg" alt="" /></a>
                    <div className="expandir">
                        <p className="letter"><i>Raúl A. Castaño C.</i> </p>
                        <p><strong>Nickname</strong>:</p>
                        <p>Racastaño</p>
                        <p><strong>Campo Laboral:</strong></p>
                        <p>Ingeniería Mecánica</p>
                        <p><strong>raulkastano1@gmail.com</strong></p>
                    </div>
                </div>

                <div className="col dataPersona">
                    <a href="https://www.linkedin.com/in/stivenas" target="_blank"><img
                        src="/img/contactos/stiven.jpg" alt="" /></a>
                    <div className="expandir">
                        <p className="letter"><i>Jesús S. Álvarez S.</i></p>
                        <p><strong>Nickname</strong>:</p>
                        <p>INRIAs</p>
                        <p><strong>Campo Laboral:</strong></p>
                        <p>Productor Multimedia</p>
                        <p><strong>Inrialva@gmail.com</strong></p>
                    </div>
                </div>




            </div>
        </body>
    )
    }
export default Contactos