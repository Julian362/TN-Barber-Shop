function Redes(){

    const Contenedor = {
        height:"60px",
        textAlign:"center"
    }

    const TamañoT={
        height:"50px",
        width:"auto",
        marginRight:"30px"
    }

    const Tamaño={
        height:"45px",
        width:"auto",
        borderRadius:"9px"
    }
    return(
        
        <div style={Contenedor}>
                <div className="row">
                    <div className="col">
                        <img id="logoface" src="/img/LogoFace.png" alt="" style={TamañoT}/>
                        <img id="logoinsta" src="/img/LogoInsta.png" alt="" style={TamañoT}/>
                        <img id="logowhat" src="/img/LogoWhat.png" alt="" style={Tamaño}/>
                    </div>
                </div>
            </div>
    );
}
export default Redes;