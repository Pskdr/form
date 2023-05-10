import React from 'react'
import Button from './Button';

const Comunicacion = ({ handleCheck }) => {
    return ( 
    <div className="form">
        
        <Button handleCheck={handleCheck} text={"< Back"}/>
      <h2>
        <center>Comunicación Asertiva</center>
      </h2>
      
      <div className="row form2">

      </div>
    </div> );
}
 
export default Comunicacion;