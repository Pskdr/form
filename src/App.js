import "./App.css";
import logo from "./resourcers/logo habilidades poderosas.svg";
import { useState } from "react";
import Form from "./components/Form";
import Comunicacion from "./components/Comunicacion";
import {
  questions1,
  questions2,
  questions3,
  subtext1,
  subText2,
  subText3,
  link1,
  link2,
} from "./resourcers/index";
import Inicio from "./components/Inicio";

function App() {
  const STEP_FORM = 0;
  const STEP_COMUNICACION = 1;
  const STEP_CARACTER = 2;
  const STEP_LIDERAZGO = 3;
  const STEP_OTHERS = 4;

  const [showLogo, setLogo] = useState(true);

  const [step, setStep] = useState(STEP_FORM);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    setStep(0);
  };
  const steps = {
    [STEP_FORM]: <Form setStep={setStep} />,
    [STEP_COMUNICACION]: (
      <Comunicacion
        title={"Comunicación Asertiva"}
        subText={subtext1}
        handleCheck={handleCheck}
        questions={questions1}
        link1={link1}
        link2={link2}
      />
    ),
    [STEP_CARACTER]: (
      <Comunicacion
        title={"Cáracter"}
        subText={subText2}
        handleCheck={handleCheck}
        questions={questions2}
        link1={link1}
        link2={link2}
      />
    ),
    [STEP_LIDERAZGO]: (
      <Comunicacion
        title={"Liderazgo"}
        subText={subText3}
        handleCheck={handleCheck}
        questions={questions3}
        link1={link1}
        link2={link2}
      />
    ),
    [STEP_OTHERS]: (
      <div className="form">
        <button className="button" onClick={handleCheck}>
          {"< "}Back
        </button>
        <div className="form2">
          <h3>solución de conflictos</h3>
          <h3>pensamiento estratégico</h3>
          <h3>adaptación al cambio</h3>
          <h3>orientación a la acción</h3>
          <h3>trabajo en equipo </h3>
          <h3>influencia </h3>
          <h3>toma de decisiones</h3>
        </div>
      </div>
    ),
  };

  // Generate string of checked items

  // Return classes based on whether item is checked
  //var isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";

  return showLogo ? (
    <Inicio logo={logo} setLogo={setLogo} />
  ) : (
    <div className="app">{steps[step]}</div>
  );
}

export default App;
