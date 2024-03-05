import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_Header() {
    return (
        <div>
            <div className="container-xxlg position-relative p-5 bg-dark">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Restoran</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <NavLink to="/dashboard" className="nav-item nav-link active">Dashboard</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Employee</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/add-employee" className="dropdown-item">Add</NavLink>
                                    <NavLink to="/manage-employee" className="dropdown-item">Manage</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/add-categories" className="dropdown-item">Add</NavLink>
                                    <NavLink to="/manage-categories" className="dropdown-item">Manage</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/add-services" className="dropdown-item">Add</NavLink>
                                    <NavLink to="/manage-services" className="dropdown-item">Manage</NavLink>
                                </div>
                            </div>
                            {/* <div className="nav-item dropdown">
                                <NavLink to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Waiter</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/add-waiter" className="dropdown-item">Add</NavLink>
                                    <NavLink to="/manage-waiter" className="dropdown-item">Manage</NavLink>
                                </div>
                            </div> */}
                            <NavLink to="/manage-contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/manage-booking" className="nav-item nav-link">Booking</NavLink>
                            {/* <NavLink to="/feedback" className="nav-item nav-link">Feedback</NavLink> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Admin_Header