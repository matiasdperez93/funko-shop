import React from "react";
import logo from "../multimedia/branding/isotype.svg"
import { Link } from "react-router-dom";


function Footer(){


    return(
        <>
            <footer id="footer">
    <ul>
        <Link to="/shop">
            <li>SHOP</li>

        </Link>
        <Link to="#">
            <li>REGISTRARSE</li>

        </Link>
        <Link to="#">
            <li>INGRESAR</li>

        </Link>
        <Link to="/contacto">
            <li>CONTACTO</li>

        </Link>

    </ul>
    <p>All right reserved 2022 - Funkoshop</p>
    <img className="logo" src={logo} alt=""/>
    
</footer>
        
        
        </>
    )
}


export default Footer;