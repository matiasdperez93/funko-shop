import React from "react";
import {Link} from "react-router-dom"
import logo from "../multimedia/branding/logo_light_horizontal.svg"

function Navbar(){
    return(
    <>
        <div className="barra">
            <div className="logo-nav">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/contacto">CONTACTO</Link></li>
                    <li><Link to="/login">LOGIN</Link></li>
                    <li><Link to="/car"></Link></li>
                </ul>
            </nav>
        </div>
    
    
    </>

    )
}


export default Navbar;