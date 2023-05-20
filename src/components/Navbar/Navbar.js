import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <p className="navbar-brand">Excersise Ever</p>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </Link>
                        <Link to="/begin">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/begin">Begin</a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a className="nav-link" href="caneat.html">Can Eat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

