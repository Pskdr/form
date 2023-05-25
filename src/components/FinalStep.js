import React from "react";

const FinalStep = ({
  title,
  text1,
  text2,
  link1,
  link2,
  setFinalStep,
  finalArray,
}) => {
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
      <p>{text1}</p>
      <p>
        <a href={link1}>{link1}</a>
      </p>
      {text2}

      <p>
        <a href={link2}>{link2}</a>
      </p>
      <a
        href="
https://www.pmi.org/
"
      >
        https://www.pmi.org/
      </a>
      <p>
        <a
          href="
https://www.youtube.com/watch?v=y7B2ZtDPOaQ&t=196s"
        >
          https://www.youtube.com/watch?v=y7B2ZtDPOaQ&t=196s
        </a>
      </p>
    </div>
  );
};

export default FinalStep;
