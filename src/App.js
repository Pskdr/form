import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  //const checkList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const STEP_FORM = 0;
  const STEP_COMUNICACION = 1;
  const STEP_CARACTER = 2;
  const STEP_LIDERAZGO = 3;
  const [step, setStep] = useState(STEP_FORM);
 
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    setStep(0)
  };
 const steps = {
    [STEP_FORM]: <Form setStep={setStep} />,
    [STEP_COMUNICACION]: <button className="form" onClick={handleCheck}>{"<-"}Back</button>,
    [STEP_CARACTER]: <button className="form" onClick={handleCheck}>{"<-"}Back</button>,
    [STEP_LIDERAZGO]: <button className="form" onClick={handleCheck}>{"<-"}Back</button>
  };

  // Generate string of checked items

  // Return classes based on whether item is checked
  //var isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";

  return <div className="app">{steps[step]}</div>;
}

export default App;
