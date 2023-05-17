import React, { useEffect } from "react";

const Inicio = ({ logo, setLogo }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogo(false);
    }, 6000);

    // Clean up the timer when the component is unmounted
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="app">
      <img
        alt="Competencias poderosas"
        src={logo}
        className="logo"
        style={{ width: "400px", height: "400px" }}
      />
    </div>
  );
};

export default Inicio;
