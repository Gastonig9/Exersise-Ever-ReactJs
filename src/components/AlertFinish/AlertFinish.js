import "./AlertFinish.css"
import React, { useContext} from "react";
import { exersiseContext } from "../../context/contextFile";
export default function AlertFinish(props) {
    const { exersiseArray } = useContext(exersiseContext);
    return (
        <div className="alert alert-contain animate__animated animate__bounceInDown" role="alert">
            <img className="alert-star" src="https://i.ibb.co/7GnSg2n/star.png" alt="star" />
            <h1 className="alert-title">Congratulations! You have finished your routine</h1>
            <p className="alert-text">
                Congratulations on completing your workout routine! Keep training daily to achieve your fitness goals.
            </p>
            <div className="alert-performed">
                <h4 className="alert-routine">Exercises performed:</h4>
                {exersiseArray.map(element => <img className="alert-imgs" src={element.img} alt="performed"/> )}
                
            </div>
            <h4 className="alert-time">Total time: {`0${props.totalHours}:0${props.totalMinutes}:0${props.totalSeconds}`}</h4>
        </div>
    )
}