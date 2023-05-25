import React, { useEffect } from "react";

const Inicio = ({ logo, setLogo }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogo(false);
    }, 3000);

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
        style={{ width: "auto", height: "auto", marginTop: "40dp" }}
      />
    </div>
  );
};

export default Inicio;
