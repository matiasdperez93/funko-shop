import React from "react";
import { Link } from "react-router-dom";

function Contacto(){

    return(
        <>
        
        
            <form className="contacto" action="" method="get">
                <input type="text" name="nombre" placeholder="Ingrese su nombre" />
                <input type="text" name="apellido" placeholder="Ingrese su apellido" />
                <input type="email" name="email" placeholder="Ingrese su email" />
                <textarea name="texto" id="contact-text" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>

            </form>
        
        
        
        </>
    )
}


export default Contacto;