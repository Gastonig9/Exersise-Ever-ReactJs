import { useEffect, useState } from "react"
import React, { useContext } from 'react';
import { getExersisesFB, getExersiseIndividualFB } from "../../services/firebase"
import { exersiseContext } from "../../context/contextFile"
import "./ExersisesList.css"

export default function ExersisesList(props) {
    const [exercise, setExersise] = useState([])
    const [check, setCheck] = useState(false)
    const { exersiseArray, setExersiseArray } = useContext(exersiseContext)
    const [isDisabled, setIsDisabled] = useState(false);


    useEffect(() => {
        getExersisesFB().then(response => {
            setExersise(response)
            setCheck(true)
        })
    }, [setExersise])

    useEffect(() => {
        if (exersiseArray.length > 3) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [exersiseArray])

    const handleSend = (id) => {
        getExersiseIndividualFB(id).then(responseId => {
          setExersiseArray(prevArray => [...prevArray, responseId]);
          console.log(exersiseArray)
        })
      }

    return (
        <div className="alert-container">
            <button onClick={props.handleCloseAlert} className="close-button">Close</button>
            <div className="alert-title">
                List of exercises
            </div>
            {check ?
                exercise.map(element => {
                    return (
                        <>
                            <div className="exercise-card">
                                <img className="img-card" src={element.img} alt="Push-ups" />
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                                <button onClick={() => handleSend(element.id)} disabled={isDisabled} className="btn btn-dark text-light w-50">Add</button>
                            </div>
                        </>
                    )
                })
                :
                <>
                    <h1 className="text-danger animate__animated animate__pulse animate__infinite infinite">Loading exersises...</h1>
                </>
            }

        </div>

    )
}