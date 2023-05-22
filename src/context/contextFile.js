import { createContext, useState } from "react";

const exersiseContext = createContext({ default: "default" });
const Provider = exersiseContext.Provider;

function ExersiseProvider(props) {
    const [exersiseArray, setExersiseArray] = useState([])
    const [totalTime, setTotalTime] = useState(null)
    const [isFinishRoutine, setIsFinishRoutine] = useState(false)
    const [isRunning, setIsRunning] = useState(false);
    const [todayTraining, setTodayTraining] = useState(false)

  return (
    <Provider value={{ exersiseArray, 
    setExersiseArray,
     totalTime, 
     setTotalTime, 
     isFinishRoutine, 
     setIsFinishRoutine, 
     isRunning, 
     setIsRunning,
     todayTraining,
     setTodayTraining }}>
      {props.children}
    </Provider>
  );
}

export { exersiseContext, ExersiseProvider }