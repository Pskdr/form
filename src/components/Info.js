import React from "react";

const Info = ({ text, handleCheck }) => {
  return (
    <div className="form">
      <button className="button" onClick={handleCheck}>
        {"< "}Back
      </button>
      <div className="form2">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Info;
