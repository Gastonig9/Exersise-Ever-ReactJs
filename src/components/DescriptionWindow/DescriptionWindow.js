import "./DescriptionWindow.css"
export default function DescriptionWindow(props) {

    return (
        <>
            <div className="description-contain">
                <h1>{props.nameDescription}</h1>
                <h5 className="text-danger">Muscle group: {props.musclegroup}</h5>
                <hr/>
                <p>{props.description}</p>
            </div>
        </>
    )
}