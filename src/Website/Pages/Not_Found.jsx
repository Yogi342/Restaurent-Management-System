import React from 'react'
import { NavLink } from 'react-router-dom'

function Not_Found() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <NavLink to ="/" className="btn btn-btn-lg alert-danger"> 
                                <span className="glyphicon glyphicon-home" />Take Me Home </NavLink ><NavLink to="/" className="btn btn-default btn-lg"><span className="glyphicon glyphicon-envelope" /> Contact Support </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Not_Found