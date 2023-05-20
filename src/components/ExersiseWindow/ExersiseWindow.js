import React, { useContext, useEffect, useState } from "react";
import "./ExersiseWindow.css";
import AlertFinish from "../AlertFinish/AlertFinish";
import { exersiseContext } from "../../context/contextFile";

export default function ExersiseWindow(props) {
  const [isFinish, setisFinish] = useState(false);
  const { totalTime, setIsFinishRoutine, setIsRunning, isRunning } = useContext(
    exersiseContext
  );
  const [sound, setsound] = useState(false)

  const handleNextClick = () => {
    props.setcExersise(props.cExersise + 1);
  };

  const handleStartClick = () => {
    setIsRunning(true);
    setsound(true)
  };

  const handleFinishClick = () => {
    setIsRunning(false);
    setisFinish(true);
    setIsFinishRoutine(true);
  };

  useEffect(() => {
    if (sound) {
      let audio = new Audio()
      audio.src = require("../../assets/audioConfirm.mp3")
      audio.play()
    }
  }, [sound])

  return (
    <div>
      <h1 className="title-ex">{props.name}</h1>
      <img className="img-ex" src={props.img} alt={props.name} />
      {!isRunning && (
        <button className="d-block mx-auto p-1 button-ex" onClick={handleStartClick}>
          Go
        </button>
      )}
      {isRunning && props.cExersise !== props.arrayExersises.length - 1 && !isFinish && (
        <>
          <h6>Next</h6>
          <img className="img-next" src={props.next} alt="next-ex" />
          <button className="d-block mx-auto p-1 button-ex" onClick={handleNextClick}>
            Next
          </button>
        </>
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
          totalHours={totalTime[0]}
          totalMinutes={totalTime[1]}
          totalSeconds={totalTime[2]}
        />
      )}
    </div>
  );
}
