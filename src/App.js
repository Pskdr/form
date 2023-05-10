import "./App.css";
import { useState } from "react";
import CheckLilist from "./components/CheckList";
import Form from "./components/Form";

function App() {
  const [checked, setChecked] = useState([]);
  //const checkList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const STEP_FORM = 0;
  const STEP_COMUNICACION = 1;
  const [step, setStep] = useState(STEP_FORM);
  const steps = {
    [STEP_FORM]: <Form setStep={setStep} />,
    [STEP_COMUNICACION]: <div className="form" onClick={handleCheck}></div>,
  };

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items

  // Return classes based on whether item is checked
  //var isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";

  return <div className="app">{steps[step]}</div>;
}

export default App;
