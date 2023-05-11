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
    if (questions.length === Object.keys(answer).length) {
      const sum = Object.values(answer).reduce(
        (acc, val) => parseInt(acc) + parseInt(val),
        0
      );
      const promedio = sum / questions.length;

      if (promedio <= 5) {
        alert(
          "Su promedio es: " +
            promedio +
            "\n Para aprender más use este link https://infolibros.org/libros-pdf-gratis/superacion-personal/liderazgo/"
        );
      } else {
        if (5 < promedio && promedio < 7.9) {
          alert(
            "Su promedio es: " +
              promedio +
              "\n Para aprender más use este link https://www.youtube.com/watch?v=16z28DjRTAA"
          );
        } else {
          alert("Su promedio es: " + promedio + "\n ¡Buen trabajo!");
        }
      }
    } else {
      alert("Todas las preguntas son obligatorias");
    }
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

        <Button handleCheck={handleSubmit} text={"Enviar"} />
      </div>
    </div>
  );
};

export default Comunication;
