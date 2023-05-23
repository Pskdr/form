import "./App.css";
import logo from "./resourcers/eia.jpeg";
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
import Prev from "./components/Prev";
import Info from "./components/Info";

function App() {
  const STEP_FORM = 0;
  const STEP_COMUNICACION = 1;
  const STEP_CARACTER = 2;
  const STEP_LIDERAZGO = 3;
  const STEP_OTHERS = 4;
  const STEP_PREV = 5;

  const [showLogo, setLogo] = useState(true);

  const [info, setInfo] = useState(false);
  const [infoText, setInfoText] = useState("");
  const [step, setStep] = useState(STEP_PREV);

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
    [STEP_OTHERS]: info ? (
      <Info handleCheck={() => setInfo(false)} text={infoText} />
    ) : (
      <div className="form">
        <button className="button" onClick={handleCheck}>
          {"< "}Back
        </button>
        <div className="form2">
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "La capacidad de resolver problemas, identificar causas, generar planes de acción y hacer seguimiento para lograr soluciones."
              );
            }}
          >
            Solución de conflictos
          </h3>
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "Conocimiento del negocio, visión de futuro y alineación con los objetivos estrategicos, indicadores de gestión y alineación de equipos."
              );
            }}
          >
            Pensamiento estratégico
          </h3>
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "Habilidad de identificar y comprender rápidamente los cambios en el entorno interno y externo; transformando las debilidades y oportunidades de mejora en fortalezas."
              );
            }}
          >
            Adaptación al cambio
          </h3>
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "Disposición a tomar acciones practicas para lidiar con una situación para resolver, te gusta ver que las cosas ocurran ."
              );
            }}
          >
            Orientación a la acción
          </h3>
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "Capacidad de trabajar colaborativamente con las personas pertenecientes a un grupo, con el propósito de alcanzar una meta,  manteniedo el clima laboral positivo"
              );
            }}
          >
            Trabajo en equipo{" "}
          </h3>
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "Capacidad de ser e inspirar positivamente a quienes te rodean y de motivar a otros hacia el éxito."
              );
            }}
          >
            Influencia{" "}
          </h3>
          <h3
            onClick={() => {
              setInfo(true);
              setInfoText(
                "Capacidad para elegir entre varias alternativas con base en criterios sustentados e información disponible, de forma ágil y proactiva."
              );
            }}
          >
            Toma de decisiones
          </h3>
        </div>
      </div>
    ),
    [STEP_PREV]: <Prev handleCheck={handleCheck} />,
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
