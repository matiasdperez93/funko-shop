import React from "react";
import products from "../JSON/products.json";
import { Link, useParams } from "react-router-dom";

function Relacionados(){
    const params = useParams();
    const pro_ID = params.productID;
    const ID = parseInt(pro_ID);
    

    let imageProduct = products[ID].image[ID] ? `/images/${products[ID].image[Math.floor(Math.random() * products[ID].image.length)]}` : `/images/image-not-found.jpg`
    let imageProduct2 = products[ID].image[ID] ? `/images/${products[ID].image[Math.floor(Math.random() * products[ID].image.length)]}` : `/images/image-not-found.jpg`
    let imageProduct3 = products[ID].image[ID] ? `/images/${products[ID].image[Math.floor(Math.random() * products[ID].image.length)]}` : `/images/image-not-found.jpg`
        
        
    

    return(
        <>
        <h2>PRODUCTOS RELACIONADOS</h2>
        <div className="relacionados">

            <div className="card" style={{width: "18rem"}}>
                <img src={imageProduct} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{products[ID].marca}</h5>
                    <p className="card-text">{products[ID].precio}</p>
                    <Link to={"/products" + products.id} className="btn btn-danger">VER COLECCION</Link>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageProduct2} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{products[ID].marca}</h5>
                    <p className="card-text">{products[ID].precio}</p>
                    <Link to={"/products" + products.id} className="btn btn-danger">VER COLECCION</Link>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageProduct3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{products[ID].marca}</h5>
                    <p className="card-text">{products[ID].precio}</p>
                    <Link to={"/products" + products.id} className="btn btn-danger">VER COLECCION</Link>
                </div>
            </div>
        </div>
        
        </>
    )
}


export default Relacionados;