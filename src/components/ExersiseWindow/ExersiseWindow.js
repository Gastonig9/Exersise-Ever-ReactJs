import React, { useContext, useState } from "react";
import Chronometer from "../Chronometer/Chronometer";
import "./ExersiseWindow.css";
import AlertFinish from "../AlertFinish/AlertFinish";
import { exersiseContext } from "../../context/contextFile"

export default function ExersiseWindow(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [isFinish, setisFinish] = useState(false)
  const [reset, setReset] = useState(false);
  const { totalTime } = useContext(exersiseContext)

  const handleNextClick = () => {
    props.setcExersise(props.cExersise + 1)
    setReset(true)
  }

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handleFinishClick = () => {
    setIsRunning(false)
    setisFinish(true)
  }

  return (
    <div>
      <h1 className="title-ex">{props.name}</h1>
      <img className="img-ex" src={props.img} alt={props.name} />
      {!isRunning && (
        <button
          className="d-block mx-auto p-1 button-ex"
          onClick={handleStartClick}
        >
          Go
        </button>
      )}
      {isRunning && props.cExersise !== props.arrayExersises.length - 1 && !isFinish && (
        <button
          className="d-block mx-auto p-1 button-ex"
          onClick={handleNextClick}
        >
          Next
        </button>
      )}
      {isRunning && props.cExersise === props.arrayExersises.length - 1 && !isFinish && (
         <button
         className="d-block mx-auto p-1 button-ex"
         onClick={handleFinishClick}
       >
         Finish Routine
       </button>
      )}
      {!isRunning && isFinish && (
        <AlertFinish 
        totalHours = {totalTime[0]} 
        totalMinutes={totalTime[1]}
        totalSeconds={totalTime[2]}
        />
      )}

      <Chronometer isActive={isRunning} reset={reset} />
    </div>
  );
}

