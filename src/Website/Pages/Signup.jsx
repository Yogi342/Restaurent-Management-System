import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import Header1 from '../Components/Header1';
<Header1 />
function Signup() {

  const [formvalue, setFormvalue] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: ""

  });

  const getform = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), status: "Unblock", [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {

    var result = true;
    if (formvalue.name == "") {
      toast.error('Name Field is required');
      result = false;
      return false;
    }
    if (formvalue.email == "") {
      toast.error('Email Field is required');
      result = false;
      return false;
    }
    if (formvalue.password == "") {
      toast.error('Password Field is required');
      result = false;
      return false;
    }
    if (formvalue.mobile == "") {
      toast.error('Mobile Field is required');
      result = false;
      return false;
    }

    return result;

  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/user`, formvalue);
      //console.log(res);
      if (res.status == 201) {
        setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
        toast.success('Signup success');
        return false;
      }
    }
  }
  return (
    <div className='ms-5'>
      <form method='post' onSubmit={submithandel} >
        <div className="form-row mt-5 ">
          <div className="form-group col-md-12 ">
            <label htmlFor="inputEmail4">Name</label>
            <input type="name" className="form-control" id="inputEmail4" placeholder="Name" name='name' value={formvalue.name} onChange={getform} />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Email</label>
            <input type="email" className="form-control" id="inputPassword4" placeholder="Email" name='email' value={formvalue.email} onChange={getform} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">password</label>
          <input type="password" className="form-control" id="inputAddress" placeholder="Password" name='password' value={formvalue.password} onChange={getform} />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Mobile</label>
          <input type="mobile" className="form-control" id="inputAddress2" placeholder="Mobile" name='mobile' value={formvalue.mobile} onChange={getform} />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Sign in</button>
        <br />
        <Link to="/login">If you already Registered then Login Here</Link>
      </form>
    </div>

  )
}

export default Signup