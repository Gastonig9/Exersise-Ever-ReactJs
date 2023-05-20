import React, { useState, useEffect, useContext } from "react";
import { exersiseContext } from "../../context/contextFile"
import "./Chronometer.css"

function Chronometer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [startTime, setStartTime] = useState([]);
  const { setTotalTime } = useContext(exersiseContext)

  useEffect(() => {
    let intervalId;

    if (props.isActive) {
      intervalId = setInterval(() => {
        setSeconds((s) => s + 1);

        if (seconds === 59) {
          setSeconds(0);
          setMinutes((m) => m + 1);
        }

        if (minutes === 59) {
          setMinutes(0);
          setHours((h) => h + 1);
        }

        setStartTime([hours, minutes, seconds ])
        setTotalTime(startTime)
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [props.isActive, hours, seconds, minutes, setTotalTime, startTime]);
  

  // useEffect(() => {
  //   if (props.reset) {
  //     setSeconds(0);
  //     setMinutes(0);
  //     setHours(0);
  //   }
  // }, [props.reset]);

  return (
    <div className="chronometer-contain">
      <h1 className="chronometer-text">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </div>
  );
}

export default Chronometer;

