import "./AlertFinish.css"
import React, { useContext } from "react";
import { exersiseContext } from "../../context/contextFile";
import TrainingProgress from "../TrainingProgress/TrainingProgress";
export default function AlertFinish(props) {
    const { exersiseArray } = useContext(exersiseContext);

    const handleReload = () => {
        window.location.reload()
    }
    return (
        <div className="alert alert-contain animate__animated animate__bounceInDown" role="alert">
            <img className="alert-star" src="https://i.ibb.co/7GnSg2n/star.png" alt="star" />
            <h1 className="alert-title">Congratulations! You have finished your routine</h1>
            <p className="alert-text">
                Congratulations on completing your workout routine! Keep training daily to achieve your fitness goals.
            </p>

            <div className="alert-performed">
                <h4 className="alert-routine">Exercises performed:</h4>
                {exersiseArray.map(element => <img className="alert-imgs" src={element.img} alt="performed" />)}

            </div>

            <h4 className="alert-time">
                Total time: {`${props.totalHours} hours ${props.totalMinutes} minutes ${props.totalSeconds} seconds`}
            </h4>
            <div className="alert-time p-3">
                <h5>Fatigue during the routine</h5>
                <TrainingProgress />
            </div>

            <button onClick={handleReload} className="alert-button">Return to start</button>
        </div>
    )
}