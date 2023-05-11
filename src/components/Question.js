import React from "react";
import RadioButton from "./RadioButton";
const Question = ({ id, question, answer, setAnswer }) => {
  const handleChange = (e) => {
    setAnswer((prevAnswers) => ({
      ...prevAnswers,
      [id]: e.target.value,
    }));
  };

  const renderRadioButtons = () => {
    const radioButtons = [];
    for (let i = 1; i <= 10; i++) {
      radioButtons.push(
        <RadioButton
          key={i}
          value={i}
          isChecked={answer[id] === i.toString()}
          onChange={handleChange}
        />
      );
    }
    return radioButtons;
  };

  return (
    <div>
      <h4>{question}</h4>
      {renderRadioButtons()}
    </div>
  );
};

export default Question;
