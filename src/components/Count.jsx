import { useState } from "react";
import React from "react";



function Count(){
    const[count , setCount] = useState(0)
    const sumar = () =>{
        setCount(count + 1);
    }
    const restar =()=>{
        count ===0 ? setCount(count) : setCount(count - 1);
    }

    return(
        <>

        <div className="count">
            <button className="sumar" onClick={sumar}>+</button>
            <h3 className="results">{count}</h3>
            <button className="restar" onClick={restar}>-</button>
        </div>
        
        
        </>
    )
}


export default Count;