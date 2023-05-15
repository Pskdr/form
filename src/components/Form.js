import React from "react";

const Form = ({ setStep }) => {
  return (
    <div className="form">
      <h2>
        <center>
          Estas son las 3 competencias de mayor impacto para tu desempeño
          profesional, elegidas por un grupo de gerentes de proyectos
        </center>
      </h2>
      <div className="row form2">
        <h3 onClick={() => setStep(1)}>1. Comunicación Asertiva</h3>
        <h3 onClick={() => setStep(2)}>2. Carácter</h3>
        <h3 onClick={() => setStep(3)}>3. Liderazgo</h3>
        <h3 onClick={() => setStep(4)}>4. Otras competencias poderosas</h3>
      </div>
    </div>
  );
};

export default Form;
