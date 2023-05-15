import React, { useState } from "react";
import Button from "./Button.js";
import Question from "./Question.js";
import FinalStep from "./FinalStaep.js";

const Comunication = ({
  title,
  subText,
  handleCheck,
  questions,
  link1,
  link2,
}) => {
  const [answer, setAnswer] = useState({});

  const [finalStep, setFinalStep] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer); // do something with the answers
    if (questions.length === Object.keys(answer).length) {
      const sum = Object.values(answer).reduce(
        (acc, val) => parseInt(acc) + parseInt(val),
        0
      );
      const promedio = sum / questions.length;

      if (promedio <= 5) {
        setText(
          "Su promedio es: " + promedio + "\n Para aprender más use este link "
        );
        setLink(link1);
        setFinalStep(false);
      } else {
        if (5 < promedio && promedio < 7.9) {
          setText(
            "Su promedio es: " +
              promedio +
              "\n Para aprender más use este link: "
          );
          setLink(link2);
          setFinalStep(false);
        } else {
          setText("Su promedio es: " + promedio + "\n ¡Buen trabajo!");
          setLink("");
          setFinalStep(false);
        }
      }
    } else {
      alert("Todas las preguntas son obligatorias");
    }
  };
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  return (
    <div className="form">
      {finalStep ? (
        <div className="form2">
          <Button handleCheck={handleCheck} text={"< Back"} />

          <h2>{title}</h2>
          <p>{subText}</p>
          <form onSubmit={handleSubmit} className="formfinal">
            {questions.map(({ id, question }) => (
              <Question
                key={id}
                id={id}
                question={question}
                answer={answer}
                setAnswer={setAnswer}
              />
            ))}
          </form>

          <Button handleCheck={handleSubmit} text={"Enviar"} />
        </div>
      ) : (
        <FinalStep text={text} setFinalStep={setFinalStep} link={link} />
      )}
    </div>
  );
};

export default Comunication;
