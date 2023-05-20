import { useEffect, useState } from "react"
import "./ExcersiseRoutine.css"
import ExersisesList from "../../components/ExersisesList/ExersisesList"
import ExersiseContain from "../../components/ExersiseContain/ExersiseContain"
import HeaderExersisePage from "../../components/HeaderExersisePage/HeaderExersisePage"
import TrainingProgressSave from "../../components/TrainingProgressSave/TrainingProgressSave"
import Loader from "../../components/Loader/Loader"
export default function ExcersiseRoutine() {
    const [clicked, setClicked] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        let count = 0;

        const loader = setInterval(() => {
            count++
            if (count === 2) {
                setisLoading(false)
                clearInterval(loader)
            }
        }, 1000);

    }, [])

    const handleAddExersise = () => {
        setClicked(true)
    }

    const handleCloseAlert = () => {
        setClicked(false)
    }

    return (
        <>
            {isLoading ?
                <Loader />
                :
                <>
                    <HeaderExersisePage />
                    <div className="absolute-contain">
                        {clicked && <ExersisesList handleCloseAlert={handleCloseAlert} />}
                        <h1 className="mt-3">Add exersises to you routine</h1>
                        <div onClick={handleAddExersise} className="button-add-contain">
                            <h2>+</h2>
                        </div>

                        <ExersiseContain />
                        <div className="training-info-container d-flex justify-content-center bg-dark p-3">
                            <h1 className="title-info">Progress</h1>
                            <TrainingProgressSave />
                        </div>

                    </div>
                </>
            }
        </>
    )
}