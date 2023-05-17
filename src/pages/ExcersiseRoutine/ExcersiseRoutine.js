import { useState } from "react"
import "./ExcersiseRoutine.css"
import ExersisesList from "../../components/ExersisesList/ExersisesList"
import ExersiseContain from "../../components/ExersiseContain/ExersiseContain"
export default function ExcersiseRoutine() {
    const [clicked, setClicked] = useState(false)

    const handleAddExersise = ()=> {
        setClicked(true)
    }

    const handleCloseAlert = () => {
        setClicked(false)
    }
    
    return(
        <>
        {clicked && <ExersisesList handleCloseAlert={handleCloseAlert}/>}
        <h1>Add exersises to you routine</h1>
        <div onClick={handleAddExersise} className="button-add-contain">
            <h2>+</h2>
        </div>
        <ExersiseContain/>
        </>
    )
}