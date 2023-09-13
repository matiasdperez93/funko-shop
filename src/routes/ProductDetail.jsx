import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../JSON/products.json";
import Count from "../components/Count";
import Relacionados from "../components/Relacionados";

function ProductDetail(){
    const params = useParams();
    const pro_ID = params.productID;
    const ID = parseInt(pro_ID);
    console.log(products[ID])
    let imageProduct = products[ID].image[ID] ? `/images/${products[ID].image[ID]}` : `/images/image-not-found.jpg`
    return(
      <>

            <div className="card mb-3">
                <div className="row g-2">
                  <div className="col-md-4">
                    <img src={imageProduct} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{products[ID].name}</h2>
                      <p className="card-text">{products[ID].p}</p>
                      <p className="card-text"><small className="text-body-secondary">{products[ID].precio}</small></p>

                      
                        <Count/>
                        <Link to={"/shop"} className="btn btn-danger"> Comprar </Link>
                        <Link to={'/pagos'}><p>ver metodos de pago</p></Link> <p>3 CUOTAS SIN INTERES</p>

                    </div>
                  </div>
                </div>
              </div> 
        
              <Relacionados/>
              
                
            
        
        
        
        
        
        
        
        
        
        
        
        





               
        
        
        
        </>
    )
}


export default ProductDetail;