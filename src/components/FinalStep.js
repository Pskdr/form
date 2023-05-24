import React from "react";

const FinalStep = ({ title, text, setFinalStep, link, finalArray }) => {
  return (
    <div className="form2" style={{ display: "row" }}>
      <button className="button" onClick={() => setFinalStep(true)}>
        {"< Back"}
      </button>
      <p>
        Aquí tienes algunos consejos para comenzar a desarrollar tus habilidades
        de <h2>{title}</h2>
      </p>
      {finalArray.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}
      <p>
        {text}
        <a href={link}>{link}</a>
      </p>
    </div>
  );
};

export default FinalStep;
