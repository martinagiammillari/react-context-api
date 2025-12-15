
import { Link, NavLink } from "react-router-dom"
import { useBudget } from "../context/BudgetContext"




export default function Navbar() {
    //IMPORTO LA FUNZIONE CHE MI SERVE PER IL BOTTONE 
    const { toggleBudget, isBudget } = useBudget();

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">FakeStore!</NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Products">Products</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button onClick={toggleBudget} className={`btn btn-${isBudget ? "warning" : "success"}`}> {isBudget ? "Disattiva budget mode" : "Attiva budget mode"}</button>
                </div>
            </nav>
        </header>
    )
}