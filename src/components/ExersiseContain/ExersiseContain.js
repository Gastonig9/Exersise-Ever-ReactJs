import "./ExersiseContain.css";
import React, { useContext, useState } from "react";
import { exersiseContext } from "../../context/contextFile";
import DescriptionWindow from "../DescriptionWindow/DescriptionWindow";
import ExersiseWindow from "../ExersiseWindow/ExersiseWindow";
import Chronometer from "../Chronometer/Chronometer";


export default function ExersiseContain() {
    const [showWindow, setShowWindow] = useState(false);
    const { exersiseArray, isRunning } = useContext(exersiseContext);
    const [currentExersise, setCurrentExersise] = useState(0);

    const handleExerciseWindow = () => {
        setShowWindow(false);
    };

    const handleDescriptionWindow = () => {
        setShowWindow(true);
    };

    return (
        <>
            <div className="container-ex mt-3">
                <div className="windows-ex d-flex">
                    <h2 onClick={handleExerciseWindow} className="w-50 ex-description">
                        Current exercise
                    </h2>
                    <h2 onClick={handleDescriptionWindow} className="w-50 ex-description">
                        Description
                    </h2>
                </div>

                {showWindow ? (
                    exersiseArray.length ? (
                        <DescriptionWindow 
                        description={exersiseArray[currentExersise].description} 
                        nameDescription={exersiseArray[currentExersise].name}
                        musclegroup = {exersiseArray[currentExersise].muscleGroup} />
                    ) : (
                        <div className="error-contain">
                            <img className="img-error" src="https://i.ibb.co/v4SBT2P/cancel.png" alt="error" />
                            <h2>Nothing around here (for now)</h2>
                            <p>Please add exercises to start</p>
                        </div>
                    )
                ) : exersiseArray.length ? (
                    <ExersiseWindow
                        arrayExersises={exersiseArray}
                        cExersise={currentExersise}
                        setcExersise={setCurrentExersise}
                        name={exersiseArray[currentExersise].name}
                        img={exersiseArray[currentExersise].img}
                        next={exersiseArray[currentExersise + 1] ? exersiseArray[currentExersise + 1].img : null}/>
                ) : (
                    <div className="error-contain">
                        <img className="img-error" src="https://i.ibb.co/v4SBT2P/cancel.png" alt="error" />
                        <h2>No exercises available</h2>
                        <p>Please add exercises to start</p>
                    </div>
                )}
                <Chronometer isActive={isRunning} />
            </div>
        </>
    );
}
