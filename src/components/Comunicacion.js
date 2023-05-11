import React, { useState } from "react";
import Button from "./Button.js";
import Question from "./Question.js";

const Comunication = ({ handleCheck }) => {
  const questions = [
    {
      id: 1,
      question:
        "¿Pide opiniones, aportes a las personas y los tiene en cuenta?",
    },
    {
      id: 2,
      question:
        "¿Es abierto y receptivo , sabe lo que los demás han dicho y han querido decir y valida de manera que sientan que se les ha escuchado?",
    },
    {
      id: 3,
      question:
        "¿Tiene gestión emocional, es prudente, sabe actuar  y expresarse con respeto en un momento de estrés?",
    },
    {
      id: 4,
      question:
        "¿Sabe lo que quiere y sabe expresarlo?. Se hace entender y se responsabiliza de su comunicación?",
    },
    {
      id: 5,
      question:
        "¿Qué tan cómodo le resulta retroalimentar a su equipo en caso de un bajo desempeño?",
    },
    // add more questions here
  ];
  const [answer, setAnswer] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answer); // do something with the answers
  };

  return (
    <div className="form">
      <div className="form2">
        <Button handleCheck={handleCheck} text={"< Back"} />

        <h2>Comunicacion Acertiva</h2>
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

        <Button handleCheck={handleSubmit} text={"submit"} />
      </div>
    </div>
  );
};

export default Comunication;
