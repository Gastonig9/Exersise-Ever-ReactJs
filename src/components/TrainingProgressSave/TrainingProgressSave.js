import React, { useEffect, useState } from "react";
import "./TrainingProgressSave.css";

export default function TrainingProgressSave(props) {
    const [average, setaverage] = useState(0)
    useEffect(() => {
        const localStorageData = localStorage.getItem("exersise-progress");
        if (localStorageData) {
            const storedWidths = JSON.parse(localStorageData);
            const widthValues = Object.values(storedWidths);
            const lastFiveWidths = widthValues.slice(-5);
            const averageWidth = lastFiveWidths.reduce((sum, width) => sum + width, 0) / lastFiveWidths.length;
            setaverage(averageWidth)
        }
    }, []);


    const lastExersiseLS = JSON.parse(localStorage.getItem("last-exersise") || "{}")
    console.log(lastExersiseLS)
    const exersiseLS = JSON.parse(localStorage.getItem("exersise-progress") || "{}");
    return (
        <>
            <div className="progress-contain">
                <div className="progress" id="progress-bar-contain-arms">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning text-dark animate__animated animate__fadeInLeft animate__repeat-1"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${exersiseLS.Arms + 15}%` }}
                    >
                        Arms
                    </div>
                </div>

                <div className="progress" id="progress-bar-contain-back">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-dark text-light  animate__animated animate__fadeInLeft animate__repeat-1"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${exersiseLS.Back + 15}%` }}
                    >
                        Back
                    </div>
                </div>

                <div className="progress" id="progress-bar-contain-pectoral">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger text-dark animate__animated animate__fadeInLeft animate__repeat-1"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${exersiseLS.Pectorals + 15}%` }}
                    >
                        Pectorals
                    </div>
                </div>

                <div className="progress" id="progress-bar-contain-legs">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-success text-dark animate__animated animate__fadeInLeft animate__repeat-1"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${exersiseLS.Legs + 15}%` }}
                    >
                        Legs
                    </div>
                </div>

                <div className="progress" id="progress-bar-contain-shoulders">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated bg-info text-dark animate__animated animate__fadeInLeft animate__repeat-1"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${exersiseLS.Shoulders + 15}%` }}
                    >
                        Shoulders
                    </div>
                </div>

                <div className="progress" id="progress-bar-contain-abdomen">
                    <div
                        className="progress-bar progress-bar-striped progress-bar-animated animate__animated animate__fadeInLeft animate__repeat-1"
                        role="progressbar"
                        aria-label="Animated striped example"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${exersiseLS.Abdomen + 15}%` }}
                    >
                        Abdomen
                    </div>
                </div>
            </div>
            <div className="text-light w-25">
                <h3 className="">Average today</h3>
                {average < 35 ? <h4 className="text-success">{average}</h4> : 
                 average < 45 ? <h4 className="text-warning">{average}</h4> : 
                <h4 className="text-danger">{average}</h4> }
                
                <hr />
                <h5>In the last routine..</h5>
                {lastExersiseLS ? (
                    <img src={lastExersiseLS.img} style={{ width: "10vw" }} alt="Last Exercise" />
                ) : (
                    <p>No last exercise found</p>
                )}
            </div>
        </>
    );
}
