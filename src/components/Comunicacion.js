import React, { useState } from "react";
import Button from "./Button.js";
import Question from "./Question.js";
import FinalStep from "./FinalStep.js";

const Comunication = ({
  title,
  subText,
  handleCheck,
  questions,
  link1,
  link2,
  finalBajo,
  finalMedio,
  finalAlto,
}) => {
  const [answer, setAnswer] = useState({});

  const [finalStep, setFinalStep] = useState(true);

  const [finalArray, setFinalArray] = useState({});

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
        setFinalArray(finalBajo);
        setFinalStep(false);
      } else {
        if (5 < promedio && promedio < 7.9) {
          setText(
            "Su promedio es: " +
              promedio +
              "\n Para aprender más use este link: "
          );
          setLink(link2);
          setFinalArray(finalMedio);
          setFinalStep(false);
        } else {
          setText("Su promedio es: " + promedio + "\n ¡Buen trabajo!");
          setLink("");
          setFinalStep(false);
          setFinalArray(finalAlto);
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
          <p>
            Califique de acuerdo a la importancia que considere a cada pregunta
            en su ejercicio profesional, siendo 10 de muy alta importancia y 1
            la menor importancia, cada pregunta es individual y podía tener
            calificación de 1 a 10.
          </p>
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

          <center>
            {" "}
            <Button handleCheck={handleSubmit} text={"Enviar"} />
          </center>
        </div>
      ) : (
        <FinalStep
          title={title}
          text={text}
          setFinalStep={setFinalStep}
          link={link}
          finalArray={finalArray}
        />
      )}
    </div>
  );
};

export default Comunication;
