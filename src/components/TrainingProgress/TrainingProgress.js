import React, { useContext, useEffect, useState } from "react";
import { exersiseContext } from "../../context/contextFile";
import "./TrainingProgress.css";

export default function TrainingProgress(props) {
  const { exersiseArray, isFinishRoutine } = useContext(exersiseContext);
  const [widths, setWidths] = useState({
    Arms: 2,
    Back: 2,
    Pectorals: 2,
    Shoulders: 2,
    Legs: 2,
    Abdomen: 2
  });

  useEffect(() => {
    if (isFinishRoutine) {
      const filterArmsExersise = exersiseArray.filter(
        (element) => element.muscleGroup === "Triceps" || element.muscleGroup === "Biceps"
      );
      const filterBackExersise = exersiseArray.filter(
        (element) => element.muscleGroup === "Back"
      );
      const filterPectoralsExersise = exersiseArray.filter(
        (element) => element.muscleGroup === "Chest"
      );
      const filterShouldersExersise = exersiseArray.filter(
        (element) => element.muscleGroup === "Shoulders"
      );
      const filterLegsExersise = exersiseArray.filter(
        (element) => element.muscleGroup === "Legs"
      );
      const filterAbdomenExersise = exersiseArray.filter(
        (element) => element.muscleGroup === "Abdomen"
      );

      const newWidths = { ...widths };

      if (filterArmsExersise.length > 0) {
        setWidths((prevWidths) => ({ ...prevWidths, Arms: 80 }));
      }
      if (filterBackExersise.length > 0) {
        setWidths((prevWidths) => ({ ...prevWidths, Back: 50 }));
      }
      if (filterPectoralsExersise.length > 0) {
        setWidths((prevWidths) => ({ ...prevWidths, Pectorals: 72 }));
      }
      if (filterShouldersExersise.length > 0) {
        setWidths((prevWidths) => ({ ...prevWidths, Shoulders: 50 }));
      }
      if (filterLegsExersise.length > 0) {
        setWidths((prevWidths) => ({ ...prevWidths, Legs: 50 }));
      }
      if (filterAbdomenExersise.length > 0) {
        setWidths((prevWidths) => ({ ...prevWidths, Abdomen: 60 }));
      }

      localStorage.setItem("exersise-progress", JSON.stringify(newWidths));
    }
  }, [isFinishRoutine, exersiseArray, widths]);

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
            style={{ width: `${widths.Arms}%` }}
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
            style={{ width: `${widths.Back}%` }}
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
            style={{ width: `${widths.Pectorals}%` }}
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
            style={{ width: `${widths.Legs}%` }}
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
            style={{ width: `${widths.Shoulders}%` }}
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
            style={{ width: `${widths.Shoulders}%` }}
          >
            Abdomen
          </div>
        </div>
      </div>
    </>
  );
}
