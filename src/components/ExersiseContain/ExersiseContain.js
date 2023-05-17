import "./ExersiseContain.css";
import React, { useContext, useState } from "react";
import { exersiseContext } from "../../context/contextFile";
import DescriptionWindow from "../DescriptionWindow/DescriptionWindow";
import ExersiseWindow from "../ExersiseWindow/ExersiseWindow";

export default function ExersiseContain() {
    const [showWindow, setShowWindow] = useState(false);
    const { exersiseArray } = useContext(exersiseContext);
    const [currentExersise, setCurrentExersise] = useState(0)

    const handleExerciseWindow = () => {
        setShowWindow(false);
        console.log("Estas en la ventana de ejercicio");
    };

    const handleDescriptionWindow = () => {
        setShowWindow(true);
        console.log("Estas en la ventana de descripcion");
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
                        <DescriptionWindow description={exersiseArray[currentExersise].description} />
                    ) : (
                        <p>No hay descripción disponible</p>
                    )
                ) : exersiseArray.length ? (
                    <ExersiseWindow 
                    arrayExersises = {exersiseArray}
                    cExersise = {currentExersise}
                    setcExersise = {setCurrentExersise}
                    name={exersiseArray[currentExersise].name} 
                    img={exersiseArray[currentExersise].img} />
                ) : (
                    <p>No hay ejercicio disponible</p>
                )}
            </div>
        </>
    );
}
