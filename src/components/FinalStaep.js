import React from "react";

const FinalStep = ({ text, setFinalStep, link }) => {
  return (
    <div className="form2" style={{ display: "row" }}>
      <button className="button" onClick={() => setFinalStep(true)}>
        {"< Back"}
      </button>
      <h2>
        {text}
        <a href={link}>{link}</a>
      </h2>
    </div>
  );
};

export default FinalStep;
