import React from "react";

const Form = ({ setStep }) => {
  return (
    <div className="form">
      <h2>
        <center>Escoge tu competencia</center>
      </h2>
      <div className="row form2">
        <h3 onClick={() => setStep(1)}>1. Comunicación Asertiva</h3>
        <h3 onClick={() => setStep(2)}>2. Carácter</h3>
        <h3 onClick={() => setStep(3)}>3. Liderazgo</h3>
      </div>
    </div>
  );
};

export default Form;
