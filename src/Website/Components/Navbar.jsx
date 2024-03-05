import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
function Navbar() {
    const redirect = useNavigate();

    // Delete session
    const logout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/')
    }
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-xxl position-relative p-0">
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
                            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                            <NavLink to="/menu" className="nav-item nav-link">Menu</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            
                            {(
                        () => {
                            //  Use  session
                            if (localStorage.getItem('userid')) {
                                return (
                                        <NavLink to="/profile" className="nav-item nav-link">Hi  {localStorage.getItem('uname')}</NavLink>
                                )
                            }
                        }
                    )()}
                        </div>
                        <NavLink to="/booking" className="btn btn-primary py-2 px-2">Book A Table</NavLink>

                        {/* <NavLink to ="/login" className= "btn btn-primary py-2 px-2 ms-3">Log in</NavLink> */}
                        {/* <NavLink to ="/signup" className= "btn btn-primary py-2 px-2 ms-3">Sign up</NavLink> */}
                        {(
                    () => {
                        if (localStorage.getItem('userid')) {
                            return (
                                <>
                                    <a href="javascript:void(0)" onClick={logout} className="btn btn-danger py-2 ms-2 px-2 ">Logout</a>
                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Link to="/login" className="btn btn-danger py-2 ms-2 px-2">Login</Link>
                                </>
                            )
                        }
                    }
                )()}
                    </div>
                    {/* <Link to="/login" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Login</Link> */}
                    
                </nav>
                
            </div>
            {/* Navbar & Hero End */}
        </div>
    )
}

export default Navbar