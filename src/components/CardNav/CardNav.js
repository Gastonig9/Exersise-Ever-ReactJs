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
                <div className="card-footer text-muted">
                    <img className="img-bottom animate__animated animate__pulse animate__infinite	infinite" src="https://i.ibb.co/Wc52gqP/mancuerna.png" alt="excersise" />
                </div>
            </div>
            <div className="card text-center cards bg-success card-contain">
                <div className="card-header">
                    <img className="img-top animate__animated animate__pulse animate__infinite	infinite" src="https://i.ibb.co/hVmY0bG/hamburguesa.png" alt="excersise" />
                    <h1>¿Puedo comerlo?</h1>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Busca un producto/alimento</h5>
                    <p className="card-text">En esta seccion podras buscar productos y alimentos y te diremos si aportan a tu dieta para tu entrenamiento</p>
                    <a href="excersises.html" className="btn btn-dark">Empezar</a>
                </div>
                <div className="card-footer text-muted">
                    <img className="img-bottom animate__animated animate__pulse animate__infinite	infinite" src="https://i.ibb.co/hVmY0bG/hamburguesa.png" alt="excersise" />
                </div>
            </div>
        </div>
    )
}