import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function Manage_Employee() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/employee')
        console.log(res.data);
        setData(res.data)
    }

    const Handeldelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/employee/${id}`);
        fetch();
    }
    return (
        <>
            <div className="container mt-5">
                <h2>Manage Employees</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Password</th>
                            <th>Action</th>
                            <th>Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((value)=>{
                                return(
                                    <tr>
                                    <td>
                                        <tr>{value.id}</tr>
                                    </td>
                                    <td>
                                        <tr>{value.Name}</tr>
                                    </td>
                                    <td>
                                        <tr>{value.email}</tr>
                                    </td>
                                    <td>
                                        <tr>{value.mobile}</tr>
                                    </td>
                                    <td>
                                        <tr>{value.password}</tr>
                                    </td>
                                    <td>
                                    <NavLink to="/Employee_profie"><button className="btn btn-sm btn-primary">Edit</button></NavLink>
                                        <button className="btn btn-sm btn-danger" onClick={()=>Handeldelete(value.id)}>Delete</button>
                                    </td>
                                    <td>
                                        <tr>{value.status}</tr>
                                    </td>
                                </tr>
                            )
                        })
                    }

                       


                        {/* Add more rows for additional doctors as needed */}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Manage_Employee