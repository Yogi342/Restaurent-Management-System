import React, { useState, useEffect } from 'react'
import axios from 'axios';


function Add_Services() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({

        id: "",
        cate_id:"",
        Name: "",
        desc: "",
        price: "",
        status: "",
    });

    const getform = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Available", [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/services`, formvalue);
        //console.log(res);
        if (res.status == 201) {
            setFormvalue({ ...formvalue, id: "", Name: "", desc: "", price: "" });
            alert('Services submited success');
            return false;
        }
    }
    return (
        <>
            <div className="content-wrapper mt-5 ms-5">
                <div className="container-fluid ">
                    <div className="row pad-botm">
                        <div className="col-md-12">
                            <h4 className="header-line">Add Services</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="form-group">
                                    <label>Categories Name</label>
                                    <select className="form-control" name='cate_id' value={formvalue.cate_id} onChange={getform}>
                                        <option value="">-------  Select Categories of Services ---------</option>
                                        {
                                            data.map((value, index, arr) => {
                                                return (
                                                    <option value={value.id}>{value.Name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className="help-block">Help text here.</p>
                                </div>

                                <div className="panel-body">
                                    <form role="form" method='post' onSubmit={submithandel}>
                                        <div className="form-group">
                                            <label>Item Name</label>
                                            <input className="form-control" type="text" name='Name' value={formvalue.Name} onChange={getform} />
                                        </div>
                                        <div className="form-group">
                                            <label>Item Description</label>
                                            <input className="form-control" type="text" name='desc' value={formvalue.desc} onChange={getform} />
                                        </div>
                                        <div className="form-group">
                                            <label> Item Price</label>
                                            <input className="form-control" type="text" name='price' value={formvalue.price} onChange={getform} />
                                        </div>
                                        <button type="submit" className="btn btn-info">Add Services</button>
                                    </form></div>
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>




    )
}

export default Add_Services