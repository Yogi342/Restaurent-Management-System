import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

function Manage_Employee() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/booking')
        console.log(res.data);
        setData(res.data)
    }

    const Handeldelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/booking/${id}`);
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        Name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/booking/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }

    const getform = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const validation = () => {

        var result = true;
        if (formvalue.Name == "") {
            toast.error('Name Field is required');
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required');
            result = false;
            return false;
        }

        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required');
            result = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('Image Field is required');
            result = false;
            return false;
        }
        return result;

    }

    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/booking/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, Name: "", email: "", mobile: "", password: "" });
                toast.success('Update success');
                fetch();
            }
        }
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
                            data.map((value) => {
                                return (
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
                                            <button className="btn btn-sm btn-primary" onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit</button>
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
            {/* model start */}
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Profile</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className='container'>
                                <form action="" method="post" >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name="Name" value={formvalue.Name} onChange={getform} id="Name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" name="email" value={formvalue.email} onChange={getform} id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" name="mobile" value={formvalue.mobile} onChange={getform} id="mobile" placeholder="Your Email" />
                                                <label htmlFor="email">Your Mobile</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" name="password" value={formvalue.password} onChange={getform} id="password" placeholder="Your Email" />
                                                <label htmlFor="email">Your Password</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button onClick={submithandel} data-bs-dismiss="modal" className="btn btn-primary w-100 py-3" type="submit">Save</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Manage_Employee