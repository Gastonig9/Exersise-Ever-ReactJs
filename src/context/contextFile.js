import { createContext, useState } from "react";

const exersiseContext = createContext({ default: "default" });
const Provider = exersiseContext.Provider;

function ExersiseProvider(props) {
    const [exersiseArray, setExersiseArray] = useState([])
    const [totalTime, setTotalTime] = useState(null)
  return (
    <Provider value={{ exersiseArray, setExersiseArray, totalTime, setTotalTime }}>
      {props.children}
    </Provider>
  );
}

export { exersiseContext, ExersiseProvider }