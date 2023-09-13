import React from "react";
import { Link } from "react-router-dom";

function Banner(){
    return(
        <>
            <div className="banner">
                <div className="banne-info">
                    <h4>Nuevos Ingresos</h4>
                    <p>Descubrí el próximo Funko Pop de tu colección</p>
                    <button><Link to="/shop">SHOP</Link></button>
                </div>
            </div>
        
        </>
    )
}

export default Banner;