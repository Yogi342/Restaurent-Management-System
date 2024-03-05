import React, { useState } from 'react'
import axios from 'axios';
function Add_categories() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        Name: "",
        cate_Image: ""
    });

    const getform = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload 
        const res = await axios.post(`http://localhost:3000/categories`, formvalue);
        //console.log(res);
        if (res.status == 201) {
            setFormvalue({ ...formvalue, Name: "", cate_Image: "" });
            alert('Categories submited success');
            return false;
        }
    }
    return (
        <div className="content-wrapper mt-5 ms-5">
            <div className="container-fluid ">
                <div className="row pad-botm">
                    <div className="col-md-12">
                        <h4 className="header-line">Add categories</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="panel panel-info">

                            <div className="panel-body">
                                <form role="form" action="" method='post' onSubmit={submithandel}>
                                    <div className="form-group">
                                        <label> Name</label>
                                        <input className="form-control" type="text" name='Name' value={formvalue.Name} onChange={getform} />
                                    </div>
                                    <div className="form-group">
                                        <label> image</label>
                                        <input className="form-control" type="url" name='cate_Image' value={formvalue.cate_Image} onChange={getform} />
                                    </div>
                                    <button type="submit" className="btn btn-info">Add Categories</button>
                                </form></div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Add_categories