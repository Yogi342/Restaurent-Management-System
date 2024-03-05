import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Manage_Services() {
    const [data, mydata] = useState([]);
    useEffect(() => {
        fetch();
    })
    const fetch = async () => {
        const res = await axios('http://localhost:3000/services');
        console.log(res.data);
        mydata(res.data)
    }
    const Handeldelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        fetch();
    }
    return (
        <>
            <div className="container mt-5">
                <h2>Manage Services</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category ID</th>
                            <th>Item Name</th>
                            <th>Item Description</th>
                            <th>Item Price</th>
                            <th>Action</th>
                            <th>Status</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((value) => {

                                return (
                                    <tr>
                                        <td>
                                            <tr>{value.id}</tr>
                                        </td>
                                        <td>
                                            <tr>{value.cate_id}</tr>
                                        </td>
                                        <td>
                                            <tr>{value.Name}</tr>
                                        </td>
                                        <td>
                                            <tr>{value.desc}</tr>
                                        </td>
                                        <td>
                                            <tr>{value.price}</tr>
                                        </td>

                                        <td>
                                            <button className="btn btn-sm btn-primary">Edit</button>
                                            <button className="btn btn-sm btn-danger" onClick={() => Handeldelete(value.id)}>Delete</button>
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

export default Manage_Services