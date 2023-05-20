import { Link } from "react-router-dom"
import "./CardNav.css"
export default function CardNav() {
    return (
        <div className="card-absolute-contain d-flex">
            <div className="card text-center card-contain">
                <div className="card-header">
                    <img className="img-top animate__animated animate__pulse animate__infinite	infinite" src="https://i.ibb.co/Wc52gqP/mancuerna.png" alt="excersise" />
                    <h1>Start to exercise</h1>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Start to exercise</h5>
                    <p className="card-text">Create a routine and start your exercises</p>
                    <Link to="/begin">
                        <p className="btn btn-dark">Start</p>
                    </Link>
                </div>
            </div>
            <div className="card text-center cards bg-success card-contain">
                <div className="card-header">
                    <img className="img-top animate__animated animate__pulse animate__infinite	infinite" src="https://i.ibb.co/hVmY0bG/hamburguesa.png" alt="excersise" />
                    <h1>Can Eat It?</h1>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Find a product</h5>
                    <p className="card-text">In this section you can search for products and foods and we will tell you if they contribute to your diet for your training</p>
                    <a href="excersises.html" className="btn btn-dark">Start</a>
                </div>
            </div>
        </div>
    )
}