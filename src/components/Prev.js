import React from "react";
import eia from "../resourcers/logo habilidades poderosas.svg";

const Prev = ({ handleCheck }) => {
  return (
    <div className="form">
      <img src={eia} alt="EIA" />
      <center>
        <p style={{ justifyContent: "center" }}>
          Si deseas evaluar tu nivel de implementación en el ejercicio
          profesional de las siguientes competencias poderosas, lo puedes hacer
          a través de esta aplicación.
        </p>
      </center>

      <div className="form2"></div>
      <center>
        <button className="button" onClick={handleCheck}>
          Anímate a evaluarte
        </button>
      </center>
    </div>
  );
};

export default Prev;
