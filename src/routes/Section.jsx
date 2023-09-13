import React from "react";
import { Link } from "react-router-dom";

import products from "../JSON/products.json";



function Section(){
    
    return(

        
        <> 
        {
            products.length === 0 && <div className="row justify-content-center" id="loading">
                <div className="col-6 text-center">
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p>cargando...</p>
                </div>
            </div>
        }


        {
            products.map( product =>{
                
                    
                    let imageProduct = product.image[0] ? `/images/${product.image[0]}` : `/images/image-not-found.jpg`;
                    return(
                        <>
                        
                        
                        <section id="cuerpo">
                        <div id="item">
                            <div className="info">
                                <h2>{product.name}</h2>
                                <h4>{product.marca}</h4>
                                <p>{product.p}</p>
                                <h3>{product.precio}</h3>
                                <button><Link to={"/product/"+ product.id}>VER COLECCIÓN</Link></button>
                            </div>
                            <div className="imagen">
                                <img src={imageProduct} alt={product.name}/>
                            </div>
                        </div>
                        </section>
    
                        <hr/>
                        </>
                    )
                
            
            
            }
   
    )};
    
        </>
    )}
export default Section;