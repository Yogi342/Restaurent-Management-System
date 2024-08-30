import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


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
    const [formvalue, setFormvalue] = useState({
        Name: "",
        desc: "",
        price: "",
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/services/${id}`);
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
        if (formvalue.desc == "") {
            toast.error('cate_Image Field is required');
            result = false;
            return false;
        }
        if (formvalue.price == "") {
            toast.error('price Field is required');
            result = false;
            return false;
        }
        return result;

    }

    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/services/${formvalue.id}`, formvalue);
            console.log(res);
            if (res.status == 200) {
                setFormvalue({ ...formvalue, Name: "", desc: "", price: "" });
                toast.success('Update success');
                fetch();
            }
        }
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
                                                <input type="url" className="form-control" name="desc" value={formvalue.desc} onChange={getform} id="email" placeholder="Your Email" />
                                                <label htmlFor="text">description</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="url" className="form-control" name="price" value={formvalue.price} onChange={getform} id="email" placeholder="Your Email" />
                                                <label htmlFor="number">price</label>
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

export default Manage_Services